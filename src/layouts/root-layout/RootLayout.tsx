import { Header } from "@/components/common/header/Header";
import { Footer } from "@/components/common/footer/Footer";
import { ReactFCWithChildren } from "./types";

const RootLayout: ReactFCWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen font-normal">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export { RootLayout };
