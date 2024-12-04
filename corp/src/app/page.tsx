import Hero from "@/components/hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imageAlt="car factory"
      title="Professional Cloud Hosting"
    ></Hero>
  );
}
