import { MainBanner } from "@/components/MainBanner";
import { Header } from "../components/Header";
import { PromotionalBanner } from "@/components/PromotionalBanner";
import { SecondaryBanner } from "@/components/SecondaryBanner";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
       <Header/>
       <MainBanner />
       <PromotionalBanner/>
       <SecondaryBanner/>
       {/* <Carousel/> */}
       <Footer/>
    </main>
  );
}
