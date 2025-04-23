import checkmark from "../assets/images/icon-checkmark.svg";
import NavigateSteps from "./NavigateSteps";

interface Props {
  step: number;
  setStep: (step: number) => void;
  togglePlan: boolean;
  selectedAddons: number[];
  setSelectedAddons: React.Dispatch<React.SetStateAction<number[]>>;
  validForm: boolean;
}

const addonPlans = [
  {
    id: 1,
    image: checkmark,
    title: "Online service",
    desc: "Access to multiplayer games",
    monthlyPlan: "+$1/mo",
    yearlyPlan: "+$10/yr",
  },
  {
    id: 2,
    image: checkmark,
    title: "Larger storage",
    desc: "Extra 1TB of cloud save",
    monthlyPlan: "+$2/mo",
    yearlyPlan: "+$20/yr",
  },
  {
    id: 3,
    image: checkmark,
    title: "Customizable Profile",
    desc: "Custom theme on your profile",
    monthlyPlan: "+$2/mo",
    yearlyPlan: "+$20/yr",
  },
];

const StepThree = ({
  step,
  setStep,
  validForm,
  togglePlan,
  selectedAddons,
  setSelectedAddons,
}: Props) => {
  const handleCheck = (id: number) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col h-[400px] overflow-y-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-primary-marine-blue">
        Pick add-ons
      </h1>
      <p className="mt-2 text-nautral-cool-gray">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="grid grid-cols-1 w-full gap-4 mt-10">
        {addonPlans.map((a) => (
          <div
            key={a.id}
            onClick={() => handleCheck(a.id)}
            className={`${
              selectedAddons.includes(a.id) &&
              "bg-nautral-magnolia border-primary-purplish-blue"
            } flex items-center justify-between px-5 py-3.5 border-2 rounded-lg min-[870px]:w-[440px] cursor-pointer hover:border-primary-purplish-blue transition-all duration-[0.15s] ease-in`}
          >
            <div className="flex items-center gap-5">
              <div
                className={`w-5 h-5 border rounded flex items-center justify-center ${
                  selectedAddons.includes(a.id)
                    ? "bg-primary-purplish-blue"
                    : "bg-white"
                }`}
              >
                {selectedAddons.includes(a.id) && <img src={a.image} />}
              </div>
              <div>
                <p className="font-medium text-primary-marine-blue">
                  {a.title}
                </p>
                <p className="text-sm font-medium text-nautral-cool-gray">
                  {a.desc}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-primary-purplish-blue">
                {togglePlan ? a.yearlyPlan : a.monthlyPlan}
              </p>
            </div>
          </div>
        ))}
      </div>
      <NavigateSteps step={step} setStep={setStep} validForm={validForm} />
    </div>
  );
};

export default StepThree;
