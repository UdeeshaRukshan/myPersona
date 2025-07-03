import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Replace with your actual Medium RSS feed URL
    const mediumRSSUrl = 'https://medium.com/feed/@udeeshagamage12';
    
    const response = await fetch(mediumRSSUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }
    
    const rssText = await response.text();
    
    // Parse RSS XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssText, 'text/xml');
    
    const items = xmlDoc.querySelectorAll('item');
    
    const posts = Array.from(items).map((item) => ({
      title: item.querySelector('title')?.textContent || '',
      description: item.querySelector('description')?.textContent || '',
      pubDate: item.querySelector('pubDate')?.textContent || '',
      link: item.querySelector('link')?.textContent || '',
    }));
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
