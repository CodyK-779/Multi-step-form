interface Props {
  step: number;
  setStep: (step: number) => void;
  validForm: boolean;
}

const NavigateSteps = ({ step, setStep, validForm }: Props) => {
  const handleNavigate = () => {
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

  return (
    <div className="absolute bottom-4 w-full hidden cm:block">
      <div className="flex items-center justify-between w-full">
        <button
          className="text-primary-marine-blue font-medium"
          onClick={() => setStep(step - 1)}
        >
          Go Back
        </button>
        <button
          onClick={handleNavigate}
          className={`text-white py-2.5 px-5 rounded-md text-sm ${
            step === 4 ? "hover:bg-opacity-75" : "hover:bg-opacity-85"
          } transition-bg duration-150 ease-in ${
            step === 4 ? "bg-primary-purplish-blue" : "bg-primary-marine-blue"
          }`}
        >
          {step === 4 ? "Continue" : "Next Step"}
        </button>
      </div>
    </div>
  );
};

export default NavigateSteps;
