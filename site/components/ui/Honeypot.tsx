import { HONEYPOT_FIELD } from "@/lib/honeypot";

// Hidden from real visitors (off-screen, unreachable by tab, hidden from
// screen readers) but present in the DOM/markup for simple bots that
// autofill every input. If it arrives non-empty, the submission is spam.
export function Honeypot() {
  return (
    <input
      type="text"
      name={HONEYPOT_FIELD}
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
    />
  );
}
