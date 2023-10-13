import React from "react";
import JobList from "./JobList";
import JobCard from "./JobCard";

const Job = () => {
  return (
    <div className="container flex justify-center gap-4 mx-auto">
      <div className="w-1/4 px-2 py-4 bg-red-100 rounded-2xl">
        <JobList />
      </div>
      <div className="w-3/4 p-5 bg-red-100 rounded">
        <JobCard />
      </div>
    </div>
  );
};

export default Job;
