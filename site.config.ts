export const siteConfig = {
  siteName: 'SupplementScout',
  tagline: 'Honest supplement reviews by people who actually stack',
  domain: process.env.SITE_URL || 'https://supplementsscout.net',
  description: 'Evidence-first supplement reviews: protein, creatine, pre-workout, nootropics, vitamins and more. Real dosing data, third-party testing, price-per-serving — no bro-science.',
  niche: 'supplements',
  category: 'Supplements & Nutrition',
  defaultAuthor: {
    name: 'SupplementScout Editorial Team',
    bio: 'We read the studies, run the stacks, and tell you what actually works.',
  },
  analytics: {
    enabled: true,
    type: 'plausible',
    plausibleDomain: process.env.PLAUSIBLE_DOMAIN || 'supplementsscout.net',
    googleId: process.env.GOOGLE_ANALYTICS_ID || '',
  },
  affiliateNetworks: {
    transparentlabs: { enabled: true, baseUrl: 'https://www.transparentlabs.com', trackingId: '' },
    bulksupplements: { enabled: true, baseUrl: 'https://www.bulksupplements.com', trackingId: '' },
    legion: { enabled: true, baseUrl: 'https://www.legionathletics.com', trackingId: '' },
    mindlabpro: { enabled: true, baseUrl: 'https://www.mindlabpro.com', trackingId: '' },
    momentous: { enabled: true, baseUrl: 'https://www.livemomentous.com', trackingId: '' },
    iherb: { enabled: true, baseUrl: 'https://www.iherb.com', trackingId: '' },
    custom: { enabled: true, baseUrl: process.env.CUSTOM_AFFILIATE_BASE || 'https://supplementsscout.net/go/' },
  },
  social: { twitter: 'https://twitter.com/supplementscout', linkedin: '', instagram: '', facebook: '' },
  content: { postsPerPage: 12, featuredPostsCount: 3, relatedPostsCount: 3 },
  seo: { includeJsonLd: true, sitemap: true, robotsTxt: true },
};
export default siteConfig;
