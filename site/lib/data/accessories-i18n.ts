import type { Locale } from "@/lib/i18n";
import type { Accessory } from "./accessories";

interface AccessoryTranslation {
  color: string;
  material: string;
  connector: string;
  description: string[];
  features: string[];
  care: string;
  seoTitle: string;
  seoDescription: string;
}

const LEATHER_HOSE_EN = {
  material: "Genuine leather",
  connector: "Metal ferrule",
  description: [
    "The Snake Hookah leather hose is the detail that turns an ordinary session into a real ritual. The genuine-leather finish looks expensive, feels good in the hand, and pairs seamlessly with the Snake Hookah shafts in the Wild Crocodile, Leo, and Ostrich styles.",
    "Inside is a dense air tube that delivers a soft, full draw with no off-taste, so the smoke stays clean and cool. Outside, the refined leather trim instantly sets the tone for the whole hookah and signals the owner's taste for detail.",
    "This hose is made for people who care about aesthetics and detail: equally at home for a quiet evening in and as the finishing touch on a showpiece setup at a lounge.",
  ],
  features: [
    "genuine leather — a premium look and feel",
    "soft, even draw with no off-taste",
    "perfect match for Snake Hookah shafts",
    "a striking accent that sets your hookah apart",
  ],
  care: "Never wet the leather — wipe with a dry or slightly damp cloth and store somewhere dry. Treated this way, the hose keeps its look and shape for years.",
};

const LEATHER_HOSE_RU = {
  material: "Натуральная кожа",
  connector: "Металлический наконечник",
  description: [
    "Кожаный шланг Snake Hookah — деталь, которая превращает обычный кальян в настоящий ритуал. Отделка натуральной кожей выглядит дорого, приятно лежит в руке и безупречно дополняет фирменные шахты Snake Hookah в стилистике Wild Crocodile, Leo и Ostrich.",
    "Внутри — плотная воздушная трубка, обеспечивающая мягкую, насыщенную тягу без посторонних привкусов, поэтому дым остаётся чистым и холодным. Снаружи — изысканный кожаный декор, который сразу задаёт уровень всему кальяну и подчёркивает статус владельца.",
    "Такой шланг создан для тех, кто ценит эстетику и детали: он одинаково уместен и дома для уютного вечера, и в кальянной как украшение презентабельного сетапа.",
  ],
  features: [
    "натуральная кожа — премиальный вид и тактильность",
    "мягкая, ровная тяга без постороннего привкуса",
    "идеальная совместимость с шахтами Snake Hookah",
    "эффектный акцент, который выделяет ваш кальян",
  ],
  care: "Кожу не мочат — достаточно протирать сухой или слегка влажной салфеткой и хранить в сухом месте. При таком уходе шланг надолго сохранит вид и форму.",
};

const SNAKE_HOSE_EN = {
  material: "Leather embossed with a snake-scale pattern",
  connector: "Metal ferrule",
  description: [
    "The Snake Hookah Snake Hose is a signature accessory, and the name isn't incidental: the leather is embossed with a snake-scale pattern that echoes the same visual code as the spiral on Snake Hookah shafts.",
    "The embossing is visible and felt under the fingers — raised scales, not a flat surface. Metal ferrules on both ends give a precise, play-free fit on the shaft.",
    "Inside is the same dense air tube as the leather hose: a soft, full draw with no off-taste. The bold color is an accent for anyone who wants their hookah to stand out, not blend in.",
  ],
  features: [
    "embossed snake-scale leather — the brand's signature visual code",
    "raised texture you can feel",
    "the same soft draw as the classic leather hose",
    "a bold color accent for your hookah",
  ],
  care: "Never wet the leather — wipe with a dry or slightly damp cloth and store somewhere dry. Treated this way, the hose keeps its look and shape for years.",
};

const SNAKE_HOSE_RU = {
  material: "Кожа с тиснением под змеиную чешую",
  connector: "Металлический наконечник",
  description: [
    "Snake Hookah Шланг Змея — фирменный аксессуар, и название неслучайно: кожа с тиснением под змеиную чешую повторяет тот же визуальный код, что и спираль на шахтах Snake Hookah.",
    "Тиснение видно и ощущается под пальцами — рельефная чешуя, а не гладкая поверхность. Металлический наконечник с обоих концов — точная посадка на шахту без люфта.",
    "Внутри — та же плотная воздушная трубка, что и в кожаном шланге: мягкая, насыщенная тяга без постороннего привкуса. Яркий цвет — акцент для тех, кто хочет выделить свой кальян, а не спрятать его.",
  ],
  features: [
    "тиснёная кожа с рисунком змеиной чешуи — фирменный визуальный код бренда",
    "рельефная текстура, заметная на ощупь",
    "та же мягкая тяга, что и в классическом кожаном шланге",
    "яркий цветовой акцент для кальяна",
  ],
  care: "Кожу не мочат — достаточно протирать сухой или слегка влажной салфеткой и хранить в сухом месте. При таком уходе шланг надолго сохранит вид и форму.",
};

