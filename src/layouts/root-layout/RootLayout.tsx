import { Footer } from "@/components/common/footer/Footer";
import { Header } from "@/components/common/header/Header";

import { openSans400 } from "@/styles/fonts";
import { ReactFCWithChildren } from "./types";

const RootLayout: ReactFCWithChildren = ({ children }) => {
  return (
    <div
      className={`${openSans400.className} flex flex-col justify-between h-screen`}
    >
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export { RootLayout };
