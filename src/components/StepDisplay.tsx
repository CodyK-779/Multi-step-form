import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import StepFive from "./StepFive";

interface Props {
  step: number;
  setStep: (step: number) => void;
  togglePlan: boolean;
  setTogglePlan: (togglePlan: boolean) => void;
  selectedPlan: number;
  setSelectedPlan: (selectedPlan: number) => void;
  selectedAddons: number[];
  setSelectedAddons: React.Dispatch<React.SetStateAction<number[]>>;
  validForm: boolean;
  setValidForm: (validForm: boolean) => void;
  formId: string;
}

const desktopStyle =
  "cm:px-0 md:pr-0 cm:py-10 cm:rounded-none cm:w-auto cm:relative cm:shadow-none cm:top-auto cm:left-auto cm:transform-none";

const StepDisplay = ({
  step,
  setStep,
  togglePlan,
  setTogglePlan,
  selectedPlan,
  setSelectedPlan,
  selectedAddons,
  setSelectedAddons,
  validForm,
  setValidForm,
  formId,
}: Props) => {
  const CurrentStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            setStep={setStep}
            setValidForm={setValidForm}
            formId={formId}
          />
        );
      case 2:
        return (
          <StepTwo
            step={step}
            setStep={setStep}
            validForm={validForm}
            togglePlan={togglePlan}
            setTogglePlan={setTogglePlan}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        );
      case 3:
        return (
          <StepThree
            step={step}
            setStep={setStep}
            validForm={validForm}
            togglePlan={togglePlan}
            selectedAddons={selectedAddons}
            setSelectedAddons={setSelectedAddons}
          />
        );
      case 4:
        return (
          <StepFour
            step={step}
            setStep={setStep}
            validForm={validForm}
            togglePlan={togglePlan}
            selectedPlan={selectedPlan}
            selectedAddons={selectedAddons}
          />
        );
      case 5:
        return <StepFive step={step} />;
      default:
        return (
          <StepOne
            setStep={setStep}
            setValidForm={setValidForm}
            formId={formId}
          />
        );
    }
  };

  return (
    <div
      className={`${
        step !== 3 ? "py-8" : "py-6"
      } px-6 rounded-lg absolute top-[120px] max-[450px]:top-[90px] bg-white w-[92%] left-1/2 transform -translate-x-1/2 shadow-xl ${desktopStyle} ${
        step === 5 && "flex items-center justify-center"
      }`}
    >
      <CurrentStep />
    </div>
  );
};

export default StepDisplay;
