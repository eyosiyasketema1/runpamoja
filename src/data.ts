// Pamoja Africa V — content pulled directly from the Vision PDF & Figma

export interface Speaker {
  name: string;
  role: string;
  country: string;
  hue: number;
  date: string;
  bg: string;
  fg: string;
  photo: string | null;
}

export interface Conference {
  id: string;
  kicker: string;
  name: string;
  audience: string;
  arrival: string;
  departure: string;
  expected: string;
  expectedLabel: string;
  color: string;
  blurb: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Objective {
  title: string;
  body: string;
  metrics?: Array<{ v: string; l: string }>;
}

export interface Vision {
  kicker: string;
  headline: string;
  body: string;
  pillars: Array<{ num: string; title: string; body: string }>;
}

export interface AgendaSession {
  t: string;
  title: string;
  venue: string;
  type: string;
  speaker?: string;
}

export interface AgendaDay {
  date: string;
  weekday: string;
  label: string;
  tagline: string;
  sessions: AgendaSession[];
}

export interface AgendaConf {
  label: string;
  sub: string;
  color: string;
  days: AgendaDay[];
}

export interface HistoryItem {
  year: string;
  label: string;
  place: string;
  delegates: string;
  caption: string;
  image: string;
  upcoming?: boolean;
}

export interface Testimony {
  name: string;
  role: string;
  country: string;
  photo: string;
  quote: string;
}

export interface FeaturedTestimony extends Testimony {
  videoId: string;
  thumb: string;
  duration: string;
}

export interface VenueSpec {
  v: string;
  l: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface PamojaData {
  event: {
    name: string;
    org: string;
    theme: string;
    tagline: string;
    verse: string;
    verseText: string;
    location: string;
    venue: string;
    datesShort: string;
    targetDate: Date;
  };
  conferences: Conference[];
  nav: NavItem[];
  whatIs: {
    title: string;
    body: string;
    body2: string;
  };
  vision: Vision;
  objectives: Objective[];
  agenda: Record<string, AgendaConf>;
  speakers: Speaker[];
  history: HistoryItem[];
  testimonies: {
    featured: FeaturedTestimony;
    quotes: Testimony[];
  };
  venue: {
    name: string;
    short: string;
    tagline: string;
    body: string;
    address: string;
    website: string;
    specs: VenueSpec[];
    features: string[];
    logistics: Array<{ title: string; body: string }>;
  };
  faq: FAQItem[];
}

export const pamojaData: PamojaData = {
  event: {
    name: "PAMOJA Africa V 2028",
    org: "Campus Crusade for Christ Africa",
    theme: "Arise Africa",
    tagline: "Raising a new generation of leaders for a new Africa.",
    verse: "Isaiah 60:1-3",
    verseText:
      "Arise, shine, for your light has come, and the glory of the LORD rises upon you. See, darkness covers the earth, and thick darkness is over the peoples, but the LORD rises upon you and his glory appears over you. Nations will come to your light, and kings to the brightness of your dawn.",
    location: "Addis Ababa, Ethiopia",
    venue: "Addis Ababa Convention Center",
    datesShort: "Dec 27, 2027 — Jan 2, 2028",
    targetDate: new Date("2027-12-27T09:00:00+03:00"),
  },
  conferences: [
    {
      id: "pamoja",
      kicker: "Conference 01",
      name: "Pamoja Conference",
      audience: "Students, young professionals, church leaders",
      arrival: "Dec 27, 2027",
      departure: "Jan 2, 2028",
      expected: "3,000",
      expectedLabel: "delegates",
      color: "#8DCF3D",
      blurb:
        "Seven days with 3,000 students, young professionals and church leaders from across the continent — the heart of the Pamoja movement.",
    },
    {
      id: "staff",
      kicker: "Conference 02",
      name: "Staff Conference",
      audience: "Staff, associate staff, interns & staff families",
      arrival: "Jan 2, 2028",
      departure: "Jan 6, 2028",
      expected: "2,000",
      expectedLabel: "staff & children",
      color: "#EA7F1D",
      blurb:
        "Five days of renewal, vision-casting and equipping for 2,000 staff and their families immediately following the main conference.",
    },
  ],
  nav: [
    { id: "conferences", label: "Conferences" },
    { id: "objectives", label: "Objectives" },
    { id: "speakers", label: "Speakers" },
  ],
  whatIs: {
    title: "What is Pamoja Africa?",
    body:
      "Pamoja is a Swahili word meaning \"togetherness.\" The spirit of Pamoja is to mobilize Africans to come together, united in reaching the continent and beyond with the gospel, and to raise God-fearing leaders of integrity for the continent and the world.",
    body2:
      "The vision was conceived at the West Africa students conference \"Harvest 2003.\" Since then, Pamoja has grown into one of the largest gatherings of African students, young professionals and church leaders on the continent.",
  },
  vision: {
    kicker: "Theme · Arise Africa",
    headline: "A message of hope\nfor the people.",
    body:
      "Arise Africa is a call to a generation: into a Spirit-filled personal life of integrity and intimacy with God, and into a ministry that bridges the missional gap — reaching our cousins, the youth population, digital communities, marketplace leaders, and planting churches where none exist.",
    pillars: [
      {
        num: "01",
        title: "Personal life",
        body: "A Spirit-filled life. Integrity. Intimacy with God. Believing in His abundant provision.",
      },
      {
        num: "02",
        title: "Ministry",
        body: "Bridging the missional gap — reaching cousins, youth, digital communities and marketplace leaders.",
      },
      {
        num: "03",
        title: "Sending",
        body: "Collaboration between African countries. Sending workers where we have no staff — in Africa and beyond.",
      },
    ],
  },
  objectives: [
    {
      title: "Spiritual Empowerment & Recruitment",
      body: "Empower participants for an effective Spirit-filled life. Recruit 100 new staff, 150 associate staff, and 250 interns.",
      metrics: [
        { v: "100", l: "new staff" },
        { v: "150", l: "associate staff" },
        { v: "250", l: "interns" },
      ],
    },
    {
      title: "Digital & Missional Training",
      body: "Equip participants with digital evangelism tools including the Jesus Film, and increase awareness of Africa's unreached peoples and mission opportunities.",
    },
    {
      title: "Movement Multiplication",
      body: "Mobilize participants to launch new movements and plant new churches by June 2028.",
      metrics: [
        { v: "100", l: "student movements" },
        { v: "50", l: "LS movements" },
        { v: "100", l: "digital movements" },
        { v: "500", l: "new churches" },
      ],
    },
    {
      title: "Cousin Engagement",
      body: "Provide practical strategies and training to reach and disciple cousin communities across Africa and beyond effectively.",
    },
    {
      title: "Collaboration",
      body: "Foster partnership among African nations, promote sharing of best practices, and renew commitment to the shared mission and vision.",
    },
  ],
  agenda: {
    pamoja: {
      label: "Pamoja Conference",
      sub: "7 days · Students, young professionals, church leaders",
      color: "#8DCF3D",
      days: [
        {
          date: "Dec 27", weekday: "Sun", label: "Day 01",
          tagline: "Arrival & Opening",
          sessions: [
            { t: "09:00 – 17:00", title: "Registration & check-in", venue: "AACC · Main atrium", type: "Logistics" },
            { t: "14:00 – 16:00", title: "Delegate orientation", venue: "Hall A", type: "Plenary", speaker: "Organizing committee" },
            { t: "18:30 – 20:00", title: "Opening ceremony · \"Arise Africa\"", venue: "Main auditorium", type: "Plenary", speaker: "Dr. Samuel Mwangi" },
            { t: "20:30 – 22:00", title: "Welcome reception", venue: "Outdoor courtyard", type: "Fellowship" },
          ],
        },
        {
          date: "Dec 28", weekday: "Mon", label: "Day 02",
          tagline: "Arise — A Spirit-filled life",
          sessions: [
            { t: "07:00 – 08:30", title: "Morning devotion & prayer", venue: "Chapel", type: "Worship" },
            { t: "09:00 – 10:30", title: "Plenary 01 · Arise from within", venue: "Main auditorium", type: "Plenary", speaker: "Pst. Marco Oliveira" },
            { t: "11:00 – 12:30", title: "Breakout tracks (choose one of 8)", venue: "Halls B – I", type: "Workshop" },
            { t: "14:00 – 15:30", title: "Bible engagement lab", venue: "Hall B", type: "Workshop", speaker: "Team GCM Ethiopia" },
            { t: "16:00 – 17:30", title: "Regional huddles · East / West / North / South", venue: "Rooms 201 – 204", type: "Discussion" },
            { t: "19:00 – 20:30", title: "Evening worship night", venue: "Main auditorium", type: "Worship", speaker: "Bp. Joseph Kamau" },
          ],
        },
        {
          date: "Dec 29", weekday: "Tue", label: "Day 03",
          tagline: "Shine — Integrity & calling",
          sessions: [
            { t: "07:00 – 08:30", title: "Morning devotion", venue: "Chapel", type: "Worship" },
            { t: "09:00 – 10:30", title: "Plenary 02 · Shine where you are", venue: "Main auditorium", type: "Plenary", speaker: "Rev. David Okafor" },
            { t: "11:00 – 12:30", title: "Marketplace & digital missions panel", venue: "Hall A", type: "Panel" },
            { t: "14:00 – 17:00", title: "Tracks block · Leadership / Campus / Digital / Marketplace", venue: "Halls B – I", type: "Workshop" },
            { t: "19:00 – 20:30", title: "Cultural night — Africa showcase", venue: "Outdoor stage", type: "Cultural" },
          ],
        },
        {
          date: "Dec 30", weekday: "Wed", label: "Day 04",
          tagline: "Go — Cousin engagement",
          sessions: [
            { t: "07:00 – 08:30", title: "Morning devotion", venue: "Chapel", type: "Worship" },
            { t: "09:00 – 10:30", title: "Plenary 03 · Go to the cousins", venue: "Main auditorium", type: "Plenary", speaker: "Dr. Emmanuel Adisa" },
            { t: "11:00 – 12:30", title: "Cousin-engagement strategy workshop", venue: "Hall A", type: "Workshop" },
            { t: "14:00 – 17:00", title: "Prayer walk · Addis city", venue: "Meet at lobby", type: "Mission" },
            { t: "19:00 – 20:30", title: "Testimony night", venue: "Main auditorium", type: "Fellowship" },
          ],
        },
        {
          date: "Dec 31", weekday: "Thu", label: "Day 05",
          tagline: "Movement multiplication",
          sessions: [
            { t: "07:00 – 08:30", title: "Morning devotion", venue: "Chapel", type: "Worship" },
            { t: "09:00 – 12:30", title: "Movement-building intensive", venue: "Hall A", type: "Workshop" },
            { t: "14:00 – 17:00", title: "Country-team planning sessions", venue: "Rooms 201 – 210", type: "Discussion" },
            { t: "21:00 – 00:30", title: "Year-end watchnight service", venue: "Main auditorium", type: "Worship" },
          ],
        },
        {
          date: "Jan 01", weekday: "Fri", label: "Day 06",
          tagline: "Collaboration & partnerships",
          sessions: [
            { t: "09:00 – 10:30", title: "New Year plenary · A new generation", venue: "Main auditorium", type: "Plenary" },
            { t: "11:00 – 12:30", title: "Continental collaboration forum", venue: "Hall A", type: "Panel" },
            { t: "14:00 – 17:00", title: "Commissioning prep & pledges", venue: "Hall B", type: "Workshop" },
            { t: "19:00 – 20:30", title: "Gala banquet", venue: "Grand ballroom", type: "Fellowship" },
          ],
        },
        {
          date: "Jan 02", weekday: "Sat", label: "Day 07",
          tagline: "Commissioning & departure",
          sessions: [
            { t: "08:00 – 10:00", title: "Closing plenary · Go", venue: "Main auditorium", type: "Plenary", speaker: "Bp. Joseph Kamau" },
            { t: "10:30 – 12:00", title: "Commissioning service", venue: "Main auditorium", type: "Worship" },
            { t: "12:00 – 15:00", title: "Lunch & farewell", venue: "Courtyard", type: "Fellowship" },
            { t: "15:00 onwards", title: "Delegate departures · Staff check-in opens", venue: "Main atrium", type: "Logistics" },
          ],
        },
      ],
    },
    staff: {
      label: "Staff Conference",
      sub: "5 days · Staff, associate staff, interns & families",
      color: "#EA7F1D",
      days: [
        {
          date: "Jan 02", weekday: "Sat", label: "Day 01",
          tagline: "Arrival & welcome",
          sessions: [
            { t: "15:00 – 18:00", title: "Staff registration & housing", venue: "Main atrium", type: "Logistics" },
            { t: "19:00 – 20:30", title: "Welcome dinner", venue: "Grand ballroom", type: "Fellowship" },
          ],
        },
        {
          date: "Jan 03", weekday: "Sun", label: "Day 02",
          tagline: "Renewal — The leader's inner life",
          sessions: [
            { t: "07:30 – 08:30", title: "Staff worship & prayer", venue: "Chapel", type: "Worship" },
            { t: "09:00 – 10:30", title: "Opening plenary · Renewal", venue: "Main auditorium", type: "Plenary", speaker: "AACC leadership" },
            { t: "11:00 – 12:30", title: "Marriage & family track / Singles track", venue: "Parallel halls", type: "Track" },
            { t: "14:00 – 17:00", title: "Team building · national groups", venue: "Breakout rooms", type: "Discussion" },
            { t: "19:00 – 20:30", title: "Prayer & communion", venue: "Main auditorium", type: "Worship" },
          ],
        },
        {
          date: "Jan 04", weekday: "Mon", label: "Day 03",
          tagline: "Vision-casting for 2028",
          sessions: [
            { t: "07:30 – 08:30", title: "Staff worship", venue: "Chapel", type: "Worship" },
            { t: "09:00 – 12:30", title: "Vision-casting intensive · 2028 plan", venue: "Hall A", type: "Plenary" },
            { t: "14:00 – 17:00", title: "Department breakouts · LS / Digital / Campus / Marketplace", venue: "Halls B – E", type: "Workshop" },
            { t: "19:00 – 20:30", title: "Staff family night", venue: "Outdoor courtyard", type: "Family" },
          ],
        },
        {
          date: "Jan 05", weekday: "Tue", label: "Day 04",
          tagline: "Equipping & appointments",
          sessions: [
            { t: "07:30 – 08:30", title: "Staff worship", venue: "Chapel", type: "Worship" },
            { t: "09:00 – 12:30", title: "Equipping workshops · leadership, coaching, fundraising", venue: "Halls B – E", type: "Workshop" },
            { t: "14:00 – 17:00", title: "Staff appointment ceremony & new staff charge", venue: "Main auditorium", type: "Plenary" },
            { t: "19:00 – 20:30", title: "Appreciation dinner", venue: "Grand ballroom", type: "Fellowship" },
          ],
        },
        {
          date: "Jan 06", weekday: "Wed", label: "Day 05",
          tagline: "Sending & departure",
          sessions: [
            { t: "08:00 – 10:00", title: "Closing plenary · Sending", venue: "Main auditorium", type: "Plenary" },
            { t: "10:30 – 11:30", title: "Commissioning prayer", venue: "Main auditorium", type: "Worship" },
            { t: "11:30 – 14:00", title: "Farewell brunch & departures", venue: "Courtyard", type: "Fellowship" },
          ],
        },
      ],
    },
  },
  speakers: [
    { name: "Dr. Samuel Mwangi", role: "Keynote speaker", country: "Kenya", hue: 88, date: "27/12", bg: "#EA7F1D", fg: "#FFF6EA", photo: "assets/speaker1.png" },
    { name: "Pst. Marco Oliveira", role: "Plenary · Arise", country: "Mozambique", hue: 26, date: "28/12", bg: "#22350A", fg: "#8DCF3D", photo: "assets/speaker2.png" },
    { name: "Rev. David Okafor", role: "Plenary · Shine", country: "Nigeria", hue: 140, date: "29/12", bg: "#8DCF3D", fg: "#22350A", photo: "assets/speaker3.png" },
    { name: "Dr. Emmanuel Adisa", role: "Plenary · Go", country: "Ghana", hue: 42, date: "01/01", bg: "#C2410C", fg: "#FFF6EA", photo: "assets/speaker4.png" },
    { name: "Bp. Joseph Kamau", role: "Evening worship", country: "Tanzania", hue: 60, date: "02/01", bg: "#0A1002", fg: "#EEFFD7", photo: "assets/speaker5.png" },
    { name: "To be announced", role: "Closing keynote", country: "Continental", hue: 100, date: "02/01", bg: "#5C8727", fg: "#EEFFD7", photo: null },
  ],
  history: [
    {
      year: "2006",
      label: "Pamoja I",
      place: "Nakuru, Kenya",
      delegates: "2,277",
      caption: "Students & young professionals. The vision first gathered in East Africa.",
      image: "assets/past_1.png",
    },
    {
      year: "2009",
      label: "Pamoja II",
      place: "Yamoussoukro, Côte d'Ivoire",
      delegates: "1,043",
      caption: "The continent's students answered the call in francophone West Africa.",
      image: "assets/past_2.png",
    },
    {
      year: "2013",
      label: "Pamoja III",
      place: "Lagos, Nigeria",
      delegates: "1,900",
      caption: "Students and young professionals from across the continent.",
      image: "assets/past_3.png",
    },
    {
      year: "2016 — 17",
      label: "Pamoja IV",
      place: "Lusaka, Zambia",
      delegates: "2,653",
      caption: "Students, young professionals and pastors from 34 nations of Africa. Dec 28, 2016 — Jan 2, 2017.",
      image: "assets/conference_crowd.jpg",
    },
    {
      year: "2027 — 28",
      label: "Pamoja V",
      place: "Addis Ababa, Ethiopia",
      delegates: "5,000+",
      caption: "3,000 delegates + 2,000 staff & family. Dec 27, 2027 — Jan 6, 2028. \"Arise Africa.\"",
      image: "assets/venue_hero.jpg",
      upcoming: true,
    },
  ],
  testimonies: {
    featured: {
      name: "Grace Wanjiru",
      role: "Delegate · Pamoja IV, Lusaka",
      country: "Kenya",
      quote: "I came as a first-year student. I left with a continent in my heart.",
      videoId: "ScMzIvxBSi4",
      thumb: "assets/past_1.png",
      duration: "2:18",
      photo: "assets/past_1.png",
    },
    quotes: [
      {
        name: "Pst. Ezekiel Banda",
        role: "Delegate · Pamoja III, Lagos",
        country: "Zambia",
        photo: "assets/past_2.png",
        quote: "Pamoja is where a generation of African leaders learned to pray together, fail together, and believe for something bigger than themselves.",
      },
      {
        name: "Amina Osei",
        role: "Young professional · Pamoja II, Yamoussoukro",
        country: "Ghana",
        photo: "assets/past_3.png",
        quote: "Twelve years later, our movement in Accra still traces its roots to those seven days in West Africa.",
      },
      {
        name: "Rev. Samuel Kariuki",
        role: "Staff · Pamoja I, Nakuru",
        country: "Kenya",
        photo: "assets/speaker1.png",
        quote: "We were two thousand students in a hall. Now I watch my spiritual grandchildren lead campuses in seven nations.",
      },
      {
        name: "Marie-Claire Mbiya",
        role: "Delegate · Pamoja IV, Lusaka",
        country: "DR Congo",
        photo: "assets/speaker2.png",
        quote: "I have never felt the weight of the African church like I did in that worship hall. It set the trajectory of my whole calling.",
      },
      {
        name: "Daniel Okonkwo",
        role: "Campus leader · Pamoja III, Lagos",
        country: "Nigeria",
        photo: "assets/speaker3.png",
        quote: "I walked in tired of ministry and walked out sure of my calling. That week was a turning point.",
      },
      {
        name: "Hannah Tesfaye",
        role: "Young professional · Pamoja IV, Lusaka",
        country: "Ethiopia",
        photo: "assets/speaker4.png",
        quote: "Hosting Pamoja V at home feels like ten years of prayer finally arriving at our door.",
      },
    ],
  },
  venue: {
    name: "Addis Ababa Convention Center",
    short: "AACC",
    tagline: "A continental home for a continental gathering.",
    body:
      "Purpose-built for pan-African events, the Addis Ababa Convention Center is Ethiopia's largest conference and exhibition complex. With a 3,500-seat main auditorium, a 2,000-capacity plenary hall, and more than 20 breakout rooms, it is designed to carry conversations of continental scale — which is exactly what Pamoja V requires.",
    address: "Addis Ababa, Ethiopia · Bole Road · a short ride from Bole International Airport",
    website: "https://aicc.et",
    specs: [
      { v: "3,500", l: "Main auditorium" },
      { v: "2,000", l: "Plenary hall" },
      { v: "20+", l: "Breakout rooms" },
      { v: "6", l: "Dining halls" },
    ],
    features: [
      "Full simultaneous interpretation (EN / FR / PT / SW / AR)",
      "Dedicated prayer rooms on every floor",
      "On-site health clinic & 24/7 security",
      "Family & childcare facilities for Staff Conference",
      "500+ on-site parking bays",
      "High-speed fiber Wi-Fi throughout",
    ],
    logistics: [
      { title: "By air", body: "Bole International Airport (ADD) — direct flights from 60+ African cities. Shuttle service from airport to venue for registered delegates." },
      { title: "Accommodation", body: "Official partner hotels within walking distance. Group bookings available during registration, starting at $48/night." },
      { title: "Ground transport", body: "Dedicated shuttle loop between partner hotels and the venue every 15 minutes throughout conference hours." },
    ],
  },
  faq: [
    {
      q: "What is the difference between the Pamoja Conference and the Staff Conference?",
      a: "They are two back-to-back events held at the same venue. The Pamoja Conference (Dec 27 — Jan 2) gathers 3,000 students, young professionals and church leaders. The Staff Conference (Jan 2 — Jan 6) is a dedicated gathering for 2,000 Campus Crusade staff, associate staff, interns and staff families.",
    },
    {
      q: "Who is the Pamoja Conference for?",
      a: "University students, young professionals, and church leaders from across Africa and the diaspora. If you are between 18 and 35, you are especially welcome.",
    },
    {
      q: "What are the dates?",
      a: "Pamoja Conference — arrival Dec 27, 2027; departure Jan 2, 2028. Staff Conference — arrival Jan 2, 2028; departure Jan 6, 2028.",
    },
    {
      q: "How much does it cost to attend?",
      a: "Registration fees are being finalized and will be published on this site ahead of early-bird registration. Start your registration now to be notified when rates go live.",
    },
    {
      q: "Can I come as a student group or church group?",
      a: "Yes — group registration of 10 or more unlocks discounted rates, reserved seating, and a dedicated group coordinator. Select the group option when you register.",
    },
    {
      q: "Is there a visa process for Ethiopia?",
      a: "Most African passport holders can obtain an eVisa online in advance, or a visa-on-arrival at Bole International Airport. We provide an official invitation letter after registration.",
    },
  ],
};
