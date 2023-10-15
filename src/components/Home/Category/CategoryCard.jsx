import React from "react";
import { ChevronRight } from "lucide-react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <div className="container pb-20 mx-auto">
      <div className="grid grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, , 7, 8].map((e) => (
          <div className="relative flex items-center bg-white rounded-full cursor-pointer h-28">
            <img
              src="/assets/images/category/01.jpg"
              className="absolute left-0 z-10 transition-all rounded-full h-28 hover:h-32"
              alt=""
            />
            <div className="absolute flex items-center gap-2 right-4 hover:text-blue-600">
              <div className="space-y-1">
                <h1 className="text-lg font-semibold">Development</h1>
                <h3 className="text-gray-600 hover:text-blue-600">
                  4 job positions
                </h3>
              </div>
              <ChevronRight className="w-8" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-8">
        <Link
          href={"/"}
          className="flex items-center gap-2 px-6 py-4 font-semibold text-white bg-blue-500 rounded-xl hover:bg-blue-600"
        >
          <AiOutlineCloudDownload className="w-8 pr-2 border-r-2 border-r-white" />
          All Jobs
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
