import { Header } from "@/components/common/header/Header";
import { Footer } from "@/components/common/footer/Footer";

export default function Home() {
  return (
    <div className="home flex flex-col justify-between h-screen">
      <Header />
      <Footer />
    </div>
  );
}
