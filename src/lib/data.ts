export const BRAND = {
  name: "Utkarsh Charitable Trust (Regd.)",
  short: "Utkarsh Charitable Trust",
  tagline: "Empowering Lives • Educating Children • Serving Humanity",
  estd: "24 May 2022",
  phone: "+91 94122 00000",
  whatsapp: "919412200000",
  email: "info@utkarshcharitabletrust.com",
  address:
    "Utkarsh Charitable Trust (Regd.), Moradabad, Uttar Pradesh, India",
  mapEmbed:
    "https://www.google.com/maps?q=Moradabad,Uttar+Pradesh,India&output=embed",
};

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: u("photo-1488521787991-ed7bbaae773c", 2000),
  hero2: u("photo-1497486751825-1233686d5d80", 2000),
  classroom: u("photo-1497486751825-1233686d5d80"),
  childrenHappy: u("photo-1509099836639-18ba1795216d"),
  volunteers: u("photo-1559027615-cd4628902d4a"),
  donation: u("photo-1593113598332-cd288d649433"),
  handsTogether: u("photo-1532629345422-7515f3d16bb6"),
  community: u("photo-1469571486292-0ba58a3f068b"),
  schoolKids: u("photo-1577896851231-70ef18881754"),
  education: u("photo-1427504494785-3a9ca7044f45"),
  study: u("photo-1503676260728-1c00da094a0b"),
  women: u("photo-1582213782179-e0d53f98f2ca"),
  womanPro: u("photo-1573496359142-b8d87734a5a2"),
  elderly: u("photo-1544027993-37dbfe43562a"),
  health: u("photo-1576091160550-2173dba999ef"),
  healthCamp: u("photo-1579684385127-1ef15d508118"),
  road: u("photo-1449965408869-eaa3f722e40d"),
  festival: u("photo-1513151233558-d860c5398176"),
  holi: u("photo-1530103862676-de8c9debad1d"),
  plant: u("photo-1542601906990-b4d3fb778b09"),
  field: u("photo-1500382017468-9049fed747ef"),
  city: u("photo-1477959858617-67f85cf4f1df"),
};

export type Activity = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  icon: string;
  description: string;
  points: string[];
  stats: string;
};

