import { useState } from "react";
import classNames from "classnames";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Form } from "../form/Form";

export const Modal: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div
        className="fixed bg-main text-white p-2 top-20 right-0 cursor-pointer rounded-l-lg z-10 hover:scale-105 transition-all"
        onClick={() => setIsOpened(true)}
      >
        <PencilSquareIcon className="h-6 w-6" />
      </div>
      <div
        className={classNames(
          "bg-gray-800 bg-opacity-80 fixed inset-0 z-10 w-screen overflow-y-auto",
          { hidden: !isOpened }
        )}
      >
        <div
          className={classNames(
            "flex min-h-full items-center justify-center p-4",
            "sm:p-0"
          )}
        >
          <div
            className={classNames(
              "w-full relative flex flex-col bg-white p-10 rounded",
              "sm:w-9/12",
              "lg:w-5/12",
              "2xl:w-3/12"
            )}
          >
            <button
              className="absolute top-2 right-2 text-main"
              onClick={() => setIsOpened(false)}
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};
