import { Features, Hero } from "@/components/home";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="-mt-16">
        <Hero />
      </div>
      <Features />
      <Footer />
    </>
  );
}
