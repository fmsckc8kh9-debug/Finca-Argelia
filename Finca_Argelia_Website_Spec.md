# Finca Argelia — Website Specification

**Domain:** argeliacoffee.com or fincaargelia.com
**Target Launch:** April 1, 2026 (before World of Coffee San Diego)
**Platform:** Squarespace, Wix, or WordPress (one-page or multi-page, mobile-first)
**Budget:** $200–$500/year (hosting + custom domain)

---

## Site-Wide Requirements

### Visual Identity — Derived from the Logo

The logo sets the entire tone for the brand: a single-color line illustration in **deep barn red** on a **warm cream/off-white** background. It depicts the Finca Argelia farmhouse flanked by a palm tree and a tall columnar tree, with the Tecuamburro mountain range rising behind — all rendered in a hand-drawn, architectural line style reminiscent of a woodcut or linoprint. The illustration is minimal, confident, and rooted in place. The website must feel like an extension of this logo.

### Color Palette
| Role | Color | Hex | Usage |
|---|---|---|---|
| Primary | Deep Barn Red | `#8B1A1A` | Logo, headlines, CTA buttons, line illustrations, active nav links, borders |
| Background | Warm Cream | `#F5F0E8` | Page backgrounds, card backgrounds, hero overlay tint |
| Text — Primary | Charcoal Brown | `#2C2418` | Body text, paragraphs, form labels |
| Text — Secondary | Warm Gray | `#7A7060` | Captions, metadata, secondary info, placeholder text |
| Accent — Light | Dusty Rose | `#C4A89B` | Hover states, divider lines, subtle borders, tag backgrounds |
| Accent — Dark | Deep Coffee | `#4A2C2A` | Footer background, dark section backgrounds, contrast panels |

Avoid bright greens, blues, or saturated colors. The palette should feel warm, earthy, and analog — like aged paper and red ink.

### Typography
- **Headlines:** A serif typeface with character and warmth — Playfair Display, DM Serif Display, or Lora. Set in deep barn red (`#8B1A1A`) or charcoal brown (`#2C2418`).
- **Body text:** A clean, readable sans-serif — Inter, Source Sans 3, or DM Sans. Set in charcoal brown.
- **Accent / Labels:** Small caps or letterspaced uppercase in the sans-serif for stats bars, navigation links, and metadata. Use warm gray or barn red.
- **Pull quotes & callouts:** Serif italic in barn red, sized up, with generous whitespace.
- Overall feel: editorial, unhurried, confident. Generous line-height (1.6–1.8 for body), wide margins, lots of breathing room.

### Illustration System
The logo's line-drawing style should extend across the site as a custom illustration language:
- **Section dividers:** Line-drawn vignettes in barn red — a coffee branch, the chapel, volcanic ridgeline, a cupping bowl, a Cedro shade tree. Used instead of generic horizontal rules.
- **Icon set:** Line-drawn icons in the same style for the stats bar (a coffee cherry for varietal, a mountain for altitude, a scale for production, a calendar for harvest, etc.), navigation, and the Stay With Us activities.
- **Page headers:** Each page gets a unique line illustration in the hero area — matching the logo's weight and style. Examples: the farmhouse for "Stay With Us," a coffee branch for "Our Coffee," the mountain ridgeline for "About," a shipping crate for "Logistics."
- **Background textures:** Subtle cream paper texture or fine grain — reinforcing the analog, handmade quality of the logo. Avoid flat digital white.
- **Maps & diagrams:** If showing farm maps, estate layout, or the generational timeline, render them in the same barn-red line style on cream, not as standard Google Maps embeds (use a custom illustrated map with a small Google Maps link below for directions).

### Design Principles
- **Analog warmth over digital polish.** The site should feel hand-touched — like a beautifully printed booklet, not a tech startup landing page. The logo's hand-drawn quality is the north star.
- **Red ink on cream paper.** Every design decision should pass this test: would it look right printed in a single red ink on cream stock? If yes, it belongs.
- **Generous whitespace.** Let the illustrations, photos, and text breathe. No cramped layouts. The confidence of the logo comes from what it leaves out.
- **Photography treated with warmth.** Photos should be color-graded with warm tones (slight sepia or golden cast) so they harmonize with the cream-and-red palette rather than clashing with cold, high-contrast digital photography. Consider a subtle warm overlay or desaturation treatment.
- **One-color moments.** Dedicate at least one section per page to a "print" layout: barn red illustration + text on cream, no photography. This reinforces brand identity and gives the eye a rest between photo sections.
- **Mobile-first responsive design** — most buyers will check the site on their phone at the show.
- **Fast load times** — compress all images, lazy-load below the fold, use WebP format.
- **Bilingual toggle:** English (primary) and Spanish.

