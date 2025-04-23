import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "This field is required" })
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email()
    .endsWith("@gmail.com", "Invalid Email"),
  phone: z
    .string()
    .min(1, { message: "This field is required" })
    .regex(/^[\d\s+-]+$/, { message: "Only numbers are allowed" })
    .min(3, { message: "Phone number must be at least 3 characters" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  setStep: (step: number) => void;
  setValidForm: (validForm: boolean) => void;
  formId: string;
}

const StepOne = ({ setStep, setValidForm, formId }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = () => {
    setStep(2);
    setValidForm(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id={formId} className="w-full">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary-marine-blue">
            Personal info
          </h1>
          <p className="mt-2 text-nautral-cool-gray">
            Please provide your name, email address, and phone number.
          </p>
          {/* Name input */}
          <div className="flex items-center justify-between mt-4 cm:mt-8 cm:mb-2 mb-1">
            <label
              htmlFor="name"
              className="block text-primary-marine-blue font-normal"
            >
              Name
            </label>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <input
            {...register("name")}
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            className={`py-2 px-3 border-2 w-full rounded-md cm:rounded-lg ${
              errors.name
                ? "border-primary-strawberry-red focus:outline-primary-strawberry-red"
                : "focus:outline-primary-purplish-blue"
            }`}
          />
          {/* Email input */}
          <div className="flex items-center justify-between cm:mt-5 mt-3 cm:mb-2 mb-1">
            <label
              htmlFor="email"
              className="block text-primary-marine-blue font-normal"
            >
              Email Address
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <input
            {...register("email", { required: true, minLength: 3 })}
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className={`py-2 px-3 border-2 w-full rounded-md cm:rounded-lg ${
              errors.email
                ? "border-primary-strawberry-red focus:outline-primary-strawberry-red"
                : "focus:outline-primary-purplish-blue"
            }`}
          />
          {/* Phone Num input */}
          <div className="flex items-center justify-between cm:mt-5 mt-3 cm:mb-2 mb-1">
            <label
              htmlFor="phone"
              className="block text-primary-marine-blue font-normal"
            >
              Phone Number
            </label>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <input
            {...register("phone")}
            id="phone"
            type="text"
            placeholder="e.g. +1 234 567 890"
            className={`py-2 px-3 border-2 w-full rounded-md cm:rounded-lg ${
              errors.phone
                ? "border-primary-strawberry-red focus:outline-primary-strawberry-red"
                : "focus:outline-primary-purplish-blue"
            }`}
          />
        </div>
        <button
          type="submit"
          className="hidden cm:block absolute bottom-4 right-0 bg-primary-marine-blue hover:bg-opacity-85 transition-bg duration-150 ease-in text-white py-2.5 px-5 rounded-md text-sm cursor-pointer"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default StepOne;
