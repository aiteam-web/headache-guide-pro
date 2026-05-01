import { useState } from "react";
import { Shell } from "./Shell";
import { ArrowRight, ChevronDown } from "lucide-react";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

type TypeKey = "tension" | "migraine" | "cluster" | "sinus";

const TYPES: {
  key: TypeKey;
  name: string;
  short: string;
  accent: string; // tailwind text-color class for accents/labels
  bar: string; // bg color for left bar
  headerBg: string;
  bodyBg: string;
  triggers: string;
  duration: string;
  management: string;
}[] = [
  {
    key: "tension",
    name: "Tension Headache",
    short: "Dull pressure around the forehead or back of head",
    accent: "text-tension",
    bar: "bg-tension",
    headerBg: "bg-tension-tint",
    bodyBg: "bg-tension-tint/50",
    triggers: "Stress, poor posture, eye strain, dehydration, skipping meals",
    duration: "30 minutes to several hours",
    management: "Rest, hydration, gentle neck stretches, OTC pain relief, stress reduction",
  },
  {
    key: "migraine",
    name: "Migraine",
    short: "Severe throbbing pain, usually on one side",
    accent: "text-migraine",
    bar: "bg-migraine",
    headerBg: "bg-migraine-tint",
    bodyBg: "bg-migraine-tint/50",
    triggers: "Hormonal changes, certain foods, bright lights, strong smells, stress, irregular sleep",
    duration: "4–72 hours",
    management: "Rest in a dark quiet room, prescribed medication, cold compress, avoid known triggers",
  },
  {
    key: "cluster",
    name: "Cluster Headache",
    short: "Burning or piercing pain around one eye",
    accent: "text-cluster",
    bar: "bg-cluster",
    headerBg: "bg-cluster-tint",
    bodyBg: "bg-cluster-tint/50",
    triggers: "Alcohol, smoking, strong smells, disrupted sleep patterns",
    duration: "15 minutes to 3 hours, can occur multiple times a day",
    management: "Prescribed oxygen therapy, triptans — see a neurologist immediately",
  },
  {
    key: "sinus",
    name: "Sinus Headache",
    short: "Deep constant pain in cheekbones or forehead",
    accent: "text-sinus",
    bar: "bg-sinus",
    headerBg: "bg-sinus-tint",
    bodyBg: "bg-sinus-tint/50",
    triggers: "Sinus infection, allergies, cold weather, nasal congestion",
    duration: "As long as sinus congestion persists",
    management: "Steam inhalation, nasal decongestants, antihistamines, treating underlying sinus issue",
  },
];

export const Screen2Types = ({ onNext, onBack }: Props) => {
  const [expanded, setExpanded] = useState<TypeKey | null>("tension");

  return (
    <Shell
      step={2}
      total={4}
      progress={50}
      onBack={onBack}
      cta={
        <button
          onClick={onNext}
          className="gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-2xl shadow-button flex items-center gap-2 hover:opacity-95 active:scale-[0.98] transition"
        >
          Got it! Next <ArrowRight className="w-4 h-4" />
        </button>
      }
    >
      <div className="px-5 pt-4">
        <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
          Step 1 of 3 · Learn
        </span>
        <h2 className="mt-3 text-[20px] font-bold text-foreground leading-tight">
          What Kind of Headache Do You Get?
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Tap each type to learn more</p>
      </div>

      <div className="px-5 mt-4 space-y-2.5 pb-6">
        {TYPES.map((t) => {
          const open = expanded === t.key;
          return (
            <div
              key={t.key}
              className="rounded-2xl overflow-hidden border border-border bg-card"
            >
              <button
                onClick={() => setExpanded(open ? null : t.key)}
                className={`w-full flex items-stretch text-left ${open ? t.headerBg : "bg-card"} transition-colors`}
              >
                <div className={`w-1 ${t.bar}`} />
                <div className="flex-1 px-3.5 py-3 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className={`text-sm font-bold ${t.accent}`}>{t.name}</div>
                    <div className="text-[12px] text-muted-foreground leading-snug mt-0.5">
                      {t.short}
                    </div>
                  </div>
                  <ChevronDown
                    className={`shrink-0 w-4 h-4 ${t.accent} transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
              {open && (
                <div className={`px-4 py-3 ${t.bodyBg} animate-fade-in space-y-2`}>
                  {[
                    { k: "Triggers", v: t.triggers },
                    { k: "Duration", v: t.duration },
                    { k: "Management", v: t.management },
                  ].map((row) => (
                    <div key={row.k} className="text-[12.5px] leading-relaxed">
                      <span className={`font-bold ${t.accent}`}>{row.k}: </span>
                      <span className="text-foreground/80">{row.v}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Shell>
  );
};
