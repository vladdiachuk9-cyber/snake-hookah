// Seeded from ../../../Snake_Hookah_kartky.md (source of truth for copy).
// Only SKUs with a verified photo set carry `images` — everything else is
// real data without a gallery yet, so it never appears where a photo is
// required, but the catalog/related-products logic already has real records
// to work with once photos land.

export type ProductLine = "Spiral" | "Wild Collection";

export interface ProductImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Product {
  sku: string;
  slug: string;
  name: string;
  line: ProductLine;
  priceUsd: number;
  priceUah: number;
  wood: string | null;
  finish: string;
  heightCm: number;
  weightKg: number;
  shaft: string;
  hose: string;
  connection: string;
  bundle: string;
  purge: boolean;
  warranty: string;
  countryOfOrigin: string;
  description: string[];
  images: ProductImage[];
  /** 360° turntable clip, matched from the source footage by wood/ring
   * color (no hose visible in these clips, so it's the only signal —
   * confirmed against the product photos and corrected once by the user
   * after the Sucupira Cognac / Walnut Purple clips were first swapped). */
  video?: string;
  seoTitle: string;
  seoDescription: string;
}

const SPIRAL_SHARED = {
  line: "Spiral" as const,
  heightCm: 56,
  weightKg: 1.2,
  shaft: "Нержавіюча сталь, Ø 16 мм",
  connection: "Ущільнювач",
  bundle: "Шахта, тарілка, ущільнювачі, шланг",
  purge: true,
  warranty: "До першого покуру (за відсутності механічних заводських пошкоджень)",
  countryOfOrigin: "Україна",
  priceUsd: 285,
  priceUah: 11970,
};

const WILD_SHARED = {
  line: "Wild Collection" as const,
  heightCm: 36,
  weightKg: 1.1,
  shaft: "Нержавіюча сталь, Ø 16 мм",
  connection: "Ущільнювач",
  bundle: "Шахта, тарілка, ущільнювачі, шланг",
  purge: true,
  warranty: "До першого покуру (за відсутності механічних заводських пошкоджень)",
  countryOfOrigin: "Україна",
  priceUsd: 360,
  priceUah: 15120,
  wood: null,
};

