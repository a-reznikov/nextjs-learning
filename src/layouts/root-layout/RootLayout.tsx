import { Header } from "@/components/common/header/Header";
import { Footer } from "@/components/common/footer/Footer";

export const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen font-normal">
      <Header />
      <section className="container sm:px-10 mx-auto flex flex-col justify-between grow">
        <main className="grow">{children}</main>
        <Footer />
      </section>
    </div>
  );
};
