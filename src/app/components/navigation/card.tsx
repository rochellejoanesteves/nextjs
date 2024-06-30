import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "../title";

interface CardProps {
  image: StaticImageData;
  title?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ image, title, className }) => {
  return (
    <div className="block max-w-[18rem]">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <Image src={image} alt="" className="rounded-t-lg w-full transform transition-transform duration-500" />
      </div>
      <div className="p-6 text-center uppercase">
        <Title level={2}>{title}</Title>
      </div>
    </div>
  );
};

export default Card;
