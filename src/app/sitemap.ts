import { MetadataRoute } from 'next';
import { paintings } from '@/data/paintings';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tanjorecreation.com';

  // Base routes
  const routes = [
    '',
    '/about',
    '/gallery',
    '/blog',
    '/contact',
    '/services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Painting routes
  const paintingRoutes = paintings.map((p) => ({
    url: `${baseUrl}/gallery/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...paintingRoutes];
}
