"use client";
import React from "react";
import { Boxes } from "@/app/components/ui/background-boxes";
import { cn } from "@/app/utils/cn";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-8xl text-xl text-white relative z-20")}>
          Marcos Rodriguez
        </h1>
        <p className="text-center text-5xl mt-4 text-yellow-300 relative z-20">
          Web Developer
        </p>
      </div>
      <div style={{
        height: "100px",
        backgroundImage: "rgb(15,23,42)",
        background: "linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(2,6,23,1) 60%)"
      }}></div>
      <div className="w-full h-full bg-slate-950">

        <section className="h-screen">
          <p className="text-[75px] text-center">My Skills</p>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap">
              <div className="lg:border-r-0 border-[2px] border-[#94a3b8] w-[300px] h-[300px]"></div>
              <div className="border-[2px] border-[#94a3b8]  w-[300px] h-[300px]"></div>
              <div className="lg:border-l-0 border-[2px] border-[#94a3b8]  w-[300px] h-[300px]"></div>
            </div>
          </div>
        </section>


        <div className=" max-w-[1260px] mx-auto">

          <section className="h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className=" ">
                <p className="text-[105px] w-[100px] leading-tight">My Work</p>
                <p className="text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum expedita nemo similique sed at optio accusantium. Assumenda sequi labore, ut deleniti libero temporibus recusandae, error voluptates nesciunt reprehenderit quos.</p>
              </div>
              <div className="mx-auto">
                <div className="w-[380px] bg-slate-700 rounded-[10px]">
                  <img className=" rounded-t-[10px] h-[285px] w-[380px]" src="https://picsum.photos/id/237/200/300" alt="TaskHub pic" />
                  <div className="h-[140px] w-[380px] "></div>
                </div>
              </div>
            </div>
          </section>

          <section className="h-screen">
            <div className="max-w-[1260px] mx-auto">
              <div className="grid grid-cols-3">
                <div className="w-[380px] bg-slate-700 rounded-[10px]">
                  <img className=" rounded-t-[10px] h-[285px] w-[380px]" src="https://picsum.photos/id/237/200/300" alt="TaskHub pic" />
                  <div className="h-[140px] w-[380px] "></div>
                </div>

                <div className="w-[380px] bg-slate-700 rounded-[10px]">
                  <img className=" rounded-t-[10px] h-[285px] w-[380px]" src="https://picsum.photos/id/237/200/300" alt="TaskHub pic" />
                  <div className="h-[140px] w-[380px] "></div>
                </div>

                <div className="w-[380px] bg-slate-700 rounded-[10px]">
                  <img className=" rounded-t-[10px] h-[285px] w-[380px]" src="https://picsum.photos/id/237/200/300" alt="TaskHub pic" />
                  <div className="h-[140px] w-[380px] "></div>
                </div>
              </div>
            </div>
          </section>



        </div>

        <div className="grid grid-cols-1  md:grid-cols-4">
          <div className=" col-span-1 md:col-span-2 md:row-span-2 h-[200px] lg:h-[400px] bg-gray-700"></div>
          <div className=" col-span-1 md:row-span-2 h-[200px] md:h-auto bg-gray-600"></div>
          <div className=" col-span-1 md:row-span-1 h-[200px] md:h-auto bg-gray-500"></div>
          <div className=" col-span-1 md:row-span-1 h-[200px] md:h-auto bg-gray-400"></div>

        </div>

      </div>
    </div>

  );
}