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
import { postHolidayTimeline } from './carpets-ready-for-the-holidays';
import { postPismoBeach } from './carpet-cleaning-pismo-beach';
import { postRentalMachine } from './steam-cleaning-vs-rental-machine';
import { postStillSmells } from './carpet-still-smells-after-cleaning';
import { postRainySeason } from './central-coast-rainy-season-carpet';
import { postCommonStains } from './coffee-wine-grease-stains-carpet';
import { postUpholstery101 } from './upholstery-cleaning-101';
import { postPasoRobles } from './carpet-cleaning-paso-robles';

/** Every post, published or scheduled. Order does not matter here. */
export const ALL_POSTS: BlogPost[] = [
  postCarpetCleaningCostSlo,
  postHowOftenCentralCoast,
  postPetUrineSmell,
  postHolidayTimeline,
  postPismoBeach,
  postRentalMachine,
  postStillSmells,
  postRainySeason,
  postCommonStains,
  postUpholstery101,
  postPasoRobles,
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
