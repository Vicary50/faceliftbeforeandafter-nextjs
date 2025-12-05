import { MetadataRoute } from 'next';
import { getProcedureConfig } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  const procedureConfig = getProcedureConfig();
  const baseUrl = `https://${procedureConfig.domain}`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
