"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900
         py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10 "
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className=" z-auto flex flex-col gap-8 md:gap-16 items-center md:flex-row ">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2 ">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 font-semibold cursor-pointer select-auto focus:outline-none focus:ring-2 focus:ring-emerald-400 hover:bg-gray-800 transition-colors"
                onClick={() => {
                  window.location.href = "mailto:chetananandareddykukutla@gmail.com";
                }}
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
