export interface BlogPost {
  slug: string;
  title: string;
  /** meta description + list excerpt */
  description: string;
  /** primary target keyword (for our reference, not rendered) */
  keyword: string;
  /** ISO date YYYY-MM-DD. Posts with a future date are hidden until then. */
  publishedDate: string;
  /** ISO date, optional */
  updatedDate?: string;
  tags: string[];
  /** rough read time in minutes */
  readMinutes: number;
  /** Markdown body */
  body: string;
  /** slugs of related posts */
  related?: string[];
}

import { postCarpetCleaningCostSlo } from './carpet-cleaning-cost-san-luis-obispo';
import { postHowOftenCentralCoast } from './how-often-clean-carpets-central-coast';
import { postPetUrineSmell } from './get-pet-urine-smell-out-of-carpet';

/** Every post, published or scheduled. Keep newest first is not required. */
export const ALL_POSTS: BlogPost[] = [
  postCarpetCleaningCostSlo,
  postHowOftenCentralCoast,
  postPetUrineSmell,
];

/** Today as YYYY-MM-DD in local time (build machine). */
const today = () => new Date().toISOString().slice(0, 10);

/** Posts whose publishedDate has arrived, newest first. */
export function getPublishedPosts(now: string = today()): BlogPost[] {
  return ALL_POSTS.filter((p) => p.publishedDate <= now).sort((a, b) =>
    b.publishedDate.localeCompare(a.publishedDate)
  );
}

export function getPost(slug?: string, now: string = today()): BlogPost | undefined {
  const p = ALL_POSTS.find((x) => x.slug === slug);
  return p && p.publishedDate <= now ? p : undefined;
}
