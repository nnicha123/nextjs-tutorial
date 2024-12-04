import Hero from "@/components/hero";
import reliabilityImg from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      title="Realiability Page"
      imageAlt="Super high reliability hosting"
    ></Hero>
  );
}
