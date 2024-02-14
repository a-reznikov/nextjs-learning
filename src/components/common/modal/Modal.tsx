import { useState } from "react";
import classNames from "classnames";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

export type Props = {
  isOpenedModal: boolean;
};

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
            "flex min-h-full items-center justify-center p-4 text-center",
            "sm:p-0"
          )}
        >
          <div className="bg-white p-20 rounded">
            <p>Modal Content</p>
            <button onClick={() => setIsOpened(false)}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
};
