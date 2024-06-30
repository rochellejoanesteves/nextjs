"use client";
import HorizontalCard from "../components/cards/horizontalCard";
import Carousel from "../components/carousel";
import Footer from "../components/footer/footer";
import PillsNavigation from "../components/footer/menu";
import Navigation from "../components/navigation";
import Navbar from "../components/navigation/navbar";
import { navigationItems } from "../constants/navigationItems";
import logo from "../../images/logo.png"

const Index = () => {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <div className="m-5 w-[95%]">
        <Carousel />
      </div>
      <Navigation items={navigationItems} />
      <div className="flex justify-center mb-10 mt-10 w-full bg-gray-400">
        <div>
          <div className="flex justify-center">
            <HorizontalCard
              title="Title Here"
              readMore="Read More"
              imageUrl={logo}
            />
          </div>

          <div className="flex">
            <HorizontalCard
              title="Keys to writing copy that actually converts and sells users"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."
              readMore="Read More"
            />
            <HorizontalCard
              title="Keys to writing copy that actually converts and sells users"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."
              readMore="Read More"
            />
          </div>
        </div>
      </div>

      <PillsNavigation />
      <hr className="border border-gray-500 w-1/2" />
      <Footer />
    </main>
  );
};

export default Index;
