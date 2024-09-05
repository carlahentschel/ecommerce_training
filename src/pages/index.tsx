import { MainBanner } from "@/components/MainBanner";
import { Header } from "../components/Header";
import { PromotionalBanner } from "@/components/PromotionalBanner";
import { SecondaryBanner } from "@/components/SecondaryBanner";

export default function Home() {
  return (
    <main>
       <Header/>
       <MainBanner />
       <PromotionalBanner/>
       <SecondaryBanner/>
    </main>
  );
}
