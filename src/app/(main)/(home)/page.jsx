import CategoryCard from "@/components/Home/Category/CategoryCard";
import Hero from "@/components/Home/Hero/Hero";
import Job from "@/components/Home/Job/Job";
import JobTitleMarquee from "@/components/Home/Marquee/JobTitleMarquee";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobTitleMarquee />
      <CategoryCard />
      <Job />
    </div>
  );
};

export default Home;
