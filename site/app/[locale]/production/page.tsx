import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export async function generateMetadata(props: PageProps<"/[locale]/production">): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: "Виробництво",
    description: "Як робиться Snake Hookah: цільне дерево, ручна обшивка шкірою, контроль якості на кожному кальяні.",
    alternates: { canonical: `/${locale}/production` },
  };
}

export default async function ProductionPage(props: PageProps<"/[locale]/production">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  return (
    <div>
      <section className="wrap-narrow" style={{ paddingBlock: "var(--s-9)" }}>
        <Reveal>
          <span className="badge">Виробництво</span>
          <h1 style={{ fontSize: "var(--t-hero)", marginTop: "var(--s-5)", lineHeight: 1.15 }}>
            Десять пар рук, один кальян за раз
          </h1>
          <p style={{ fontSize: 19, color: "var(--text-body)", marginTop: "var(--s-5)", maxWidth: 600 }}>
            Столяри, шкіряники, збирачі в Києві. Ми свідомо не йдемо в об&apos;єм — у ту хвилину, коли ми поставимо
            конвеєр, зникне сенс усього, що ми робимо.
          </p>
        </Reveal>
      </section>

      <section style={{ paddingBlock: "var(--s-8)" }}>
        <div className="wrap grid grid-cols-1 md:grid-cols-3" style={{ gap: "var(--s-6)" }}>
          <Reveal style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
            <h3 style={{ fontSize: "var(--t-h3)" }}>1. Різ</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              Спіраль виточується вручну з цільного масиву навколо сталевого стовбура Ø 16 мм. Подвійне плетіння
              вимагає постійного контролю глибини різу — помилка на пів міліметра йде в брак.
            </p>
          </Reveal>
          <Reveal delay={0.08} style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
            <h3 style={{ fontSize: "var(--t-h3)" }}>2. Шкіра</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              Кільця та, у Wild Collection, весь корпус обшиваються натуральною шкірою вручну. Шов має лягти рівно
              по всій довжині циліндра — найповільніша частина виробництва.
            </p>
          </Reveal>
          <Reveal delay={0.16} style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
            <h3 style={{ fontSize: "var(--t-h3)" }}>3. Контроль</h3>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              Кожен кальян перед відправкою проходить через руки того, хто підписується, що з ним усе гаразд —
              тяга, посадка, шов.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--sec-coffee)", paddingBlock: "var(--s-9)" }}>
        <div className="wrap-narrow">
          <Reveal>
            <span className="badge">Скільки це триває</span>
            <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>
              До 100 одиниць на місяць — і ми не піднімаємо цю межу штучно
            </h2>
          </Reveal>
          <Reveal delay={0.06} style={{ marginTop: "var(--s-5)" }}>
            <p style={{ color: "var(--text-body)" }}>
              Spiral — до 100 одиниць на місяць. Це наша реальна стеля. Wild — значно довше: ручна обшивка не
              масштабується, не можна взяти вдвічі більше людей і отримати вдвічі більше кальянів. Можна тільки
              отримати вдвічі більше нерівних швів.
            </p>
            <p style={{ color: "var(--text-body)", marginTop: "var(--s-4)" }}>
              Загалом за ці роки ми випустили близько <strong style={{ color: "var(--text)" }}>1000 екземплярів</strong>.
              Не мільйон. Ми свідомо не йдемо в об&apos;єм.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="wrap-narrow" style={{ paddingBlock: "var(--s-9)" }}>
        <Reveal>
          <span className="badge">Матеріали</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>Дерево, шкіра, сталь — і нічого зайвого</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "var(--s-5)", marginTop: "var(--s-6)" }}>
          <Reveal delay={0.04}>
            <h4 style={{ color: "var(--text)", fontWeight: 600 }}>Дерево</h4>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              Горіх світлий і білий, венге, сукупіра, тигрове дерево, фіолетовий горіх — обираємо породу не за
              красою на фото, а за поведінкою: щільність, вологостійкість, здатність тримати форму.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h4 style={{ color: "var(--text)", fontWeight: 600 }}>Шкіра</h4>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              Натуральна, не плівка з тисненням. Темніє й набуває патини з часом замість того, щоб лущитися.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <h4 style={{ color: "var(--text)", fontWeight: 600 }}>Сталь</h4>
            <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>
              Нержавіюча шахта Ø 16 мм — діаметр, при якому затяжка не потребує зусиль, а дим встигає охолонути.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
