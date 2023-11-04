import React from "react";
import { Banknote } from "lucide-react";

const JobCard = () => {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <div className="space-y-4 bg-white shadow-xl rounded-xl min-h-[300px] p-8 hover:outline hover:outline-1 hover:outline-blue-600">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">
                Digital Marketing Manager
              </h1>
              <h3 className="text-lg font-medium tracking-widest">
                $95k – $150k <span className="text-gray-500">/ Remote</span>
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <img src="" alt="" />
                <div className="space-y-2">
                  <h1>
                    Atlas Bank <Banknote size={"1.5rem"} />
                  </h1>
                  <h3 className="text-gray-600">San Francisco, CA</h3>
                </div>
              </div>
            </div>
            <div>
              <button className="w-full py-4 text-center border border-blue-600 hover:bg-blue-600 rounded-xl hover:text-white">
                View Job | {">"}
              </button>
            </div>
          </div>
        ))}
      </div>
  );
};

export default JobCard;
