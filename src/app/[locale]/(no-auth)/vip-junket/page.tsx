"use client";
import Gallery from "@/app/components/gallery";
import { StaticImageData } from "next/image";
import dragon from "../../../../images/cards/dragon.png";
import slots from "../../../../images/cards/slots.png";
import baccarat from "../../../../images/cards/baccarat.png";

interface CardData {
  imageUrl: StaticImageData;
  title: string;
}

const cardData: CardData[] = [
  { imageUrl: baccarat, title: "Baccarat" },
  { imageUrl: dragon, title: "Dragon" },
  { imageUrl: slots, title: "Slots" },
  { imageUrl: baccarat, title: "Baccarat" },
  { imageUrl: slots, title: "Slots" },
];
const VipJunket = () => {
  return (
    <main className="flex flex-col items-center justify-center">
    <div className="flex items-center justify-center flex-col w-[70%]">
      <Gallery title="Okada" frames={cardData} />
    </div>
    <div className="flex items-center justify-center flex-col w-[70%]">
      <Gallery title="Solaire" frames={cardData} />
    </div>
    <div className="flex items-center justify-center flex-col w-[70%]">
      <Gallery title="COD" frames={cardData} />
    </div>
    <div className="flex items-center justify-center flex-col w-[70%]">
      <Gallery title="Heritage" frames={cardData} />
    </div>
    <div className="flex items-center justify-center flex-col w-[70%]">
      <Gallery title="D'Heights" frames={cardData} />
    </div>
    <div className="flex items-center justify-center flex-col w-[70%]">
      <Gallery title="Royce" frames={cardData} />
    </div>
  </main>
  );
};

export default VipJunket;