const accessoryTranslations: Record<string, { en: AccessoryTranslation; ru: AccessoryTranslation }> = {
  "SNK-ACC-LEA-GRN": {
    en: { ...LEATHER_HOSE_EN, color: "Green", seoTitle: "Snake Hookah Leather Hose, Green — buy | Snake Hookah", seoDescription: "Snake Hookah leather hose, green, 150 cm, genuine leather. Soft draw, premium look, fits every Snake Hookah shaft." },
    ru: { ...LEATHER_HOSE_RU, color: "Зелёный", seoTitle: "Кожаный шланг Snake Hookah, зелёный — купить | Snake Hookah", seoDescription: "Кожаный шланг Snake Hookah, зелёный, 150 см, натуральная кожа. Мягкая тяга, премиальный вид, совместим со всеми шахтами Snake Hookah." },
  },
  "SNK-ACC-LEA-CGN": {
    en: { ...LEATHER_HOSE_EN, color: "Cognac", seoTitle: "Snake Hookah Leather Hose, Cognac — buy | Snake Hookah", seoDescription: "Snake Hookah leather hose, cognac, 150 cm, genuine leather. Soft draw, premium look, fits every Snake Hookah shaft." },
    ru: { ...LEATHER_HOSE_RU, color: "Коньячный", seoTitle: "Кожаный шланг Snake Hookah, коньячный — купить | Snake Hookah", seoDescription: "Кожаный шланг Snake Hookah, коньячный, 150 см, натуральная кожа. Мягкая тяга, премиальный вид, совместим со всеми шахтами Snake Hookah." },
  },
  "SNK-ACC-LEA-BLU": {
    en: { ...LEATHER_HOSE_EN, color: "Blue", seoTitle: "Snake Hookah Leather Hose, Blue — buy | Snake Hookah", seoDescription: "Snake Hookah leather hose, blue, 150 cm, genuine leather. Soft draw, premium look, fits every Snake Hookah shaft." },
    ru: { ...LEATHER_HOSE_RU, color: "Синий", seoTitle: "Кожаный шланг Snake Hookah, синий — купить | Snake Hookah", seoDescription: "Кожаный шланг Snake Hookah, синий, 150 см, натуральная кожа. Мягкая тяга, премиальный вид, совместим со всеми шахтами Snake Hookah." },
  },
  "SNK-ACC-LEA-BLK": {
    en: { ...LEATHER_HOSE_EN, color: "Black", seoTitle: "Snake Hookah Leather Hose, Black — buy | Snake Hookah", seoDescription: "Snake Hookah leather hose, black, 150 cm, genuine leather. Soft draw, premium look, fits every Snake Hookah shaft." },
    ru: { ...LEATHER_HOSE_RU, color: "Чёрный", seoTitle: "Кожаный шланг Snake Hookah, чёрный — купить | Snake Hookah", seoDescription: "Кожаный шланг Snake Hookah, чёрный, 150 см, натуральная кожа. Мягкая тяга, премиальный вид, совместим со всеми шахтами Snake Hookah." },
  },
  "SNK-ACC-SNK-BUR": {
    en: { ...SNAKE_HOSE_EN, color: "Burgundy", seoTitle: "Snake Hookah Snake Hose, Burgundy — buy | Snake Hookah", seoDescription: "Snake Hookah snake-scale hose, burgundy, 150 cm, genuine leather. A signature accent with the same soft, off-taste-free draw." },
    ru: { ...SNAKE_HOSE_RU, color: "Бордовый", seoTitle: "Шланг Snake Hookah со змеиным тиснением, бордовый — купить | Snake Hookah", seoDescription: "Шланг Snake Hookah со змеиным тиснением, бордовый, 150 см, натуральная кожа. Фирменный акцент для кальяна, мягкая тяга без привкуса." },
  },
  "SNK-ACC-SNK-GLD": {
    en: { ...SNAKE_HOSE_EN, color: "Gold", seoTitle: "Snake Hookah Snake Hose, Gold — buy | Snake Hookah", seoDescription: "Snake Hookah snake-scale hose, gold, 150 cm, genuine leather. A signature accent with the same soft, off-taste-free draw." },
    ru: { ...SNAKE_HOSE_RU, color: "Золотой", seoTitle: "Шланг Snake Hookah со змеиным тиснением, золотой — купить | Snake Hookah", seoDescription: "Шланг Snake Hookah со змеиным тиснением, золотой, 150 см, натуральная кожа. Фирменный акцент для кальяна, мягкая тяга без привкуса." },
  },
  "SNK-ACC-SNK-ORG": {
    en: { ...SNAKE_HOSE_EN, color: "Orange", seoTitle: "Snake Hookah Snake Hose, Orange — buy | Snake Hookah", seoDescription: "Snake Hookah snake-scale hose, orange, 150 cm, genuine leather. A signature accent with the same soft, off-taste-free draw." },
    ru: { ...SNAKE_HOSE_RU, color: "Оранжевый", seoTitle: "Шланг Snake Hookah со змеиным тиснением, оранжевый — купить | Snake Hookah", seoDescription: "Шланг Snake Hookah со змеиным тиснением, оранжевый, 150 см, натуральная кожа. Фирменный акцент для кальяна, мягкая тяга без привкуса." },
  },
  "SNK-ACC-SNK-PNK": {
    en: { ...SNAKE_HOSE_EN, color: "Pink", seoTitle: "Snake Hookah Snake Hose, Pink — buy | Snake Hookah", seoDescription: "Snake Hookah snake-scale hose, pink, 150 cm, genuine leather. A signature accent with the same soft, off-taste-free draw." },
    ru: { ...SNAKE_HOSE_RU, color: "Розовый", seoTitle: "Шланг Snake Hookah со змеиным тиснением, розовый — купить | Snake Hookah", seoDescription: "Шланг Snake Hookah со змеиным тиснением, розовый, 150 см, натуральная кожа. Фирменный акцент для кальяна, мягкая тяга без привкуса." },
  },
  "SNK-ACC-SNK-BLU": {
    en: { ...SNAKE_HOSE_EN, color: "Blue", seoTitle: "Snake Hookah Snake Hose, Blue — buy | Snake Hookah", seoDescription: "Snake Hookah snake-scale hose, blue, 150 cm, genuine leather. A signature accent with the same soft, off-taste-free draw." },
    ru: { ...SNAKE_HOSE_RU, color: "Синий", seoTitle: "Шланг Snake Hookah со змеиным тиснением, синий — купить | Snake Hookah", seoDescription: "Шланг Snake Hookah со змеиным тиснением, синий, 150 см, натуральная кожа. Фирменный акцент для кальяна, мягкая тяга без привкуса." },
  },
  "SNK-ACC-SNK-NVY": {
    en: { ...SNAKE_HOSE_EN, color: "Navy", seoTitle: "Snake Hookah Snake Hose, Navy — buy | Snake Hookah", seoDescription: "Snake Hookah snake-scale hose, navy, 150 cm, genuine leather. A signature accent with the same soft, off-taste-free draw." },
    ru: { ...SNAKE_HOSE_RU, color: "Тёмно-синий", seoTitle: "Шланг Snake Hookah со змеиным тиснением, тёмно-синий — купить | Snake Hookah", seoDescription: "Шланг Snake Hookah со змеиным тиснением, тёмно-синий, 150 см, натуральная кожа. Фирменный акцент для кальяна, мягкая тяга без привкуса." },
  },
  "SNK-ACC-SNK-RED": {
    en: { ...SNAKE_HOSE_EN, color: "Red", seoTitle: "Snake Hookah Snake Hose, Red — buy | Snake Hookah", seoDescription: "Snake Hookah snake-scale hose, red, 150 cm, genuine leather. A signature accent with the same soft, off-taste-free draw." },
    ru: { ...SNAKE_HOSE_RU, color: "Красный", seoTitle: "Шланг Snake Hookah со змеиным тиснением, красный — купить | Snake Hookah", seoDescription: "Шланг Snake Hookah со змеиным тиснением, красный, 150 см, натуральная кожа. Фирменный акцент для кальяна, мягкая тяга без привкуса." },
  },
};

export function localizeAccessory(accessory: Accessory, locale: Locale): Accessory {
  if (locale === "ua") return accessory;
  const translation = accessoryTranslations[accessory.sku]?.[locale];
  if (!translation) return accessory;
  return { ...accessory, ...translation };
}

export function localizeAccessories(items: Accessory[], locale: Locale): Accessory[] {
  return items.map((a) => localizeAccessory(a, locale));
}
