// src/data/weddingData.js

export const weddingData = {
  // Lord Ganesha Initials / Invocation
  invocation: {
    marathi: "॥ श्री गणेशाय नमः ॥",
    english: "With the Blessings of Lord Ganesha",
  },

  // Wedding Quotes
  quote: {
    marathi: "विवाह म्हणजे दोन जीवांचे मिलन, दोन मनांचे ऐक्य आणि दोन कुटुंबांचे अतूट बंधन...",
    english: "A marriage is the union of two souls, the harmony of two hearts, and the eternal bond of two families...",
  },

  // Bride Details
  bride: {
    name: "चि.सौ.का. पूनम",
    nameEng: "Poonam",
    initial: "P",
    photo: "/images/bride.jpeg",
    // education: "B.Tech. (Civil)",
    // profession: "जलसंधारण अधिकारी वर्ग २, महाराष्ट्र शासन",
    // professionEng: "Water Conservation Officer Class 2, Government of Maharashtra",
    family: {
      father: "श्री. सतीश तुकाराम पवार",
      mother: "सौ. संगीता सतीश पवार",
      grandparents: "कै. तुकाराम सिताराम पवार यांची नात",
      address: "रा. रहिमतपूर, ता. कोरेगाव, जि. सातारा",
      addressEng: "Rahimatpur, Tal. Koregaon, Dist. Satara",
    }
  },

  // Groom Details
  groom: {
    name: "चि. जीवन",
    nameEng: "Jeevan",
    initial: "J",
    photo: "/images/groom.jpeg?v=3",
    // education: "B.Tech. (Civil)",
    // profession: "उपअभियंता वर्ग १, म.जि.प्रा. महाराष्ट्र शासन",
    // professionEng: "Deputy Engineer Class 1, Government of Maharashtra (M.J.P.)",
    family: {
      father: "श्री. पांडुरंग भीमराव निकम-पाटील",
      mother: "सौ. वर्षा पांडुरंग निकम-पाटील",
      grandparents: "श्री. भीमराव कृष्ण निकम-पाटील यांचे नातू व सौ. उषाताई भीमराव निकम-पाटील",
      address: "रा. साखराळे, ता. वाळवा, जि. सांगली",
      addressEng: "Sakharałe, Tal. Walwa, Dist. Sangli",
    }
  },

  // Auspicious Wedding Dates
  weddingDate: {
    day: "रविवार",
    dayEng: "Sunday",
    date: "रविवार, 15 नोव्हेंबर",
    dateEng: "Sunday, November 15",
    time: "दुपारी 12:52 वाजता",
    timeEng: "12:52 PM",
    // tithi: "मिती आषाढ शु. १२, शके १९४८",
    tithiEng: "Mithi Ashadha Shuddha 12, Shake 1948",
    countdownDate: "2026-11-15T14:51:00", // ISO standard countdown
  },

  // Interactive Map / Venue Info
  venue: {
    name: "राधाकृष्ण पॅलेस हॉल",
    nameEng: "Radhakrishna Palace",
    address: "शहापूर, कोडोली- बोरपाडळे रोड, ता. पन्हाळा, जि. कोल्हापूर",
    addressEng: "Shahapur, Kodoli-Borpadale Road, Tal. Panhala, Dist. Kolhapur",
    // NOTE: Replace with the actual Google Maps Link provided by the client if needed
    googleMapsLink: "https://maps.app.goo.gl/mEf5mTAPT6hrhRDs6",
  },

  // Events (ONLY actual events from the PDF, no fake ones created)
  events: [
    {
      id: "haldi",
      title: "हळदी समारंभ",
      titleEng: "Haldi Ceremony",
      date: " शनिवार 14 नोव्हेंबर 2026",
      dateEng: "Saturday, November 14, 2026",
      // time: "सकाळी १०:०० वाजता",
      // timeEng: "10:00 AM",
      venue: "वराचे घरी, मु. पो. मोहरे, ता. पन्हाळा, जि. कोल्हापूर (Venue)",
      icon: "haldi", // Custom identifier for icon mapping
    },
    {
      id: "wedding",
      title: "शुभविवाह",
      titleEng: "Shubh Vivah (Wedding)",
      date: "रविवार, 15 नोव्हेंबर 2026 रोजी ",
      dateEng: "Sunday, November 15, 2026",
      time: "दुपारी 12:52 वाजता (शुभमुहूर्त)",
      timeEng: "02:51 PM (Auspicious Muhurta)",
      venue: "विवाहस्थळी (Venue)",
      icon: "wedding",
    }
  ],

  // Invitation Message
  invitationText: {
    salutation: "सप्रेम नमस्कार वि. वि.",
    paragraphs: [
      "आमचे येथे श्री कृपेकरून विवाहाच्या नाजूक बंधनांनी गुंफले जाणार असून, नव्या आनंदमय जीवनास, सप्तपदीच्या प्रदक्षिणा, हळदी कुंकवाचे मनोहारी लेणं, नाजूक अक्षतांचा सुखद वर्षाव आणि मंगळसूत्राचे पावित्र्य घेऊन संपन्न होणाऱ्या विवाह सोहळ्यास अपेक्षा आहे, आपल्या आगमनाची आणि शुभाशीर्वादाची.",
    ],
  },

  // Family Directory (Traditional Senders and Welcomers)

  // Sound and Video settings (relative public paths)
  assets: {
    backgroundMusic: "/music/background.mp3",
    ganeshVideo: "/videos/ganesh.mp4",
    preweddingVideo: "/videos/prewedding.mp4",
    ganeshPhoto: "/images/ganesh.png",
    paperTexture: "/images/paper-texture.png",
    // Premium photo placeholders (can be replaced by real JPG images directly in public/images/gallery/)
    gallery: [
      "/images/gallery/1.jpeg",
      "/images/gallery/2.jpeg",
      "/images/gallery/3.jpeg",
      "/images/gallery/4.jpeg",
      "/images/gallery/5.jpeg"
    ]
  },

  // Sanskrit / Hindu traditional mantras
  mantras: [
    {
      sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
      translation: "O Lord Ganesha, of curved trunk and massive body, whose brilliance is equal to a million suns. May you always make all my endeavors free from obstacles."
    },
    {
      sanskrit: "मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः।\nमङ्गलम् पुण्डरीकाक्षः मङ्गलाय तनो हरिः॥",
      translation: "Auspiciousness to Lord Vishnu, auspiciousness to One who has Garuda as His flag. Auspiciousness to the lotus-eyed Lord, Hari who spreads auspiciousness everywhere."
    }
  ],

  // RSVP details
  rsvp: {
    message: "Congratulations. We are delighted to attend your wedding.",
    whatsappNumber: "8421301027" // Senders phone number
  },

  // Final emotional closer
  finalBlessing: {
    marathi: "आपल्या शुभ आशीर्वादाची अपेक्षा",
    english: "Looking forward to celebrating this beautiful beginning with you and your family.",
    withLove: "With Love",
    families: "Nikam Patil Family & Pawar Family"
  }
};
