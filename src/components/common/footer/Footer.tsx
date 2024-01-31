import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="container px-10 py-5 mx-auto">
        <div className="flex relative justify-between items-center ">
          <div className="absolute w-full h-px bg-[#D1D1D1] top-[-20px]"></div>
          <p>© 2022 Best News</p>
          <ul className="flex gap-x-5">
            <li>About Us</li>
            <li>Help</li>
            <li>Advertise</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <ul className="flex gap-x-2">
            <Image src="/twitter.svg" width={24} height={24} alt="Twitter" />
            <Image src="/facebook.svg" width={24} height={24} alt="Facebook" />
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="Instagram"
            />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
