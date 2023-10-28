"use client";

import React from "react";
import Slider from "react-slick";

const Review = () => {
  return (
    <section class="dark:bg-gray-900">
      <div class="max-w-6xl px-6 py-10 mx-auto">
        <div className="flex flex-col items-center gap-4">
          <p class="text-xl font-medium rounded-full bg-white px-6 py-2 shadow text-blue-600 ">
            Testimonials
          </p>

          <h1 class="mt-2 text-3xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white">
            See What Our <span className="text-yellow-500">Clients</span> Say
            About Us
          </h1>
        </div>

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            <div class="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
            <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img
                class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="client photo"
              />
              <div class="mt-2 md:mx-6">
                <div>
                  <p class="text-xl font-medium tracking-tight text-white">
                    Ema Watson
                  </p>
                  <p class="text-blue-200 ">Marketing Manager at Stech</p>
                </div>
                <p class="mt-4 text-lg leading-relaxed text-white md:text-xl">
                  {" "}
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda”.
                </p>
                <div class="flex items-center justify-between mt-6 md:justify-start">
                  <button
                    title="left arrow"
                    class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    title="right arrow"
                    class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </main>
      </div>
    </section>
  );
};

export default Review;
