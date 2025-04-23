import NavigateSteps from "./NavigateSteps";

interface Props {
  step: number;
  setStep: (step: number) => void;
  togglePlan: boolean;
  selectedPlan: number;
  selectedAddons: number[];
  validForm: boolean;
}

const addonPlans = [
  {
    id: 1,
    title: "Online service",
    monthlyPlan: "+$1/mo",
    yearlyPlan: "+$10/yr",
  },
  {
    id: 2,
    title: "Larger storage",
    monthlyPlan: "+$2/mo",
    yearlyPlan: "+$20/yr",
  },
  {
    id: 3,
    title: "Customizable profile",
    monthlyPlan: "+$2/mo",
    yearlyPlan: "+$20/yr",
  },
];

const StepFour = ({
  step,
  setStep,
  validForm,
  togglePlan,
  selectedPlan,
  selectedAddons,
}: Props) => {
  const planSelection = () => {
    switch (selectedPlan) {
      case 1:
        return "Arcade";
      case 2:
        return "Advanced";
      case 3:
        return "Pro";
      default:
        return "Arcade";
    }
  };

  const selectedPlanCost = () => {
    switch (selectedPlan) {
      case 1:
        return togglePlan ? "$90/yr" : "$9/mo";
      case 2:
        return togglePlan ? "$120/yr" : "$12/mo";
      case 3:
        return togglePlan ? "$150/yr" : "$15/mo";
      default:
        return togglePlan ? "$90/yr" : "$9/mo";
    }
  };

  const calculateTotal = () => {
    let total = 0;
    total += parseInt(selectedPlanCost().replace(/\D/g, ""));

    selectedAddons.forEach((id) => {
      const addons = addonPlans.find((a) => a.id === id);

      if (addons)
        total += parseInt(
          (togglePlan ? addons.yearlyPlan : addons.monthlyPlan).replace(
            /\D/g,
            ""
          )
        );
    });
    return `+$${total}/${togglePlan ? "yr" : "mo"}`;
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl sm:text-3xl font-bold text-primary-marine-blue">
        Finishing up
      </h1>
      <p className="mt-2 text-nautral-cool-gray">
        Double-check everything looks OK before comfirming.
      </p>
      <div className="px-5 py-3.5 bg-nautral-magnolia rounded mt-8 lg:w-[450px]">
        <div
          className={`flex items-center justify-between ${
            selectedAddons.length > 0 &&
            "pb-4 border-b-2 border-nautral-light-gray"
          }`}
        >
          <div>
            <div className="flex items-center gap-1 text-[15px] font-semibold text-primary-marine-blue">
              <p>{planSelection()}</p>
              <p>{`(${togglePlan ? "Yearly" : "Monthly"})`}</p>
            </div>
            <p
              className="text-sm underline text-nautral-cool-gray hover:text-primary-purplish-blue cursor-pointer transition-colors duration-150 ease-in"
              onClick={() => setStep(2)}
            >
              Change
            </p>
          </div>
          <p className="font-semibold text-[15px] text-primary-marine-blue">
            {selectedPlanCost()}
          </p>
        </div>
        {selectedAddons.length > 0 && (
          <div className="pt-4">
            {selectedAddons.map((id) => {
              const addons = addonPlans.find((a) => a.id === id);
              return (
                <div
                  key={id}
                  className="flex items-center justify-between mb-4"
                >
                  <p className="text-sm text-nautral-cool-gray font-medium">
                    {addons?.title}
                  </p>
                  <p className="text-sm text-primary-marine-blue font-medium">
                    {togglePlan ? addons?.yearlyPlan : addons?.monthlyPlan}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between pt-6 px-6">
        <p className="text-sm text-nautral-cool-gray font-medium">{`Total (per ${
          togglePlan ? "year" : "month"
        })`}</p>
        <p className="font-bold text-lg sm:text-xl text-primary-purplish-blue">
          {calculateTotal()}
        </p>
      </div>
      <NavigateSteps step={step} setStep={setStep} validForm={validForm} />
    </div>
  );
};

export default StepFour;
