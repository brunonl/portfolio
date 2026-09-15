import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants';

export default function robots(): MetadataRoute.Robots {
  // robots.txt expresses crawler preferences; it is not an access-control or security mechanism.
  // OAI-SearchBot and Claude-SearchBot support search discovery. GPTBot and ClaudeBot may collect
  // content for model training, so those training crawlers are intentionally blocked by policy.
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['OAI-SearchBot', 'PerplexityBot', 'Claude-SearchBot'],
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot'],
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
