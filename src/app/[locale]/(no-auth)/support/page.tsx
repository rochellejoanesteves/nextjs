"use client";
import HorizontalCard from "@/app/components/cards/horizontalCard";
import Title from "@/app/components/title";

const Support = () => {
  return (
    <div className="flex flex-col w-[60%]">
      <HorizontalCard
        headerTitle="Privacy Policy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Adipiscing bibendum est ultricies integer."
      />
      <HorizontalCard
        headerTitle=" Terms and Condition"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Adipiscing bibendum est ultricies integer."
      />
      <HorizontalCard
        headerTitle="Responsible Gaming"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Adipiscing bibendum est ultricies integer."
      />
    </div>
  );
};

export default Support;
