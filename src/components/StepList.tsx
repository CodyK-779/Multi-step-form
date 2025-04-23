import { useEffect, useState } from "react";
import desktopBg from "../assets/images/bg-sidebar-desktop.svg";
import mobileBg from "../assets/images/bg-sidebar-mobile.svg";

interface Props {
  step: number;
  setStep: (step: number) => void;
}

const stepValues = [
  { id: 1, title: "STEP 1", value: "YOUR INFO" },
  { id: 2, title: "STEP 2", value: "SELECT PLAN" },
  { id: 3, title: "STEP 3", value: "ADD-ONS" },
  { id: 4, title: "STEP 4", value: "SUMMARY" },
];

const StepList = ({ step, setStep }: Props) => {
  const [bgImage, setBgImage] = useState(
    window.innerWidth >= 640 ? desktopBg : mobileBg
  );

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth >= 640 ? desktopBg : mobileBg);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (id: number) => {
    if (step < 5) {
      setStep(id);
    }
  };

  return (
    <div className="relative">
      <img className="max-w-[274px]" src={bgImage} />
      <div className="absolute top-10 left-6">
        <div className="flex flex-row sm:flex-col gap-2 sm:gap-6">
          {stepValues.map((s) => (
            <div
              key={s.id}
              className="flex items-start gap-4 text-white tracking-wider"
            >
              <div
                onClick={() => handleNavigation(s.id)}
                className={`px-[11px] py-1 rounded-full border cursor-pointer transition-all duration-[0.15s] ease-in ${
                  step === s.id
                    ? "bg-primary-light-blue text-black"
                    : "bg-transparent text-white"
                }`}
              >
                {s.id}
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-nautral-cool-gray">{s.title}</p>
                <p className="font-medium">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepList;
