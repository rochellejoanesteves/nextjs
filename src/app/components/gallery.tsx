import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Frame from "./frame";
import { StaticImageData } from "next/image";
import Title from "./title";

interface GalleryProps {
  title?: string;
  onClick?: () => void;
  frames: {
    title: string;
    imageUrl: StaticImageData;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ frames, title, onClick }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const width = 750; // Adjust width as needed
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      setStartX(event.touches[0].clientX);
      console.log("Touch start:", event.touches[0].clientX);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (startX !== null) {
        const endX = event.touches[0].clientX;
        console.log("Touch move:", endX);
        if (startX - endX > 50 && index < frames.length - 1) {
          setIndex(index + 1);
          setStartX(null);
        } else if (startX - endX < -50 && index > 0) {
          console.log("Swiped right");
          setIndex(index - 1);
          setStartX(null);
        }
      }
    };

    const galleryEl = galleryRef.current;
    galleryEl?.addEventListener("touchstart", handleTouchStart);
    galleryEl?.addEventListener("touchmove", handleTouchMove);

    return () => {
      galleryEl?.removeEventListener("touchstart", handleTouchStart);
      galleryEl?.removeEventListener("touchmove", handleTouchMove);
    };
  }, [startX, index, frames.length]);

  useEffect(() => {
    if (platformRef.current) {
      platformRef.current.style.transform = `translateX(-${index * width}px)`;
    }
  }, [index, width]);

  return (
    <div className="text-xl font-bold m-5 text-center w-full">
      <div ref={galleryRef}>
        <div className="top flex p-2 select-none">
          <div>
            <Title level={2} className="uppercase">
              {title}
            </Title>
          </div>
          <div className="buttons ml-auto flex text-gray-600 mr-1">
            <button
              className={`w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0 ${
                index === 0 ? "pointer-events-none opacity-50" : ""
              }`}
              onClick={() => index > 0 && setIndex(index - 1)}
              disabled={index === 0}
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>
            <button
              className={`w-7 border-2 rounded-r-lg p-1 cursor-pointer ${
                index === frames.length - 1
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
              onClick={() => index < frames.length - 1 && setIndex(index + 1)}
              disabled={index === frames.length - 1}
            >
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            ref={platformRef}
          >
            {frames.map((frame, idx) => (
              <button key={idx} onClick={onClick}>
                <Frame {...frame} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
