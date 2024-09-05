import { MainBanner } from "@/components/MainBanner";
import { Header } from "../components/Header";
import { PromotionalBanner } from "@/components/PromotionalBanner";

export default function Home() {
  return (
    <main>
       <Header/>
       <MainBanner />
       <PromotionalBanner/>
    </main>
  );
}
