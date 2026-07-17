import type { Locale } from "@/lib/i18n";
import type { Product } from "./products";

// Per-locale overrides for the product-copy fields that need real
// translation (wood/finish/hose text, description paragraphs, SEO tags).
// Structural fields (sku, slug, images, video, price, dimensions) never
// change across locales and stay on the base (Ukrainian) `Product` record.
interface ProductTranslation {
  wood?: string;
  finish: string;
  hose: string;
  description: string[];
  seoTitle: string;
  seoDescription: string;
}

const SPIRAL_SHARED_EN = {
  shaft: "Stainless steel, Ø 16 mm",
  connection: "Gasket fitting",
  bundle: "Shaft, tray, gaskets, hose",
  countryOfOrigin: "Ukraine",
};
const SPIRAL_SHARED_RU = {
  shaft: "Нержавеющая сталь, Ø 16 мм",
  connection: "Уплотнитель",
  bundle: "Шахта, тарелка, уплотнители, шланг",
  countryOfOrigin: "Украина",
};

const productTranslations: Record<string, { en: ProductTranslation; ru: ProductTranslation }> = {
  "SNK-SPR-WLN-GRN": {
    en: {
      wood: "Walnut (light)",
      finish: "Genuine leather, green",
      hose: "150 cm, genuine leather, green",
      description: [
        "Snake Hookah Spiral Walnut Green is a handmade hookah from the Ukrainian workshop Snake Hookah. At the heart of the model is a Ø 16 mm stainless steel shaft, hand-turned with a double wooden spiral in \"walnut (light)\". It's not a veneer: the spiral is carved from solid stock and wraps the steel core like a snake — hence the brand name.",
        "Light walnut is a woodworking classic: a warm, honey-toned texture with a distinctive grain that never repeats on the next shaft.",
        "The top and bottom rings are finished in genuine leather (green) with an embossed SNAKE logo. The leather is color-matched to green — the model looks finished, not assembled from random parts.",
        "Built-in purge valve. Hose — 150 cm, genuine leather, green. Includes: shaft, tray, gaskets, hose. The bowl is not included — pick the one that fits how you pack.",
      ],
      seoTitle: "Snake Hookah Spiral Walnut Green — buy a handmade hookah | Snake",
      seoDescription:
        "Snake Hookah Spiral Walnut Green handmade hookah: light walnut spiral, 56 cm shaft, Ø16 mm stainless steel, genuine leather. Made in Ukraine.",
    },
    ru: {
      wood: "Орех (светлый)",
      finish: "Натуральная кожа, зелёная",
      hose: "150 см, натуральная кожа, зелёная",
      description: [
        "Snake Hookah Spiral Walnut Green — кальян ручной работы украинской мастерской Snake Hookah. Сердце модели — шахта из нержавеющей стали Ø 16 мм, вокруг которой вручную выточена двойная деревянная спираль из породы «орех (светлый)». Это не накладка: спираль вырезается из цельного массива и обхватывает стальной ствол, как змея — отсюда и название бренда.",
        "Светлый орех — классика столярного дела: тёплая медовая текстура с выраженным рисунком, который не повторяется ни на одной следующей шахте.",
        "Верхнее и нижнее кольца отделаны натуральной кожей (натуральная кожа, зелёная) с тиснёным логотипом SNAKE. Кожа подобрана в зелёный тон — модель выглядит завершённой, а не собранной из случайных частей.",
        "Продувка встроена. Шланг — 150 см, натуральная кожа, зелёная. Комплект: шахта, тарелка, уплотнители, шланг. Чаша не входит в комплект — вы подбираете её под свой стиль забивки.",
      ],
      seoTitle: "Snake Hookah Spiral Walnut Green — купить кальян | Snake",
      seoDescription:
        "Кальян Snake Hookah Spiral Walnut Green ручной работы: спираль из ореха светлого, шахта 56 см, нержавейка Ø16 мм, натуральная кожа. Сделано в Украине.",
    },
  },
  "SNK-SPR-WNG": {
    en: {
      wood: "Wenge",
      finish: "Genuine ostrich-embossed leather, cognac",
      hose: "150 cm, genuine leather, black",
      description: [
        "Snake Hookah Spiral Wenge is a handmade hookah from the Ukrainian workshop Snake Hookah. At the heart of the model is a Ø 16 mm stainless steel shaft, hand-turned with a double wooden spiral in \"wenge\". It's not a veneer: the spiral is carved from solid stock and wraps the steel core like a snake — hence the brand name.",
        "Wenge is a rare African wood with a deep chocolate tone and dark streaks. One of the densest woods the workshop works with.",
        "The top and bottom rings are finished in genuine ostrich-embossed leather (cognac) with an embossed SNAKE logo. The leather is color-matched to a black-and-cognac tone — the model looks finished, not assembled from random parts.",
        "Built-in purge valve. Hose — 150 cm, genuine leather, black. Includes: shaft, tray, gaskets, hose. The bowl is not included — pick the one that fits how you pack.",
      ],
      seoTitle: "Snake Hookah Spiral Wenge — buy a handmade hookah | Snake",
      seoDescription:
        "Snake Hookah Spiral Wenge handmade hookah: wenge wood spiral, 56 cm shaft, Ø16 mm stainless steel, genuine leather. Made in Ukraine.",
    },
    ru: {
      wood: "Венге",
      finish: "Натуральная кожа «страус», коньяк",
      hose: "150 см, натуральная кожа, чёрная",
      description: [
        "Snake Hookah Spiral Wenge — кальян ручной работы украинской мастерской Snake Hookah. Сердце модели — шахта из нержавеющей стали Ø 16 мм, вокруг которой вручную выточена двойная деревянная спираль из породы «венге». Это не накладка: спираль вырезается из цельного массива и обхватывает стальной ствол, как змея — отсюда и название бренда.",
        "Венге — редкая африканская древесина глубокого шоколадного тона с чёрными прожилками. Одна из самых плотных пород в работе мастера.",
        "Верхнее и нижнее кольца отделаны натуральной кожей «страус» (коньяк) с тиснёным логотипом SNAKE. Кожа подобрана в чёрно-коньячный тон — модель выглядит завершённой, а не собранной из случайных частей.",
        "Продувка встроена. Шланг — 150 см, натуральная кожа, чёрная. Комплект: шахта, тарелка, уплотнители, шланг. Чаша не входит в комплект — вы подбираете её под свой стиль забивки.",
      ],
      seoTitle: "Кальян Snake Hookah Spiral Wenge — купить | Snake Hookah",
      seoDescription:
        "Кальян Snake Hookah Spiral Wenge ручной работы: спираль из венге, шахта 56 см, нержавейка Ø16 мм, натуральная кожа. Сделано в Украине.",
    },
  },
  "SNK-SPR-SUC-CGN": {
    en: {
      wood: "Sucupira",
      finish: "Genuine ostrich-embossed leather, cognac",
      hose: "150 cm, silicone",
      description: [
        "Snake Hookah Spiral Sucupira Cognac is a handmade hookah from the Ukrainian workshop Snake Hookah. At the heart of the model is a Ø 16 mm stainless steel shaft, hand-turned with a double wooden spiral in \"sucupira\". It's not a veneer: the spiral is carved from solid stock and wraps the steel core like a snake — hence the brand name.",
        "Sucupira is a Brazilian wood with a honey-amber tone, exceptionally dense and moisture-resistant. That's exactly why it holds the spiral's shape for years.",
        "The top and bottom rings are finished in genuine ostrich-embossed leather (cognac) with an embossed SNAKE logo. The leather is color-matched to cognac — the model looks finished, not assembled from random parts.",
        "Built-in purge valve. Hose — 150 cm, silicone. Includes: shaft, tray, gaskets, hose. The bowl is not included — pick the one that fits how you pack.",
      ],
      seoTitle: "Snake Hookah Spiral Sucupira Cognac — buy a handmade hookah | Snake",
      seoDescription:
        "Snake Hookah Spiral Sucupira Cognac handmade hookah: sucupira wood spiral, 56 cm shaft, Ø16 mm stainless steel, genuine leather. Made in Ukraine.",
    },
    ru: {
      wood: "Сукупира",
      finish: "Натуральная кожа «страус», коньяк",
      hose: "150 см, силикон",
      description: [
        "Snake Hookah Spiral Sucupira Cognac — кальян ручной работы украинской мастерской Snake Hookah. Сердце модели — шахта из нержавеющей стали Ø 16 мм, вокруг которой вручную выточена двойная деревянная спираль из породы «сукупира». Это не накладка: спираль вырезается из цельного массива и обхватывает стальной ствол, как змея — отсюда и название бренда.",
        "Сукупира — бразильская древесина медово-янтарного оттенка, чрезвычайно плотная и устойчивая к влаге. Именно поэтому она держит форму спирали годами.",
        "Верхнее и нижнее кольца отделаны натуральной кожей «страус» (коньяк) с тиснёным логотипом SNAKE. Кожа подобрана в коньячный тон — модель выглядит завершённой, а не собранной из случайных частей.",
        "Продувка встроена. Шланг — 150 см, силикон. Комплект: шахта, тарелка, уплотнители, шланг. Чаша не входит в комплект — вы подбираете её под свой стиль забивки.",
      ],
      seoTitle: "Snake Hookah Spiral Sucupira Cognac — купить кальян | Snake",
      seoDescription:
        "Кальян Snake Hookah Spiral Sucupira Cognac ручной работы: спираль из сукупиры, шахта 56 см, нержавейка Ø16 мм, натуральная кожа. Сделано в Украине.",
    },
  },
  "SNK-SPR-TGR": {
    en: {
      wood: "Tigerwood",
      finish: "Genuine ostrich-embossed leather, cognac",
      hose: "150 cm, genuine leather, cognac",
      description: [
        "Snake Hookah Spiral Tigerwood is a handmade hookah from the Ukrainian workshop Snake Hookah. At the heart of the model is a Ø 16 mm stainless steel shaft, hand-turned with a double wooden spiral in \"tigerwood\". It's not a veneer: the spiral is carved from solid stock and wraps the steel core like a snake — hence the brand name.",
        "Tigerwood is named for its striped grain, reminiscent of a big cat's coat. Every shaft has a unique stripe pattern.",
        "The top and bottom rings are finished in genuine ostrich-embossed leather (cognac) with an embossed SNAKE logo. The leather is color-matched to cognac — the model looks finished, not assembled from random parts.",
        "Built-in purge valve. Hose — 150 cm, genuine leather, cognac. Includes: shaft, tray, gaskets, hose. The bowl is not included — pick the one that fits how you pack.",
      ],
      seoTitle: "Snake Hookah Spiral Tigerwood — buy a handmade hookah | Snake",
      seoDescription:
        "Snake Hookah Spiral Tigerwood handmade hookah: tigerwood spiral, 56 cm shaft, Ø16 mm stainless steel, genuine leather. Made in Ukraine.",
    },
    ru: {
      wood: "Тигровое дерево",
      finish: "Натуральная кожа «страус», коньяк",
      hose: "150 см, натуральная кожа, коньяк",
      description: [
        "Snake Hookah Spiral Tigerwood — кальян ручной работы украинской мастерской Snake Hookah. Сердце модели — шахта из нержавеющей стали Ø 16 мм, вокруг которой вручную выточена двойная деревянная спираль из породы «тигровое дерево». Это не накладка: спираль вырезается из цельного массива и обхватывает стальной ствол, как змея — отсюда и название бренда.",
        "Тигровое дерево названо за полосатый рисунок, напоминающий мех хищника. Каждая шахта имеет уникальный узор полос.",
        "Верхнее и нижнее кольца отделаны натуральной кожей «страус» (коньяк) с тиснёным логотипом SNAKE. Кожа подобрана в коньячный тон — модель выглядит завершённой, а не собранной из случайных частей.",
        "Продувка встроена. Шланг — 150 см, натуральная кожа, коньяк. Комплект: шахта, тарелка, уплотнители, шланг. Чаша не входит в комплект — вы подбираете её под свой стиль забивки.",
      ],
      seoTitle: "Кальян Snake Hookah Spiral Tigerwood — купить | Snake Hookah",
      seoDescription:
        "Кальян Snake Hookah Spiral Tigerwood ручной работы: спираль из тигрового дерева, шахта 56 см, нержавейка Ø16 мм, натуральная кожа. Сделано в Украине.",
    },
  },
  "SNK-SPR-WLN-WHT": {
    en: {
      wood: "White walnut",
      finish: "Genuine leather, green",
      hose: "150 cm, silicone",
      description: [
        "Snake Hookah Spiral Walnut White is a handmade hookah from the Ukrainian workshop Snake Hookah. At the heart of the model is a Ø 16 mm stainless steel shaft, hand-turned with a double wooden spiral in \"white walnut\". It's not a veneer: the spiral is carved from solid stock and wraps the steel core like a snake — hence the brand name.",
        "White walnut is a pale, almost cream-toned wood with a calm grain. The lightest wood in the Spiral line.",
        "The top and bottom rings are finished in genuine leather (green) with an embossed SNAKE logo. The leather is color-matched to green — the model looks finished, not assembled from random parts.",
        "Built-in purge valve. Hose — 150 cm, silicone. Includes: shaft, tray, gaskets, hose. The bowl is not included — pick the one that fits how you pack.",
      ],
      seoTitle: "Snake Hookah Spiral Walnut White — buy a handmade hookah | Snake",
      seoDescription:
        "Snake Hookah Spiral Walnut White handmade hookah: white walnut spiral, 56 cm shaft, Ø16 mm stainless steel, genuine leather. Made in Ukraine.",
    },
    ru: {
      wood: "Белый орех",
      finish: "Натуральная кожа, зелёная",
      hose: "150 см, силикон",
      description: [
        "Snake Hookah Spiral Walnut White — кальян ручной работы украинской мастерской Snake Hookah. Сердце модели — шахта из нержавеющей стали Ø 16 мм, вокруг которой вручную выточена двойная деревянная спираль из породы «белый орех». Это не накладка: спираль вырезается из цельного массива и обхватывает стальной ствол, как змея — отсюда и название бренда.",
        "Белый орех — светлая, почти кремовая древесина со спокойной текстурой. Самая светлая порода в линейке Spiral.",
        "Верхнее и нижнее кольца отделаны натуральной кожей (натуральная кожа, зелёная) с тиснёным логотипом SNAKE. Кожа подобрана в зелёный тон — модель выглядит завершённой, а не собранной из случайных частей.",
        "Продувка встроена. Шланг — 150 см, силикон. Комплект: шахта, тарелка, уплотнители, шланг. Чаша не входит в комплект — вы подбираете её под свой стиль забивки.",
      ],
      seoTitle: "Snake Hookah Spiral Walnut White — купить кальян | Snake",
      seoDescription:
        "Кальян Snake Hookah Spiral Walnut White ручной работы: спираль из белого ореха, шахта 56 см, нержавейка Ø16 мм, натуральная кожа. Сделано в Украине.",
    },
  },
  "SNK-SPR-SUC-BRN": {
    en: {
      wood: "Sucupira",
      finish: "Genuine leather, brown",
      hose: "150 cm, silicone",
      description: [
        "Snake Hookah Spiral Sucupira Brown is a handmade hookah from the Ukrainian workshop Snake Hookah. At the heart of the model is a Ø 16 mm stainless steel shaft, hand-turned with a double wooden spiral in \"sucupira\". It's not a veneer: the spiral is carved from solid stock and wraps the steel core like a snake — hence the brand name.",
        "Sucupira is a Brazilian wood with a honey-amber tone, exceptionally dense and moisture-resistant. That's exactly why it holds the spiral's shape for years.",
        "The top and bottom rings are finished in genuine leather (brown) with an embossed SNAKE logo. The leather is color-matched to brown — the model looks finished, not assembled from random parts.",
        "Built-in purge valve. Hose — 150 cm, silicone. Includes: shaft, tray, gaskets, hose. The bowl is not included — pick the one that fits how you pack.",
      ],
      seoTitle: "Snake Hookah Spiral Sucupira Brown — buy a handmade hookah | Snake",
      seoDescription:
        "Snake Hookah Spiral Sucupira Brown handmade hookah: sucupira wood spiral, 56 cm shaft, Ø16 mm stainless steel, genuine leather. Made in Ukraine.",
    },
    ru: {
      wood: "Сукупира",
      finish: "Натуральная кожа, коричневая",
      hose: "150 см, силикон",
      description: [
        "Snake Hookah Spiral Sucupira Brown — кальян ручной работы украинской мастерской Snake Hookah. Сердце модели — шахта из нержавеющей стали Ø 16 мм, вокруг которой вручную выточена двойная деревянная спираль из породы «сукупира». Это не накладка: спираль вырезается из цельного массива и обхватывает стальной ствол, как змея — отсюда и название бренда.",
        "Сукупира — бразильская древесина медово-янтарного оттенка, чрезвычайно плотная и устойчивая к влаге. Именно поэтому она держит форму спирали годами.",
        "Верхнее и нижнее кольца отделаны натуральной кожей (натуральная кожа, коричневая) с тиснёным логотипом SNAKE. Кожа подобрана в коричневый тон — модель выглядит завершённой, а не собранной из случайных частей.",
        "Продувка встроена. Шланг — 150 см, силикон. Комплект: шахта, тарелка, уплотнители, шланг. Чаша не входит в комплект — вы подбираете её под свой стиль забивки.",
      ],
      seoTitle: "Snake Hookah Spiral Sucupira Brown — купить кальян | Snake",
      seoDescription:
        "Кальян Snake Hookah Spiral Sucupira Brown ручной работы: спираль из сукупиры, шахта 56 см, нержавейка Ø16 мм, натуральная кожа. Сделано в Украине.",
    },
  },
  "SNK-SPR-WLN-PRP": {
    en: {
      wood: "Purple walnut",
      finish: "Genuine leather, burgundy",
      hose: "150 cm, silicone",
      description: [
        "Snake Hookah Spiral Walnut Purple is a handmade hookah from the Ukrainian workshop Snake Hookah. At the heart of the model is a Ø 16 mm stainless steel shaft, hand-turned with a double wooden spiral in \"purple walnut\". It's not a veneer: the spiral is carved from solid stock and wraps the steel core like a snake — hence the brand name.",
        "Purple walnut has a cool purple undertone that deepens over time. A rare choice even among craftsmen.",
        "The top and bottom rings are finished in genuine leather (burgundy) with an embossed SNAKE logo. The leather is color-matched to burgundy — the model looks finished, not assembled from random parts.",
        "Built-in purge valve. Hose — 150 cm, silicone. Includes: shaft, tray, gaskets, hose. The bowl is not included — pick the one that fits how you pack.",
      ],
      seoTitle: "Snake Hookah Spiral Walnut Purple — buy a handmade hookah | Snake",
      seoDescription:
        "Snake Hookah Spiral Walnut Purple handmade hookah: purple walnut spiral, 56 cm shaft, Ø16 mm stainless steel, genuine leather. Made in Ukraine.",
    },
    ru: {
      wood: "Фиолетовый орех",
      finish: "Натуральная кожа, бордо",
      hose: "150 см, силикон",
      description: [
        "Snake Hookah Spiral Walnut Purple — кальян ручной работы украинской мастерской Snake Hookah. Сердце модели — шахта из нержавеющей стали Ø 16 мм, вокруг которой вручную выточена двойная деревянная спираль из породы «фиолетовый орех». Это не накладка: спираль вырезается из цельного массива и обхватывает стальной ствол, как змея — отсюда и название бренда.",
        "Фиолетовый орех — древесина с холодным пурпурным подтоном, которая со временем приобретает глубину. Редкий выбор даже среди мастеров.",
        "Верхнее и нижнее кольца отделаны натуральной кожей (натуральная кожа, бордо) с тиснёным логотипом SNAKE. Кожа подобрана в бордовый тон — модель выглядит завершённой, а не собранной из случайных частей.",
        "Продувка встроена. Шланг — 150 см, силикон. Комплект: шахта, тарелка, уплотнители, шланг. Чаша не входит в комплект — вы подбираете её под свой стиль забивки.",
      ],
      seoTitle: "Snake Hookah Spiral Walnut Purple — купить кальян | Snake",
      seoDescription:
        "Кальян Snake Hookah Spiral Walnut Purple ручной работы: спираль из фиолетового ореха, шахта 56 см, нержавейка Ø16 мм, натуральная кожа. Сделано в Украине.",
    },
  },
  "SNK-WLD-CRC-GRN": {
    en: {
      finish: "Genuine leather, crocodile embossing, green",
      hose: "150 cm, genuine leather, green",
      description: [
        "Snake Hookah Wild Collection Green Crocodile is a compact 36 cm handmade hookah from the Ukrainian workshop Snake Hookah. The Ø 16 mm stainless steel shaft is fully wrapped in genuine leather (crocodile embossing, green) — by hand, with an even seam along the full length.",
        "Wild Collection is about texture. The leather isn't imitated with film — it's a real material that develops patina over time and only gets more interesting. The connection to the base is a gasket fit in a laser-engraved SNAKE steel ring: a snug, threadless fit, the shaft comes off in one motion.",
        "Despite the low height, the draw stays wide: the channel diameter is the same as on the full-size models. 36 cm is the format for a table, a trip, an apartment where a large hookah simply has nowhere to go.",
        "Built-in purge valve. Hose — 150 cm, genuine leather, green. Includes: shaft, tray, gaskets, hose. The bowl is not included — pick the one that fits how you pack.",
      ],
      seoTitle: "Snake Hookah Wild Collection Green Crocodile — buy a handmade hookah | Snake",
      seoDescription:
        "Compact Snake Hookah Wild Collection Green Crocodile hookah, 36 cm: genuine leather, Ø16 mm stainless steel, gasket connection, purge valve. Handmade in Ukraine.",
    },
    ru: {
      finish: "Натуральная кожа, тиснение «крокодил», зелёная",
      hose: "150 см, натуральная кожа, зелёная",
      description: [
        "Snake Hookah Wild Collection Green Crocodile — компактный кальян ручной работы высотой 36 см от украинской мастерской Snake Hookah. Шахта из нержавеющей стали Ø 16 мм полностью обтянута натуральной кожей (натуральная кожа, тиснение «крокодил», зелёная) — вручную, с ровным швом по всей длине.",
        "Wild Collection — это про фактуру. Кожу не имитируют плёнкой: это настоящий материал, который со временем приобретает патину и становится только интереснее. Соединение с колбой — на уплотнителе, в стальном кольце SNAKE с лазерной гравировкой: посадка плотная, без резьбы, шахта снимается одним движением.",
        "Несмотря на малую высоту, тяга остаётся широкой: диаметр канала тот же, что и у полноразмерных моделей. 36 см — это формат для стола, для поездки, для квартиры, где большому кальяну просто негде стоять.",
        "Продувка встроена. Шланг — 150 см, натуральная кожа, зелёная. Комплект: шахта, тарелка, уплотнители, шланг. Чаша не входит в комплект — вы подбираете её под свой стиль забивки.",
      ],
      seoTitle: "Snake Hookah Wild Collection Green Crocodile — купить кальян | Snake",
      seoDescription:
        "Компактный кальян Snake Hookah Wild Collection Green Crocodile 36 см: натуральная кожа, нержавейка Ø16 мм, соединение на уплотнителе, продувка. Ручная работа, Украина.",
    },
  },
  "SNK-WLD-CRC-BLU": {
    en: {
      finish: "Genuine leather, crocodile embossing, blue",
      hose: "150 cm, genuine leather, blue",
      description: [
        "Snake Hookah Wild Collection Blue Crocodile is a compact 36 cm handmade hookah from the Ukrainian workshop Snake Hookah. The Ø 16 mm stainless steel shaft is fully wrapped in genuine leather (crocodile embossing, blue) — by hand, with an even seam along the full length.",
        "Wild Collection is about texture. The leather isn't imitated with film — it's a real material that develops patina over time and only gets more interesting. The connection to the base is a gasket fit in a laser-engraved SNAKE steel ring: a snug, threadless fit, the shaft comes off in one motion.",
        "Despite the low height, the draw stays wide: the channel diameter is the same as on the full-size models. 36 cm is the format for a table, a trip, an apartment where a large hookah simply has nowhere to go.",
        "Built-in purge valve. Hose — 150 cm, genuine leather, blue. Includes: shaft, tray, gaskets, hose. The bowl is not included — pick the one that fits how you pack.",
      ],
      seoTitle: "Snake Hookah Wild Collection Blue Crocodile — buy a handmade hookah | Snake",
      seoDescription:
        "Compact Snake Hookah Wild Collection Blue Crocodile hookah, 36 cm: genuine leather, Ø16 mm stainless steel, gasket connection, purge valve. Handmade in Ukraine.",
    },
    ru: {
      finish: "Натуральная кожа, тиснение «крокодил», синяя",
      hose: "150 см, натуральная кожа, синяя",
      description: [
        "Snake Hookah Wild Collection Blue Crocodile — компактный кальян ручной работы высотой 36 см от украинской мастерской Snake Hookah. Шахта из нержавеющей стали Ø 16 мм полностью обтянута натуральной кожей (натуральная кожа, тиснение «крокодил», синяя) — вручную, с ровным швом по всей длине.",
        "Wild Collection — это про фактуру. Кожу не имитируют плёнкой: это настоящий материал, который со временем приобретает патину и становится только интереснее. Соединение с колбой — на уплотнителе, в стальном кольце SNAKE с лазерной гравировкой: посадка плотная, без резьбы, шахта снимается одним движением.",
        "Несмотря на малую высоту, тяга остаётся широкой: диаметр канала тот же, что и у полноразмерных моделей. 36 см — это формат для стола, для поездки, для квартиры, где большому кальяну просто негде стоять.",
        "Продувка встроена. Шланг — 150 см, натуральная кожа, синяя. Комплект: шахта, тарелка, уплотнители, шланг. Чаша не входит в комплект — вы подбираете её под свой стиль забивки.",
      ],
      seoTitle: "Snake Hookah Wild Collection Blue Crocodile — купить кальян | Snake",
      seoDescription:
        "Компактный кальян Snake Hookah Wild Collection Blue Crocodile 36 см: натуральная кожа, нержавейка Ø16 мм, соединение на уплотнителе, продувка. Ручная работа, Украина.",
    },
  },
  "SNK-WLD-OST-CGN": {
    en: {
      finish: "Genuine ostrich-embossed leather, cognac",
      hose: "150 cm, genuine leather, cognac",
      description: [
        "Snake Hookah Wild Collection Cognac Ostrich is a compact 36 cm handmade hookah from the Ukrainian workshop Snake Hookah. The Ø 16 mm stainless steel shaft is fully wrapped in genuine leather (ostrich embossing, cognac) — by hand, with an even seam along the full length.",
        "Wild Collection is about texture. The leather isn't imitated with film — it's a real material that develops patina over time and only gets more interesting. The connection to the base is a gasket fit in a laser-engraved SNAKE steel ring: a snug, threadless fit, the shaft comes off in one motion.",
        "Despite the low height, the draw stays wide: the channel diameter is the same as on the full-size models. 36 cm is the format for a table, a trip, an apartment where a large hookah simply has nowhere to go.",
        "Built-in purge valve. Hose — 150 cm, genuine leather, cognac. Includes: shaft, tray, gaskets, hose. The bowl is not included — pick the one that fits how you pack.",
      ],
      seoTitle: "Snake Hookah Wild Collection Cognac Ostrich — buy a handmade hookah | Snake",
      seoDescription:
        "Compact Snake Hookah Wild Collection Cognac Ostrich hookah, 36 cm: genuine leather, Ø16 mm stainless steel, gasket connection, purge valve. Handmade in Ukraine.",
    },
    ru: {
      finish: "Натуральная кожа, тиснение «страус», коньяк",
      hose: "150 см, натуральная кожа, коньяк",
      description: [
        "Snake Hookah Wild Collection Cognac Ostrich — компактный кальян ручной работы высотой 36 см от украинской мастерской Snake Hookah. Шахта из нержавеющей стали Ø 16 мм полностью обтянута натуральной кожей (натуральная кожа, тиснение «страус», коньяк) — вручную, с ровным швом по всей длине.",
        "Wild Collection — это про фактуру. Кожу не имитируют плёнкой: это настоящий материал, который со временем приобретает патину и становится только интереснее. Соединение с колбой — на уплотнителе, в стальном кольце SNAKE с лазерной гравировкой: посадка плотная, без резьбы, шахта снимается одним движением.",
        "Несмотря на малую высоту, тяга остаётся широкой: диаметр канала тот же, что и у полноразмерных моделей. 36 см — это формат для стола, для поездки, для квартиры, где большому кальяну просто негде стоять.",
        "Продувка встроена. Шланг — 150 см, натуральная кожа, коньяк. Комплект: шахта, тарелка, уплотнители, шланг. Чаша не входит в комплект — вы подбираете её под свой стиль забивки.",
      ],
      seoTitle: "Snake Hookah Wild Collection Cognac Ostrich — купить кальян | Snake",
      seoDescription:
        "Компактный кальян Snake Hookah Wild Collection Cognac Ostrich 36 см: натуральная кожа, нержавейка Ø16 мм, соединение на уплотнителе, продувка. Ручная работа, Украина.",
    },
  },
  "SNK-WLD-LEO": {
    en: {
      finish: "Genuine fur leather, leopard print",
      hose: "150 cm, silicone, black",
      description: [
        "Snake Hookah Wild Collection Leopard is a compact 36 cm handmade hookah from the Ukrainian workshop Snake Hookah. The Ø 16 mm stainless steel shaft is fully wrapped in genuine leather (fur, leopard print) — by hand, with an even seam along the full length.",
        "Wild Collection is about texture. The leather isn't imitated with film — it's a real material that develops patina over time and only gets more interesting. The connection to the base is a gasket fit in a laser-engraved SNAKE steel ring: a snug, threadless fit, the shaft comes off in one motion.",
        "Despite the low height, the draw stays wide: the channel diameter is the same as on the full-size models. 36 cm is the format for a table, a trip, an apartment where a large hookah simply has nowhere to go.",
        "Built-in purge valve. Hose — 150 cm, silicone, black. Includes: shaft, tray, gaskets, hose. The bowl is not included — pick the one that fits how you pack.",
      ],
      seoTitle: "Snake Hookah Wild Collection Leopard — buy a handmade hookah | Snake",
      seoDescription:
        "Compact Snake Hookah Wild Collection Leopard hookah, 36 cm: genuine leather, Ø16 mm stainless steel, gasket connection, purge valve. Handmade in Ukraine.",
    },
    ru: {
      finish: "Натуральная кожа с мехом, принт «леопард»",
      hose: "150 см, силикон, чёрный",
      description: [
        "Snake Hookah Wild Collection Leopard — компактный кальян ручной работы высотой 36 см от украинской мастерской Snake Hookah. Шахта из нержавеющей стали Ø 16 мм полностью обтянута натуральной кожей (натуральная кожа с мехом, принт «леопард») — вручную, с ровным швом по всей длине.",
        "Wild Collection — это про фактуру. Кожу не имитируют плёнкой: это настоящий материал, который со временем приобретает патину и становится только интереснее. Соединение с колбой — на уплотнителе, в стальном кольце SNAKE с лазерной гравировкой: посадка плотная, без резьбы, шахта снимается одним движением.",
        "Несмотря на малую высоту, тяга остаётся широкой: диаметр канала тот же, что и у полноразмерных моделей. 36 см — это формат для стола, для поездки, для квартиры, где большому кальяну просто негде стоять.",
        "Продувка встроена. Шланг — 150 см, силикон, чёрный. Комплект: шахта, тарелка, уплотнители, шланг. Чаша не входит в комплект — вы подбираете её под свой стиль забивки.",
      ],
      seoTitle: "Snake Hookah Wild Collection Leopard — купить кальян | Snake",
      seoDescription:
        "Компактный кальян Snake Hookah Wild Collection Leopard 36 см: натуральная кожа, нержавейка Ø16 мм, соединение на уплотнителе, продувка. Ручная работа, Украина.",
    },
  },
};

export function localizeProduct(product: Product, locale: Locale): Product {
  if (locale === "ua") return product;
  const t = productTranslations[product.sku]?.[locale];
  if (!t) return product;
  const shared = locale === "en" ? SPIRAL_SHARED_EN : SPIRAL_SHARED_RU;
  return {
    ...product,
    wood: t.wood ?? product.wood,
    finish: t.finish,
    hose: t.hose,
    description: t.description,
    seoTitle: t.seoTitle,
    seoDescription: t.seoDescription,
    shaft: shared.shaft,
    connection: shared.connection,
    bundle: shared.bundle,
    countryOfOrigin: shared.countryOfOrigin,
  };
}

export function localizeProducts(products: Product[], locale: Locale): Product[] {
  return products.map((p) => localizeProduct(p, locale));
}
