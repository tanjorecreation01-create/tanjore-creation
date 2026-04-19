export interface Painting {
  id: number;
  slug: string;
  title: string;
  category: string;
  img: string;
  desc: string;
  narrative: string;
}

export const paintings: Painting[] = [
  // DEITIES
  { 
    id: 1, 
    slug: "lord-ganesha-threshold-guardian",
    title: "Lord Ganesha: The Threshold Guardian", 
    category: "Deities", 
    img: "/images/tanjore_ganesha.png", 
    desc: "24K Gold Foil | Teak Wood",
    narrative: "This masterpiece depicts Ganesha under a majestic temple arch. The thick gesso work on the arch uses a special 'Mukk' paste, layered with pure 24K gold leaves."
  },
  { 
    id: 2, 
    slug: "radha-krishna-eternal-union",
    title: "Radha Krishna: Eternal Union", 
    category: "Deities", 
    img: "/images/tanjore_radhakrishna.png", 
    desc: "Traditional Pigments",
    narrative: "A tender portrayal of Radha and Krishna. Notice the classical rounded faces and almond eyes characteristic of the Maratha influence."
  },
  { 
    id: 3, 
    slug: "goddess-lakshmi-eternal-prosperity",
    title: "Goddess Lakshmi: Eternal Prosperity", 
    category: "Deities", 
    img: "/images/tanjore_lakshmi.png", 
    desc: "Embossed Foil Details",
    narrative: "Lakshmi with four arms, holding lotuses. The golden 'Kaasu Malai' is meticulously embossed and gilded."
  },
  { 
    id: 4, 
    slug: "lord-venkateswara-seven-hills",
    title: "Lord Venkateswara: The Seven Hills", 
    category: "Deities", 
    img: "/images/tanjore_balaji.png", 
    desc: "Majestic Ornaments",
    narrative: "A grand depiction of Lord Balaji encrusted with Jaipur stones, creating a royal luminescence."
  },
  { 
    id: 5, 
    slug: "saraswati-wisdom-flow",
    title: "Saraswati: The Wisdom Flow", 
    category: "Deities", 
    img: "/images/tanjore_saraswati.png", 
    desc: "Divine Wisdom",
    narrative: "The Goddess of learning shown with her Veena. White sari achieved through traditional chalk-based pigments."
  },
  { 
    id: 6, 
    slug: "meditative-lord-shiva",
    title: "Meditative Lord Shiva", 
    category: "Deities", 
    img: "/images/tanjore_shiva.png", 
    desc: "Powerful Presence",
    narrative: "Rare meditative pose. The 'Prabhavali' halo features intricate floral motifs and the mythical Yali."
  },
  { 
    id: 13, 
    slug: "lord-hanuman-devotional-strength",
    title: "Lord Hanuman: Devotional Strength", 
    category: "Deities", 
    img: "/images/tanjore_hanuman_placeholder_1774508979073.png", 
    desc: "Spiritual Power",
    narrative: "A powerful depiction of Hanuman. The muscles and jewelry are raised with mukk paste for tactile depth."
  },
  { 
    id: 14, 
    slug: "goddess-durga-protector",
    title: "Goddess Durga: The Protector", 
    category: "Deities", 
    img: "/images/tanjore_durga_placeholder_1774508998725.png", 
    desc: "Divine Power",
    narrative: "Durga in her benevolent form. The lion mascot is detailed with fine brushwork and gold trimmings."
  },
  { 
    id: 21, 
    slug: "sita-rama-kalyanam-sacred-union",
    title: "Sita Rama Kalyanam: Sacred Union", 
    category: "Deities", 
    img: "/images/tanjore_sita_rama_kalyanam_placeholder_1774510531892.png", 
    desc: "Divine Marriage",
    narrative: "A grand narrative of the celestial wedding. Features over 50 individual gold-foiled architectural elements."
  },
  { 
    id: 22, 
    slug: "lord-krishna-divine-flutist",
    title: "Lord Krishna: The Divine Flutist", 
    category: "Deities", 
    img: "/images/tanjore_small_krishna_mini_17112024.png", 
    desc: "Bhakti Tradition",
    narrative: "A miniature masterpiece focusing on the expressive eyes and posture of young Krishna."
  },
  { 
    id: 23, 
    slug: "sacred-om",
    title: "The Sacred Om", 
    category: "Deities", 
    img: "/images/tanjore_om_mini_17112024.png", 
    desc: "Cosmic Sound",
    narrative: "The universal seed syllable 'Om', rendered in thick 24K gold relief work with Jaipur stone embellishments."
  },

  // HERITAGE
  { 
    id: 9, 
    slug: "ceremonial-elephant-jewelry",
    title: "Ceremonial Elephant", 
    category: "Heritage", 
    img: "/images/tanjore_elephant_placeholder_1774508897229.png", 
    desc: "Majestic Jewelry",
    narrative: "Inspired by temple festivals. Features 'Netri Pattam' gear encrusted with emerald and ruby stones."
  },
  { 
    id: 10, 
    slug: "masters-touch-artisan-workspace",
    title: "The Master's Touch", 
    category: "Heritage", 
    img: "/images/tanjore_worker.png", 
    desc: "Artisan Workspace",
    narrative: "Inside the studio of a 5th-generation master. Every stroke is guided by centuries of tradition."
  },
  { 
    id: 24, 
    slug: "royal-court-scene-maratha",
    title: "The Royal Court Scene", 
    category: "Heritage", 
    img: "/images/tanjore_court_scene_placeholder_1774508924435.png", 
    desc: "Maratha Splendor",
    narrative: "A detailed depiction of a royal audience, showcasing the influence of the Maratha kings on Tanjore art."
  },
  { 
    id: 25, 
    slug: "festival-utsavam-temple-procession",
    title: "Festival Utsavam", 
    category: "Heritage", 
    img: "/images/tanjore_festival_utsavam_placeholder_1774510512133.png", 
    desc: "Temple Procession",
    narrative: "Captures the vibrant energy of a temple festival with palatial scale relief work on the deity's chariot."
  },
  { 
    id: 26, 
    slug: "palace-celebrations-heritage",
    title: "Palace Celebrations", 
    category: "Heritage", 
    img: "/images/tanjore_palace_celebration_placeholder_1774510473506.png", 
    desc: "Kingdom Legacy",
    narrative: "A multifaceted composition highlighting traditional music and dance within the palace grounds."
  },

  // NATURE & THEMES
  { 
    id: 19, 
    slug: "hamsa-celestial-swan",
    title: "Hamsa: The Celestial Swan", 
    category: "Nature", 
    img: "/images/tanjore_swan_hamsa_17112024.png", 
    desc: "Sacred Avian",
    narrative: "The celestial swan portrayed with pure gold filigree. A symbol of discernment and spiritual clarity."
  },
  { 
    id: 20, 
    slug: "kalpavriksha-wish-fulfilling-tree",
    title: "Kalpavriksha: The Wish-Fulfilling Tree", 
    category: "Nature", 
    img: "/images/tanjore_tree_of_life_17112024.png", 
    desc: "Divine Flora",
    narrative: "Every leaf on this wish-fulfilling tree is individually embossed and gilded with 24K goldfoil."
  },
  { 
    id: 27, 
    slug: "royal-peacock-motif",
    title: "The Royal Peacock", 
    category: "Nature", 
    img: "/images/tanjore_peacock_placeholder_1774505147374.png", 
    desc: "Traditional Motif",
    narrative: "The vibrant plumage of the peacock is brought to life using natural dyes and painstaking gold foil inlay."
  },
  { 
    id: 28, 
    slug: "golden-parrot-symbol",
    title: "The Golden Parrot", 
    category: "Nature", 
    img: "/images/tanjore_parrot_decorative_placeholder_1774508960598.png", 
    desc: "Auspicious Symbol",
    narrative: "Commonly seen perched on the shoulders of goddesses, the parrot symbolizes love and divine protection."
  },
  { 
    id: 29, 
    slug: "vishnu-dashavatara-ten-avatars",
    title: "Vishnu Dashavatara: Ten Avatars", 
    category: "Deities", 
    img: "/images/tanjore_vishnu_dashavatara.png", 
    desc: "Cosmic Lineage",
    narrative: "A grand circular composition depicting the ten incarnations of Lord Vishnu. Each avatar is rendered with high-relief gold work and symbolic weapons."
  },
  { 
    id: 30, 
    slug: "sacred-temple-gopuram-architecture",
    title: "The Sacred Temple Gopuram", 
    category: "Heritage", 
    img: "/images/tanjore_temple_gopuram.png", 
    desc: "Divine Architecture",
    narrative: "An architectural marvel in gold. This painting captures the intricate tiers of a South Indian Temple Gopuram, gilded with pure 24K gold foil."
  },
  { 
    id: 31, 
    slug: "sacred-lotus-pond",
    title: "The Sacred Lotus Pond", 
    category: "Nature", 
    img: "/images/tanjore_lotus_pond.png", 
    desc: "Floral Serenity",
    narrative: "A serene depiction of blooming lotuses in a temple pond. The floating leaves and shimmering water are brought to life through embossed gold filigree."
  },
  { 
    id: 32, 
    slug: "paradise-flycatchers-avian",
    title: "Paradise Flycatchers", 
    category: "Nature", 
    img: "/images/tanjore_paradise_birds.png", 
    desc: "Avian Elegance",
    narrative: "A pair of elusive Paradise Flycatchers with flowing gold-tipped tails. A masterpiece of natural detail and traditional craftsmanship."
  }
];
