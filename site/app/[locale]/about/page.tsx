import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import { Reveal } from "@/components/ui/Reveal";

export async function generateMetadata(props: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: "Про нас",
    description:
      "Snake Hookah — київська майстерня кальянів ручної роботи з 2020 року. Десять людей, цільне дерево, натуральна шкіра.",
    alternates: { canonical: `/${locale}/about` },
  };
}

const lessons = [
  {
    title: "Тяга важливіша за все",
    body: "Шахта Ø 16 мм — це не компроміс і не «як у всіх». Це діаметр, при якому затяжка не потребує зусиль, а дим встигає охолонути. Ми пробували вужче й ширше. Зупинилися тут.",
  },
  {
    title: "Дерево не має бути накладкою",
    body: "Більшість «дерев'яних» кальянів на ринку — це метал із приклеєною декоративною обгорткою. Наша спіраль вирізається з цільного масиву й обіймає сталевий стовбур. Вона не відклеїться, бо її нема чим клеїти.",
  },
  {
    title: "Шкіра має бути шкірою",
    body: "Не плівкою з тисненням «під крокодила». Справжня шкіра темніє, набуває патини, стає цікавішою через рік. Плівка просто лущиться.",
  },
  {
    title: "Чаша — це особисте",
    body: "Ми не кладемо її в комплект. У кожного, хто курить серйозно, вже є своя — під свою забивку, свій тютюн, свою звичку. Нав'язувати чужу глину — неповага.",
  },
];

const stats = [
  { value: "2020", label: "рік заснування" },
  { value: "10", label: "людей у майстерні" },
  { value: "~1000", label: "кальянів зроблено" },
  { value: "4", label: "країни експорту" },
];

