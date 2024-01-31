import { Footer } from "@/components/common/footer/Footer";
import { Header } from "@/components/common/header/Header";

import { ReactFCWithChildren } from "./types";

const Layout: ReactFCWithChildren = ({ children }) => {
  return (
    <div className="main-page flex flex-col justify-between h-screen">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
