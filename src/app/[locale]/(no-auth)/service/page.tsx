"use client";
import HorizontalCard from "@/app/components/cards/horizontalCard";
import Title from "@/app/components/title";

const Service = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col w-[60%]">
        <HorizontalCard
          headerTitle="Hotel Room"
          carousel={true}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Adipiscing bibendum est ultricies integer."
        />
        <HorizontalCard
          headerTitle="Vehicle"
          carousel={true}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Adipiscing bibendum est ultricies integer."
        />
      </div>
    </div>
  );
};

export default Service;
