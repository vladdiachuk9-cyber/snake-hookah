import type { Dictionary } from "@/lib/dictionaries/ua";

const items = [
  {
    q: "Чи входить чаша в комплект?",
    a: "Ні. Чаша — особистий вибір під ваш стиль забивки та тютюн, ми свідомо не нав'язуємо чужу глину.",
  },
  {
    q: "Як влаштована гарантія?",
    a: "До першого покуру, за відсутності механічних заводських поломок. Ми відповідаємо за різ, шов і посадку — за те, що зробили ми.",
  },
  {
    q: "Дерево справді цільне, не накладка?",
    a: "Так. Спіраль вирізається з цільного масиву й обіймає сталевий стовбур — її нема чим відклеїти, на відміну від приклеєної декоративної обгортки.",
  },
  {
    q: "Як оплатити замовлення?",
    a: "Онлайн-оплату ми поки не підключили. Залиште заявку — ми зв'яжемось і узгодимо оплату та доставку особисто.",
  },
];

export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <div>
      <h2 style={{ fontSize: "var(--t-h2)", marginBottom: "var(--s-5)" }}>{dict.product.faq}</h2>
      <div className="flex flex-col">
        {items.map((item) => (
          <details key={item.q} style={{ borderTop: "1px solid var(--line-soft)", padding: "var(--s-4) 0" }}>
            <summary style={{ cursor: "pointer", color: "var(--text)", fontSize: "var(--t-body)", fontWeight: 600 }}>
              {item.q}
            </summary>
            <p style={{ color: "var(--text-body)", fontSize: "var(--t-sm)", marginTop: "var(--s-3)" }}>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
