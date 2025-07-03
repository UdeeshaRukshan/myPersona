import React, { useState, useEffect } from "react";
import { Button as MuiButton } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Calendar, ChevronDown, ChevronUp } from "lucide-react";

// Define blog type
interface BlogPost {
  id: number;
  title: string;
  description: string;
  publishedDate: string;
  readTime: string;
  image: string;
  url: string;
  tags: string[];
}

// Medium RSS Post interface
interface Post {
  title: string;
  description: string;
  pubDate: string;
  image: string;
  link: string;
}

const BlogCard: React.FC<{ blog: BlogPost; index: number }> = ({ blog, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      key={blog.id}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col h-full group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
    >
      <div className="h-48 sm:h-52 bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
          <Calendar size={14} />
          <span>{blog.publishedDate}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-pink-500 transition-colors duration-300 line-clamp-2">
          {blog.title}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
          {blog.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link href={blog.url} target="_blank" rel="noopener noreferrer">
            <MuiButton
              variant="outlined"
              size="small"
              startIcon={<ExternalLink size={16} />}
              className="!border-pink-500 !text-pink-500 hover:!bg-pink-500/10 hover:!border-pink-600 transition-all duration-300"
              fullWidth
            >
              Read on Medium
            </MuiButton>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Blogs = () => {
  const [showAll, setShowAll] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAllPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetch posts using RSS2JSON
        const allPosts = await getAllPosts();
        // Transform posts with image extraction and description truncation
        const transformedPosts = allPosts.map((post: Post) => ({
          ...post,
          image: extractImageSrc(post.description),
          description: extractFirst20Words(post.description),
        }));
        setPosts(transformedPosts);
      } catch (err) {
        console.error('Error loading posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    loadAllPosts();
  }, []);

  // Function to fetch Medium RSS feed using RSS2JSON
  const getAllPosts = async (): Promise<Post[]> => {
    try {
      // Using RSS2JSON service to convert your Medium RSS to JSON
      const rssUrl = 'https://medium.com/feed/@udeesharukshan';
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status !== 'ok') {
        throw new Error(`RSS2JSON error: ${data.message || 'Unknown error'}`);
      }
      
      console.log('Fetched Medium posts:', data.items); // Debug log
      
      return data.items.map((item: any) => ({
        title: item.title || 'Untitled',
        description: item.description || 'No description available',
        pubDate: item.pubDate || new Date().toISOString(),
        link: item.link || '#',
        image: '', // Will be extracted from description
      }));
    } catch (error) {
      console.error('Error fetching Medium RSS feed:', error);
      return [];
    }
  };

  function extractImageSrc(description: string): string {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(description, "text/html");
      const imgElement = doc.querySelector("figure img");
      return imgElement ? imgElement.getAttribute("src") || "" : "";
    } catch (error) {
      console.error('Error extracting image:', error);
      return "";
    }
  }

  function extractFirst20Words(description: string): string {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(description, "text/html");
      const descriptionText = doc.body.textContent || "";
      return descriptionText.split(/\s+/).slice(0, 30).join(" ");
    } catch (error) {
      console.error('Error extracting text:', error);
      return description;
    }
  }

  // Convert Medium posts to BlogPost format
  const blogPosts: BlogPost[] = posts.map((post, index) => ({
    id: index + 1,
    title: post.title,
    description: post.description,
    publishedDate: new Date(post.pubDate).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
    readTime: Math.ceil(post.description.split(' ').length / 200) + " min read",
    image: post.image || "/blog-placeholder.jpg",
    url: post.link,
    tags: ["Medium", "Blog"]
  }));

  const displayBlogs = showAll ? blogPosts : blogPosts.slice(0, 3);
  const hasMoreBlogs = blogPosts.length > 3;

  if (loading) {
    return (
      <section id="blogs" className="container mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text"
        >
          Latest Blog Posts
        </motion.h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500"></div>
        </div>
      </section>
    );
  }

  if (error || blogPosts.length === 0) {
    return (
      <section id="blogs" className="container mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text"
        >
          Latest Blog Posts
        </motion.h2>
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {error || "No blog posts found. Check back later!"}
          </p>
          <Link href="https://medium.com/@udeesharukshan" target="_blank" rel="noopener noreferrer">
            <MuiButton
              variant="outlined"
              startIcon={<ExternalLink size={18} />}
              className="!border-pink-500 !text-pink-500 hover:!bg-pink-500/10"
            >
              Visit Medium Profile
            </MuiButton>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="container mx-auto px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-violet-500 to-teal-500 text-transparent bg-clip-text"
      >
        Latest Blog Posts
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {displayBlogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>

      {hasMoreBlogs && (
        <div className="flex justify-center mt-16 sm:mt-20">
          <MuiButton
            variant="outlined"
            onClick={() => setShowAll(!showAll)}
            startIcon={showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            className="!border-pink-500 !text-pink-500 hover:!bg-pink-500/10 !py-3 !px-6 !text-base !font-semibold !rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {showAll ? "Show Less" : `Show More (${blogPosts.length - displayBlogs.length} more)`}
          </MuiButton>
        </div>
      )}
      
      <div className="text-center mt-12">
        <Link href="https://medium.com/@udeesharukshan" target="_blank" rel="noopener noreferrer">
          <MuiButton
            variant="contained"
            size="large"
            startIcon={<ExternalLink size={18} />}
            className="!bg-pink-500 hover:!bg-pink-600 !text-white !py-3 !px-6 !font-semibold !rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All on Medium
          </MuiButton>
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
