import classNames from "classnames";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Meta } from "@/api/stories/types";

export const Pagination: React.FC<Meta> = ({ pagination }) => {
  console.log(pagination);

  return (
    <div
      className={classNames(
        "flex items-center justify-between bg-white px-4 py-3",
        "sm:px-6"
      )}
    >
      <div className={classNames("flex flex-1 justify-between", "sm:hidden")}>
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div
        className={classNames(
          "hidden",
          "sm:flex sm:flex-1 sm:items-center sm:justify-between"
        )}
      >
        <div>
          <p className="text-sm text-gray-700 font-medium">
            Showing 1 to 2 of 3 stories
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="relative z-10 inline-flex items-center bg-main px-4 py-2 text-sm font-semibold text-white"
            >
              1
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
