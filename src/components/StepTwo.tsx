import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import NavigateSteps from "./NavigateSteps";

interface Props {
  step: number;
  setStep: (step: number) => void;
  togglePlan: boolean;
  setTogglePlan: (togglePlan: boolean) => void;
  selectedPlan: number;
  setSelectedPlan: (selectedPlan: number) => void;
  validForm: boolean;
}

const billingPlans = [
  {
    id: 1,
    image: arcade,
    title: "Arcade",
    yearlyLimit: "$90/yr",
    monthlyLimit: "$9/mo",
    bonus: "2 months free",
  },
  {
    id: 2,
    image: advanced,
    title: "Advanced",
    yearlyLimit: "$120/yr",
    monthlyLimit: "$12/mo",
    bonus: "2 months free",
  },
  {
    id: 3,
    image: pro,
    title: "Pro",
    yearlyLimit: "$150/yr",
    monthlyLimit: "$15/mo",
    bonus: "2 months free",
  },
];

const paymentStyle =
  "px-3 py-4 flex flex-row cm:flex-col gap-4 cm:gap-9 items-center cm:items-start border rounded-md w-full cm:w-[110px] md:w-[130px] hover:border-2 hover:border-primary-purplish-blue cursor-pointer transition-all duration-150 ease-in";

const StepTwo = ({
  step,
  setStep,
  togglePlan,
  setTogglePlan,
  selectedPlan,
  setSelectedPlan,
  validForm,
}: Props) => {
  return (
    <div className="flex flex-col h-[380px] overflow-y-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary-marine-blue">
          Select your plan
        </h1>
        <p className="mt-2 text-nautral-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
        <div className="grid grid-cols-1 cm:grid-cols-3 gap-4 mt-9">
          {billingPlans.map((b) => (
            <div
              key={b.id}
              onClick={() => setSelectedPlan(b.id)}
              className={`${paymentStyle} ${
                selectedPlan === b.id &&
                "bg-nautral-magnolia border-2 border-primary-purplish-blue"
              }`}
            >
              <img src={b.image} />
              <div>
                <p className="font-medium text-primary-marine-blue">
                  {b.title}
                </p>
                <p className="text-sm text-nautral-cool-gray">
                  {togglePlan ? b.yearlyLimit : b.monthlyLimit}
                </p>
                {togglePlan && (
                  <p className="text-sm text-primary-marine-blue hidden cm:block">
                    {b.bonus}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 w-full justify-center bg-nautral-magnolia mt-7 py-3 rounded text-xs font-medium">
          <p
            className={`${
              togglePlan ? "text-nautral-cool-gray" : "text-primary-marine-blue"
            }`}
          >
            Monthly
          </p>
          <div
            onClick={() => setTogglePlan(!togglePlan)}
            className={`w-9 bg-primary-marine-blue h-[18px] rounded-full flex items-center p-1 cursor-pointer`}
          >
            <div
              className={`w-3 h-3 ${
                togglePlan ? "ml-4" : "ml-0"
              } bg-white rounded-full transition-all duration-150 ease-in`}
            ></div>
          </div>
          <p
            className={`${
              togglePlan ? "text-primary-marine-blue" : "text-nautral-cool-gray"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
      <NavigateSteps step={step} setStep={setStep} validForm={validForm} />
    </div>
  );
};

export default StepTwo;
