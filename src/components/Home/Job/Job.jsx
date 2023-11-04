import React from "react";
import JobList from "./JobList";
import JobCard from "./JobCard";

const Job = () => {
  return (
    <div className="container flex flex-col md:flex-row gap-8 pb-20 mx-auto">
      <div className="md:w-[400px] px-4 py-8 shadow-2xl bg-slate-100 rounded-2xl">
        <JobList />
      </div>
      <div className="w-full">
        <JobCard />
      </div>
    </div>
  );
};

export default Job;
