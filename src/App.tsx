import { useState } from "react";
import StepList from "./components/StepList";
import StepDisplay from "./components/StepDisplay";
import StepListMB from "./components/StepListMB";

const App = () => {
  const formId = "form-id";
  const [step, setStep] = useState(1);
  const [togglePlan, setTogglePlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
  const [validForm, setValidForm] = useState(false);

  return (
    <div className="bg-nautral-magnolia min-h-screen cm:py-16 cm:px-4">
      <div className="relative cm:hidden">
        {" "}
        {/* mobile view */}
        <StepListMB
          step={step}
          setStep={setStep}
          validForm={validForm}
          formId={formId}
        />
        <StepDisplay
          formId={formId}
          step={step}
          setStep={setStep}
          validForm={validForm}
          setValidForm={setValidForm}
          togglePlan={togglePlan}
          setTogglePlan={setTogglePlan}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          selectedAddons={selectedAddons}
          setSelectedAddons={setSelectedAddons}
        />
      </div>
      <div
        className={`hidden cm:flex flex-col cm:flex-row max-w-[900px] mx-auto bg-white rounded-lg p-3 ${
          step < 5 ? "lg:gap-20 min-[860px]:gap-14 sm:gap-8" : "gap-14"
        }`}
      >
        {" "}
        {/* desktop view */}
        <StepList step={step} setStep={setStep} />
        <StepDisplay
          formId={formId}
          step={step}
          setStep={setStep}
          validForm={validForm}
          setValidForm={setValidForm}
          togglePlan={togglePlan}
          setTogglePlan={setTogglePlan}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          selectedAddons={selectedAddons}
          setSelectedAddons={setSelectedAddons}
        />
      </div>
    </div>
  );
};

export default App;
