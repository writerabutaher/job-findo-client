"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import SwiperButton from "./SwiperButton";

const Review = () => {
  return (
    <>
      <section className="max-w-6xl px-6 pb-20 mx-auto">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl font-medium rounded-full bg-white px-6 py-2 shadow text-blue-600 ">
            Testimonials
          </p>

          <h1 className="mt-2 text-3xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white text-center">
            See What Our <span className="text-yellow-500">Clients</span> Say
            About Us
          </h1>
        </div>

        <Swiper modules={[Navigation]}>
          {[1, 2, 3].map((e) => (
            <SwiperSlide key={e}>
              <div className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
                <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                  <img
                    className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                    src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=1635&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="client photo"
                  />
                  <div className="mt-2 md:mx-6">
                    <div>
                      <p className="text-xl font-medium tracking-tight text-white">
                        Ema Watson
                      </p>
                      <p className="text-blue-200 ">
                        Marketing Manager at Stech
                      </p>
                    </div>
                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                      {" "}
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempore quibusdam ducimus libero ad tempora doloribus
                      expedita laborum saepe voluptas perferendis delectus
                      assumenda”.
                    </p>

                    <SwiperButton />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Review;
