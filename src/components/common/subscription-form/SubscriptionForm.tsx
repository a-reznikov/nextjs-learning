import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames";
import { useMutation } from "@tanstack/react-query";
import { HEADER_NAVIGATION } from "@/constants/links";

type Props = {
  setIsOpenedModal: Dispatch<SetStateAction<boolean>>;
};

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  section: string;
  gender: string;
};

export const SubscriptionForm: React.FC<Props> = ({ setIsOpenedModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({ mode: "onChange" });

  const mutation = useMutation({
    mutationFn: (formData: Inputs) => {
      return fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(formData),
      });
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    mutation.mutate(data);
    setIsOpenedModal(false);
    reset();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="border-b border-gray-separator pb-12">
        <h2 className="text-base font-semibold leading-7 ">
          Subscribe to the newsletter
        </h2>
        <p className="mt-1 text-sm  text-gray-600">
          Get the latest news on the selected section.
        </p>
        <div className="flex flex-col gap-5 mt-10 ">
          <fieldset>
            <label htmlFor="first-name" className="block text-sm font-medium">
              First name
            </label>
            <div className="relative mt-2 mb-4">
              <input
                {...register("firstName", {
                  required: true,
                })}
                type="text"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 p-2 shadow-sm ring-gray-300 ring-1"
              />
              {errors.firstName && (
                <p className="absolute py-1 text-red-500">
                  {"First name is required"}
                </p>
              )}
            </div>
          </fieldset>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium">
              Last name
            </label>
            <div className="relative mt-2 mb-4">
              <input
                {...register("lastName", { required: true })}
                type="text"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 p-2 shadow-sm ring-gray-300 ring-1"
              />
              {errors.lastName && (
                <p className="absolute py-1 text-red-500">
                  {"Last name is required"}
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <div className="relative mt-2 mb-4">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 p-2 shadow-sm ring-gray-300 ring-1"
              />
              {errors.email && (
                <p className="absolute py-1 text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium">
              Section
            </label>
            <div className="relative mt-2 mb-4">
              <select
                {...register("section", { required: true })}
                id="section"
                name="section"
                className="block w-full rounded-md border-0 p-2 shadow-sm ring-gray-300 ring-1"
              >
                {HEADER_NAVIGATION.map(({ name }) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
              {errors.section && (
                <p className="absolute py-1 text-red-500">{"Select section"}</p>
              )}
            </div>
          </div>
        </div>
        <fieldset className="mt-10">
          <legend className="text-sm font-semibold">Gender</legend>
          <div className="mt-3 space-y-1">
            <div className="flex items-center gap-x-3">
              <input
                {...register("gender")}
                id="male"
                name="gender"
                type="radio"
                value="male"
                defaultChecked
                className="h-4 w-4 border-gray-300"
              />
              <label htmlFor="male" className="block text-sm font-medium">
                Male
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                {...register("gender")}
                id="female"
                name="gender"
                type="radio"
                value="female"
                className="h-4 w-4 border-gray-300"
              />
              <label htmlFor="female" className="block text-sm font-medium">
                Female
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <button
        className={classNames(
          "text-white px-2 py-1 rounded bg-main max-w-fit self-end",
          {
            "bg-separator": !isDirty || !isValid,
          }
        )}
        type="submit"
        disabled={!isDirty || !isValid}
      >
        Subscribe
      </button>
    </form>
  );
};
