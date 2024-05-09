"use client";
import React from "react";
import { Boxes } from "@/app/components/ui/background-boxes";
import Image from 'next/image'
import { cn } from "@/app/utils/cn";
import NavbarComponent from "./components/NavbarComponent";
import taskHub from './assets/taskhub.png';
import pokemonApi from './assets/pokemonApi.png'
import rockPaperSpock from './assets/rockPaperSpock.png';
import techPage from './assets/techpage.png'
import reactIcon from './assets/reactIcon1.png'
import dataBaseIcon from './assets/database1.png'
import figmaIcon from './assets/figma1.png'
import marcosRodriguez from './assets/Marcos_Rodriguez_01_CSAS6_Headshots.jpg'

export default function Home() {
  return (


    <div className="">
      <NavbarComponent />
      <div className=" h-[500px] lg:h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
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

        <section id="mySkills" className="py-10">
          <p className="  text-[75px] text-center text-blue-300">My Skills</p>

          <div className="pt-4 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap">

              <div className="lg:border-r-0 border-[2px] border-[#94a3b8] w-[350px] h-[310px]">
                <div className="mx-[20px]">
                  <div className="flex  mt-[20px] mb-[15px]">
                    <Image className="w-auto h-[40px]" src={dataBaseIcon} alt="react logo" />
                    <p className=" ml-[15px] leading-tight text-[24px] text-blue-300">Backend Dev <br /> C# </p>
                  </div>
                  <p className=" text-slate-500">{`<h3>`}</p>
                  <p className="ml-[20px] pl-[10px] border-l border-slate-500">
                    Created backends for projects ultizling C#, Azure and SQL.
                  </p>
                  <p className=" text-slate-500">{`</h3>`}</p>
                </div>


              </div>

              <div className="border-[2px] border-[#94a3b8]  w-[350px] h-[310px]">
                <div className="mx-[20px]">
                  <div className="flex justify-between mt-[20px] mb-[15px]">
                    <Image className="w-auto h-[40px]" src={reactIcon} alt="react logo" />
                    <p className=" ml-[15px] leading-tight text-[24px] text-blue-300">Frontend Dev React, NextJS</p>
                  </div>
                  <p className=" text-slate-500"> {`<h3>`}</p>
                  <p className="ml-[20px] pl-[10px] border-l border-slate-500">
                    Passionate about UI/UX. Experienced in HTML, CSS, JS, React and NextJS frameworks.
                  </p>
                  <p className=" text-slate-500">{`</h3>`}</p>
                </div>
              </div>

              <div className="lg:border-l-0 border-[2px] border-[#94a3b8]  w-[350px] h-[310px]">

                <div className="mx-[20px]">
                  <div className="flex justify-between mt-[20px] mb-[15px]">
                    <Image className="w-auto h-[40px]" src={figmaIcon} alt="react logo" />
                    <p className=" ml-[15px] leading-tight text-[24px] text-blue-300">Frameworks, Libraries & Tools</p>
                  </div>
                  <p className=" text-slate-500">{`<h3>`}</p>
                  <p className="ml-[20px] pl-[10px] border-l border-slate-500">
                    Hands on experience with the frameworks and libraries TypeScript, React, NextJS, Bootstrap, and Tailwind. I have also ulitizes the tools  Figma, and Jira.
                  </p>
                  <p className=" text-slate-500">{`</h3>`}</p>
                </div>

              </div>

            </div>
          </div>
        </section>


        <div className=" mt-32 max-w-[1260px] mx-auto">

          <section className="my-32" id="myWork">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              <div className=" mx-[20px] xl:ml-0 lg:py-0 pb-20 ">
                <p className=" text-[60px]  lg:text-[105px] w-[100px] font-semibold text-blue-300 leading-tight">My Work</p>
                <p className="text-[20px]">
                  Lead and Deployed a fully functioning task tracker application named TaskHub. This fullstack project utilizes NextJS and the Tailwind library for the frontend. C# was used to create the API endpoints, and Azure was used to host the database.
                </p>
              </div>

              <a className="   mx-auto" target="_blank" href="https://task-hub-fullstack.vercel.app/">
                <div className="" >
                  <div className=" hover:border hover:border-yellow-300  w-[360px] lg:w-[380px] bg-slate-900 rounded-[10px]">

                    <Image style={{ objectPosition: 'top left' }} className="object-cover   rounded-t-[10px] h-[285px]  w-[360px] lg:w-[380px]" src={taskHub} alt="TaskHub pic" />

                    <div className="  flex items-center lg:mx-[20px]  h-[140px]  w-[360px] lg:w-[380px] ">
                      <span>
                        <p className=" font-semibold text-[24px]">TaskHub</p>
                        <p className=" text-[20px] text-slate-300">Web Development</p>
                      </span>

                    </div>
                  </div>
                </div>
              </a>


            </div>
          </section>

          <section className="pt-10 pb-40">

            <div className="max-w-[1260px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3">


                <a className=" mx-auto xl:mt-0" target="_blank" href="https://news-homepage-main-five-plum.vercel.app/">
                  <div className=" hover:border hover:border-yellow-300   w-[360px] lg:w-[380px] bg-slate-900 rounded-[10px]">
                    <Image style={{ objectPosition: 'top left' }} className="object-cover   rounded-t-[10px] h-[285px]  w-[360px] lg:w-[380px]" src={techPage} alt="TaskHub pic 1" />
                    <div className="  flex items-center lg:mx-[20px]  h-[140px]  w-[360px] lg:w-[380px] ">
                      <span>
                        <p className=" font-semibold text-[24px]">Tech Home News Page</p>
                        <p className=" text-[20px] text-slate-300">HTML CSS Tailwind</p>
                      </span>
                    </div>
                  </div>
                </a>
                <a className=" mx-auto mt-10 lg:mt-0" target="_blank" href="https://rock-paper-scissors-lizard-spock-iota.vercel.app/">
                  <div className=" hover:border hover:border-yellow-300  w-[360px] lg:w-[380px] bg-slate-900 rounded-[10px]">
                    <Image style={{ objectPosition: 'top left' }} className="object-cover   rounded-t-[10px] h-[285px]  w-[360px] lg:w-[380px]" src={rockPaperSpock} alt="TaskHub pic" />
                    <div className="  flex items-center lg:mx-[20px]  h-[140px]  w-[360px] lg:w-[380px] ">
                      <span>
                        <p className=" font-semibold text-[24px]">Rock Paper Scissors Spock</p>
                        <p className=" text-[20px] text-slate-300">JS HTML CSS Bootstrap</p>
                      </span>
                    </div>
                  </div>
                </a>

                <a className=" mx-auto mt-10 col-span-1 lg:col-span-2 xl:col-span-1 xl:mt-0" target="_blank" href="https://pokedex-pkpd.vercel.app/">
                  <div className=" hover:border hover:border-yellow-300  w-[360px] lg:w-[380px] bg-slate-900 rounded-[10px]">
                    <Image style={{ objectPosition: 'top left' }} className="object-cover   rounded-t-[10px] h-[285px]  w-[360px] lg:w-[380px]" src={pokemonApi} alt="TaskHub pic" />
                    <div className="  flex items-center lg:mx-[20px]  h-[140px]  w-[360px] lg:w-[380px] ">
                      <span>
                        <p className=" font-semibold text-[24px]">Pokemon API</p>
                        <p className=" text-[20px] text-slate-300">JS HTML CSS TailWind</p>
                      </span>
                    </div>
                  </div>
                </a>


              </div>
            </div>
          </section>



        </div>

        <div className="grid grid-cols-1   md:grid-cols-2" id="contact">
          <div className=" py-10 lg:py-0   col-span-1 h-full lg:h-[500px] bg-black ">

            <div className=" mt-[40px] ">
              <div className=" mx-[20px] lg:ml-[16%]">
                <p className=" text-[30px] lg:text-[40px] leading-tight">Available for select freelance opportunities</p>
                <p className="text-[20px] mt-4">Have an exciting project you need help with?</p>
                <p className="text-[20px]">Contact me via email!</p>
              </div>


              <div className=" mx-[20px] lg:ml-[16.5%] mt-6">
                <p className=" text-[26px]  text-yellow-300">  marodriguez@codestack.co</p>
                <p className=" hover:text-yellow-300  text-[20px] mt-4"> <a target="_blank" href="https://www.linkedin.com/in/marcos-rodriguez-b15b72276/">LinkedIn</a></p>
                <p className=" text-[20px]"> (209) 715-9828</p>
                <p className=" hover:text-yellow-300  text-[20px]"> <a className=" " target="_blank" href="https://docs.google.com/document/d/1He3mDzgeQOpcBPR7bk25GzBJNu9FOgFHXvHPpB1u3ws/edit?usp=sharing">Resume</a></p>
                <p className=" hover:text-yellow-300  text-[20px]"> <a className=" " target="_blank" href="https://github.com/MarcosRodriguez03">GitHub</a></p>
              </div>
            </div>


          </div>
          <div className=" col-span-1 py-10 lg:py-0  h-full md:h-auto bg-blue-300">
            <div className="mt-[40px] lg:pr-[16%]">
              <div className="mx-[20px] items-center flex justify-between">
                <p className=" text-[30px] lg:text-[40px] text-slate-950 font-semibold"> A little about me</p>
                <Image style={{ objectPosition: '80% 20% ' }} className=" border-white border-[2px] rounded-[50px] h-[100px] w-[100px] object-cover" alt="pic of  me" src={marcosRodriguez} />
              </div>

              <p className="mx-[20px] mt-6 text-slate-950 text-[20px]">
                {`   I am a Junior Web Developer with experience in HTML, CSS, JavaScript, and React. I'm passionate about creating innovative and user-friendly applications that can help people solve problems and streamline work loads. I am currently a student at CodeStack Academy.`}
              </p>
            </div>
          </div>


        </div>

      </div>
    </div>

  );
}