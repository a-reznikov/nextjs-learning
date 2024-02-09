import { CustomLink } from "@/components/common/custom-link/CustomLink";

export default function Custom404() {
  return (
    <div className="w-full py-5 text-center">
      <h1 className="text-xl">404 - Page Not Found</h1>
      <CustomLink href={"/"} className="text-lg">
        Go to the Home Page.
      </CustomLink>
    </div>
  );
}
