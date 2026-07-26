// Hose accessory line — sold separately from the 11 hookahs. Source photos
// live in ../../../каталог/<Folder>/, processed via
// scripts/process-accessory-images.mjs. Prices confirmed by the user
// (2026-07-26): Leather Hose $150, Snake Hose $200; UAH uses the same ~42
// UAH/USD rate already used consistently across products.ts.
import type { ProductImage } from "./products";

export type AccessoryCategory = "Leather Hose" | "Snake Hose";

export interface Accessory {
  sku: string;
  slug: string;
  name: string;
  category: AccessoryCategory;
  color: string;
  priceUsd: number;
  priceUah: number;
  lengthCm: number;
  material: string;
  connector: string;
  description: string[];
  features: string[];
  care: string;
  images: ProductImage[];
  seoTitle: string;
  seoDescription: string;
}

const LEATHER_HOSE_SHARED = {
  category: "Leather Hose" as const,
  priceUsd: 150,
  priceUah: 6300,
  lengthCm: 150,
  material: "Натуральна шкіра",
  connector: "Металевий наконечник",
  description: [
    "Шкіряний шланг Snake Hookah — це та деталь, яка перетворює звичайний покур на справжній ритуал. Оздоблення натуральною шкірою виглядає дорого, приємно лежить у руці та бездоганно доповнює фірмові шахти Snake Hookah у стилістиці Wild Crocodile, Leo й Ostrich.",
    "Усередині — щільна повітряна трубка, що забезпечує м'яку, насичену тягу без сторонніх присмаків, тож дим залишається чистим і холодним. Зовні — вибагливий шкіряний декор, який одразу задає рівень усьому кальяну та підкреслює статус власника.",
    "Такий шланг створений для тих, хто цінує естетику та деталі: він однаково доречний і вдома для затишного вечора, і в кальянній як окраса презентабельного сетапу.",
  ],
  features: [
    "натуральна шкіра — преміальний вигляд і тактильність",
    "м'яка, рівна тяга без стороннього присмаку",
    "ідеальна сумісність із шахтами Snake Hookah",
    "ефектний акцент, що вирізняє ваш кальян",
  ],
  care: "Шкіру не мочать — достатньо протирати сухою або трохи вологою серветкою та зберігати в сухому місці. За такого підходу шланг надовго збереже вигляд і форму.",
};

const SNAKE_HOSE_SHARED = {
  category: "Snake Hose" as const,
  priceUsd: 200,
  priceUah: 8400,
  lengthCm: 150,
  material: "Шкіра з тисненням під зміїну луску",
  connector: "Металевий наконечник",
  description: [
    "Snake Hookah Шланг Змія — фірмовий аксесуар, і назва тут не випадкова: шкіра з тисненням під зміїну луску повторює той самий візуальний код, що й спіраль на шахтах Snake Hookah.",
    "Тиснення видно й відчувається під пальцями — рельєфні лусочки, а не гладка поверхня. Металевий наконечник з обох кінців дає точну посадку на шахту без люфту.",
    "Усередині — та сама щільна повітряна трубка, що й у шкіряному шланзі: м'яка, насичена тяга без стороннього присмаку. Яскравий колір — акцент для тих, хто хоче виділити свій кальян, а не сховати його.",
  ],
  features: [
    "тиснена шкіра з малюнком зміїної луски — фірмовий візуальний код бренду",
    "рельєфна текстура, помітна на дотик",
    "та сама м'яка тяга, що й у класичному шкіряному шланзі",
    "яскравий колірний акцент для кальяну",
  ],
  care: "Шкіру не мочать — достатньо протирати сухою або трохи вологою серветкою та зберігати в сухому місці. За такого підходу шланг надовго збереже вигляд і форму.",
};

function img(slug: string, n: number, width: number, height: number, alt: string): ProductImage {
  return { src: `/images/accessories/${slug}/${n}.webp`, width, height, alt };
}

