import classNames from "classnames";
import { Header } from "@/components/common/header/Header";
import { Footer } from "@/components/common/footer/Footer";

export const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen font-normal">
      <Header />
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
