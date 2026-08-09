const siteData = {

  // ── META ──────────────────────────────────────────────────
  meta: {
    pageTitle: "Gayan Prageeth",
    ogDescription: "Gayan Prageeth — Artist Portfolio"
  },

  // ── MASTHEAD ─────────────────────────────────────────────
  masthead: {
    backgroundImage: "assets/images/001.jpg.jpeg",
    artistName: "Gayan Prageeth",
    subtitle: "Portfolio"
  },

  // ── SECTIONS (rendered top-to-bottom in this order) ───────
  sections: [

    // ── Portrait ~0.80 ──
    {
      id: "row-portrait-1",
      type: "image-grid",
      columns: 3,
      aspectRatio: "4 / 5",
      images: [
        { src: "assets/images/007.jpg.jpeg", alt: "", title: "Desire", details: "2013 | Acrylic on canvas | 91.5 x 122.5 cm" },
        { src: "assets/images/001.jpg.jpeg", alt: "", title: "Mood", details: "2013 | Acrylic on canvas | 85.5 x 100 cm" },
        { src: "assets/images/008.jpg.jpeg", alt: "", title: "Lords of the Land", details: "2013 | Acrylic on canvas | 102 x 120 cm" }
      ]
    },

    // ── Portrait ~0.85 ──
    {
      id: "row-portrait-2",
      type: "image-grid",
      columns: 3,
      aspectRatio: "5 / 6",
      images: [
        { src: "assets/images/002.jpg.jpeg", alt: "", title: "The Primrose Path II", details: "2013 | Digital print and acrylic on canvas | 125.5 x 150 cm" },
        { src: "assets/images/0011.jpg.jpeg", alt: "", title: "Stay on the Sky", details: "2012 | Charcoal on board | 48 x 68 cm" },
        { src: "assets/images/0012.jpg.jpeg", alt: "", title: "Stay on the Sky", details: "2012 | Charcoal on board | 48 x 68 cm" }
      ]
    },

    // ── Square ~1.03 ──
    {
      id: "row-square",
      type: "image-grid",
      columns: 2,
      aspectRatio: "1 / 1",
      images: [
        { src: "assets/images/003.jpg.jpeg", alt: "", title: "Desire", details: "2013 | Acrylic on canvas | 91.5 x 91.5 cm" },
        { src: "assets/images/006.jpg.jpeg", alt: "", title: "Desire", details: "2013 | Acrylic on canvas | 91.5 x 91.5 cm" }
      ]
    },

    // ── Ultra-wide ──
    {
      id: "row-wide",
      type: "image-grid",
      columns: 1,
      aspectRatio: "2 / 1",
      images: [
        { src: "assets/images/005.jpg.jpeg", alt: "", title: "Unexpired Black Clouds", details: "2013 | Mixed media on canvas | 80.5 x 150 cm" }
      ]
    },

    // ── Pleasure of Life ──
    {
      id: "row-pleasure-of-life",
      type: "image-grid",
      columns: 1,
      aspectRatio: "8 / 5",
      images: [
        { src: "assets/images/A-46.jpg.jpeg", alt: "", title: "Pleasure of Life", details: "2012 | Acrylic on canvas | 30 x 24 inch x 3" }
      ]
    },

    // ── Landscape ~1.25 ──
    {
      id: "row-landscape-1",
      type: "image-grid",
      columns: 3,
      aspectRatio: "5 / 4",
      images: [
        { src: "assets/images/A-28.jpg.jpeg", alt: "" },
        { src: "assets/images/A-30.jpg.jpeg", alt: "" },
        { src: "assets/images/A-33.jpg.jpeg", alt: "" }
      ]
    },

    // ── Wide landscape ──
    {
      id: "row-landscape-wide",
      type: "image-grid",
      columns: 1,
      aspectRatio: "8 / 5",
      images: [
        { src: "assets/images/A-35.jpg.jpeg", alt: "", title: "Paradox", details: "2010 | Mixed media on paper | 68 x 40 inches" }
      ]
    },

    // ── Landscape ~1.32-1.37 ──
    {
      id: "row-landscape-2",
      type: "image-grid",
      columns: 3,
      aspectRatio: "4 / 3",
      images: [
        { src: "assets/images/A-7.jpg.jpeg", alt: "", title: "Des-o-late Landscape", details: "2011 | Acrylic on canvas | 100 x 100 cm" },
        { src: "assets/images/A-6.jpg.jpeg", alt: "", title: "Everything Is Not Lost", details: "2011 | Acrylic on canvas | 100 x 100 cm" },
        { src: "assets/images/A-2.jpg.jpeg", alt: "", title: "Change of Tension", details: "2010 | Charcoal & acrylic on paper | 30 x 30 cm" }
      ]
    },

    // ── Landscape ~1.34-1.40 ──
    {
      id: "row-landscape-3",
      type: "image-grid",
      columns: 3,
      aspectRatio: "4 / 3",
      images: [
        { src: "assets/images/A-21.jpg.jpeg", alt: "", title: "Change of Tension", details: "2011 | Acrylic on canvas | 12 x 12 inch" },
        { src: "assets/images/A-1 copy.jpg.jpeg", alt: "", title: "Paradox", details: "2010 | Mixed media on paper | 12 x 12 inch" },
        { src: "assets/images/A-17.jpg.jpeg", alt: "", title: "Change of Tension - II", details: "2010 | Acrylic on canvas | 30 x 30 cm" }
      ]
    },

    // ── Extravagance – Portrait paintings (3000x4200) ──
    {
      id: "row-extravagance-1",
      type: "image-grid",
      heading: "Extravagance",
      columns: 3,
      aspectRatio: "5 / 7",
      images: [
        { src: "assets/images/painting 02 copy.jpg.jpeg", alt: "" },
        { src: "assets/images/painting 05 copy.jpg.jpeg", alt: "" },
        { src: "assets/images/painting 06 copy.jpg.jpeg", alt: "" }
      ]
    },

    {
      id: "row-extravagance-2",
      type: "image-grid",
      columns: 3,
      aspectRatio: "5 / 7",
      images: [
        { src: "assets/images/painting 07 copy.jpg.jpeg", alt: "" },
        { src: "assets/images/painting 11.jpg.jpeg", alt: "" },
        { src: "assets/images/painting 12.jpg.jpeg", alt: "" }
      ]
    },

    // ── Extravagance – Landscape painting (6000x4200) ──
    {
      id: "row-extravagance-3",
      type: "image-grid",
      columns: 1,
      aspectRatio: "10 / 7",
      images: [
        { src: "assets/images/painting 10 copy.jpg.jpeg", alt: "" }
      ]
    }

  ],

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    creditText: null
  }
};
