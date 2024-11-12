import Explore from "./components/explore";
import Faq from "./components/faq";
import GetStarted from "./components/getStarted";
import Hero from "./components/hero";
import Influaner from "./components/influaner";
import Monetization from "./components/monetization";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <Monetization />
      <Influaner />
      <GetStarted />
      <Faq />
  </div>
  );
}
