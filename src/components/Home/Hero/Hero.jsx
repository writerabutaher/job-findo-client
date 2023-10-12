import { BsArrowRight } from "react-icons/bs";
import Combobox from "./ComboBox";

const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/section-bg.png')] bg-red-100">
      <div className="max-w-screen-xl gap-12 px-4 py-40 mx-auto text-gray-600 md:px-8 ">
        <div className="max-w-4xl mx-auto space-y-5 text-center">
          <div className="inline-block px-6 py-2 text-sm font-medium bg-white border border-gray-300 rounded-full md:text-lg ">
            <h1>
              <span className="pr-4 text-gray-500">The Best Job Seekers</span>
              <span className="pl-4 text-blue-600 border-l border-gray-300">
                Explore
                <BsArrowRight className="inline w-4 ml-2" />
              </span>
            </h1>
          </div>
          <h1 className="mx-auto text-4xl text-gray-800 md:text-8xl">
            Find The Right Job & Build Your Career
          </h1>
          <div className="items-center justify-center space-y-3 gap-x-3 sm:flex sm:space-y-0 text-start">
            <div class="flex flex-col lg:mr-16">
              <label
                for="email1"
                class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
              >
                Email
              </label>
              <div class="relative">
                <div class="absolute text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full cursor-pointer">
                  <img
                    class="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/input_with_icon_at_start-svg1.svg"
                    alt="mail"
                  />
                  <img
                    class="dark:block hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/input_with_icon_at_start-svg1dark.svg"
                    alt="mail"
                  />
                </div>
                <input
                  id="email1"
                  class="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-12 text-sm border-gray-300 rounded border shadow"
                  placeholder="Placeholder"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="combobox1">Category</label>
              <Combobox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