### Global Elements
- **Navigation bar:** Logo illustration (left — the full farmhouse-mountain-trees mark), page links (center/right) in letterspaced uppercase sans-serif, "Request a Sample" CTA button in barn red with cream text (always visible). Nav background: warm cream with a subtle bottom border in dusty rose.
- **Sticky header** on scroll: simplified to logo mark + CTA button only, barn red on cream.
- **Footer:** Deep coffee (`#4A2C2A`) background with cream text. Logo illustration centered at top of footer. Contact info, WhatsApp, Instagram, email, address/GPS, copyright. Tagline in serif italic: *"Six Generations. One Mountain. The Same Bourbon."* Line-drawn section divider (volcanic ridgeline) separating footer from page content.
- **WhatsApp floating button** on all pages (bottom-right corner) — styled in barn red with cream icon, not default green.
- **Favicon:** The farmhouse element from the logo, simplified to read at 32×32px, in barn red on cream.
- **Page transitions:** Subtle fade-ins on scroll. No flashy animations — keep the analog, unhurried feeling.

---

## Page-by-Page Breakdown

---

### 1. Homepage / Landing Page

**Goal:** Communicate identity in under 5 seconds. Convert visitors into sample requests.

#### Hero Section
- **Option A (Illustration-led):** Full-width warm cream background with the logo illustration rendered large and centered — the farmhouse, trees, and Tecuamburro ridgeline — with the headline text below in serif. A warm-toned photo of the farm fades in subtly behind or sits below the fold. This approach leads with brand identity and feels like the cover of a printed coffee catalog.
- **Option B (Photo-led with brand overlay):** Full-width drone photo of Finca Argelia on the slopes of Tecuamburro, color-graded warm (golden/sepia cast), with a translucent cream overlay. The logo illustration sits on top in barn red, with the headline in serif below. The photo provides immersion; the overlay ensures the barn-red-on-cream identity stays dominant.
- **Headline:** "Finca Argelia" in large serif, barn red. Below: "The Ossaye Family · Six Generations of Bourbon · Est. ~1890"
- **Subheadline:** "Fully washed specialty Bourbon from the boca costa of Santa Rosa, Guatemala. SCA 83+ pts. Direct from the family who has grown it since ~1890." Set in the sans-serif, charcoal brown.
- **CTA Button:** "Request a Sample" — barn red button, cream text, subtle hover to deep coffee. No rounded corners — keep it angular, printerly.

#### Quick Stats Bar
A clean horizontal row on warm cream, separated by thin barn-red vertical lines. Each stat paired with a **line-drawn icon** in the logo's illustration style:

| ☕ Est. ~1890 | 👨‍👩‍👦 6th Generation | ⛰ 1,067 masl | ⚖ 60,000 lbs/year | 🏆 SCA 83 | 🫘 Fully Washed Bourbon | 🌿 855 Ha Estate |
|---|---|---|---|---|---|---|

