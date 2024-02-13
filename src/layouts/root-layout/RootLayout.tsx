import classNames from "classnames";
import { Header } from "@/components/common/header/Header";
import { Footer } from "@/components/common/footer/Footer";

export type Props = {
  section: string;
};

export const RootLayout: React.FC<React.PropsWithChildren<Props>> = ({
  section,
  children,
}) => {
  return (
    <div className="flex flex-col h-screen font-normal">
      <Header section={section} />
      <section
        className={classNames(
          "container mx-auto flex flex-col justify-between grow",
          "sm:px-10"
        )}
      >
        <main
          className={classNames("w-full flex justify-center py-5", "lg:py-10")}
        >
          {children}
        </main>
        <Footer />
      </section>
    </div>
  );
};
