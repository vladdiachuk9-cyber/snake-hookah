import ua, { type Dictionary } from "./ua";

// Fully localized as of the 2026-07-18 pass — every field below is a real
// English translation, not a Ukrainian fallback.
const en: Dictionary = {
  ...ua,
  nav: {
    home: "Home",
    catalog: "Catalog",
    about: "About",
    production: "Production",
    contact: "Contact",
    soon: "coming soon",
  },
  header: {
    cart: "Cart",
    language: "Language",
    menu: "Menu",
  },
  home: {
    heroKicker: "Snake Hookah · Kyiv · since 2020",
    heroTitle: "A hookah that holds its shape, the way the hose falls in rings",
    heroLede:
      "Handmade in a Kyiv workshop: a solid wood spiral on a Ø 16 mm steel shaft and genuine leather — no veneer, no film.",
    heroCtaPrimary: "Shop Spiral",
    heroCtaSecondary: "About us",
    advantagesKicker: "What we learned behind the bar",
    advantagesTitle: "We came into this from the lounge floor, not the drafting table",
    advantagesItems: [
      {
        title: "Draw matters most",
        body: "A Ø 16 mm shaft is the diameter where the pull takes no effort and the smoke has time to cool. We tried narrower and wider. This is where we stopped.",
      },
      {
        title: "Wood isn't a veneer",
        body: "The spiral is carved from solid stock and wraps a steel core. It can't peel — there's nothing glued on to peel off.",
      },
      {
        title: "Leather should be leather",
        body: "Not embossed film pretending to be crocodile. Real leather darkens, develops patina, gets more interesting after a year.",
      },
      {
        title: "The bowl is personal",
        body: "We don't box one in. Anyone who smokes seriously already has their own — matched to their pack, their tobacco.",
      },
    ],
    categoriesKicker: "Two lines",
    categoriesTitle: "Spiral and Wild Collection",
    spiralName: "Spiral",
    spiralDesc:
      "Seven models, each its own wood. The spiral is hand-turned around a Ø 16 mm steel core. 56 cm, 1.2 kg.",
    wildName: "Wild Collection",
    wildDesc:
      "Four models, fully leather-wrapped. A compact 36 cm format with the same draw as the full-size line.",
    popularKicker: "In stock",
    popularTitle: "Popular models",
    popularCta: "Full catalog",
    aboutKicker: "About the brand",
    aboutTitle: "It all started with how the hose falls",
    aboutBody:
      "The snake isn't about aggression. It's about how a leather hose slides off the shaft and settles into rings on the table. We saw it happen by accident in the workshop — and the name stuck before we could think of anything else.",
    aboutCta: "Read the brand story",
    stats: [
      { value: "2020", label: "founded" },
      { value: "10", label: "people in the workshop" },
      { value: "~1000", label: "hookahs made" },
      { value: "4", label: "export countries" },
    ],
    productionKicker: "Production",
    productionTitle: "Ten people in Kyiv",
    productionBody:
      "Carpenters, leatherworkers, assemblers. Spiral — up to 100 units a month, that's our real ceiling. Wild — much slower: hand-stitching doesn't scale.",
    productionSpiralNote: "Up to 100 units a month — our real ceiling, and we don't force it higher artificially.",
    productionWildNote:
      "Hand-stitching doesn't scale: you can't take twice the people and get twice the hookahs.",
    materialsKicker: "Materials",
    materialsTitle: "Solid wood. Real leather. Stainless steel",
    materialsBody:
      "The spiral is carved from solid stock and wraps a steel core — there's nothing to glue, nothing to peel. Leather darkens and develops patina instead of flaking like embossed film.",
    galleryKicker: "Gallery",
    galleryTitle: "From the workshop and the table",
    reviewsKicker: "Reviews",
    reviewsTitle: "Smoked in Dubai, Poland, Kazakhstan, and Germany",
    reviewsBody: "The strangest feeling is getting a photo of your own shaft on a table in a city you've never been to.",
    countries: ["Ukraine", "Dubai", "Poland", "Kazakhstan", "Germany"],
    instagramKicker: "Instagram",
    instagramTitle: "@snake.hookah",
    ctaTitle: "Pick your Snake",
    ctaBody: "Eleven models across two lines. Each with its own wood or leather texture.",
    ctaButton: "Browse the catalog",
  },
  product: {
    addToCart: "Add to cart",
    addedToCart: "Added to cart",
    requestWholesale: "Request wholesale price",
    description: "Description",
    complectation: "What's included",
    materials: "Materials",
    specifications: "Specifications",
    faq: "FAQ",
    related: "Related models",
    inStock: "In stock",
    soldOut: "Sold out",
    soon: "Photo coming soon",
    viewProduct: "View",
    bowlNote: "The bowl is not included — pick the one that fits how you pack.",
    quantity: "Quantity",
    total: "Total",
    line: "Line",
    wood: "Wood",
    finish: "Finish",
    height: "Height",
    shaft: "Shaft",
    hose: "Hose",
    weight: "Weight",
    countryOfOrigin: "Made in",
    warranty: "Warranty",
    warrantyValue: "Covers you until first use, as long as there's no mechanical factory defect",
    sku: "SKU",
    compare: "Compare",
    unitCm: "cm",
    unitKg: "kg",
    faqItems: [
      {
        q: "Is the bowl included?",
        a: "No. The bowl is a personal choice based on your packing style and tobacco — we deliberately don't force one on you.",
      },
      {
        q: "How does the warranty work?",
        a: "Until first use, as long as there's no mechanical factory defect. We stand behind the cut, the seam, and the fit — the parts we made.",
      },
      {
        q: "Is the wood really solid, not a veneer?",
        a: "Yes. The spiral is carved from solid stock and wraps a steel core — there's nothing to glue it to, unlike a glued-on decorative wrap.",
      },
      {
        q: "How do I pay for an order?",
        a: "We haven't set up online payment yet. Leave a request and we'll reach out to arrange payment and delivery personally.",
      },
    ],
  },
  catalog: {
    title: "Catalog",
    metaTitle: "Hookah catalog",
    compareMetaTitle: "Compare models",
    kicker: "11 models · 2 lines",
    lede: "Spiral — a solid wood spiral on a steel shaft. Wild Collection — a compact, fully leather-wrapped format.",
    searchPlaceholder: "Search by name or wood…",
    allLines: "All lines",
    sortLabel: "Sort",
    sortDefault: "Featured",
    sortPriceAsc: "Price: low to high",
    sortPriceDesc: "Price: high to low",
    sortName: "Name",
    noResults: "Nothing found. Try a different search or reset the filter.",
    reset: "Reset",
    resultsCount: "models",
    wishlistTitle: "Wishlist",
    wishlistEmpty: "Your wishlist is empty.",
    compareBarTitle: "Compare",
    compareBarCta: "Compare",
    compareEmpty: "Pick up to 4 models to compare specs side by side.",
    compareClear: "Clear",
  },
  cart: {
    title: "Cart",
    empty: "Your cart is empty",
    emptyCta: "Browse Spiral",
    subtotal: "Subtotal",
    checkout: "Checkout",
    remove: "Remove",
    continue: "Continue shopping",
    close: "Close",
  },
  order: {
    title: "Order request",
    intro:
      "Online payment isn't set up yet — leave your contact details and we'll reach out to arrange payment and delivery.",
    name: "Name",
    phone: "Phone",
    email: "Email",
    comment: "Comment",
    submit: "Send request",
    submitting: "Sending…",
    success: "Request sent. We'll be in touch shortly.",
    error: "Couldn't send the request. Please try again or message us on Telegram.",
    wholesaleTitle: "Wholesale price request",
    wholesaleIntro: "Tell us how many units and which models you're after — we'll send terms.",
    company: "Company (optional)",
  },
  b2b: {
    kicker: "Wholesale & business",
    title: "Become a Snake Hookah dealer",
    lede:
      "We deliberately don't scale production — Spiral tops out at 100 units a month, Wild is even slower. But we're glad to work with lounges, shops, and distributors who value handmade craft.",
    perksTitle: "Terms of cooperation",
    perks: [
      { title: "Wholesale pricing", body: "From a set quantity, a discount off retail. Exact terms are agreed personally based on volume." },
      { title: "Direct communication", body: "No middlemen: you talk directly with the workshop in Kyiv." },
      { title: "Flexible range", body: "Choose models and woods from the 11 available to match your venue or store format." },
      { title: "Export experience", body: "We've already shipped to the UAE, Poland, Kazakhstan, and Germany — we know how to pack and ship." },
    ],
    formTitle: "Dealer application",
    formIntro: "Tell us a bit about your business and volumes — we'll reply with terms within a few days.",
    volume: "Estimated volume",
    submit: "Send application",
    metaTitle: "For Dealers",
  },
  contact: {
    kicker: "Contact",
    title: "Get in touch",
    lede: "Questions about a model, wholesale terms, or just want to stop by the workshop — write to us.",
    formTitle: "Write to us",
    addressTitle: "Workshop",
    address: "Kyiv, Ukraine",
    hoursTitle: "We're online",
    hours: "Mon–Sat, 10:00–19:00 (Kyiv time)",
    metaTitle: "Contact",
  },
  footer: {
    rights: "All rights reserved.",
    madeIn: "Made in Ukraine · Kyiv · since 2020",
    contactsTitle: "Contact",
    navTitle: "Navigation",
    socialTitle: "Follow us",
  },
  about: {
    metaTitle: "About us",
    metaDescription:
      "Snake Hookah — a Kyiv workshop making handmade hookahs since 2020. Ten people, solid wood, genuine leather.",
    heroKicker: "Snake Hookah · Kyiv · since 2020",
    heroTitle: "It all started with how the hose falls",
    heroLede: "The snake isn't about aggression. It's about how a leather hose slides off the shaft and settles into rings on the table.",
    introP1:
      "We saw it happen by accident the first time. We set a finished hookah on the workshop table, the hose slid off and coiled on its own — soft, without kinks, ring inside ring. Someone on the team said, \"like a snake.\" The name stuck before we could think of anything else.",
    introP2:
      "It's not a marketing angle or an attempt to look fierce. It's just an honest description of what real leather does when you don't force it to behave like silicone.",
    section2Kicker: "2020. Kyiv. A hookah lounge",
    section2Title: "We came into this from the lounge floor",
    section2P1:
      "At first we just smoked. Then we worked there. Then we spent a long time watching the gear standing in front of us every evening — and saw how it actually lived. What broke first. What annoyed a guest. What lasted half a year versus five. That perspective — from behind the bar, not the drafting table — still shapes what we make.",
    section2P2:
      "2020 wasn't the best year to start. Lounges were shutting down. But that's exactly when we found the time to do what had been on our minds for a while: not buy another shaft, but build our own.",
    lessonsKicker: "What we learned behind the bar",
    lessons: [
      {
        title: "Draw matters most",
        body: "A Ø 16 mm shaft isn't a compromise or \"what everyone uses.\" It's the diameter where the pull takes no effort and the smoke has time to cool. We tried narrower and wider. This is where we stopped.",
      },
      {
        title: "Wood shouldn't be a veneer",
        body: "Most \"wooden\" hookahs on the market are metal with a glued-on decorative wrap. Our spiral is carved from solid stock and wraps a steel core. It can't peel — there's nothing glued on to peel off.",
      },
      {
        title: "Leather should be leather",
        body: "Not embossed film pretending to be crocodile. Real leather darkens, develops patina, gets more interesting after a year. Film just flakes.",
      },
      {
        title: "The bowl is personal",
        body: "We don't box one in. Anyone who smokes seriously already has their own — matched to their pack, their tobacco, their habit. Forcing someone else's clay on you is disrespectful.",
      },
    ],
    linesKicker: "Two lines",
    linesSpiralBody:
      "Seven models, each its own wood. The spiral is hand-turned — the one part of the job a machine can't do: the double weave around the steel core demands constant control of cut depth. A slip of half a millimeter and the blank is scrap.",
    linesSpiralMeta: "56 cm · 1.2 kg · genuine leather rings · up to 100 units/month",
    linesWildBody:
      "Four models, 36 cm, fully leather. We hand-stitch every Wild completely: the seam has to sit dead straight along the full length of the cylinder — and we haven't found any way to do that fast.",
    linesWildMeta: "36 cm · 1.1 kg · same draw as the full-size line",
    teamKicker: "There are ten of us",
    teamTitle: "Ten people in Kyiv",
    teamBody:
      "Carpenters, leatherworkers, assemblers. It's not a \"team of like-minded people\" from a pitch deck — it's ten people who make one thing by hand and see the result the same day. Every hookah passes through the hands of whoever signs off that it's right before it ships.",
    geoKicker: "Snake abroad",
    geoBody:
      "Our hookahs get smoked in Dubai, Poland, Kazakhstan, and Germany. We didn't do anything special to make that happen — someone saw it on Instagram, wrote in, ordered, showed friends. The strangest feeling is getting a photo of your own shaft on a table in a city you've never been to.",
    pullQuote:
      "Made in Ukraine — not a slogan on a banner. The wood is cut in Kyiv, the leather is stitched in Kyiv, everything is assembled in Kyiv. We didn't stop in 2022.",
    warrantyKicker: "Warranty",
    warrantyBody:
      "Our warranty is short and honest: until first use, as long as there's no mechanical factory defect. We don't print \"5 years\" — a hookah isn't a machine that breaks on its own. We stand behind what we made: the cut, the seam, the fit.",
  },
  production: {
    metaTitle: "Production",
    metaDescription: "How Snake Hookah is made: solid wood, hand-stitched leather, quality control on every hookah.",
    heroKicker: "Production",
    heroTitle: "Ten pairs of hands, one hookah at a time",
    heroLede:
      "Carpenters, leatherworkers, assemblers in Kyiv. We deliberately don't chase volume — the moment we put in a conveyor belt, everything we do stops making sense.",
    step1Title: "1. Cutting",
    step1Body:
      "The spiral is hand-turned from solid stock around a Ø 16 mm steel core. The double weave demands constant control of cut depth — a slip of half a millimeter and it's scrap.",
    step2Title: "2. Leather",
    step2Body:
      "The rings and, on Wild Collection, the entire body are hand-stitched in genuine leather. The seam has to sit dead straight along the full length of the cylinder — the slowest part of production.",
    step3Title: "3. Quality control",
    step3Body:
      "Every hookah passes through the hands of whoever signs off that it's right before it ships — draw, fit, seam.",
    durationKicker: "How long it takes",
    durationTitle: "Up to 100 units a month — and we don't force that ceiling higher",
    durationP1:
      "Spiral — up to 100 units a month. That's our real ceiling. Wild takes much longer: hand-stitching doesn't scale, you can't take twice the people and get twice the hookahs. You can only get twice the crooked seams.",
    durationP2Prefix: "Over the years, we've made roughly ",
    durationP2Strong: "1,000 units",
    durationP2Suffix: " in total. Not a million. We deliberately don't chase volume.",
    materialsKicker: "Materials",
    materialsTitle: "Wood, leather, steel — and nothing extra",
    woodTitle: "Wood",
    woodBody:
      "Light and white walnut, wenge, sucupira, tigerwood, purple walnut — we choose a wood not for how it photographs, but for how it behaves: density, moisture resistance, ability to hold its shape.",
    leatherTitle: "Leather",
    leatherBody: "Genuine, not embossed film. Darkens and develops patina over time instead of flaking.",
    steelTitle: "Steel",
    steelBody: "A stainless Ø 16 mm shaft — the diameter where the pull takes no effort and the smoke has time to cool.",
  },
};

export default en;
