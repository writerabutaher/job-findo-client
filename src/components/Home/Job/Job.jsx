import React from "react";
import JobList from "./JobList";
import JobCard from "./JobCard";

const Job = () => {
  return (
    <div className="container flex justify-center gap-4 pb-20 mx-auto">
      <div className="w-1/4 px-4 py-8 bg-slate-200 rounded-2xl">
        <JobList />
      </div>
      <div className="w-3/4 p-5 bg-red-100 rounded">
        <JobCard />
      </div>
    </div>
  );
};

export default Job;
