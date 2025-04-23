import thankyou from "../assets/images/icon-thank-you.svg";

interface Props {
  step: number;
}

const StepFive = ({ step }: Props) => {
  return (
    <div
      className={`flex flex-col items-center pr-0 cm:pr-14 ${
        step === 5 && "py-14"
      }`}
    >
      <img className="w-14 cm:w-auto" src={thankyou} />
      <h1 className="mt-6 font-bold text-2xl text-primary-marine-blue">
        Thank you!
      </h1>
      <p className="text-center mt-2 text-nautral-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default StepFive;
