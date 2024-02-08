import { useRouter } from "next/router";
import { Home } from "@/components/home/Home";

export default function SectionPage() {
  const router = useRouter();

  
return <Home section={router.query.section} />;
}
