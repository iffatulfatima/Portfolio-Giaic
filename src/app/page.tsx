

import BrowseCategorySec from "../app/components/home/browseCategorySec";
import PageFour from "@/app/components/home/pageFour";
import PageOne from "@/app/components/home/pageOne";
import PageThree from "@/app/components/home/pageThree";
import PageTwo from "@/app/components/home/pageTwo";
import ShopNowCards from "@/app/components/home/shopNowCards";
export default function Home() {
  return (
    <div className="w-full">
      <PageOne />
      <PageTwo />
      <BrowseCategorySec />
      <PageThree />
      <ShopNowCards />
      <PageFour />
    </div>
  );
}
