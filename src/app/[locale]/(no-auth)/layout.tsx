"use client";
import Navigation from "@/app/components/navigation";
import Card from "@/app/components/navigation/card";
import Title from "@/app/components/title";
import { navigationItems } from "@/app/constants/navigationItems";
import { StaticImageData } from "next/image";
import dragon from "../../../images/cards/dragon.png";
import slots from "../../../images/cards/slots.png";
import baccarat from "../../../images/cards/baccarat.png";
import Carousel from "@/app/components/carousel";
import Navbar from "@/app/components/navigation/navbar";
import HorizontalCard from "@/app/components/cards/horizontalCard";
import logo from "../../../images/logo.png";
import Footer from "@/app/components/footer/footer";
import PillsNavigation from "@/app/components/footer/menu";

interface NoAuthLayoutProps {
  children: React.ReactNode;
}

interface CardData {
  image: StaticImageData;
  title: string;
}

const cardData: CardData[] = [
  { image: dragon, title: "Dragon" },
  { image: slots, title: "Slots" },
  { image: baccarat, title: "Baccarat" },
];

const NoAuthLayout = ({ children }: NoAuthLayoutProps) => {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <div className="m-5 w-[95%]">
        <Carousel />
      </div>
      <Title level={1} className="text-4xl mb-10 mt-10 uppercase">
        Play and Win
      </Title>
      <div className="flex flex-wrap justify-center gap-6 p-6 dark:bg-gray-900">
        {cardData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} />
        ))}
      </div>
      <Navigation items={navigationItems} />
      {children}
      <div className="flex justify-center mb-10 mt-10 w-full bg-gray-400">
        <div className="w-[80%]">
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

export default NoAuthLayout;
