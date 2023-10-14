import React from "react";
import { Webcam } from "lucide-react";

const JobList = () => {
  return (
    <div>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <div className="flex items-center gap-4 px-4 py-2 text-lg font-semibold bg-white rounded-full shadow">
            <Webcam size={"1.5rem"} />
            <h1>Web Development</h1> <span className="text-gray-600">(23)</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
