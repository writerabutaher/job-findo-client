import { BsArrowRight } from "react-icons/bs";
import Category from "./Category";
import Location from "./Location";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LocateFixed } from "lucide-react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/section-bg.png')] md:py-20">
      <div className="max-w-screen-xl gap-12 px-4 py-40 mx-auto text-gray-600 md:px-8">
        <div className="max-w-4xl mx-auto space-y-10 text-center md:space-y-16">
          <div className="inline-block px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-full md:px-6 md:text-lg">
            <h1>
              <span className="pr-4 text-gray-500">The Best Job Seekers</span>
              <span className="pl-4 text-blue-600 border-l border-gray-300">
                Explore
                <BsArrowRight className="inline w-4 ml-2" />
              </span>
            </h1>
          </div>
          <h1 className="mx-auto text-4xl text-gray-800 sm:text-6xl lg:text-8xl">
            Find The Right Job & Build Your Career
          </h1>
          <div className="items-center justify-center space-y-3 gap-x-3 sm:flex sm:space-y-0 text-start">
            <div className="flex flex-col">
              <Label className="pb-2 text-xl" htmlFor="combobox1">
                Location
              </Label>
              <Location />
            </div>
            <div className="flex flex-col">
              <Label className="pb-2 text-xl" htmlFor="combobox1">
                Category
              </Label>
              <Category />
            </div>
            <div class="flex flex-col">
              <div className="flex items-center md:w-[400px] relative">
                <div className="flex flex-col">
                  <Label className="pb-2 text-xl text" htmlFor="find-job">
                    Job looking for
                  </Label>
                  <div className="relative">
                    <LocateFixed className="absolute w-8 h-6 mx-4 my-5 text-gray-500" />
                    <Input
                      className="py-8 text-xl font-medium text-gray-500 border-none rounded-r-none outline-none pl-14"
                      type="text"
                      id="find-job"
                      placeholder="Find Job"
                    />
                  </div>
                </div>
                <button className="flex items-center self-end gap-2 px-2 py-5 text-white bg-blue-500 rounded-md rounded-l-none hover:bg-blue-600">
                  Search
                  <AiOutlineCloudDownload className="w-8 pl-1 border-l border-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
