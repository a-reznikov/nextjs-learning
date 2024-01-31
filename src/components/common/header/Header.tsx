import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-header">
      <div className="container flex justify-between items-center px-10 mx-auto">
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
