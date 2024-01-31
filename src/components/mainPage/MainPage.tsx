import { Header } from "../common/header/Header";
import { Footer } from "../common/footer/Footer";

const MainPage: React.FC = () => {
  return (
    <div className="main-page flex flex-col justify-between h-screen">
      <Header />
      <main className="grow py-[40px]">
        <h1>Main section</h1>
      </main>
      <Footer />
    </div>
  );
};

export { MainPage };
