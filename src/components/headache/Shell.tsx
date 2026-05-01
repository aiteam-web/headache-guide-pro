import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

interface ShellProps {
  step: number;
  total: number;
  progress: number;
  onBack: () => void;
  children: ReactNode;
  cta: ReactNode;
}

export const Shell = ({ step, total, progress, onBack, children, cta }: ShellProps) => {
  return (
    <div
      key={step}
      className="w-[390px] bg-card rounded-[24px] shadow-card overflow-hidden flex flex-col animate-slide-in-left"
      style={{ minHeight: "780px" }}
    >
      {/* Top nav */}
      <div className="flex items-center justify-between px-5 pt-5">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <span className="text-xs font-semibold text-muted-foreground tracking-wide">
          {step} of {total}
        </span>
      </div>

      {/* Progress */}
      <div className="px-5 pt-3 pb-2">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-semibold text-foreground/70 tracking-wide uppercase">
            Headache & Migraine Guide
          </span>
          <span className="text-[11px] font-bold text-primary">{progress}%</span>
        </div>
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full gradient-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">{children}</div>

      {/* CTA */}
      <div className="px-5 py-4 flex justify-end border-t border-border/60 bg-card">
        {cta}
      </div>
    </div>
  );
};
