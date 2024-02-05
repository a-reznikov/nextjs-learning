import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-full py-5 text-center">
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go to the Home Page.</Link>
    </div>
  );
}