export const ACTIVITIES: Activity[] = [
  {
    slug: "child-welfare",
    title: "Child Welfare",
    tagline: "Every child deserves love, care and protection",
    image: IMAGES.childrenHappy,
    icon: "child",
    description:
      "From nutrition and clothing drives to rescue support and festival celebrations, our child welfare mission ensures no child in Moradabad sleeps hungry or stays out of school. We organise regular happiness camps, gift distributions and health checkups for underprivileged children.",
    points: ["Nutrition & clothing drives", "Health checkups for children", "Festival celebrations & gifts", "Child protection awareness"],
    stats: "2000+ children supported",
  },
  {
    slug: "road-safety-awareness",
    title: "Road Safety Awareness",
    tagline: "Signal Pathshala — saving lives on the road",
    image: IMAGES.road,
    icon: "road",
    description:
      "Our flagship Road Signal Pathshala teaches street children, auto drivers and villagers traffic rules through street plays, workshops and helmet distribution. In partnership with traffic police, we run city-wide campaigns every year.",
    points: ["Signal Pathshala workshops", "Helmet & reflector distribution", "Street plays with traffic police", "School road-safety curriculum"],
    stats: "80+ camps • 15000+ citizens reached",
  },
  {
    slug: "education-support",
    title: "Education Support",
    tagline: "Books, bags and bright futures",
    image: IMAGES.classroom,
    icon: "book",
    description:
      "We distribute school bags, books, uniforms and fees support to slum and village children. Our volunteer teachers run evening classes so dropouts can rejoin mainstream schools.",
    points: ["Books, bags & uniform distribution", "Evening tuition centres", "School admission assistance", "Scholarship guidance"],
    stats: "1200+ study kits distributed",
  },
  {
    slug: "slum-child-education",
    title: "Slum Child Education",
    tagline: "Taking classrooms to the slums",
    image: IMAGES.schoolKids,
    icon: "school",
    description:
      "Open-air pathshalas inside Moradabad slums bring learning to children who beg or rag-pick. Blackboards, mats, rhymes and love — that is all it takes to change a destiny.",
    points: ["Open-air pathshalas", "Learning kits for rag-picker kids", "Parent counselling", "Mainstream school linkage"],
    stats: "15 slum centres active",
  },
  {
    slug: "begging-to-education",
    title: "Begging to Education Campaign",
    tagline: "From signals to schools",
    image: IMAGES.education,
    icon: "heart",
    description:
      "Our most emotional campaign rescues children begging at traffic signals and enrols them in schools. Citizens pledge not to give money but to sponsor education instead.",
    points: ["Signal rescue & counselling", "Bridge courses", "Sponsor-a-child program", "Follow-up mentoring"],
    stats: "300+ children shifted to schools",
  },
  {
    slug: "women-empowerment",
    title: "Women Empowerment",
    tagline: "Skilled women, strong families",
    image: IMAGES.women,
    icon: "women",
    description:
      "Sewing centres, beauty-culture training, self-help groups and legal awareness camps give women income and confidence. Hundreds of mothers now earn from home.",
    points: ["Sewing & skill centres", "Self-help groups", "Health & legal awareness", "Micro-enterprise support"],
    stats: "500+ women trained",
  },
  {
    slug: "senior-citizen-welfare",
    title: "Senior Citizen Welfare",
    tagline: "Seva of elders is seva of God",
    image: IMAGES.elderly,
    icon: "elder",
    description:
      "The heart of our trust — Shri Hanumant Vridh Seva Dham. Regular bhajan, health checkups, blankets in winter and warm meals for abandoned elders, leading to a full old-age home project.",
    points: ["Monthly elder seva camps", "Winter blanket drives", "Free health checkups", "Vridh Seva Dham project"],
    stats: "1000+ elders served",
  },
  {
    slug: "festival-celebration",
    title: "Festival Celebration",
    tagline: "No one should celebrate alone",
    image: IMAGES.festival,
    icon: "festival",
    description:
      "Diwali sweets, Holi colours, Eid gifts, Christmas cakes — volunteers celebrate every festival with slum children, elders and divyang brothers and sisters.",
    points: ["Diwali & Holi with children", "Eid & Christmas harmony meets", "Sweet & gift distribution", "Cultural programs"],
    stats: "40+ festival events",
  },
  {
    slug: "health-camps",
    title: "Health Camps",
    tagline: "Free treatment at your doorstep",
    image: IMAGES.health,
    icon: "health",
    description:
      "Eye checkups, blood donation, general physician and ayurvedic camps in villages and slums with free medicines. Special focus on mothers and newborns.",
    points: ["Eye & general health camps", "Blood donation drives", "Free medicine distribution", "Mother-child health focus"],
    stats: "60+ camps • 12000+ patients",
  },
  {
    slug: "environmental-awareness",
    title: "Environmental Awareness",
    tagline: "Green Moradabad, Clean Moradabad",
    image: IMAGES.plant,
    icon: "leaf",
    description:
      "Tree plantation on birthdays, river-cleanliness drives, no-plastic rallies and school eco-clubs. Every donor gets a tree planted in their name.",
    points: ["Tree plantation drives", "No-plastic rallies", "School eco-clubs", "Cleanliness campaigns"],
    stats: "10000+ saplings planted",
  },
];

export const LEADERS = [
  {
    name: "Mukesh Kumar Kashyap",
    role: "Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    quote: "Seva is not charity — it is our duty towards humanity.",
    bio: "Founder of Utkarsh Charitable Trust. Started social work on the streets of Moradabad with Signal Pathshala and slum education. Visionary behind Hanumant Vridh Seva Dham.",
  },
  {
    name: "Neha Kashyap",
    role: "President",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    quote: "When a woman is empowered, the whole family rises.",
    bio: "Leads women empowerment, child welfare and education programs. Guides volunteers and anchors every major campaign of the trust.",
  },
  {
    name: "Satyendra Kumar Chauhan",
    role: "General Secretary",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    quote: "Discipline in seva creates lasting impact.",
    bio: "Manages operations, road-safety partnerships with administration, health camps and district-level coordination across 15+ districts.",
  },
  {
    name: "Palak Kashyap",
    role: "Treasurer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    quote: "Every rupee of donation is a sacred trust.",
    bio: "Keeps complete transparency of donations and CSR funds. Young leadership driving digital outreach, gallery and education sponsorships.",
  },
];