export const accessories: Accessory[] = [
  {
    ...LEATHER_HOSE_SHARED,
    sku: "SNK-ACC-LEA-GRN",
    slug: "snake-hookah-leather-hose-green",
    name: "Snake Hookah Leather Hose Green",
    color: "Зелений",
    images: [
      img("snake-hookah-leather-hose-green", 1, 1200, 1500, "Snake Hookah Leather Hose Green — загальний вигляд"),
      img("snake-hookah-leather-hose-green", 2, 1200, 1500, "Snake Hookah Leather Hose Green — наконечник зблизька"),
      img("snake-hookah-leather-hose-green", 3, 1200, 1500, "Snake Hookah Leather Hose Green — шкіра зблизька"),
    ],
    seoTitle: "Шкіряний шланг Snake Hookah, зелений — купити | Snake Hookah",
    seoDescription:
      "Шкіряний шланг Snake Hookah, зелений, 150 см, натуральна шкіра. М'яка тяга, преміальний вигляд, сумісний із усіма шахтами Snake Hookah.",
  },
  {
    ...LEATHER_HOSE_SHARED,
    sku: "SNK-ACC-LEA-CGN",
    slug: "snake-hookah-leather-hose-cognac",
    name: "Snake Hookah Leather Hose Cognac",
    color: "Коньячний",
    images: [
      img("snake-hookah-leather-hose-cognac", 1, 1200, 1500, "Snake Hookah Leather Hose Cognac — загальний вигляд"),
      img("snake-hookah-leather-hose-cognac", 2, 1200, 1500, "Snake Hookah Leather Hose Cognac — наконечник зблизька"),
      img("snake-hookah-leather-hose-cognac", 3, 1200, 1500, "Snake Hookah Leather Hose Cognac — шкіра зблизька"),
    ],
    seoTitle: "Шкіряний шланг Snake Hookah, коньячний — купити | Snake Hookah",
    seoDescription:
      "Шкіряний шланг Snake Hookah, коньячний, 150 см, натуральна шкіра. М'яка тяга, преміальний вигляд, сумісний із усіма шахтами Snake Hookah.",
  },
  {
    ...LEATHER_HOSE_SHARED,
    sku: "SNK-ACC-LEA-BLU",
    slug: "snake-hookah-leather-hose-blue",
    name: "Snake Hookah Leather Hose Blue",
    color: "Синій",
    images: [
      img("snake-hookah-leather-hose-blue", 1, 1200, 1800, "Snake Hookah Leather Hose Blue — загальний вигляд"),
      img("snake-hookah-leather-hose-blue", 2, 1200, 1800, "Snake Hookah Leather Hose Blue — наконечник зблизька"),
      img("snake-hookah-leather-hose-blue", 3, 1200, 1500, "Snake Hookah Leather Hose Blue — шкіра зблизька"),
    ],
    seoTitle: "Шкіряний шланг Snake Hookah, синій — купити | Snake Hookah",
    seoDescription:
      "Шкіряний шланг Snake Hookah, синій, 150 см, натуральна шкіра. М'яка тяга, преміальний вигляд, сумісний із усіма шахтами Snake Hookah.",
  },
  {
    ...LEATHER_HOSE_SHARED,
    sku: "SNK-ACC-LEA-BLK",
    slug: "snake-hookah-leather-hose-black",
    name: "Snake Hookah Leather Hose Black",
    color: "Чорний",
    images: [
      img("snake-hookah-leather-hose-black", 1, 1200, 1500, "Snake Hookah Leather Hose Black — загальний вигляд"),
      img("snake-hookah-leather-hose-black", 2, 1200, 1500, "Snake Hookah Leather Hose Black — наконечник зблизька"),
      img("snake-hookah-leather-hose-black", 3, 1200, 1500, "Snake Hookah Leather Hose Black — шкіра зблизька"),
    ],
    seoTitle: "Шкіряний шланг Snake Hookah, чорний — купити | Snake Hookah",
    seoDescription:
      "Шкіряний шланг Snake Hookah, чорний, 150 см, натуральна шкіра. М'яка тяга, преміальний вигляд, сумісний із усіма шахтами Snake Hookah.",
  },
  {
    ...SNAKE_HOSE_SHARED,
    sku: "SNK-ACC-SNK-BUR",
    slug: "snake-hookah-snake-hose-burgundy",
    name: "Snake Hookah Snake Hose Burgundy",
    color: "Бордовий",
    images: [
      img("snake-hookah-snake-hose-burgundy", 1, 1200, 1500, "Snake Hookah Snake Hose Burgundy — тиснення зблизька"),
      img("snake-hookah-snake-hose-burgundy", 2, 1200, 1500, "Snake Hookah Snake Hose Burgundy — загальний вигляд"),
      img("snake-hookah-snake-hose-burgundy", 3, 1200, 1500, "Snake Hookah Snake Hose Burgundy — наконечник зблизька"),
    ],
    seoTitle: "Шланг Snake Hookah зі зміїним тисненням, бордовий — купити | Snake Hookah",
    seoDescription:
      "Шланг Snake Hookah зі зміїним тисненням, бордовий, 150 см, натуральна шкіра. Фірмовий акцент для кальяна, м'яка тяга без присмаку.",
  },
  {
    ...SNAKE_HOSE_SHARED,
    sku: "SNK-ACC-SNK-GLD",
    slug: "snake-hookah-snake-hose-gold",
    name: "Snake Hookah Snake Hose Gold",
    color: "Золотий",
    images: [
      img("snake-hookah-snake-hose-gold", 1, 1200, 1500, "Snake Hookah Snake Hose Gold — тиснення зблизька"),
      img("snake-hookah-snake-hose-gold", 2, 1200, 1500, "Snake Hookah Snake Hose Gold — загальний вигляд"),
      img("snake-hookah-snake-hose-gold", 3, 1200, 1500, "Snake Hookah Snake Hose Gold — наконечник зблизька"),
    ],
    seoTitle: "Шланг Snake Hookah зі зміїним тисненням, золотий — купити | Snake Hookah",
    seoDescription:
      "Шланг Snake Hookah зі зміїним тисненням, золотий, 150 см, натуральна шкіра. Фірмовий акцент для кальяна, м'яка тяга без присмаку.",
  },
  {
    ...SNAKE_HOSE_SHARED,
    sku: "SNK-ACC-SNK-ORG",
    slug: "snake-hookah-snake-hose-orange",
    name: "Snake Hookah Snake Hose Orange",
    color: "Помаранчевий",
    images: [
      img("snake-hookah-snake-hose-orange", 1, 1200, 1500, "Snake Hookah Snake Hose Orange — тиснення зблизька"),
      img("snake-hookah-snake-hose-orange", 2, 1200, 1500, "Snake Hookah Snake Hose Orange — загальний вигляд"),
      img("snake-hookah-snake-hose-orange", 3, 1200, 1500, "Snake Hookah Snake Hose Orange — наконечник зблизька"),
    ],
    seoTitle: "Шланг Snake Hookah зі зміїним тисненням, помаранчевий — купити | Snake Hookah",
    seoDescription:
      "Шланг Snake Hookah зі зміїним тисненням, помаранчевий, 150 см, натуральна шкіра. Фірмовий акцент для кальяна, м'яка тяга без присмаку.",
  },
  {
    ...SNAKE_HOSE_SHARED,
    sku: "SNK-ACC-SNK-PNK",
    slug: "snake-hookah-snake-hose-pink",
    name: "Snake Hookah Snake Hose Pink",
    color: "Рожевий",
    images: [
      img("snake-hookah-snake-hose-pink", 1, 1200, 1500, "Snake Hookah Snake Hose Pink — тиснення зблизька"),
      img("snake-hookah-snake-hose-pink", 2, 1200, 1500, "Snake Hookah Snake Hose Pink — загальний вигляд"),
      img("snake-hookah-snake-hose-pink", 3, 1200, 1500, "Snake Hookah Snake Hose Pink — наконечник зблизька"),
    ],
    seoTitle: "Шланг Snake Hookah зі зміїним тисненням, рожевий — купити | Snake Hookah",
    seoDescription:
      "Шланг Snake Hookah зі зміїним тисненням, рожевий, 150 см, натуральна шкіра. Фірмовий акцент для кальяна, м'яка тяга без присмаку.",
  },
  {
    ...SNAKE_HOSE_SHARED,
    sku: "SNK-ACC-SNK-BLU",
    slug: "snake-hookah-snake-hose-blue",
    name: "Snake Hookah Snake Hose Blue",
    color: "Синій",
    images: [
      img("snake-hookah-snake-hose-blue", 1, 1200, 1500, "Snake Hookah Snake Hose Blue — тиснення зблизька"),
      img("snake-hookah-snake-hose-blue", 2, 1200, 1500, "Snake Hookah Snake Hose Blue — загальний вигляд"),
    ],
    seoTitle: "Шланг Snake Hookah зі зміїним тисненням, синій — купити | Snake Hookah",
    seoDescription:
      "Шланг Snake Hookah зі зміїним тисненням, синій, 150 см, натуральна шкіра. Фірмовий акцент для кальяна, м'яка тяга без присмаку.",
  },
  {
    ...SNAKE_HOSE_SHARED,
    sku: "SNK-ACC-SNK-NVY",
    slug: "snake-hookah-snake-hose-navy",
    name: "Snake Hookah Snake Hose Navy",
    color: "Темно-синій",
    images: [
      img("snake-hookah-snake-hose-navy", 1, 1200, 1500, "Snake Hookah Snake Hose Navy — тиснення зблизька"),
      img("snake-hookah-snake-hose-navy", 2, 1200, 1500, "Snake Hookah Snake Hose Navy — загальний вигляд"),
      img("snake-hookah-snake-hose-navy", 3, 1200, 1500, "Snake Hookah Snake Hose Navy — наконечник зблизька"),
    ],
    seoTitle: "Шланг Snake Hookah зі зміїним тисненням, темно-синій — купити | Snake Hookah",
    seoDescription:
      "Шланг Snake Hookah зі зміїним тисненням, темно-синій, 150 см, натуральна шкіра. Фірмовий акцент для кальяна, м'яка тяга без присмаку.",
  },
  {
    ...SNAKE_HOSE_SHARED,
    sku: "SNK-ACC-SNK-RED",
    slug: "snake-hookah-snake-hose-red",
    name: "Snake Hookah Snake Hose Red",
    color: "Червоний",
    images: [
      img("snake-hookah-snake-hose-red", 1, 1200, 1500, "Snake Hookah Snake Hose Red — тиснення зблизька"),
      img("snake-hookah-snake-hose-red", 2, 1200, 1500, "Snake Hookah Snake Hose Red — загальний вигляд"),
      img("snake-hookah-snake-hose-red", 3, 1200, 1500, "Snake Hookah Snake Hose Red — наконечник зблизька"),
    ],
    seoTitle: "Шланг Snake Hookah зі зміїним тисненням, червоний — купити | Snake Hookah",
    seoDescription:
      "Шланг Snake Hookah зі зміїним тисненням, червоний, 150 см, натуральна шкіра. Фірмовий акцент для кальяна, м'яка тяга без присмаку.",
  },
];

export function getAccessoryBySlug(slug: string): Accessory | undefined {
  return accessories.find((a) => a.slug === slug);
}

export function getRelatedAccessories(accessory: Accessory): Accessory[] {
  return accessories.filter((a) => a.category === accessory.category && a.sku !== accessory.sku).slice(0, 3);
}
