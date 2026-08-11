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

    // ── Artist Bio ──
    {
      id: "artist-bio",
      type: "text",
      heading: "Gayan Prageeth",
      paragraphs: [
        "Born in Ingiriya, Sri Lanka, Gayan Prageeth is a contemporary visual artist whose practice deeply interrogates social, historical, and political landscapes. He earned his Bachelor of Fine Arts with First Class Honors in Painting from the University of the Visual and Performing Arts in Colombo in 2009. Over the course of two decades, Prageeth has developed a distinct visual language that translates complex regional narratives into compelling conceptual art, positioning him as a prominent figure within Sri Lanka's contemporary art movement.",
        "Prageeth's solo career reflects a rigorous, continuous engagement with socio-political themes and human perception. Through landmark solo exhibitions at premier spaces—such as Saskia Fernando Gallery (Elysium, Eyes only, Apperceiving 1983, Since 1983, Extravagance) and Paradise Road Galleries (Paradox)—his work critically examines historical turning points, spectacle, and cultural excess. Most recently, his 2026 solo showcase, Life is a circus at Cinnamon Life, highlights his evolving exploration of performance, absurdism, and collective memory.",
        "Beyond Sri Lanka, Prageeth's work has resonated across the global stage, earning inclusion in major international fairs, biennials, and gallery exhibitions. His art has been featured at prominent international events including Art Dubai, the India Art Fair, and exhibitions across New York (Aicon Contemporary), Los Angeles (Baik Art Gallery), Beijing, Singapore, Bali, and the Maldives. Rooted in formal excellence and fueled by sharp inquiry, his portfolio continues to bridge local histories with universal human questions."
      ]
    },

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
      aspectRatio: "8 / 3",
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
        { src: "assets/images/painting 02 copy.jpg.jpeg", alt: "", title: "What are trying to close?, 2015", details: "Acrylic on canvas\n101.5 X 152.5 cm" },
        { src: "assets/images/painting 05 copy.jpg.jpeg", alt: "", title: "Diya-wanna?, 2015", details: "Acrylic on canvas\n122 X 145 cm" },
        { src: "assets/images/painting 06 copy.jpg.jpeg", alt: "", title: "Primrose path II, 2015", details: "Acrylic on canvas\n125.5 X 145.5 cm" }
      ]
    },

    {
      id: "row-extravagance-2",
      type: "image-grid",
      columns: 3,
      aspectRatio: "5 / 7",
      images: [
        { src: "assets/images/painting 07 copy.jpg.jpeg", alt: "", title: "Passion, 2015", details: "Acrylic on canvas\n122 X 145 cm" },
        { src: "assets/images/painting 11.jpg.jpeg", alt: "", title: "Love and passion, 2015", details: "Acrylic on canvas\n122 X 140 cm" },
        { src: "assets/images/painting 12.jpg.jpeg", alt: "", title: "Reflections of passion, 2015", details: "Acrylic on canvas\n122 X 140 cm" }
      ]
    },

    // ── Extravagance – Landscape painting (6000x4200) ──
    {
      id: "row-extravagance-3",
      type: "image-grid",
      columns: 1,
      aspectRatio: "10 / 7",
      images: [
        { src: "assets/images/painting 10 copy.jpg.jpeg", alt: "", title: "Floting rock, 2015", details: "Acrylic on canvas\n244 X 122cm" }
      ]
    },

    // ── Since 1983 – Title ──
    {
      id: "since1983-heading",
      type: "text",
      heading: "Since 1983"
    },

    // ── Since 1983 – Description ──
    {
      id: "since1983-text",
      type: "text",
      paragraphs: [
        "The artist reflects on the ethnic conflict that reached a boiling point on the 23rd of July 1983, commonly known as Black July. The bucket is a recurring motif in this body of work. During these riots, Tamils were tested and identified by their pronunciation. They were often shown a bucket and asked to name it. Tamils finding it difficult to pronounce Baldiya (word for bucket in Sinhala) pronounced it as Waldiya. This mispronunciation would confirm the suspicions of the interrogators and the person in question would be attacked."
      ]
    },

    // ── Since 1983 – Triangle pattern canvases (1600x2070) ──
    {
      id: "row-since1983-1",
      type: "image-grid",
      columns: 2,
      aspectRatio: "4 / 5",
      images: [
        { src: "assets/images/1.jpg.jpeg", alt: "", title: "Since 1983, 2016", details: "Mixed media on canvas\n140 X 117 cm" },
        { src: "assets/images/2.jpg.jpeg", alt: "", title: "Since 1983, 2016", details: "Mixed media on canvas\n92 X 92 cm" }
      ]
    },

    // ── Since 1983 – Bucket sculptures ──
    {
      id: "row-since1983-2",
      type: "image-grid",
      columns: 3,
      aspectRatio: "4 / 5",
      images: [
        { src: "assets/images/10.jpg.jpeg", alt: "", title: "Since 1983, 2016", details: "Mixed media on steel bucket\n43X33X28 cm" },
        { src: "assets/images/12.jpg.jpeg", alt: "", title: "Since 1983, 2016", details: "Mixed media on steel bucket\n40X32X25 cm" },
        { src: "assets/images/13.jpg.jpeg", alt: "", title: "Since 1983, 2016", details: "Mixed media on steel bucket\n38X30X23 cm" }
      ]
    },

    // ── Since 1983 – Bucket painting ──
    {
      id: "row-since1983-3",
      type: "image-grid",
      columns: 1,
      aspectRatio: "4 / 5",
      images: [
        { src: "assets/images/15.jpg.jpeg", alt: "", width: "45%", title: "Since 1983, 2016", details: "Mixed media on linen canvas\n122X90 cm" }
      ]
    },

    // ── Since 1983 – Landscape canvas ──
    {
      id: "row-since1983-4",
      type: "image-grid",
      columns: 1,
      aspectRatio: "4 / 5",
      images: [
        { src: "assets/images/16.jpg.jpeg", alt: "", title: "Since 1983, 2016", details: "Mixed media on canvas\n150X244cm" }
      ]
    },

    // ── Apperceiving 1983 – Title ──
    {
      id: "apperceiving-heading",
      type: "text",
      heading: "Apperceiving 1983"
    },

    // ── Apperceiving 1983 – Images ──
    {
      id: "row-apperceiving-1",
      type: "image-grid",
      columns: 2,
      images: [
        { src: "assets/images/Apperceiving1.jpg", alt: "", title: "Apperceiving 1983 III, 2017", details: "Japanese Ink on Rice Paper on Canvas\n91.5cm x 77cm" },
        { src: "assets/images/Apperceiving2.jpg", alt: "", title: "Apperceiving 1983 IV, 2017", details: "Japanese Ink on Rice Paper on Canvas\n91 x 77 cm" }
      ]
    },
    {
      id: "row-apperceiving-2",
      type: "image-grid",
      columns: 2,
      images: [
        { src: "assets/images/Apperceiving3.jpg", alt: "", title: "Apperceiving 1983 V, 2017", details: "Japanese Ink on Rice Paper on Canvas\n91.5cm x 77cm" },
        { src: "assets/images/Apperceiving4.jpg", alt: "", title: "Apperceiving 1983 VII, 2017", details: "Japanese Ink on Rice Paper on Canvas\n122cm x 91cm" }
      ]
    },

    // ── Eyes Only – Title ──
    {
      id: "eyesonly-heading",
      type: "text",
      heading: "Eyes Only"
    },

    // ── Eyes Only – Portrait row 1 ──
    {
      id: "row-eyesonly-1",
      type: "image-grid",
      columns: 3,
      images: [
        { src: "assets/images/EyesOnly1- A DRIED LOTUS SEED POD WITHOT FERTILITY,2020,Acrylic and japaneese ink on rice paper on canvas,100x75 cm.jpg.jpeg", alt: "", title: "A Dried Lotus Seed Pod Withot Fertility, 2020", details: "Acrylic and japaneese ink on rice paper on canvas\n100 x 75 cm" },
        { src: "assets/images/EyesOnly3-EMPTY HOLES ONLY,2021,Acrylic on canvas,170x122cm.jpg.jpeg", alt: "", title: "Empty Holes Only, 2021", details: "Acrylic on canvas\n170 x 122 cm" },
        { src: "assets/images/EyesOnly5-JUST FOR MEMORY ,2020,Acrylic and japaneese ink on rice paper on canvas,91x76 cm.jpg.jpeg", alt: "", title: "Just For Memory, 2020", details: "Acrylic and japaneese ink on rice paper on canvas\n91 x 76 cm" }
      ]
    },

    // ── Eyes Only – Landscape 1 ──
    {
      id: "row-eyesonly-2",
      type: "image-grid",
      columns: 1,
      images: [
        { src: "assets/images/EyesOnly2 - EMPTY HOLES ARE FILLED WITH SEEDS,2021,Acrylic on canvas,110x170cm.jpg.jpeg", alt: "", title: "Empty Holes Are Filled With Seeds, 2021", details: "Acrylic on canvas\n110 x 170 cm" }
      ]
    },

    // ── Eyes Only – Landscape 2 ──
    {
      id: "row-eyesonly-3",
      type: "image-grid",
      columns: 1,
      images: [
        { src: "assets/images/EyesOnly4-FIFTH DREAM,2021,Acrylic on canvas,120x140cm.jpg.jpeg", alt: "", title: "Fifth Dream, 2021", details: "Acrylic on canvas\n120 x 140 cm" }
      ]
    },

    // ── Eyes Only – Portrait row 2 ──
    {
      id: "row-eyesonly-4",
      type: "image-grid",
      columns: 3,
      images: [
        { src: "assets/images/EyesOnly6-LOOKING FOR LIONS,2020,Acrylic and japaneese ink on rice paper on canvas,110x85cm.jpg.jpeg", alt: "", title: "Looking For Lions, 2020", details: "Acrylic and japaneese ink on rice paper on canvas\n110 x 85 cm" },
        { src: "assets/images/EyesOnly7-NOT YOU I WILL ALWAYS II,2021 ,140x110cm,Acrylic on canvas.jpg.jpeg", alt: "", title: "Not You I Will Always II, 2021", details: "Acrylic on canvas\n140 x 110 cm" },
        { src: "assets/images/EyesOnly8-THE LOTUS CULTIVATION OF THE GREAT OTHER,2020,Acrylic and japaneese ink on rice paper on canas,110x85cm.jpg.jpeg", alt: "", title: "The Lotus Cultivation Of The Great Other, 2020", details: "Acrylic and japaneese ink on rice paper on canas\n110 x 85 cm" }
      ]
    },

    // ── Elsiyum – Title ──
    {
      id: "elsiyum-heading",
      type: "text",
      heading: "Elsiyum"
    },

    // ── Elsiyum – Portrait row 1 ──
    {
      id: "row-elsiyum-1",
      type: "image-grid",
      columns: 2,
      images: [
        { src: "assets/images/Elsiyum1.webp", alt: "", title: "Inedible II, 2023", details: "Acrylic on Canvas\n81 x 61 cm" },
        { src: "assets/images/Elsiyum2.webp", alt: "", title: "Inedible III, 2023", details: "Acrylic on Canvas\n81 x 61 cm" }
      ]
    },

    // ── Elsiyum – Portrait row 2 ──
    {
      id: "row-elsiyum-2",
      type: "image-grid",
      columns: 2,
      images: [
        { src: "assets/images/Elsiyum3.webp", alt: "", title: "Hope I, 2023", details: "Acrylic on Canvas\n171 x 115 cm" },
        { src: "assets/images/Elsiyum4.webp", alt: "", title: "Hope II, 2023", details: "Acrylic on Canvas\n171 x 115 cm" }
      ]
    },

    // ── Elsiyum – Landscape 1 ──
    {
      id: "row-elsiyum-3",
      type: "image-grid",
      columns: 1,
      images: [
        { src: "assets/images/Elsiyum5.webp", alt: "", title: "Invitation to Hanuman I, 2023", details: "Acrylic on Canvas\n92 x 122 cm" }
      ]
    },

    // ── Elsiyum – Landscape 2 ──
    {
      id: "row-elsiyum-4",
      type: "image-grid",
      columns: 1,
      images: [
        { src: "assets/images/Elsiyum6.webp", alt: "", title: "Invitation to Hanuman II, 2023", details: "Acrylic on Canvas\n92 x 122 cm" }
      ]
    },

    // ── Life is a Circus – Title ──
    {
      id: "life-is-a-circus-heading",
      type: "text",
      heading: "Life is a Circus"
    },

    // ── Life is a Circus – Square row 1 ──
    {
      id: "row-circus-1",
      type: "image-grid",
      columns: 3,
      images: [
        { src: "assets/images/LifeIsACircus1.jpeg", alt: "" },
        { src: "assets/images/LifeIsACircus2.jpeg", alt: "" },
        { src: "assets/images/LifeIsACircus3.jpeg", alt: "" }
      ]
    },

    // ── Life is a Circus – Square row 2 ──
    {
      id: "row-circus-2",
      type: "image-grid",
      columns: 3,
      images: [
        { src: "assets/images/LifeIsACircus5.jpeg", alt: "" },
        { src: "assets/images/LifeIsACircus6.jpeg", alt: "" },
        { src: "assets/images/LifeIsACircus7.jpeg", alt: "" }
      ]
    },

    // ── Life is a Circus – Portrait row ──
    {
      id: "row-circus-3",
      type: "image-grid",
      columns: 3,
      images: [
        { src: "assets/images/LifeIsACircus4.jpeg", alt: "" },
        { src: "assets/images/LifeIsACircus9.jpeg", alt: "" },
        { src: "assets/images/LifeIsACircus10.jpeg", alt: "" }
      ]
    },

    // ── Life is a Circus – Square row 3 ──
    {
      id: "row-circus-4",
      type: "image-grid",
      columns: 3,
      images: [
        { src: "assets/images/LifeIsACircus8.jpeg", alt: "" }
      ]
    },

    // ── Contact ──
    {
      id: "contact",
      type: "contact",
      heading: "Contact",
      image: "assets/images/artist-image.jpeg",
      imageAlt: "Gayan Prageeth",
      details: [
        { label: "Address :", value: "2/A, Karunasena Jayalath Mawatha, Pokunuwita, Horana, Sri Lanka" },
        { label: "Born :", value: "05th November 1980 in Ingiriya" },
        { label: "E mail :", value: "gayanprageeth@yahoo.com", href: "mailto:gayanprageeth@yahoo.com" },
        { label: "Mobile :", value: "+94 77 948 3525", href: "tel:+94779483525" }
      ]
    }

  ],

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    creditText: null
  }
};
