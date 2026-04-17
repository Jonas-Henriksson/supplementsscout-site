// Author personas for SupplementScout
// Evidence-first supplement reviewers with real credentials

export interface Author {
  slug: string;
  name: string;
  title: string;
  initials: string;
  years: number;
  bio: string;
  expertise: string[];
  credentials: string;
  image: string;
}

export const authors: Record<string, Author> = {
  'marcus-webb': {
    slug: 'marcus-webb',
    name: 'Marcus Webb',
    title: 'Editor-in-Chief',
    initials: 'MW',
    years: 9,
    bio: `Marcus has a background in exercise physiology and spent four years as a strength coach before spending the last nine reviewing supplements. He got obsessed with the gap between what supplement companies claim in their marketing and what the studies they cite actually say — in many cases, the study used a completely different dose than the product, or tested a different population, or was funded by the ingredient manufacturer. He started tracking third-party testing certifications in 2018, when a popular pre-workout tested positive for a banned stimulant despite a "clean ingredients" label. Now every product he reviews goes through a literature check on PubMed, a label verification against known clinical doses, and a check of the manufacturing facility's cGMP status. He has a BS in Exercise Physiology from University of Wisconsin and holds NSCA-CSCS certification. He's been personal training for 12 years and has direct experience with most of the supplement categories he covers.`,
    expertise: ["Pre-workout", "Protein", "Creatine", "Sports performance", "Third-party testing"],
    credentials: 'BS Exercise Physiology, NSCA-CSCS, 9 years supplement research, 2,000+ PubMed reviews',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  'dr-sarah-kim': {
    slug: 'dr-sarah-kim',
    name: 'Dr. Sarah Kim',
    title: 'Nutrition Science Contributor',
    initials: 'SK',
    years: 7,
    bio: `Sarah holds a PhD in Nutritional Biochemistry and has published peer-reviewed research on micronutrient absorption and bioavailability — which is exactly why she gets frustrated with supplement labels that list magnesium without specifying the form (oxide vs. glycinate vs. threonate all absorb completely differently). She reviews vitamins, minerals, and nootropics, with a particular focus on whether the specific form used in a product matches the form studied in the research. Her collagen and omega-3 reviews are the most-cited on the site because she goes deep on molecular form, oxidation testing, and manufacturing temperature controls that most reviewers skip. She's not anti-supplement — she takes several herself — but she believes consumers deserve to know what the evidence actually supports, which is often narrower and more conditional than the bottle suggests. Her PhD is from Johns Hopkins Bloomberg School of Public Health.`,
    expertise: ["Vitamins & minerals", "Nootropics", "Collagen", "Omega-3", "Bioavailability"],
    credentials: 'PhD Nutritional Biochemistry (Johns Hopkins), published researcher, 7 years supplement evaluation',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  'jake-torres': {
    slug: 'jake-torres',
    name: 'Jake Torres',
    title: 'Staff Writer — Weight Loss & Probiotics',
    initials: 'JT',
    years: 5,
    bio: `Jake spent three years as a registered dietitian before moving into full-time supplement writing, which means he is the person on the team most likely to call out a "clinically proven weight loss supplement" that's actually just a caffeine pill with a proprietary blend of underdosed herbs. He covers weight loss supplements, probiotics, and digestive health products, and his reviews tend to be the most skeptical on the site — not because he's contrarian, but because this category has the highest ratio of marketing claims to actual evidence. His probiotic testing protocol involves checking strain specificity (genus, species, AND strain), CFU count at expiration rather than at manufacture, and whether the delivery mechanism actually survives stomach acid. He holds RD credentials from the Academy of Nutrition and Dietetics.`,
    expertise: ["Weight loss supplements", "Probiotics", "Gut health", "Fiber supplements", "Digestive enzymes"],
    credentials: 'RD (Registered Dietitian), Academy of Nutrition and Dietetics, 5 years supplement writing',
    image: 'https://randomuser.me/api/portraits/men/78.jpg',
  },
};

export const defaultAuthor = authors['marcus-webb'];

export function getAuthorByName(name: string): Author | undefined {
  return Object.values(authors).find(a => a.name === name);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}