export const GALLERY = [
  { src: IMAGES.childrenHappy, cat: "Child Welfare", title: "Smiles of slum children" },
  { src: IMAGES.classroom, cat: "Education", title: "Evening pathshala" },
  { src: IMAGES.volunteers, cat: "Volunteers", title: "Volunteer team Moradabad" },
  { src: IMAGES.donation, cat: "Child Welfare", title: "Ration kit distribution" },
  { src: IMAGES.road, cat: "Road Safety", title: "Signal Pathshala workshop" },
  { src: IMAGES.women, cat: "Education", title: "Women skill centre" },
  { src: IMAGES.elderly, cat: "Vridh Seva Dham", title: "Elder seva & blessings" },
  { src: IMAGES.health, cat: "Health Camp", title: "Free health checkup" },
  { src: IMAGES.healthCamp, cat: "Health Camp", title: "Village medical camp" },
  { src: IMAGES.festival, cat: "Festival", title: "Holi with children" },
  { src: IMAGES.holi, cat: "Festival", title: "Diwali celebration" },
  { src: IMAGES.plant, cat: "Volunteers", title: "Tree plantation drive" },
  { src: IMAGES.handsTogether, cat: "Volunteers", title: "One team, one mission" },
  { src: IMAGES.schoolKids, cat: "Education", title: "Slum children learning" },
  { src: IMAGES.community, cat: "Road Safety", title: "Community awareness rally" },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
};

export const POSTS: Post[] = [
  {
    slug: "hanumant-vridh-seva-dham-bhoomi-pujan",
    title: "Shri Hanumant Vridh Seva Dham Bhoomi Pujan — A Dream Takes Shape",
    date: "12 March 2025",
    category: "Vridh Seva Dham",
    image: IMAGES.elderly,
    excerpt:
      "With Vedic chants and blessings of saints, the Bhoomi Pujan of our dream old-age home was completed in Moradabad.",
    content: [
      "In a deeply emotional morning, saints, elders and hundreds of supporters gathered for the Bhoomi Pujan of Shri Hanumant Vridh Seva Dham — a future home for abandoned senior citizens.",
      "Founder Mukesh Kumar Kashyap said the Dham will have 50 rooms, a medical centre, bhajan hall, gaushala and organic garden. Construction has begun with public donations.",
      "The trust invites every citizen to donate a brick — sponsor a room, a bed, or a day's meal in memory of their parents.",
    ],
  },
  {
    slug: "pulwama-martyrs-tribute",
    title: "Pulwama Martyrs Tribute — Blood Donation & Candle March",
    date: "14 February 2025",
    category: "Social Service",
    image: IMAGES.community,
    excerpt:
      "Volunteers donated blood and marched with candles to honour the Pulwama martyrs and support their families.",
    content: [
      "On the anniversary of the Pulwama attack, Utkarsh Charitable Trust organised a blood donation camp and evening candle march in Moradabad.",
      "Over 120 units of blood were collected. Children made thank-you cards for soldiers, and families of ex-servicemen were honoured on stage.",
    ],
  },
  {
    slug: "road-signal-pathshala",
    title: "Road Signal Pathshala — Signals Se Seekh",
    date: "28 January 2025",
    category: "Road Safety",
    image: IMAGES.road,
    excerpt:
      "Street children turned traffic teachers — our Signal Pathshala is changing behaviour at Moradabad crossings.",
    content: [
      "In collaboration with traffic police, volunteers set up open classes at busy crossings. Children who once begged at signals now teach helmet and seat-belt rules with placards.",
      "Helmets, reflectors and rule-booklets were distributed to 500+ drivers. The campaign was covered by local media and praised by administration.",
    ],
  },
  {
    slug: "holi-celebration-with-children",
    title: "Holi Celebration with Slum Children — Rang Khushiyon Ke",
    date: "14 March 2025",
    category: "Festival",
    image: IMAGES.festival,
    excerpt:
      "500 children played safe herbal Holi with volunteers — sweets, colours, music and unlimited smiles.",
    content: [
      "Volunteers celebrated Holi with slum children using herbal colours, sweets, thandai and dhol. New clothes were gifted to every child.",
      "Elders from the Vridh Seva program applied tilak and blessed the children — two generations celebrating together.",
    ],
  },
  {
    slug: "education-for-street-children",
    title: "Begging to School — 300 Children Enrolled",
    date: "05 December 2024",
    category: "Education",
    image: IMAGES.schoolKids,
    excerpt:
      "Our Begging-to-Education campaign enrolled 300 signal children into schools with full kits and mentoring.",
    content: [
      "Through months of parent counselling and bridge classes, 300 children who begged at signals now attend regular schools.",
      "Each child received bag, books, uniform and a volunteer mentor. Citizens sponsor monthly fees through the trust.",
      "The mission continues — our target is 1000 children by next year.",
    ],
  },
];

export const COUNTERS = [
  { value: 5000, suffix: "+", label: "Children Helped" },
  { value: 250, suffix: "+", label: "Social Campaigns" },
  { value: 100, suffix: "+", label: "Volunteers" },
  { value: 15, suffix: "+", label: "District Activities" },
];

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Activities", href: "/activities" },
  { label: "Vridh Seva Dham", href: "/vridh-seva-dham" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
