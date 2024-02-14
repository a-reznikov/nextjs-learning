import { SubmitHandler, useForm } from "react-hook-form";
import { HEADER_NAVIGATION } from "@/constants/links";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  section: string;
  gender: boolean;
};

export const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium">
              First name
            </label>
            <div className="mt-2">
              <input
                {...register("firstName", { required: true })}
                type="text"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 p-2 shadow-sm ring-gray-300 ring-1"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium">
              Last name
            </label>
            <div className="mt-2">
              <input
                {...register("lastName", { required: true })}
                type="text"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 p-2 shadow-sm ring-gray-300 ring-1"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email", { required: true })}
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 p-2 shadow-sm ring-gray-300 ring-1"
              />
            </div>
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium">
              Section
            </label>
            <div className="mt-2">
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
            </div>
          </div>
        </div>
        <fieldset className="mt-10">
          <legend className="text-sm font-semibold">Gender</legend>
          <div className="mt-3 space-y-1">
            <div className="flex items-center gap-x-3">
              <input
                {...register("gender", { required: true })}
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
                {...register("gender", { required: true })}
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
      <button className="text-white px-2 py-1 rounded bg-main max-w-fit self-end">
        Subscribe
      </button>
    </form>
  );
};
