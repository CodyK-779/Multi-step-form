import mobileBg from "../assets/images/bg-sidebar-mobile.svg";

interface Props {
  step: number;
  setStep: (step: number) => void;
  validForm: boolean;
  formId: string;
}

const StepListMB = ({ step, setStep, validForm, formId }: Props) => {
  const handleNextStep = () => {
    if (step === 4) {
      if (validForm) {
        setStep(5);
      } else {
        alert("Step one is incomplete.");
        setStep(1);
      }
    } else if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleNavigation = (id: number) => {
    if (step < 5) {
      setStep(id);
    }
  };

  return (
    <div className="relative flex flex-col justify-between">
      <img src={mobileBg} className="w-full" />
      <div className="flex items-center gap-4 absolute z-10 top-9 left-1/2 transform -translate-x-1/2">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            onClick={() => handleNavigation(s)}
            className={`px-3 py-1 rounded-full border cursor-pointer transition-all duration-[0.15s] ease-in ${
              step === s
                ? "bg-primary-light-blue text-black"
                : "bg-transparent text-white"
            }`}
          >
            {s}
          </div>
        ))}
      </div>
      <div
        className={`${
          step === 5 ? "hidden" : "fixed"
        } bottom-0 p-4 w-full bg-white z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]`}
      >
        <div
          className={`flex items-center justify-between ${
            step === 1 && "relative py-5"
          }`}
        >
          {step !== 1 && (
            <button
              className="text-primary-marine-blue font-medium"
              onClick={() => setStep(step - 1)}
            >
              Go Back
            </button>
          )}
          {step === 1 ? (
            <button
              form={formId}
              type="submit"
              className="bg-primary-marine-blue text-white py-2.5 px-5 rounded-md text-sm hover:bg-opacity-75 transition-bg duration-150 ease-in absolute right-0"
            >
              Next Step
            </button>
          ) : (
            <button
              onClick={handleNextStep}
              className={`${
                step === 4
                  ? "bg-primary-purplish-blue"
                  : "bg-primary-marine-blue"
              } text-white py-2.5 px-5 rounded-md text-sm hover:bg-opacity-75 transition-bg duration-150 ease-in`}
            >
              {step === 4 ? "Continue" : "Next Step"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepListMB;
