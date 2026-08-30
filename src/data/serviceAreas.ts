export interface ServiceArea {
  slug: string;
  city: string;
  /** Short label used in lists */
  short: string;
  /** One-line meta description tail */
  metaTail: string;
  /** Lead paragraph (unique per city) */
  intro: string;
  /** Local context paragraph (neighborhoods, housing, common jobs) */
  local: string;
  /** Bullet list of the jobs we do most in this city */
  common: string[];
  /** Nearby areas we also cover, for internal linking context */
  nearby: string[];
  /** Approx drive note shown on the page */
  coverage: string;
  lat: number;
  lng: number;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'san-luis-obispo',
    city: 'San Luis Obispo',
    short: 'San Luis Obispo',
    metaTail: 'Serving downtown SLO, the Cal Poly area, Laguna Lake and the Foothill neighborhoods.',
    intro:
      'E.T Carpet Cleaning is based in San Luis Obispo and covers the whole city, from downtown and the Cal Poly rentals to Laguna Lake, Johnson Ranch and the Foothill and Ferrini Ranch neighborhoods.',
    local:
      'SLO has a big mix of older single-family homes, student rentals near campus, and newer builds toward the edges of town. Student turnover in June and August drives a lot of move-out carpet cleaning, and the marine layer keeps humidity up, so proper extraction and fast drying matter here. We schedule around Cal Poly move dates and can work with property managers on multiple units.',
    common: [
      'Move-in / move-out carpet cleaning for rentals near Cal Poly',
      'Whole-house steam cleaning for family homes',
      'Pet stain and odor treatment',
      'Upholstery and area rug cleaning',
      'Tile and grout cleaning in kitchens and baths',
    ],
    nearby: ['Los Osos', 'Morro Bay', 'Pismo Beach', 'Arroyo Grande'],
    coverage: 'Full-service coverage, no travel fee.',
    lat: 35.2828,
    lng: -120.6596,
  },
  {
    slug: 'pismo-beach',
    city: 'Pismo Beach',
    short: 'Pismo Beach',
    metaTail: 'Carpet, upholstery and tile cleaning for homes and vacation rentals in Pismo Beach and Shell Beach.',
    intro:
      'We serve Pismo Beach and Shell Beach, including the Pismo Heights hillside, the Palisades, and the many short-term vacation rentals close to the pier and the boardwalk.',
    local:
      'Pismo is vacation-rental country. Sand tracked in from the beach and the dunes is abrasive and grinds down carpet fibers fast, so rentals here benefit from cleaning on a regular turnover schedule rather than once a year. We offer standing appointments for hosts and property managers, same-day service when a guest leaves a stain, and upholstery cleaning for the sofa beds and dining chairs that take heavy use in rental homes.',
    common: [
      'Turnover carpet cleaning for Airbnb / VRBO rentals',
      'Sand and salt extraction from high-traffic areas',
      'Sofa bed and dining chair upholstery cleaning',
      'Pet stain treatment for pet-friendly rentals',
      'Tile and grout refresh before listing photos',
    ],
    nearby: ['Arroyo Grande', 'San Luis Obispo', 'Grover Beach', 'Oceano'],
    coverage: 'Full-service coverage, same-day slots often available.',
    lat: 35.1428,
    lng: -120.6412,
  },
  {
    slug: 'arroyo-grande',
    city: 'Arroyo Grande',
    short: 'Arroyo Grande',
    metaTail: 'Steam carpet, upholstery and tile cleaning in Arroyo Grande and the Village.',
    intro:
      'We cover all of Arroyo Grande, from the historic Village and the East Cherry area to the newer developments off James Way and the homes up in the hills toward Lopez Lake.',
    local:
      'Arroyo Grande has a lot of long-term family homes and a growing number of newer subdivisions. That means whole-house cleaning, kids-and-pets stain work, and tile-and-grout jobs in open-plan kitchens. Homes closer to the ag land pick up more fine dust, and the ones up the canyon get more tree litter tracked in. We do weekly routes through AG, so scheduling is usually flexible.',
    common: [
      'Whole-house steam carpet cleaning',
      'Pet and kid stain and odor removal',
      'Tile, grout and natural-stone floor cleaning',
      'Sectional and sofa upholstery cleaning',
      'Carpet cleaning before selling or after moving in',
    ],
    nearby: ['Pismo Beach', 'Grover Beach', 'Nipomo', 'San Luis Obispo'],
    coverage: 'Weekly routes through Arroyo Grande, no travel fee.',
    lat: 35.1186,
    lng: -120.5903,
  },
  {
    slug: 'morro-bay',
    city: 'Morro Bay',
    short: 'Morro Bay',
    metaTail: 'Carpet and upholstery cleaning for homes and rentals in Morro Bay.',
    intro:
      'We serve Morro Bay from the Embarcadero and downtown up through the North Morro Bay neighborhoods and the hillside streets with the rock views.',
    local:
      'Morro Bay sits right in the fog belt, so humidity is high most mornings and carpets need thorough extraction and good airflow to dry properly. There is a strong mix of full-time residents and vacation rentals here. Salt air and sand are the main enemies of carpet near the water, and we see a lot of pet traffic. We bring air movers on request to speed drying in the cooler, damp months.',
    common: [
      'Steam carpet cleaning with extended drying help',
      'Vacation-rental turnover cleaning',
      'Pet stain and odor treatment',
      'Upholstery cleaning for salt-air homes',
      'Area rug cleaning',
    ],
    nearby: ['Los Osos', 'Cayucos', 'San Luis Obispo', 'Atascadero'],
    coverage: 'Full-service coverage, no travel fee.',
    lat: 35.3658,
    lng: -120.8499,
  },
  {
    slug: 'los-osos',
    city: 'Los Osos',
    short: 'Los Osos',
    metaTail: 'Carpet, upholstery and tile cleaning in Los Osos and Baywood Park.',
    intro:
      'We cover Los Osos and Baywood Park, including the streets down by the estuary, the Cabrillo Estates area, and the homes up toward Montaña de Oro.',
    local:
      'Los Osos is mostly established single-family homes, many with sandy yards and direct trail access, so fine sand and organic matter come in on shoes and paws year-round. The bay keeps things damp. We focus on deep extraction, odor control for pet households, and grout cleaning in the older bathrooms and entryways common in this area.',
    common: [
      'Deep steam extraction for sandy, high-traffic carpet',
      'Pet odor and stain treatment',
      'Tile and grout cleaning in entryways and baths',
      'Upholstery and area rug cleaning',
      'Move-out carpet cleaning',
    ],
    nearby: ['Morro Bay', 'San Luis Obispo', 'Cayucos'],
    coverage: 'Bi-weekly routes through Los Osos, no travel fee.',
    lat: 35.3102,
    lng: -120.8343,
  },
  {
    slug: 'atascadero',
    city: 'Atascadero',
    short: 'Atascadero',
    metaTail: 'Steam carpet, upholstery and tile cleaning in Atascadero.',
    intro:
      'We serve all of Atascadero, from the downtown core and the Lake area to the larger lots in the west side hills and the neighborhoods along El Camino Real.',
    local:
      'Atascadero runs hot and dry in summer and gets cold in winter, and a lot of homes sit on bigger, oak-shaded lots. That means dust, pollen and oak litter tracked indoors, plus more indoor pet time in the temperature extremes. We do a lot of whole-house cleaning here, along with tile-and-grout work in the open kitchens common in the newer builds.',
    common: [
      'Whole-house steam carpet cleaning',
      'Dust, pollen and oak-litter extraction',
      'Pet stain and odor removal',
      'Tile, grout and hard-floor cleaning',
      'Upholstery and mattress cleaning',
    ],
    nearby: ['Paso Robles', 'Templeton', 'Santa Margarita', 'San Luis Obispo'],
    coverage: 'Full-service coverage, no travel fee.',
    lat: 35.4894,
    lng: -120.6707,
  },
  {
    slug: 'paso-robles',
    city: 'Paso Robles',
    short: 'Paso Robles',
    metaTail: 'Carpet, upholstery, tile and commercial cleaning in Paso Robles wine country.',
    intro:
      'We cover Paso Robles, from the downtown neighborhoods and the east-side subdivisions to the rural properties and tasting rooms out among the vineyards.',
    local:
      'Paso is the hottest and dustiest part of the county, and vineyard and ranch dust is relentless on carpet and upholstery. There is also a real commercial side here: tasting rooms, offices and vacation rentals for wine-country visitors, all of which take heavy foot traffic. We handle residential whole-house jobs, recurring commercial contracts for tasting rooms and offices, and rental turnovers.',
    common: [
      'Whole-house steam carpet cleaning',
      'Vineyard and ranch dust extraction',
      'Commercial carpet cleaning for tasting rooms and offices',
      'Vacation-rental turnover cleaning',
      'Upholstery, area rug and tile cleaning',
    ],
    nearby: ['Atascadero', 'Templeton', 'San Miguel'],
    coverage: 'Full-service coverage. A small fuel fee may apply to outlying vineyard properties.',
    lat: 35.6266,
    lng: -120.691,
  },
];

export const getServiceArea = (slug?: string) =>
  SERVICE_AREAS.find((a) => a.slug === slug);
