import { Shell } from "./Shell";
import { ArrowRight, Clock, Target, ListChecks } from "lucide-react";

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9 text-primary-foreground" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 3a3 3 0 0 0-3 3v.2A3 3 0 0 0 4 9.2v.6a3 3 0 0 0 1 2.2A3 3 0 0 0 4 14v.6A3 3 0 0 0 7 18a3 3 0 0 0 3 3 2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/>
    <path d="M14.5 3a3 3 0 0 1 3 3v.2A3 3 0 0 1 20 9.2v.6a3 3 0 0 1-1 2.2A3 3 0 0 1 20 14v.6A3 3 0 0 1 17 18a3 3 0 0 1-3 3 2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/>
  </svg>
);

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export const Screen1Intro = ({ onNext, onBack }: Props) => {
  const infoRows = [
    { tag: "TIME", tagBg: "bg-primary/10 text-primary", icon: Clock, label: "Time Required", value: "5–7 minutes" },
    { tag: "DO", tagBg: "bg-tension/10 text-tension", icon: ListChecks, label: "What You'll Do", value: "Identify your headache type & learn management tips" },
    { tag: "GOAL", tagBg: "bg-sinus/10 text-sinus", icon: Target, label: "Goal", value: "Understand triggers & reduce headache frequency" },
  ];

  return (
    <Shell
      step={1}
      total={4}
      progress={25}
      onBack={onBack}
      cta={
        <button
          onClick={onNext}
          className="gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-2xl shadow-button flex items-center gap-2 hover:opacity-95 active:scale-[0.98] transition"
        >
          Let's Begin <ArrowRight className="w-4 h-4" />
        </button>
      }
    >
      {/* Hero */}
      <div className="relative gradient-hero mx-5 mt-3 rounded-3xl p-6 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-button mb-4">
            <BrainIcon />
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-primary/20 text-primary-glow border border-primary/30">
            Neurosurgeon · Activity
          </span>
          <h1 className="mt-3 text-[22px] font-bold leading-tight text-white">
            Understand & Manage Your Headaches
          </h1>
          <p className="mt-2 text-[13px] leading-relaxed text-white/70">
            Headaches are one of the most common neurological complaints — but most people don't know what's causing theirs. This guide helps you identify your type and manage it better.
          </p>
        </div>
      </div>

      {/* Stat chips */}
      <div className="flex items-center justify-center gap-2 mt-4 px-5 flex-wrap">
        {["5–7 mins", "3 Steps", "Headache Management"].map((s) => (
          <span key={s} className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-muted text-foreground/70">
            {s}
          </span>
        ))}
      </div>

      {/* Info list */}
      <div className="px-5 mt-5 space-y-2.5 pb-6">
        {infoRows.map(({ tag, tagBg, label, value }) => (
          <div
            key={tag}
            className="flex items-center gap-3 p-3 rounded-2xl border border-border bg-card"
          >
            <div className={`shrink-0 w-12 h-12 rounded-xl ${tagBg} flex items-center justify-center text-[10px] font-bold tracking-wide`}>
              {tag}
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">{label}</div>
              <div className="text-sm font-semibold text-foreground leading-snug">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};