export default async function AboutPage(props: PageProps<"/[locale]/about">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <div>
      <section className="wrap-narrow" style={{ paddingBlock: "var(--s-9)" }}>
        <Reveal>
          <span className="badge">Snake Hookah · Київ · з 2020</span>
          <h1 style={{ fontSize: "var(--t-hero)", marginTop: "var(--s-5)", lineHeight: 1.15 }}>
            Все почалося з того, як лягає шланг
          </h1>
          <p style={{ fontSize: 19, color: "var(--text-body)", marginTop: "var(--s-5)", maxWidth: 620 }}>
            Змія — це не про агресію. Це про те, як шкіряний шланг спадає з шахти й лягає кільцями на стіл.
          </p>
        </Reveal>

        <Reveal delay={0.05} style={{ marginTop: "var(--s-7)" }}>
          <p style={{ color: "var(--text-body)" }}>
            Ми побачили це першого разу випадково. Поклали готовий кальян на стіл у майстерні, шланг зісковзнув і
            згорнувся сам собою — м&apos;яко, без заломів, кільце в кільце. Хтось у команді сказав: «як змія».
            Назва прижилася раніше, ніж ми встигли придумати щось інше.
          </p>
          <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>
            Це не маркетинговий хід і не спроба виглядати грізно. Це просто чесний опис того, що робить натуральна
            шкіра, коли її не змушують поводитись як силікон.
          </p>
        </Reveal>
      </section>

      <section style={{ background: "var(--sec-graphite)", paddingBlock: "var(--s-8)" }}>
        <div className="wrap-narrow grid grid-cols-2 md:grid-cols-4" style={{ gap: 1, background: "var(--line)" }}>
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} style={{ background: "var(--ink-2)", padding: "var(--s-6) var(--s-3)", textAlign: "center" }}>
              <b style={{ display: "block", fontSize: 30, color: "var(--gold)", fontWeight: 600 }}>{stat.value}</b>
              <span style={{ fontSize: "var(--t-label)", color: "var(--text-mute)", textTransform: "uppercase", letterSpacing: "0.09em" }}>
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap-narrow" style={{ paddingBlock: "var(--s-9)" }}>
        <Reveal>
          <span className="badge">2020. Київ. Кальянна</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>Ми прийшли в цю справу з кальянної</h2>
        </Reveal>
        <Reveal delay={0.06} style={{ marginTop: "var(--s-5)" }}>
          <p style={{ color: "var(--text-body)" }}>
            Спочатку ми просто курили. Потім працювали. Потім довго дивилися на техніку, яка стояла перед нами
            щовечора — і бачили, як вона живе. Що ламається першим. Що бісить гостя. Де приладу вистачає на пів
            року, а де на п&apos;ять років. Ця перспектива — з-за стійки, а не з креслярської дошки — досі визначає
            те, що ми робимо.
          </p>
          <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>
            2020-й був не найкращим роком, щоб починати. Кальянні зачинялися. Але саме тоді з&apos;явився час
            зробити те, що давно крутилося в голові: не купити чергову шахту, а зібрати свою.
          </p>
        </Reveal>
      </section>

      <section style={{ paddingBlock: "var(--s-9)" }}>
        <div className="wrap">
          <Reveal>
            <span className="badge">Що ми зрозуміли за стійкою</span>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--s-6)", marginTop: "var(--s-6)" }}>
            {lessons.map((lesson, i) => (
              <Reveal key={lesson.title} delay={i * 0.07} style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
                <h3 style={{ fontSize: "var(--t-h3)" }}>{lesson.title}</h3>
                <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>{lesson.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--sec-forest)", paddingBlock: "var(--s-9)" }}>
        <div className="wrap grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--s-6)" }}>
          <Reveal style={{ background: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", padding: "var(--s-6)" }}>
            <h3 style={{ fontSize: "var(--t-h3)", color: "var(--gold)" }}>Spiral</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-3)" }}>
              Сім моделей, кожна — своя порода. Спіраль виточується вручну: подвійне плетіння навколо сталевого
              стовбура вимагає постійного контролю глибини різу. Помилка на пів міліметра — і заготовка йде в брак.
            </p>
            <p style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)", marginTop: "var(--s-4)", borderTop: "1px solid var(--line)", paddingTop: "var(--s-3)" }}>
              56 см · 1,2 кг · натуральна шкіра на кільцях · до 100 одиниць на місяць
            </p>
          </Reveal>
          <Reveal delay={0.08} style={{ background: "var(--ink-2)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", padding: "var(--s-6)" }}>
            <h3 style={{ fontSize: "var(--t-h3)", color: "var(--gold)" }}>Wild Collection</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-3)" }}>
              Чотири моделі, 36 см, повністю в шкірі. Кожен Wild ми обшиваємо повністю вручну: шов має лягти рівно
              по всій довжині циліндра — і жодного способу зробити це швидко ми не знайшли.
            </p>
            <p style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)", marginTop: "var(--s-4)", borderTop: "1px solid var(--line)", paddingTop: "var(--s-3)" }}>
              36 см · 1,1 кг · та сама тяга, що й у повнорозмірних
            </p>
          </Reveal>
        </div>
      </section>

      <section className="wrap-narrow" style={{ paddingBlock: "var(--s-9)" }}>
        <Reveal>
          <span className="badge">Нас десятеро</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>Десять людей у Києві</h2>
          <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>
            Столяри, шкіряники, збирачі. Це не «команда однодумців» із презентації — це просто десять людей, які
            роблять руками одну річ і бачать результат того ж дня. Кожен кальян перед відправкою проходить через
            руки того, хто підпише, що з ним усе гаразд.
          </p>
        </Reveal>

        <Reveal delay={0.08} style={{ marginTop: "var(--s-7)" }}>
          <span className="badge">Snake за кордоном</span>
          <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>
            Наші кальяни курять у Дубаї, Польщі, Казахстані та Німеччині. Ми не робили для цього нічого особливого
            — хтось побачив в Instagram, написав, замовив, показав друзям. Найдивніше відчуття — коли тобі
            надсилають фото твоєї шахти зі столу в місті, де ти ніколи не був.
          </p>
        </Reveal>

        <Reveal delay={0.14} style={{ marginTop: "var(--s-7)", borderLeft: "2px solid var(--gold)", paddingLeft: "var(--s-5)" }}>
          <p style={{ fontSize: 20, color: "var(--text)", lineHeight: 1.5 }}>
            Зроблено в Україні — не як гасло на банері. Дерево ріжеться в Києві, шкіра шиється в Києві, збирається
            все в Києві. У 2022-му ми не зупинилися.
          </p>
        </Reveal>

        <Reveal delay={0.2} style={{ marginTop: "var(--s-7)" }}>
          <span className="badge">Гарантія</span>
          <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>
            Наша гарантія коротка й чесна: до першого покуру, за відсутності механічних заводських пошкоджень. Ми не
            пишемо «5 років», бо кальян — це не техніка, яка ламається сама. Ми відповідаємо за те, що зробили ми:
            за різ, за шов, за посадку.
          </p>
        </Reveal>
      </section>

      <section style={{ background: "var(--ink-2)", borderTop: "1px solid var(--line)", paddingBlock: "var(--s-8)" }}>
        <Reveal className="wrap flex items-center gap-4" style={{ gap: "var(--s-5)" }}>
          <Image src="/images/brand/mark-light.webp" alt="" width={40} height={40} style={{ width: 32, height: 32 }} />
          <p style={{ fontSize: "var(--t-sm)", color: "var(--text-mute)" }}>
            {dict.footer.madeIn}
          </p>
        </Reveal>
      </section>
    </div>
  );
}
