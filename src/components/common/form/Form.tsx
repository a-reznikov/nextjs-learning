import { HEADER_NAVIGATION } from "@/constants/links";

export const Form: React.FC = () => {
  return (
    <form className="flex flex-col gap-5">
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
                type="text"
                name="first-name"
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
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 p-2 shadow-sm ring-gray-300 ring-1"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
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
                id="country"
                name="country"
                autoComplete="country-name"
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
                id="push-everything"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-gray-300"
              />
              <label
                htmlFor="push-everything"
                className="block text-sm font-medium"
              >
                Male
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="push-email"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-gray-300"
              />
              <label htmlFor="push-email" className="block text-sm font-medium">
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
