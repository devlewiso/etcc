export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceInfo {
  slug: string;
  name: string;
  /** one-liner for cards */
  short: string;
  metaTitle: string;
  metaDescription: string;
  /** lead paragraph */
  intro: string;
  /** what a job includes */
  included: string[];
  /** ordered process steps */
  process: { title: string; detail: string }[];
  /** pricing notes (kept as ranges + "free quote") */
  pricing: string[];
  faqs: ServiceFaq[];
  related: string[]; // slugs
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'steam-carpet-cleaning',
    name: 'Steam Carpet Cleaning',
    short: 'Deep hot-water extraction that pulls out dirt, allergens and odor.',
    metaTitle: 'Steam Carpet Cleaning in San Luis Obispo | E.T Carpet Cleaning',
    metaDescription:
      'Professional hot-water-extraction carpet cleaning in San Luis Obispo County. Removes dirt, allergens, pet odor. Eco-friendly, dries in 6-24h. Call (805) 704-2301.',
    intro:
      'Our main service. We use truck-mount-grade hot-water extraction at up to 260°F to lift out the dirt, sand, dust mites, allergens and odor that build up deep in carpet fibers — not just the surface. Eco-friendly, non-toxic solutions safe for kids and pets, with fast drying (6-24 hours).',
    included: [
      'Pre-inspection and a walk-through of problem areas',
      'Pre-treatment of traffic lanes and spots',
      'Hot-water extraction of the full carpeted area',
      'Spot treatment for stains that need extra work',
      'Carpet grooming to set the pile',
      'Drying setup and airflow advice (fans available)',
    ],
    process: [
      { title: 'Pre-inspection', detail: 'We check carpet type, condition and problem areas, and set expectations.' },
      { title: 'Pre-treatment', detail: 'Traffic lanes, spots and stains get a targeted pre-spray to break down soil.' },
      { title: 'Hot-water extraction', detail: 'High-heat rinse-and-extract removes the loosened dirt and the cleaning solution.' },
      { title: 'Groom & dry', detail: 'We groom the pile and set up airflow so carpets dry in 6-24 hours.' },
    ],
    pricing: [
      'Residential is priced by the number of rooms and areas; a $145 minimum applies.',
      'Commercial carpet is priced per square foot (from about $0.50/sq ft).',
      'Heavy staining, pet treatment or protector are add-ons.',
      'We give a firm quote before we start — no surprises.',
    ],
    faqs: [
      { q: 'How long until the carpet is dry?', a: 'Usually 6-24 hours, depending on humidity, airflow and carpet type. Open windows, run fans and AC to speed it up. We can leave air movers on request.' },
      { q: 'Are the products safe for pets and kids?', a: 'Yes. We use eco-friendly, non-toxic solutions and rinse thoroughly with hot water.' },
      { q: 'Do you move furniture?', a: 'We clean around large pieces and move light items. We do not move heavy furniture, electronics or beds for safety reasons.' },
      { q: 'How often should carpets be cleaned?', a: 'Every 12-18 months for most homes; every 3-6 months with pets, kids or allergies.' },
    ],
    related: ['pet-stain-removal', 'upholstery-cleaning', 'area-rug-cleaning'],
  },
  {
    slug: 'upholstery-cleaning',
    name: 'Upholstery Cleaning',
    short: 'Sofas, sectionals, chairs and dining seats cleaned gently and thoroughly.',
    metaTitle: 'Upholstery Cleaning in San Luis Obispo | E.T Carpet Cleaning',
    metaDescription:
      'Professional sofa, sectional and chair cleaning in San Luis Obispo County. Gentle, fabric-safe methods, pet odor treatment. Free quote — call (805) 704-2301.',
    intro:
      'Furniture holds body oils, dust, food and pet dander that vacuuming never reaches. We clean sofas, sectionals, love seats, armchairs and dining chairs with the right method for the fabric — a gentle low-moisture clean for delicates, hot-water extraction for sturdier weaves.',
    included: [
      'Fabric check and colorfast test',
      'Vacuuming and pre-treatment of soiled areas and arms/headrests',
      'Cleaning matched to the fabric type',
      'Spot and odor treatment where needed',
      'Grooming and drying setup',
    ],
    process: [
      { title: 'Identify the fabric', detail: 'We check the cleaning code and test an inconspicuous spot for colorfastness.' },
      { title: 'Pre-treat', detail: 'Arms, headrests, seat cushions and spots get a pre-spray sized to the fabric.' },
      { title: 'Clean', detail: 'Low-moisture or hot-water extraction depending on the material.' },
      { title: 'Groom & dry', detail: 'We finish the nap and set up airflow; most pieces are dry in a few hours.' },
    ],
    pricing: [
      'Priced per piece: love seat, sofa, sectional, armchair, dining chairs.',
      'As a guide: armchair from about $60, sofa from about $180, sectionals from about $275.',
      'Pet odor treatment and fabric protector are add-ons.',
      'A $145 minimum applies. We quote before starting.',
    ],
    faqs: [
      { q: 'Can you clean microfiber and delicate fabrics?', a: 'Yes. Those get a low-moisture method with fabric-safe solutions.' },
      { q: 'Will it get rid of pet smell?', a: 'We treat pet odor at the source with enzyme-based products. Deep-set odor in the foam may need more than one treatment.' },
      { q: 'How long does it take to dry?', a: 'Usually 2-6 hours with good airflow.' },
    ],
    related: ['steam-carpet-cleaning', 'pet-stain-removal', 'area-rug-cleaning'],
  },
  {
    slug: 'tile-and-grout-cleaning',
    name: 'Tile & Grout Cleaning',
    short: 'Bring dingy grout lines and tile back to their original color.',
    metaTitle: 'Tile & Grout Cleaning in San Luis Obispo | E.T Carpet Cleaning',
    metaDescription:
      'Professional tile and grout cleaning in San Luis Obispo County. Deep-clean grout lines, remove built-up dirt, optional sealing. Call (805) 704-2301 for a quote.',
    intro:
      'Grout is porous and it traps dirt, grease and mildew that a mop just pushes around. We use high-pressure hot-water cleaning to pull years of build-up out of the grout lines and off the tile, then can seal the grout so it stays cleaner longer.',
    included: [
      'Inspection of tile type and grout condition',
      'Alkaline pre-treatment of grout lines and soiled areas',
      'High-pressure hot-water clean and extraction',
      'Detail work on corners, edges and heavy spots',
      'Optional grout sealing (recommended)',
    ],
    process: [
      { title: 'Assess', detail: 'We identify the tile and stone type and check for loose or damaged grout.' },
      { title: 'Pre-treat', detail: 'Grout lines and greasy areas get a dwell-time pre-spray.' },
      { title: 'Deep clean', detail: 'Pressurized hot water lifts the soil while a tool contains and extracts it.' },
      { title: 'Seal (optional)', detail: 'A penetrating sealer makes the grout more stain-resistant and easier to maintain.' },
    ],
    pricing: [
      'Priced per square foot: tile & grout from about $1.00-$1.50/sq ft, $150 minimum.',
      'Laminate and wood floor care from about $0.65/sq ft, $125 minimum.',
      'Grout sealing is a per-square-foot add-on.',
      'Travertine and natural stone are quoted per job.',
    ],
    faqs: [
      { q: 'Will the grout look new again?', a: 'It comes back much closer to the original color. Permanently stained or cracked grout may need color-sealing or repair, which we can quote.' },
      { q: 'Should I seal the grout?', a: 'Yes, for kitchens, entryways and bathrooms. Sealed grout resists stains and is far easier to keep clean.' },
      { q: 'Do you clean natural stone?', a: 'Yes — travertine, slate and stone are cleaned with stone-safe products and quoted per job.' },
    ],
    related: ['steam-carpet-cleaning', 'commercial-cleaning', 'area-rug-cleaning'],
  },
  {
    slug: 'area-rug-cleaning',
    name: 'Area Rug Cleaning',
    short: 'Wool, synthetic and specialty rugs cleaned with a method that fits the fiber.',
    metaTitle: 'Area Rug Cleaning in San Luis Obispo | E.T Carpet Cleaning',
    metaDescription:
      'Area and specialty rug cleaning in San Luis Obispo County. Wool-safe methods, pet odor treatment, fringe detailing. Call (805) 704-2301 for a free quote.',
    intro:
      'Area rugs take a lot of traffic and hold a surprising amount of grit. We clean wool, synthetic and blended rugs on-site with the method the fiber calls for, treat spots and pet accidents, and detail the fringe.',
    included: [
      'Fiber identification and dye-bleed test',
      'Thorough dry soil removal',
      'Pre-treatment of spots and traffic areas',
      'Fiber-appropriate wash and rinse',
      'Fringe detailing and controlled drying',
    ],
    process: [
      { title: 'Identify & test', detail: 'We check whether the rug is wool, synthetic or a blend and test the dyes.' },
      { title: 'Dust', detail: 'Dry grit is removed first — this is most of the weight in a dirty rug.' },
      { title: 'Wash', detail: 'A gentle wool-safe clean or hot-water extraction, matched to the fiber.' },
      { title: 'Dry & finish', detail: 'Controlled drying to protect the shape, then fringe detailing.' },
    ],
    pricing: [
      'Size-based: roughly 4x6 from about $40, 5x7 from about $60, 8x10 from about $80, 10x12 from about $90.',
      'Wool, antique or heavily soiled rugs are quoted after inspection.',
      'Pet treatment is an add-on. A $145 minimum applies.',
    ],
    faqs: [
      { q: 'Do you take the rug away or clean it here?', a: 'Most rugs are cleaned on-site. Very delicate or badly soiled rugs may be better cleaned off-site — we will tell you before we start.' },
      { q: 'Is it safe for a wool rug?', a: 'Yes. Wool rugs get a low-pH, wool-safe process and careful drying.' },
      { q: 'Can you get pet stains out of a rug?', a: 'Often, yes, with enzyme treatment. Old urine that has reached the backing is harder and may not fully clear.' },
    ],
    related: ['steam-carpet-cleaning', 'upholstery-cleaning', 'pet-stain-removal'],
  },
  {
    slug: 'pet-stain-removal',
    name: 'Pet Stain & Odor Removal',
    short: 'Find and treat pet accidents at the source, including hidden ones.',
    metaTitle: 'Pet Stain & Odor Removal in San Luis Obispo | E.T Carpet Cleaning',
    metaDescription:
      'Pet stain and urine odor removal in San Luis Obispo County. UV inspection, enzyme treatment, source-level odor control. Call (805) 704-2301.',
    intro:
      'Pet urine soaks past the carpet into the pad and sub-floor, and the smell comes back with humidity. We inspect with a UV light to find every spot — including the ones you cannot see — then treat with enzyme-based products that break down the source, not just mask it.',
    included: [
      'UV-light inspection to map every affected area',
      'Enzyme pre-treatment of each spot',
      'Sub-surface treatment for soaked-through areas',
      'Hot-water extraction and deodorizing',
      'Honest assessment of what can and cannot be fully removed',
    ],
    process: [
      { title: 'UV inspection', detail: 'We darken the room and use a UV light to locate all urine deposits.' },
      { title: 'Treat the source', detail: 'Each spot gets an enzyme treatment; heavily soaked areas get a deeper application into the pad.' },
      { title: 'Extract & deodorize', detail: 'Hot-water extraction removes the residue, followed by a deodorizing rinse.' },
      { title: 'Re-check', detail: 'We re-inspect and tell you honestly if any area needs a second visit or pad replacement.' },
    ],
    pricing: [
      'Priced by the number and severity of spots, added to the carpet cleaning.',
      'Light surface stains are inexpensive; deep, repeated accidents in one area cost more.',
      'Severe cases may need pad replacement (referred out) — we will say so up front.',
    ],
    faqs: [
      { q: 'Can you get rid of the smell completely?', a: 'Usually for surface and moderate cases. Long-term, repeated urine in one spot that has reached the sub-floor may need the pad replaced — we will tell you if that is the situation.' },
      { q: 'What is the UV light for?', a: 'Dried urine glows under UV. It lets us find and treat every deposit instead of guessing.' },
      { q: 'Is the treatment safe around my pets?', a: 'Yes — the enzyme products are non-toxic once dry.' },
    ],
    related: ['steam-carpet-cleaning', 'upholstery-cleaning', 'area-rug-cleaning'],
  },
  {
    slug: 'commercial-cleaning',
    name: 'Commercial Carpet Cleaning',
    short: 'Offices, tasting rooms and retail — on your schedule, on contract if you want.',
    metaTitle: 'Commercial Carpet Cleaning in San Luis Obispo County | E.T Carpet Cleaning',
    metaDescription:
      'Commercial carpet and floor cleaning for offices, tasting rooms and retail across San Luis Obispo County and Paso Robles. After-hours service, maintenance plans. Call (805) 704-2301.',
    intro:
      'We clean carpet and hard floors for offices, tasting rooms, retail spaces and vacation-rental managers across SLO County and Paso Robles wine country. Work around your hours, including after-hours and weekends, and set up a recurring maintenance schedule so the space always looks right.',
    included: [
      'Walk-through and a written quote',
      'Scheduling around your business hours',
      'Traffic-lane focused cleaning for high-use areas',
      'Hard-floor, tile and entry-mat cleaning as needed',
      'Optional recurring maintenance plan',
    ],
    process: [
      { title: 'Site visit', detail: 'We measure, note the traffic patterns and problem areas, and quote in writing.' },
      { title: 'Schedule', detail: 'After-hours, early morning or weekend — whatever keeps your space open for customers.' },
      { title: 'Clean', detail: 'Traffic lanes and entries first, then the full area, with fast-dry setup so you can open on time.' },
      { title: 'Maintain', detail: 'Set a quarterly or monthly cadence so it never gets to "deep clean" again.' },
    ],
    pricing: [
      'Commercial carpet from about $0.50/sq ft.',
      'Multi-room and recurring contracts get lower rates.',
      'Tile, grout and hard-floor priced per square foot.',
      'Emergency and after-hours work quoted per job.',
    ],
    faqs: [
      { q: 'Can you work after we close?', a: 'Yes. Most commercial jobs are done after-hours or on weekends so there is no disruption.' },
      { q: 'Do you offer maintenance contracts?', a: 'Yes — monthly or quarterly plans at contract rates, which keeps the carpet from ever getting badly soiled.' },
      { q: 'Do you serve Paso Robles tasting rooms?', a: 'Yes, we cover Paso Robles and the wine country regularly.' },
    ],
    related: ['tile-and-grout-cleaning', 'steam-carpet-cleaning', 'upholstery-cleaning'],
  },
];

export const getService = (slug?: string) => SERVICES.find((s) => s.slug === slug);