*(Icons above are placeholders — replace with custom line-drawn icons matching the logo's red-on-cream style: a coffee cherry, a family tree, a mountain peak, a scale, a cupping spoon, a coffee branch, a forest canopy)*

#### Story Teaser
- Warm cream background. A line-drawn vignette of the farmhouse (from the logo) to the left, text to the right.
- 2–3 sentence hook from the origin story (Federico, Suzanne, the letter during WWI) in serif italic, barn red.
- "Read Our Story →" link in letterspaced uppercase sans-serif.

#### Coffee Highlights
- Deep coffee (`#4A2C2A`) background panel with cream text — creating a dark "print" moment.
- Line-drawn coffee branch illustration in cream/dusty rose.
- Varietal, process, altitude, tasting notes (once available) set in clean sans-serif.
- "View Coffee Details →" link in dusty rose.

#### Conservation Snapshot
- Back to warm cream background. Large warm-toned photo of the forest canopy or reforestation area, with soft rounded corners or a subtle barn-red border.
- Line-drawn forest canopy illustration as a section header.
- "450+ hectares of native forest protected with INAB" in serif, barn red.
- "Learn More →" link.

#### Stay With Us Teaser
- Full-width section with the farmhouse illustration from the logo rendered large as a background watermark (barn red at 8–10% opacity on cream).
- Atmospheric warm-toned photo of the farmhouse or landscape at golden hour, inset.
- "Come stay where the story began." in serif italic, barn red.
- "Plan Your Stay →" CTA button matching the primary barn red style.

#### Instagram Feed Embed
- Warm cream background, 4–6 recent posts in a grid with subtle barn-red borders.
- "Follow @FincaArgelia →" in letterspaced uppercase.

---

### 2. About / Our Story

**Goal:** Build emotional connection and trust. This is the page buyers read before deciding to build a relationship.

#### The Origin — Federico & Suzanne
- The letter during WWI, the three meetings, the marriage in France, the journey to Guatemala
- Include historical family photos if available (Federico and Suzanne, the original farmhouse)

#### The Generations Timeline
A vertical scroll-through timeline rendered in the **barn-red line-drawing style on cream** — each generation marked by a small illustrated vignette (a letter for Federico, a ship for the Atlantic crossing, the farmhouse for Roland, a coffee tree for Annelie, the chapel for the sixth generation). Connected by a thin barn-red vertical line. Dates in letterspaced sans-serif, stories in serif body text.

1. **Felipe Weller** (~1890) — Original owner who established the farm
2. **Federico Ossaye Zebadua** (~1920) — Purchased the farm after working as manager; brought Suzanne from France; raised Roland and Eleonore in the farmhouse that still stands
3. **Roland Ossaye** (1965–2005) — Educated in France and England; returned during WWII; married Iride Olivoto; managed the farm for four decades
4. **Annelie Henriette Ossaye Olivoto** (2005–2025) — Took over after Roland's passing; held the farm together through Guatemala's most difficult coffee years
5. **The Sixth Generation** (2019–present) — Returned after college out of love for the place; modernized operations; proposed to his wife on the farm; baptized his daughter in the hundred-year-old chapel; formally took management in 2025, working hand in hand with Annelie

#### Emotional Anchors
Use **pull-quote callout boxes** — cream background with a thin barn-red border on the left, text in serif italic barn red. Each anchored by a small line-drawn illustration:
- Federico meeting Suzanne only three times before proposing
- Grandmother Henriette traveling from France to Guatemala and taking Roland and Eleonore across the Atlantic
- The sixth-generation owner proposing on the farm and baptizing his daughter in the old chapel

#### The Land — Terroir Section
- Description of Santa Rosa's boca costa: where the humid Pacific lowlands meet the cooler highlands on Tecuamburro's slopes
- Volcanic clay soil deep with minerals and stone
- Steady rainfall, never excessive
- Three natural springs feeding the farm
- 855 total hectares, 70 in coffee, 450+ in protected forest
- Photos: landscape, soil close-ups, springs, shade trees

#### Conservation (prominent sub-section or separate scrollable panel)
- 450+ hectares of native forest, formally protected with INAB (Guatemala's National Forestry Institute) — largest private protected forest in the region
- 45 hectares/year reforestation since 2023 with native species
- Photos: forest canopy, wildlife, reforestation areas, springs
- Biodiversity data, carbon sequestration estimates, watershed impact (if available)

#### Social Impact
- 20 permanent employees, ~100 seasonal workers during harvest
- ~50 families depend on the farm
- Dedicated women's group leading organic pest management
- Composting and vermiculture programs
- On-site water treatment
- Housing, meals, healthcare, and education support for workers and families
- Photos: workers during harvest, the women's group, community life

---

### 3. Our Coffee

**Goal:** Serve as a technical spec sheet for green coffee buyers.

#### Varietal
- Traditional Bourbon
- Trees averaging 40 years old
- Roots deep in volcanic clay, shaded by Cedro and Gravilea, fed by three natural springs
- Emphasize old-growth Bourbon as a selling point

#### Altitude
- 1,067 masl / 3,500 ft
- Be honest and specific — do not round up
- Frame the boca costa terroir: heavier body, chocolate and caramel sweetness, smoother acidity, versatile for espresso blends and drip programs

#### Process
- Fully washed
- On-farm wet mill
- Detail the process steps: cherry selection → depulping → fermentation (include time) → washing method → drying (patio/raised beds/mechanical)
- Photos of each stage

#### SCA Score
- 83 points (note cupping date and who cupped it)
- Additional cuppings listed as they become available
- If a micro-lot scores 85+, feature it separately

#### Tasting Notes
- Official notes once provided by the cupper
- Placeholder profile: chocolate, brown sugar, soft citrus, mild stone fruit, smooth body, clean finish

#### Harvest Calendar
- November–February
- Export-ready: typically March–April

#### Annual Production
- ~60,000 lbs (~454 bags of 69 kg / ~440 bags of 60 kg)
- From 70 hectares of planted coffee

#### Available Lot Sizes
- Minimum and maximum order sizes
- Note micro-lot availability if applicable

#### Downloadable Spec Sheet
- PDF version of the sell sheet available for download

---

### 4. Logistics / For Buyers

**Goal:** Signal professionalism and export readiness.

#### Export Details
- **Export port:** Puerto Quetzal, Guatemala (Pacific coast)
- **Incoterms:** FOB Puerto Quetzal (note if CIF available to major US ports)
- **Packaging:** GrainPro-lined 69 kg bags (or specified packaging)
- **Shipping timeline:** 2–4 weeks from order confirmation to vessel departure

#### Order Information
- **Minimum order:** Specify (e.g., 1 pallet, 10 bags, full container)
- **FCL capacity:** ~37,500 lbs / 250 bags of 69 kg per container
- **LCL available** for smaller orders (note consolidation)

#### Payment Terms
- Wire transfer, LC, or other accepted methods

#### Certifications & Documentation
- Phytosanitary certificate (MAGA)
- ICO Certificate of Origin (ANACAFE)
- Note any certifications in progress or planned

#### Sample Policy
- "We ship free 100g green samples worldwide. Request yours below."
- Prominent sample request button

---

### 5. Stay With Us — Farm Experience

**Goal:** Invite visitors to experience Finca Argelia firsthand — strengthening buyer relationships, building brand loyalty, and opening an agritourism revenue stream.

#### Introduction
- Hero area: The **farmhouse illustration from the logo** rendered full-width as the page header — barn red on cream, with the mountain range and trees exactly as they appear in the logo, but extended wider.
- Below the illustration: "Come stay where the story began." in large serif, barn red.
- "The farmhouse where Federico brought Suzanne from France over a century ago still stands on Tecuamburro's slopes — and now, it's yours to experience. One hour from Guatemala City, a world apart." in sans-serif, charcoal brown.
- Warm-toned photo of the farmhouse below, with soft barn-red border.

#### The Farmhouse
- Description of the historic farmhouse (135+ years old), restored for guests
- Number of rooms / guest capacity
- Amenities: comfortable beds, hot water, home-cooked meals featuring local cuisine, electricity, Wi-Fi (if available)
- Photos: exterior, interior rooms, dining area, porch/veranda with mountain views

#### What's Included
- Accommodation in the historic farmhouse
- All meals prepared on-site with local ingredients (breakfast, lunch, dinner)
- Coffee from the farm — unlimited, of course
- A personal welcome and orientation from the Ossaye family

#### Farm Activities

Each activity category gets a **line-drawn icon header** in the logo's barn-red style — these icons should feel like they belong in the same illustration family as the farmhouse, trees, and mountains in the logo.

**☕ Coffee Experience** *(icon: a coffee branch with cherries)*
- Guided walk through the 70 hectares of Bourbon coffee plots
- Cherry picking alongside seasonal workers (during harvest season, Nov–Feb)
- Hands-on processing: depulping, fermentation, washing at the on-farm wet mill
- Coffee drying observation (patios/raised beds)
- Cupping session of Finca Argelia's lots with the family
- "Seed to cup" education: learn the full journey of specialty coffee

**🥾 Hiking & Nature** *(icon: the mountain ridgeline from the logo)*
- Guided hikes through the 450+ hectares of INAB-protected native forest
- Tecuamburro volcano trail — summit hike with panoramic views of the boca costa and Pacific lowlands
- Birdwatching walks at dawn (the protected forest is home to diverse avian species)
- Waterfall and natural spring trail — visit the three springs that feed the farm
- Night walks for wildlife observation (seasonal)

**🌱 Farm & Agricultural Activities** *(icon: a sapling / young tree)*
- Tour of the composting and vermiculture programs
- Visit with the women's group leading organic pest management
- Shade tree identification walk: learn about Cedro, Gravilea, and native species
- Reforestation participation: plant native trees in the 45 ha/year reforestation program — take home a certificate and GPS coordinates of your tree
- Horseback riding through the estate trails
- Visit to the on-site water treatment facilities

**🏛 Cultural & Heritage Experiences** *(icon: the chapel in line-drawing style)*
- Visit the hundred-year-old chapel on the property
- Tour the original farmhouse with stories of each generation
- Historical photo walk: see the places captured in the family's archival photographs
- Cooking class featuring traditional Guatemalan dishes with farm-grown ingredients
- Evening bonfire with stargazing on the volcanic ridge — far from city light pollution

**🌄 Relaxation** *(icon: a hammock between two palm trees)*
- Hammock garden with mountain views
- Reading nook in the farmhouse with books on coffee, Guatemalan history, and the Ossaye family
- Morning yoga or meditation on the farm terrace (by arrangement)
- Simply sit on the farmhouse porch with a cup of Finca Argelia Bourbon and watch the clouds roll over Tecuamburro

#### Seasonal Calendar
| Season | Highlights |
|---|---|
| **Nov–Feb** (Harvest) | Cherry picking, full wet mill operation, bustling farm energy, 100+ workers on-site |
| **Mar–May** (Dry Season) | Best hiking weather, clearest views, reforestation planting, drying patios active |
| **Jun–Oct** (Green Season) | Lush forest, flowering coffee trees, birdwatching peak, quieter & more intimate |

#### Who This Is For
- **Coffee buyers:** Come see the origin. Walk the land. Cup the coffee where it grows. This is how direct-trade relationships are built.
- **Coffee professionals & roasters:** Deepen your sourcing story with firsthand experience of the farm, the family, and the process.
- **Travelers & coffee lovers:** An authentic agritourism experience on a working farm with 135 years of history — not a resort, but the real thing.

#### Booking Information
- Contact form specific to farm stays (Name, Email, Dates, Number of Guests, Interests)
- WhatsApp link for quick inquiries
- Note: "Stays are arranged directly with the Ossaye family. We accommodate small groups (2–8 guests) for personalized experiences. Please inquire at least 2 weeks in advance."
- Pricing: "Contact us for rates" (or list per-night pricing if established)

#### Getting Here
- One hour from Guatemala City by car
- Directions / GPS coordinates
- Airport pickup available (from La Aurora International Airport, Guatemala City)
- Map embed showing farm location

---

### 6. Contact

**Goal:** Make it as easy as possible to reach the family and request a sample.
**Page header illustration:** Line-drawn envelope with a coffee branch — barn red on cream (a nod to Federico's letter that started it all).

#### Contact Form
Styled on warm cream with barn-red input borders and charcoal brown text. No heavy drop shadows — keep it flat and printerly.
Fields: Name, Company, Email, Phone (optional), Volume Interest (dropdown: samples only / up to 5,000 lbs / 5,000–20,000 lbs / full container+), Interest (dropdown: green coffee buying / farm visit / stay with us / general inquiry), Message.
Submit button: barn red, cream text, matching all other CTAs.

#### Direct Contact
- **WhatsApp:** [number] (essential for international coffee trade)
- **Email:** yourname@argeliacoffee.com (professional domain)
- **Instagram:** @FincaArgelia

#### Location
- **Custom illustrated map** of Guatemala in the barn-red line style on cream, showing Guatemala City, Tecuamburro volcano, and Finca Argelia with a small farmhouse icon. Include a "Get Directions →" link to Google Maps below.
- Physical address
- GPS coordinates
- "One hour from Guatemala City by car"

#### Sample Request Callout
- Prominent box: "Request a free 100g green sample — shipped worldwide."
- Direct link to sample request form or WhatsApp

---

## Photography & Video Checklist

All visuals should be captured before launch. Professional quality preferred; modern smartphone with good lighting is acceptable. **Color-grade all photos warm** (golden/sepia cast) to harmonize with the cream-and-red palette.

1. Aerial/drone shot of the full 855-hectare estate showing coffee and forest together
2. Close-up of ripe Bourbon cherries on the branch (emphasize 40-year-old trees)
3. Wet mill in operation: depulping, fermentation tanks, washing channels
4. Coffee drying on patios or raised beds
5. The family: the sixth-generation owner and grandmother Annelie together on the farm
6. Workers during harvest (~100 seasonal workers, ~50 families)
7. The women's group leading organic pest management
8. The forest: canopy, wildlife, reforestation areas, springs
9. The original farmhouse — still standing after 135 years
10. The hundred-year-old chapel
11. Historical photos: Federico and Suzanne, Roland, Annelie through the decades
12. The farmhouse interior (for Stay With Us page): rooms, dining, veranda
13. Activity shots: hiking trails, horseback riding, cupping session, bonfire
14. Views from the property: sunrise, cloud cover over Tecuamburro, the boca costa landscape
15. **Video (60–90 sec):** Drone flyover of Tecuamburro slopes → harvest → processing → the family speaking about history and future → farmhouse and chapel → forest

---

## Illustration Assets to Commission

These should all be created in the **same line-drawing style as the logo** — single-color barn red (#8B1A1A) on transparent background, hand-drawn feel, consistent line weight. Commission from the same illustrator who created the logo if possible.

1. **Section divider vignettes** (6–8 variations): volcanic ridgeline, coffee branch with cherries, the chapel, a cupping bowl with steam, a Cedro shade tree, a water spring, a shipping crate, a letter/envelope
2. **Stats bar icons** (7): coffee cherry, family tree/generations, mountain peak, weighing scale, cupping spoon, coffee bean/branch, forest canopy
3. **Activity icons for Stay With Us** (5): coffee branch with cherries, mountain ridgeline (hiking), sapling (farm activities), chapel (cultural), hammock between palms (relaxation)
4. **Page header illustrations** (6 — one per page):
   - Homepage: the full logo illustration (already exists)
   - About: the mountain ridgeline extended wide
   - Our Coffee: a coffee branch with leaves and cherries
   - Logistics: a shipping crate or bag with the farm mark
   - Stay With Us: the farmhouse from the logo, rendered larger with more interior detail
   - Contact: an envelope with a coffee branch (nod to Federico's letter)
5. **Illustrated map of Guatemala** showing Guatemala City → Tecuamburro → Finca Argelia
6. **Background watermark versions** of the logo at 8–10% opacity for section backgrounds
7. **Favicon** — the farmhouse element simplified for 32×32px

---

## SEO & Technical Notes

- **Page titles:** "Finca Argelia | Six Generations of Bourbon | Santa Rosa, Guatemala"
- **Meta descriptions** for each page focusing on: specialty coffee, Guatemala, Bourbon, direct trade, conservation, farm stay
- **Alt text** on all images for accessibility and SEO
- **Page speed:** Target under 3 seconds on mobile; compress images, use WebP format
- **SSL certificate:** Required (HTTPS)
- **Analytics:** Google Analytics or Squarespace/Wix built-in analytics from day one
- **QR code:** Generate a QR code linking to the homepage for print materials (sell sheets, business cards, sample bags)

---

## Content Priorities Before Launch (April 1, 2026)

| Priority | Item | Status |
|---|---|---|
| 🔴 Critical | Commission illustration assets from logo artist (icons, dividers, page headers) | |
| 🔴 Critical | Homepage live with hero illustration/photo, stats bar, CTA | |
| 🔴 Critical | Our Coffee page with full spec sheet | |
| 🔴 Critical | Contact page with form and WhatsApp | |
| 🟡 High | About / Our Story with illustrated generational timeline | |
| 🟡 High | Logistics / For Buyers page | |
| 🟡 High | Warm color-grade applied to all photography | |
| 🟢 Nice-to-have | Stay With Us page with activity icons (can launch shortly after the show) | |
| 🟢 Nice-to-have | Custom illustrated Guatemala map for Contact page | |
| 🟢 Nice-to-have | 60–90 sec farm video | |
| 🟢 Nice-to-have | Instagram feed embed | |
| 🟢 Nice-to-have | Spanish language toggle | |

---

*Six Generations. One Mountain. The Same Bourbon. The story continues.*
