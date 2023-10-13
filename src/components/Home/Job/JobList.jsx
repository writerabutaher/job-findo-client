import React from "react";
import { Webcam } from "lucide-react";

const JobList = () => {
  return (
    <div className="rounded-md">
      <div className="space-y-4">
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <div className="flex items-center gap-4 px-4 py-2 text-lg font-semibold bg-white rounded-full shadow-sm">
            <Webcam size={"1.5rem"} />
            <h1>Web Development</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
