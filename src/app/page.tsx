import { Features, Hero } from "@/components/home";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="-mt-16">
        <Hero />
      </div>
      <Features />
    </>
  );
}
