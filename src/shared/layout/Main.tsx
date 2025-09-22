import React, { ReactNode } from "react";
import { CityLandscape } from "../../../public/Images";
import MotionWrapper from "./MotionWrapper";
import TypeWriterLayout from "./TypeWriterLayout";

const HeroSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="text-center py-8 md:py-16 px-4 md:px-6 ">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        <TypeWriterLayout
          text="Find jobs and plan your next future with us!"
          speed={30}
        />
      </h1>
      <p className="text-[#646E7D] mb-10  mx-auto text-1xl">
        Start job search at America’s No.1 Jobs site. Browse latest jobs in
        America and find your dream job.
      </p>
      <MotionWrapper>
        {children}
        <div className="mx-auto max-w-[1380px] relative mt-22">
          <div className="bg-transparent dark:bg-gray-900 absolute w-full h-full opacity-[.4]"></div>
          <CityLandscape className="w-[100%]" />
        </div>
      </MotionWrapper>
    </section>
  );
};

export default HeroSection;
