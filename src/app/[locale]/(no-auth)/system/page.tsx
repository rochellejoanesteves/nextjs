"use client";
import { useRouter, useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import dragon from "../../../../images/cards/dragon.png";
import slots from "../../../../images/cards/slots.png";
import baccarat from "../../../../images/cards/baccarat.png";
import Gallery from "@/app/components/gallery";

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

const System = () => {
  const router = useRouter();
  const { locale } = useParams();
  const t = useTranslations("Home");

  const handleClick = () => {
    const token = localStorage.getItem("token");
    if (!!token) {
      router.push(`/${locale}/lobby`);
    } else {
      sessionStorage.setItem("previousPage", `/${locale}/system`);
      router.push(`/${locale}/login`);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center flex-col w-[70%]">
        <Gallery onClick={handleClick} title="Slots" frames={cardData} />
      </div>
      <div className="flex items-center justify-center flex-col w-[70%]">
        <Gallery onClick={handleClick} title="Baccarat" frames={cardData} />
      </div>
      <div className="flex items-center justify-center flex-col w-[70%]">
        <Gallery onClick={handleClick} title="Power Ball" frames={cardData} />
      </div>
    </main>
  );
};

export default System;
