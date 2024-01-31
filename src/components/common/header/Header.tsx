import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-[0px_2px_10px_rgba(22,22,22,0.1)]">
      <div className="flex justify-between items-center max-w-[1440px] px-[120px] mx-auto">
        <Image
          className="my-4"
          src="/logo.svg"
          width={129}
          height={28}
          alt="Logo"
        />
        <nav>Navigation</nav>
      </div>
    </header>
  );
};

export { Header };
