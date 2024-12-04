import Hero from "@/components/hero";
import performaceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performaceImg}
      imageAlt="performance img"
      title="We serve high performance applications"
    ></Hero>
  );
}
