import { MetadataRoute } from 'next';
import { paintings } from '@/data/paintings';
import { blogPostsArray } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tanjorecreation.com';

  // Core Pages
  const routes = ['', '/about', '/gallery', '/contact', '/blog', '/services', '/privacy', '/authenticity'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  // Dynamic Gallery Items
  const paintingRoutes = paintings.map((painting) => ({
    url: `${baseUrl}/gallery/${painting.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic Blog Posts
  const blogRoutes = blogPostsArray.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...routes, ...paintingRoutes, ...blogRoutes];
}
