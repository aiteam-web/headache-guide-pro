import { Shell } from "./Shell";
import { ArrowRight, Check } from "lucide-react";

const TRIGGERS = [
  "Stress & anxiety",
  "Poor or irregular sleep",
  "Not drinking enough water",
  "Too much caffeine or caffeine withdrawal",
  "Skipping meals or irregular eating",
  "Too much screen time",
  "Bright lights or sun exposure",
  "Strong smells or smoke",
  "Weather changes",
  "Hormonal changes (periods, pregnancy)",
  "Alcohol or certain foods",
  "Poor posture while sitting",
];

interface Props {
  onNext: () => void;
  onBack: () => void;
  selected: string[];
  setSelected: (s: string[]) => void;
}

export const Screen3Triggers = ({ onNext, onBack, selected, setSelected }: Props) => {
  const toggle = (t: string) => {
    if (selected.includes(t)) setSelected(selected.filter((x) => x !== t));
    else setSelected([...selected, t]);
  };

  const count = selected.length;
  let feedback: { text: string; classes: string } | null = null;
  if (count >= 1 && count <= 3) {
    feedback = {
      text: "Good awareness! Avoiding these triggers can significantly reduce your headaches.",
      classes: "bg-tension-tint border-tension/30 text-tension",
    };
  } else if (count >= 4 && count <= 6) {
    feedback = {
      text: "You have several triggers — let's work on managing them one at a time.",
      classes: "bg-cluster-tint border-cluster/30 text-cluster",
    };
  } else if (count >= 7) {
    feedback = {
      text: "Multiple triggers identified. Consider keeping a headache diary and consulting your neurologist.",
      classes: "bg-migraine-tint border-migraine/30 text-migraine",
    };
  }

  return (
    <Shell
      step={3}
      total={4}
      progress={75}
      onBack={onBack}
      cta={
        <button
          onClick={onNext}
          className="gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-2xl shadow-button flex items-center gap-2 hover:opacity-95 active:scale-[0.98] transition"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      }
    >
      <div className="px-5 pt-4">
        <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
          Step 2 of 3 · Identify
        </span>
        <h2 className="mt-3 text-[20px] font-bold text-foreground leading-tight">
          What Triggers Your Headaches?
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Select all that apply to you</p>
      </div>

      <div className="px-5 mt-4 space-y-2 pb-4">
        {TRIGGERS.map((t) => {
          const on = selected.includes(t);
          return (
            <button
              key={t}
              onClick={() => toggle(t)}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl border text-left transition-all ${
                on
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              <span
                className={`shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                  on ? "bg-primary border-primary" : "border-border bg-card"
                }`}
              >
                {on && <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />}
              </span>
              <span className={`text-sm ${on ? "font-semibold text-foreground" : "text-foreground/80"}`}>
                {t}
              </span>
            </button>
          );
        })}

        {feedback && (
          <div className={`mt-4 p-3.5 rounded-2xl border animate-fade-in ${feedback.classes}`}>
            <div className="text-[11px] font-bold uppercase tracking-wide opacity-80 mb-1">
              {count} selected
            </div>
            <p className="text-[13px] leading-relaxed font-medium">{feedback.text}</p>
          </div>
        )}
      </div>
    </Shell>
  );
};
