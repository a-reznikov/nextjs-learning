import { Header } from "@/components/common/header/Header";
import { Footer } from "@/components/common/footer/Footer";

import { OPEN_SANS_400 } from "@/styles/fonts";
import { ReactFCWithChildren } from "./types";

const RootLayout: ReactFCWithChildren = ({ children }) => {
  return (
    <div
      className={`${OPEN_SANS_400.className} flex flex-col justify-between h-screen`}
    >
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export { RootLayout };
