import { useState } from "react";
import { Screen1Intro } from "@/components/headache/Screen1Intro";
import { Screen2Types } from "@/components/headache/Screen2Types";
import { Screen3Triggers } from "@/components/headache/Screen3Triggers";
import { Screen4Plan } from "@/components/headache/Screen4Plan";
import { toast } from "sonner";

const Index = () => {
  const [step, setStep] = useState(1);
  const [triggers, setTriggers] = useState<string[]>([]);

  const exit = () => {
    toast("Activity exited");
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center py-8 px-4 bg-background">
      <h1 className="sr-only">Headache & Migraine Management Guide</h1>
      {step === 1 && <Screen1Intro onBack={exit} onNext={() => setStep(2)} />}
      {step === 2 && <Screen2Types onBack={() => setStep(1)} onNext={() => setStep(3)} />}
      {step === 3 && (
        <Screen3Triggers
          onBack={() => setStep(2)}
          onNext={() => setStep(4)}
          selected={triggers}
          setSelected={setTriggers}
        />
      )}
      {step === 4 && (
        <Screen4Plan
          onBack={() => setStep(3)}
          onComplete={() => {
            toast.success("Exercise completed", {
              description: "Great job — keep tracking your headaches.",
            });
            setStep(1);
            setTriggers([]);
          }}
          triggerCount={triggers.length}
        />
      )}
    </main>
  );
};

export default Index;
