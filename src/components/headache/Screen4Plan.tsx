import { useState } from "react";
import { Shell } from "./Shell";
import { Check } from "lucide-react";

interface Props {
  onComplete: () => void;
  onBack: () => void;
  triggerCount: number;
}

const RELIEF = [
  "Drink a full glass of water immediately",
  "Rest in a dark, quiet room",
  "Apply a cold or warm compress to your forehead",
  "Try slow deep breathing for 5 minutes",
  "Take OTC pain relief if needed (paracetamol / ibuprofen)",
];

const DOCTOR = [
  "Headache is sudden and extremely severe",
  "Accompanied by fever, stiff neck, confusion or vision changes",
  "Occurring more than 15 days a month",
  "Not responding to any medication",
];

export const Screen4Plan = ({ onComplete, onBack, triggerCount }: Props) => {
  const [notes, setNotes] = useState("");

  let action = "Self-manage & monitor";
  if (triggerCount >= 4 && triggerCount <= 6) action = "Track triggers & adjust habits";
  else if (triggerCount >= 7) action = "Consult a neurologist";

  return (
    <Shell
      step={4}
      total={4}
      progress={100}
      onBack={onBack}
      cta={
        <button
          onClick={onComplete}
          className="gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-2xl shadow-button flex items-center gap-2 hover:opacity-95 active:scale-[0.98] transition"
        >
          Complete Exercise <Check className="w-4 h-4" strokeWidth={3} />
        </button>
      }
    >
      {/* Top hero */}
      <div className="gradient-soft-teal mx-5 mt-3 rounded-3xl px-5 py-6 text-center">
        <div className="mx-auto w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-button mb-3">
          <Check className="w-7 h-7 text-primary-foreground" strokeWidth={3} />
        </div>
        <h2 className="text-[19px] font-bold text-foreground leading-tight">
          Your Headache Management Plan
        </h2>
        <p className="text-[13px] text-foreground/70 mt-1">
          Simple steps that can make a real difference
        </p>
      </div>

      <div className="px-5 mt-4 space-y-3 pb-6">
        {/* Summary */}
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="px-4 py-2.5 bg-primary/5 border-b border-border">
            <h3 className="text-[13px] font-bold text-primary uppercase tracking-wide">
              Your Summary
            </h3>
          </div>
          <div className="divide-y divide-border">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[13px] text-muted-foreground">Triggers Identified</span>
              <span className="text-sm font-bold text-foreground">{triggerCount} of 12</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 gap-3">
              <span className="text-[13px] text-muted-foreground shrink-0">Recommended Action</span>
              <span className="text-sm font-bold text-primary text-right">{action}</span>
            </div>
          </div>
        </div>

        {/* Quick relief */}
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="px-4 py-2.5 bg-primary/5 border-b border-border">
            <h3 className="text-[13px] font-bold text-primary uppercase tracking-wide">
              Quick Relief Steps
            </h3>
          </div>
          <ol className="px-4 py-3 space-y-2.5">
            {RELIEF.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-[13px] leading-relaxed text-foreground/85">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* When to see doctor */}
        <div className="rounded-2xl border-2 border-migraine/30 overflow-hidden bg-migraine-tint/40">
          <div className="px-4 py-2.5 bg-migraine/10 border-b border-migraine/20">
            <h3 className="text-[13px] font-bold text-migraine uppercase tracking-wide">
              When to See a Doctor
            </h3>
          </div>
          <ul className="px-4 py-3 space-y-2">
            {DOCTOR.map((d) => (
              <li key={d} className="flex items-start gap-2.5">
                <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-migraine" />
                <span className="text-[13px] leading-relaxed text-foreground/85">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-[12px] font-semibold text-foreground/80 mb-1.5">
            Any notes about your headaches? (optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="E.g. I get headaches every Monday morning…"
            rows={3}
            className="w-full px-3.5 py-2.5 rounded-2xl border border-border bg-card text-[13px] resize-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
          />
        </div>

        {/* Motivational */}
        <div className="rounded-2xl bg-primary/8 border border-primary/20 p-3.5 text-center" style={{ backgroundColor: "hsl(var(--primary-tint))" }}>
          <p className="text-[13px] leading-relaxed font-semibold text-primary">
            Understanding your headaches is the first step to managing them. You are on the right track.
          </p>
        </div>
      </div>
    </Shell>
  );
};
