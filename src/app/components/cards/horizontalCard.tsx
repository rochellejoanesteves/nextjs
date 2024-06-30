import { StaticImageData } from "next/image";
import Image from "next/image";
import Title from "../title";
import Carousel from "../carousel";

interface CardProps {
  headerTitle?: string;
  title?: string;
  description?: string;
  readMore?: string;
  imageUrl?: StaticImageData;
  carousel?: boolean;
}

const HorizontalCard: React.FC<CardProps> = ({
  headerTitle = "",
  title,
  description,
  readMore,
  imageUrl = "",
  carousel = false,
}) => {
  return (
    <div className={headerTitle !== "" || carousel === true ? "" : "flex"}>
      {headerTitle && (
        <div>
          <Title level={1} className="uppercase">
            {headerTitle}
          </Title>
        </div>
      )}
      <div className="w-full flex flex-col rounded-lg bg-gray-500 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:flex-row m-5">
        {imageUrl && (
          <Image
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
            src={imageUrl}
            alt=""
          />
        )}

        {carousel && (
          <div className="m-8">
            <Carousel />
          </div>
        )}
        <div className="flex flex-col justify-start p-6 text-black bg-gray-500 w-full">
          <h5 className="mb-2 text-xl font-medium">{title}</h5>
          <p className="mb-4 text-xl">{description}</p>
          <p className="text-xs text-surface/75 dark:text-neutral-300">
            {readMore}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