export const products: Product[] = [
  {
    ...SPIRAL_SHARED,
    sku: "SNK-SPR-WLN-GRN",
    slug: "kalyan-snake-hookah-spiral-walnut-green",
    name: "Snake Hookah Spiral Walnut Green",
    wood: "Горіх (світлий)",
    finish: "Натуральна шкіра, зелена",
    hose: "150 см, натуральна шкіра, зелена",
    description: [
      "Snake Hookah Spiral Walnut Green — кальян ручної роботи української майстерні Snake Hookah. Серце моделі — шахта з нержавіючої сталі Ø 16 мм, навколо якої вручну виточено подвійну дерев'яну спіраль з породи «горіх (світлий)». Це не накладка: спіраль вирізається з цільного масиву й обіймає сталевий стовбур, як змія — звідси й назва бренду.",
      "Світлий горіх — класика столярної справи: тепла медова текстура з вираженим малюнком, який не повторюється на жодній наступній шахті.",
      "Верхнє й нижнє кільця оздоблені натуральною шкірою (натуральна шкіра, зелена) з тисненим логотипом SNAKE. Шкіра підібрана в тон зелений — модель виглядає завершеною, а не зібраною з випадкових частин.",
      "Продувка вбудована. Шланг — 150 см, натуральна шкіра, зелена. Комплект: шахта, тарілка, ущільнювачі, шланг. Чаша не входить у комплект — ви підбираєте її під свій стиль забивки.",
    ],
    images: [
      { src: "/images/products/snk-spr-wln-grn/1-front.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut Green — загальний вигляд" },
      { src: "/images/products/snk-spr-wln-grn/2-crown.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut Green — верхнє кільце та спіраль зблизька" },
      { src: "/images/products/snk-spr-wln-grn/3-base.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut Green — колба та шланг зблизька" },
      { src: "/images/products/snk-spr-wln-grn/4-flatlay.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Walnut Green — комплектація" },
      { src: "/images/products/snk-spr-wln-grn/5-alt.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut Green — інший ракурс" },
      { src: "/images/products/snk-spr-wln-grn/6-alt.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut Green — інший ракурс" },
      { src: "/images/products/snk-spr-wln-grn/7-alt.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut Green — інший ракурс" },
      { src: "/images/products/snk-spr-wln-grn/8-alt.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Walnut Green — інший ракурс" },
    ],
    video: "/videos/products/snk-spr-wln-grn/360.mp4",
    seoTitle: "Snake Hookah Spiral Walnut Green — купити кальян | Snake",
    seoDescription:
      "Кальян Snake Hookah Spiral Walnut Green ручної роботи: спіраль з породи горіх (світлий), шахта 56 см, нержавійка Ø16 мм, натуральна шкіра. Зроблено в Україні.",
  },
  {
    ...SPIRAL_SHARED,
    sku: "SNK-SPR-WNG",
    slug: "kalyan-snake-hookah-spiral-wenge",
    name: "Snake Hookah Spiral Wenge",
    wood: "Венге",
    finish: "Натуральна шкіра «страус», коньяк",
    hose: "150 см, натуральна шкіра, чорна",
    description: [
      "Snake Hookah Spiral Wenge — кальян ручної роботи української майстерні Snake Hookah. Серце моделі — шахта з нержавіючої сталі Ø 16 мм, навколо якої вручну виточено подвійну дерев'яну спіраль з породи «венге». Це не накладка: спіраль вирізається з цільного масиву й обіймає сталевий стовбур, як змія — звідси й назва бренду.",
      "Венге — рідкісна африканська деревина глибокого шоколадного тону з чорними прожилками. Одна з найщільніших порід у роботі майстра.",
      "Верхнє й нижнє кільця оздоблені натуральною шкірою (натуральна шкіра «страус», коньяк) з тисненим логотипом SNAKE. Шкіра підібрана в тон чорно-коньячний — модель виглядає завершеною, а не зібраною з випадкових частин.",
      "Продувка вбудована. Шланг — 150 см, натуральна шкіра, чорна. Комплект: шахта, тарілка, ущільнювачі, шланг. Чаша не входить у комплект — ви підбираєте її під свій стиль забивки.",
    ],
    images: [
      { src: "/images/products/snk-spr-wng/1-front.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Wenge — загальний вигляд" },
      { src: "/images/products/snk-spr-wng/2-crown.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Wenge — верхнє кільце та спіраль зблизька" },
      { src: "/images/products/snk-spr-wng/3-base.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Wenge — колба та шланг зблизька" },
      { src: "/images/products/snk-spr-wng/4-flatlay.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Wenge — комплектація" },
      { src: "/images/products/snk-spr-wng/5-alt.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Wenge — інший ракурс" },
      { src: "/images/products/snk-spr-wng/6-alt.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Wenge — інший ракурс" },
      { src: "/images/products/snk-spr-wng/7-alt.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Wenge — інший ракурс" },
      { src: "/images/products/snk-spr-wng/8-alt.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Wenge — інший ракурс" },
    ],
    video: "/videos/products/snk-spr-wng/360.mp4",
    seoTitle: "Кальян Snake Hookah Spiral Wenge — купити | Snake Hookah",
    seoDescription:
      "Кальян Snake Hookah Spiral Wenge ручної роботи: спіраль з породи венге, шахта 56 см, нержавійка Ø16 мм, натуральна шкіра. Зроблено в Україні.",
  },
  {
    ...SPIRAL_SHARED,
    sku: "SNK-SPR-SUC-CGN",
    slug: "kalyan-snake-hookah-spiral-sucupira-cognac",
    name: "Snake Hookah Spiral Sucupira Cognac",
    wood: "Сукупіра",
    finish: "Натуральна шкіра «страус», коньяк",
    hose: "150 см, силікон",
    description: [
      "Snake Hookah Spiral Sucupira Cognac — кальян ручної роботи української майстерні Snake Hookah. Серце моделі — шахта з нержавіючої сталі Ø 16 мм, навколо якої вручну виточено подвійну дерев'яну спіраль з породи «сукупіра». Це не накладка: спіраль вирізається з цільного масиву й обіймає сталевий стовбур, як змія — звідси й назва бренду.",
      "Сукупіра — бразильська деревина медово-бурштинового відтінку, надзвичайно щільна та стійка до вологи. Саме тому вона тримає форму спіралі роками.",
      "Верхнє й нижнє кільця оздоблені натуральною шкірою (натуральна шкіра «страус», коньяк) з тисненим логотипом SNAKE. Шкіра підібрана в тон коньячний — модель виглядає завершеною, а не зібраною з випадкових частин.",
      "Продувка вбудована. Шланг — 150 см, силікон. Комплект: шахта, тарілка, ущільнювачі, шланг. Чаша не входить у комплект — ви підбираєте її під свій стиль забивки.",
    ],
    images: [
      { src: "/images/products/snk-spr-suc-cgn/1-front.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Sucupira Cognac — загальний вигляд" },
      { src: "/images/products/snk-spr-suc-cgn/2-crown.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Sucupira Cognac — верхнє кільце та спіраль зблизька" },
      { src: "/images/products/snk-spr-suc-cgn/3-base.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Sucupira Cognac — колба та шланг зблизька" },
      { src: "/images/products/snk-spr-suc-cgn/4-flatlay.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Sucupira Cognac — комплектація" },
      { src: "/images/products/snk-spr-suc-cgn/5-alt.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Sucupira Cognac — інший ракурс" },
    ],
    video: "/videos/products/snk-spr-suc-cgn/360.mp4",
    seoTitle: "Snake Hookah Spiral Sucupira Cognac — купити кальян | Snake",
    seoDescription:
      "Кальян Snake Hookah Spiral Sucupira Cognac ручної роботи: спіраль з породи сукупіра, шахта 56 см, нержавійка Ø16 мм, натуральна шкіра. Зроблено в Україні.",
  },
  {
    ...SPIRAL_SHARED,
    sku: "SNK-SPR-TGR",
    slug: "kalyan-snake-hookah-spiral-tigerwood",
    name: "Snake Hookah Spiral Tigerwood",
    wood: "Тигрове дерево",
    finish: "Натуральна шкіра «страус», коньяк",
    hose: "150 см, натуральна шкіра, коньяк",
    description: [
      "Snake Hookah Spiral Tigerwood — кальян ручної роботи української майстерні Snake Hookah. Серце моделі — шахта з нержавіючої сталі Ø 16 мм, навколо якої вручну виточено подвійну дерев'яну спіраль з породи «тигрове дерево». Це не накладка: спіраль вирізається з цільного масиву й обіймає сталевий стовбур, як змія — звідси й назва бренду.",
      "Тигрове дерево названо за смугастий малюнок, що нагадує хутро хижака. Кожна шахта має унікальний візерунок смуг.",
      "Верхнє й нижнє кільця оздоблені натуральною шкірою (натуральна шкіра «страус», коньяк) з тисненим логотипом SNAKE. Шкіра підібрана в тон коньячний — модель виглядає завершеною, а не зібраною з випадкових частин.",
      "Продувка вбудована. Шланг — 150 см, натуральна шкіра, коньяк. Комплект: шахта, тарілка, ущільнювачі, шланг. Чаша не входить у комплект — ви підбираєте її під свій стиль забивки.",
    ],
    images: [
      { src: "/images/products/snk-spr-tgr/1-front.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Tigerwood — загальний вигляд" },
      { src: "/images/products/snk-spr-tgr/2-crown.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Tigerwood — верхнє кільце та спіраль зблизька" },
      { src: "/images/products/snk-spr-tgr/3-base.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Tigerwood — колба та шланг зблизька" },
      { src: "/images/products/snk-spr-tgr/4-flatlay.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Tigerwood — комплектація" },
      { src: "/images/products/snk-spr-tgr/5-alt.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Tigerwood — інший ракурс" },
      { src: "/images/products/snk-spr-tgr/6-alt.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Tigerwood — інший ракурс" },
      { src: "/images/products/snk-spr-tgr/7-alt.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Tigerwood — інший ракурс" },
      { src: "/images/products/snk-spr-tgr/8-alt.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Tigerwood — інший ракурс" },
    ],
    video: "/videos/products/snk-spr-tgr/360.mp4",
    seoTitle: "Кальян Snake Hookah Spiral Tigerwood — купити | Snake Hookah",
    seoDescription:
      "Кальян Snake Hookah Spiral Tigerwood ручної роботи: спіраль з породи тигрове дерево, шахта 56 см, нержавійка Ø16 мм, натуральна шкіра. Зроблено в Україні.",
  },
  {
    ...SPIRAL_SHARED,
    sku: "SNK-SPR-WLN-WHT",
    slug: "kalyan-snake-hookah-spiral-walnut-white",
    name: "Snake Hookah Spiral Walnut White",
    wood: "Білий горіх",
    finish: "Натуральна шкіра, зелена",
    hose: "150 см, силікон",
    description: [
      "Snake Hookah Spiral Walnut White — кальян ручної роботи української майстерні Snake Hookah. Серце моделі — шахта з нержавіючої сталі Ø 16 мм, навколо якої вручну виточено подвійну дерев'яну спіраль з породи «білий горіх». Це не накладка: спіраль вирізається з цільного масиву й обіймає сталевий стовбур, як змія — звідси й назва бренду.",
      "Білий горіх — світла, майже кремова деревина зі спокійною текстурою. Найсвітліша порода в лінійці Spiral.",
      "Верхнє й нижнє кільця оздоблені натуральною шкірою (натуральна шкіра, зелена) з тисненим логотипом SNAKE. Шкіра підібрана в тон зелений — модель виглядає завершеною, а не зібраною з випадкових частин.",
      "Продувка вбудована. Шланг — 150 см, силікон. Комплект: шахта, тарілка, ущільнювачі, шланг. Чаша не входить у комплект — ви підбираєте її під свій стиль забивки.",
    ],
    images: [
      { src: "/images/products/snk-spr-wln-wht/1-front.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut White — загальний вигляд" },
      { src: "/images/products/snk-spr-wln-wht/2-crown.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut White — верхнє кільце та спіраль зблизька" },
      { src: "/images/products/snk-spr-wln-wht/3-base.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut White — колба та шланг зблизька" },
      { src: "/images/products/snk-spr-wln-wht/4-flatlay.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Walnut White — комплектація" },
      { src: "/images/products/snk-spr-wln-wht/5-alt.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Walnut White — інший ракурс" },
      { src: "/images/products/snk-spr-wln-wht/6-alt.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Walnut White — інший ракурс" },
    ],
    video: "/videos/products/snk-spr-wln-wht/360.mp4",
    seoTitle: "Snake Hookah Spiral Walnut White — купити кальян | Snake",
    seoDescription:
      "Кальян Snake Hookah Spiral Walnut White ручної роботи: спіраль з породи білий горіх, шахта 56 см, нержавійка Ø16 мм, натуральна шкіра. Зроблено в Україні.",
  },
  {
    ...SPIRAL_SHARED,
    sku: "SNK-SPR-SUC-BRN",
    slug: "kalyan-snake-hookah-spiral-sucupira-brown",
    name: "Snake Hookah Spiral Sucupira Brown",
    wood: "Сукупіра",
    finish: "Натуральна шкіра, коричнева",
    hose: "150 см, силікон",
    description: [
      "Snake Hookah Spiral Sucupira Brown — кальян ручної роботи української майстерні Snake Hookah. Серце моделі — шахта з нержавіючої сталі Ø 16 мм, навколо якої вручну виточено подвійну дерев'яну спіраль з породи «сукупіра». Це не накладка: спіраль вирізається з цільного масиву й обіймає сталевий стовбур, як змія — звідси й назва бренду.",
      "Сукупіра — бразильська деревина медово-бурштинового відтінку, надзвичайно щільна та стійка до вологи. Саме тому вона тримає форму спіралі роками.",
      "Верхнє й нижнє кільця оздоблені натуральною шкірою (натуральна шкіра, коричнева) з тисненим логотипом SNAKE. Шкіра підібрана в тон коричневий — модель виглядає завершеною, а не зібраною з випадкових частин.",
      "Продувка вбудована. Шланг — 150 см, силікон. Комплект: шахта, тарілка, ущільнювачі, шланг. Чаша не входить у комплект — ви підбираєте її під свій стиль забивки.",
    ],
    images: [
      { src: "/images/products/snk-spr-suc-brn/1-front.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Sucupira Brown — загальний вигляд" },
      { src: "/images/products/snk-spr-suc-brn/2-flatlay.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Sucupira Brown — комплектація" },
      { src: "/images/products/snk-spr-suc-brn/3-alt.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Sucupira Brown — інший ракурс" },
      { src: "/images/products/snk-spr-suc-brn/4-alt.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Sucupira Brown — інший ракурс" },
      { src: "/images/products/snk-spr-suc-brn/5-alt.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Sucupira Brown — інший ракурс" },
    ],
    video: "/videos/products/snk-spr-suc-brn/360.mp4",
    seoTitle: "Snake Hookah Spiral Sucupira Brown — купити кальян | Snake",
    seoDescription:
      "Кальян Snake Hookah Spiral Sucupira Brown ручної роботи: спіраль з породи сукупіра, шахта 56 см, нержавійка Ø16 мм, натуральна шкіра. Зроблено в Україні.",
  },
  {
    ...SPIRAL_SHARED,
    sku: "SNK-SPR-WLN-PRP",
    slug: "kalyan-snake-hookah-spiral-walnut-purple",
    name: "Snake Hookah Spiral Walnut Purple",
    wood: "Фіолетовий горіх",
    finish: "Натуральна шкіра, бордо",
    hose: "150 см, силікон",
    description: [
      "Snake Hookah Spiral Walnut Purple — кальян ручної роботи української майстерні Snake Hookah. Серце моделі — шахта з нержавіючої сталі Ø 16 мм, навколо якої вручну виточено подвійну дерев'яну спіраль з породи «фіолетовий горіх». Це не накладка: спіраль вирізається з цільного масиву й обіймає сталевий стовбур, як змія — звідси й назва бренду.",
      "Фіолетовий горіх — деревина з холодним пурпуровим підтоном, що з часом набуває глибини. Рідкісний вибір навіть серед майстрів.",
      "Верхнє й нижнє кільця оздоблені натуральною шкірою (натуральна шкіра, бордо) з тисненим логотипом SNAKE. Шкіра підібрана в тон бордовий — модель виглядає завершеною, а не зібраною з випадкових частин.",
      "Продувка вбудована. Шланг — 150 см, силікон. Комплект: шахта, тарілка, ущільнювачі, шланг. Чаша не входить у комплект — ви підбираєте її під свій стиль забивки.",
    ],
    images: [
      { src: "/images/products/snk-spr-wln-prp/1-front.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut Purple — загальний вигляд" },
      { src: "/images/products/snk-spr-wln-prp/2-crown.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut Purple — верхнє кільце та спіраль зблизька" },
      { src: "/images/products/snk-spr-wln-prp/3-base.webp", width: 1400, height: 2100, alt: "Snake Hookah Spiral Walnut Purple — колба та шланг зблизька" },
      { src: "/images/products/snk-spr-wln-prp/4-alt.webp", width: 1400, height: 1750, alt: "Snake Hookah Spiral Walnut Purple — інший ракурс" },
    ],
    video: "/videos/products/snk-spr-wln-prp/360.mp4",
    seoTitle: "Snake Hookah Spiral Walnut Purple — купити кальян | Snake",
    seoDescription:
      "Кальян Snake Hookah Spiral Walnut Purple ручної роботи: спіраль з породи фіолетовий горіх, шахта 56 см, нержавійка Ø16 мм, натуральна шкіра. Зроблено в Україні.",
  },
  {
    ...WILD_SHARED,
    sku: "SNK-WLD-CRC-GRN",
    slug: "kalyan-snake-hookah-wild-green-crocodile",
    name: "Snake Hookah Wild Collection Green Crocodile",
    finish: "Натуральна шкіра, тиснення «крокодил», зелена",
    hose: "150 см, натуральна шкіра, зелена",
    description: [
      "Snake Hookah Wild Collection Green Crocodile — компактний кальян ручної роботи заввишки 36 см від української майстерні Snake Hookah. Шахта з нержавіючої сталі Ø 16 мм повністю обтягнута натуральною шкірою (натуральна шкіра, тиснення «крокодил», зелена) — вручну, з рівним швом по всій довжині.",
      "Wild Collection — це про фактуру. Шкіру не імітують плівкою: це справжній матеріал, який з часом набуває патини й стає тільки цікавішим. З'єднання з колбою — на ущільнювачі, у сталевому кільці SNAKE з лазерним гравіюванням: посадка щільна, без різьби, шахта знімається одним рухом.",
      "Попри малу висоту, тяга залишається широкою: діаметр каналу той самий, що й у повнорозмірних моделей. 36 см — це формат для столу, для поїздки, для квартири, де великий кальян просто нікуди ставити.",
      "Продувка вбудована. Шланг — 150 см, натуральна шкіра, зелена. Комплект: шахта, тарілка, ущільнювачі, шланг. Чаша не входить у комплект — ви підбираєте її під свій стиль забивки.",
    ],
    images: [
      { src: "/images/products/snk-wld-crc-grn/1-front.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Green Crocodile — загальний вигляд" },
      { src: "/images/products/snk-wld-crc-grn/2-crown.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Green Crocodile — верхнє кільце зблизька" },
      { src: "/images/products/snk-wld-crc-grn/3-flatlay.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Green Crocodile — комплектація" },
      { src: "/images/products/snk-wld-crc-grn/4-detail.webp", width: 1200, height: 1500, alt: "Snake Hookah Wild Collection Green Crocodile — фактура шкіри шланга зблизька" },
      { src: "/images/products/snk-wld-crc-grn/5-detail.webp", width: 1200, height: 1500, alt: "Snake Hookah Wild Collection Green Crocodile — фактура шкіри шланга зблизька" },
      { src: "/images/products/snk-wld-crc-grn/6-detail.webp", width: 1200, height: 1500, alt: "Snake Hookah Wild Collection Green Crocodile — фактура шкіри шланга зблизька" },
    ],
    seoTitle: "Snake Hookah Wild Collection Green Crocodile — купити кальян | Snake",
    seoDescription:
      "Компактний кальян Snake Hookah Wild Collection Green Crocodile 36 см: натуральна шкіра, нержавійка Ø16 мм, з'єднання на ущільнювачі, продувка. Ручна робота, Україна.",
  },
  {
    ...WILD_SHARED,
    sku: "SNK-WLD-CRC-BLU",
    slug: "kalyan-snake-hookah-wild-blue-crocodile",
    name: "Snake Hookah Wild Collection Blue Crocodile",
    finish: "Натуральна шкіра, тиснення «крокодил», синя",
    hose: "150 см, натуральна шкіра, синя",
    description: [
      "Snake Hookah Wild Collection Blue Crocodile — компактний кальян ручної роботи заввишки 36 см від української майстерні Snake Hookah. Шахта з нержавіючої сталі Ø 16 мм повністю обтягнута натуральною шкірою (натуральна шкіра, тиснення «крокодил», синя) — вручну, з рівним швом по всій довжині.",
      "Wild Collection — це про фактуру. Шкіру не імітують плівкою: це справжній матеріал, який з часом набуває патини й стає тільки цікавішим. З'єднання з колбою — на ущільнювачі, у сталевому кільці SNAKE з лазерним гравіюванням: посадка щільна, без різьби, шахта знімається одним рухом.",
      "Попри малу висоту, тяга залишається широкою: діаметр каналу той самий, що й у повнорозмірних моделей. 36 см — це формат для столу, для поїздки, для квартири, де великий кальян просто нікуди ставити.",
      "Продувка вбудована. Шланг — 150 см, натуральна шкіра, синя. Комплект: шахта, тарілка, ущільнювачі, шланг. Чаша не входить у комплект — ви підбираєте її під свій стиль забивки.",
    ],
    images: [
      { src: "/images/products/snk-wld-crc-blu/1-front.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Blue Crocodile — загальний вигляд" },
      { src: "/images/products/snk-wld-crc-blu/2-crown.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Blue Crocodile — верхнє кільце зблизька" },
      { src: "/images/products/snk-wld-crc-blu/3-flatlay.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Blue Crocodile — комплектація" },
      { src: "/images/products/snk-wld-crc-blu/4-alt.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Blue Crocodile — інший ракурс" },
      { src: "/images/products/snk-wld-crc-blu/5-alt.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Blue Crocodile — інший ракурс" },
    ],
    seoTitle: "Snake Hookah Wild Collection Blue Crocodile — купити кальян | Snake",
    seoDescription:
      "Компактний кальян Snake Hookah Wild Collection Blue Crocodile 36 см: натуральна шкіра, нержавійка Ø16 мм, з'єднання на ущільнювачі, продувка. Ручна робота, Україна.",
  },
  {
    ...WILD_SHARED,
    sku: "SNK-WLD-OST-CGN",
    slug: "kalyan-snake-hookah-wild-cognac-ostrich",
    name: "Snake Hookah Wild Collection Cognac Ostrich",
    finish: "Натуральна шкіра, тиснення «страус», коньяк",
    hose: "150 см, натуральна шкіра, коньяк",
    description: [
      "Snake Hookah Wild Collection Cognac Ostrich — компактний кальян ручної роботи заввишки 36 см від української майстерні Snake Hookah. Шахта з нержавіючої сталі Ø 16 мм повністю обтягнута натуральною шкірою (натуральна шкіра, тиснення «страус», коньяк) — вручну, з рівним швом по всій довжині.",
      "Wild Collection — це про фактуру. Шкіру не імітують плівкою: це справжній матеріал, який з часом набуває патини й стає тільки цікавішим. З'єднання з колбою — на ущільнювачі, у сталевому кільці SNAKE з лазерним гравіюванням: посадка щільна, без різьби, шахта знімається одним рухом.",
      "Попри малу висоту, тяга залишається широкою: діаметр каналу той самий, що й у повнорозмірних моделей. 36 см — це формат для столу, для поїздки, для квартири, де великий кальян просто нікуди ставити.",
      "Продувка вбудована. Шланг — 150 см, натуральна шкіра, коньяк. Комплект: шахта, тарілка, ущільнювачі, шланг. Чаша не входить у комплект — ви підбираєте її під свій стиль забивки.",
    ],
    images: [
      { src: "/images/products/snk-wld-ost-cgn/1-front.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Cognac Ostrich — загальний вигляд" },
      { src: "/images/products/snk-wld-ost-cgn/2-crown.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Cognac Ostrich — верхнє кільце зблизька" },
      { src: "/images/products/snk-wld-ost-cgn/3-flatlay.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Cognac Ostrich — комплектація" },
      { src: "/images/products/snk-wld-ost-cgn/4-detail.webp", width: 1200, height: 1500, alt: "Snake Hookah Wild Collection Cognac Ostrich — фактура шкіри шланга зблизька" },
      { src: "/images/products/snk-wld-ost-cgn/5-detail.webp", width: 1200, height: 1500, alt: "Snake Hookah Wild Collection Cognac Ostrich — фактура шкіри шланга зблизька" },
      { src: "/images/products/snk-wld-ost-cgn/6-detail.webp", width: 1200, height: 1500, alt: "Snake Hookah Wild Collection Cognac Ostrich — фактура шкіри шланга зблизька" },
    ],
    seoTitle: "Snake Hookah Wild Collection Cognac Ostrich — купити кальян | Snake",
    seoDescription:
      "Компактний кальян Snake Hookah Wild Collection Cognac Ostrich 36 см: натуральна шкіра, нержавійка Ø16 мм, з'єднання на ущільнювачі, продувка. Ручна робота, Україна.",
  },
  {
    ...WILD_SHARED,
    sku: "SNK-WLD-LEO",
    slug: "kalyan-snake-hookah-wild-leopard",
    name: "Snake Hookah Wild Collection Leopard",
    finish: "Натуральна шкіра з хутром, принт «леопард»",
    hose: "150 см, силікон, чорний",
    description: [
      "Snake Hookah Wild Collection Leopard — компактний кальян ручної роботи заввишки 36 см від української майстерні Snake Hookah. Шахта з нержавіючої сталі Ø 16 мм повністю обтягнута натуральною шкірою (натуральна шкіра з хутром, принт «леопард») — вручну, з рівним швом по всій довжині.",
      "Wild Collection — це про фактуру. Шкіру не імітують плівкою: це справжній матеріал, який з часом набуває патини й стає тільки цікавішим. З'єднання з колбою — на ущільнювачі, у сталевому кільці SNAKE з лазерним гравіюванням: посадка щільна, без різьби, шахта знімається одним рухом.",
      "Попри малу висоту, тяга залишається широкою: діаметр каналу той самий, що й у повнорозмірних моделей. 36 см — це формат для столу, для поїздки, для квартири, де великий кальян просто нікуди ставити.",
      "Продувка вбудована. Шланг — 150 см, силікон, чорний. Комплект: шахта, тарілка, ущільнювачі, шланг. Чаша не входить у комплект — ви підбираєте її під свій стиль забивки.",
    ],
    images: [
      { src: "/images/products/snk-wld-leo/1-front.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Leopard — загальний вигляд" },
      { src: "/images/products/snk-wld-leo/2-crown.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Leopard — верхнє кільце зблизька" },
      { src: "/images/products/snk-wld-leo/3-flatlay.webp", width: 1200, height: 1800, alt: "Snake Hookah Wild Collection Leopard — комплектація" },
      { src: "/images/products/snk-wld-leo/4-detail.webp", width: 1200, height: 1500, alt: "Snake Hookah Wild Collection Leopard — фактура шкіри шланга зблизька" },
      { src: "/images/products/snk-wld-leo/5-detail.webp", width: 1200, height: 1500, alt: "Snake Hookah Wild Collection Leopard — фактура шкіри шланга зблизька" },
      { src: "/images/products/snk-wld-leo/6-detail.webp", width: 1200, height: 1500, alt: "Snake Hookah Wild Collection Leopard — фактура шкіри шланга зблизька" },
    ],
    seoTitle: "Snake Hookah Wild Collection Leopard — купити кальян | Snake",
    seoDescription:
      "Компактний кальян Snake Hookah Wild Collection Leopard 36 см: натуральна шкіра, нержавійка Ø16 мм, з'єднання на ущільнювачі, продувка. Ручна робота, Україна.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsWithPhotos(): Product[] {
  return products.filter((p) => p.images.length > 0);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.sku !== product.sku && p.line === product.line)
    .slice(0, limit);
}
