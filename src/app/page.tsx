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
import flatCompPic from './assets/flatCompPic.png'
import documentPic from './assets/documentPic2.png'

export default function Home() {
  return (


    <div className="">
      <NavbarComponent />
      <div className=" h-[500px] lg:h-[550px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn(" font-[ArchivoSemi] text-[40px]  md:text-6xl lg:text-6xl  text-white relative z-20")}>
          Marcos Rodriguez
        </h1>
        <p className=" font-[Archivo] text-center text-2xl md:text-3xl lg:text-3xl mt-4 text-yellow-300 relative z-20">
          Web Developer
        </p>
      </div>


      <div style={{
        height: "100px",
        backgroundImage: "rgb(15,23,42)",
        background: "linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(2,6,23,1) 60%)"
      }}></div>
      <div className="w-full h-full bg-slate-950">

        <section id="aboutMe" className=" pt-24  pb-28" >
          <div className="max-w-[1200px]  mx-auto px-[20px] ">
            <div className="flex items-center pb-4">
              <p className="text-3xl" >A Little About Me</p>
              <div className="ml-6 flex-grow border-t border-white dark:border-white border-1 "></div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2  mt-4">
              <div className="mx-auto md:mx-0 pb-[30px] md:pb-0">
                <Image style={{ objectPosition: '80% 20% ' }} className="  border-white border-[2px] rounded-[1000px] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] object-cover" alt="pic of  me" src={marcosRodriguez} />
              </div>
              <div>
                <p className=" text-white mx-[20px] md:mx-0 text-[24px]">
                  {`   I am a Junior Web Developer with experience in HTML, CSS, JavaScript, and React. I'm passionate about creating innovative and user-friendly applications that can help people solve problems and streamline work loads. I am currently a student at CodeStack Academy.`}
                </p>
              </div>
            </div>


          </div>

        </section>

        <section id="mySkills" className="pt-20" >
          <div className="max-w-[1200px] mx-auto px-[20px]">

            <div className="flex items-center pb-4">
              <p className="text-3xl" >Skills and Technologies</p>
              <div className="ml-6 flex-grow border-t border-white dark:border-white border-1 "></div>
            </div>




            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">JavaScript</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">HTML</p>
              </div>


              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">CSS</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">TypeScript</p>
              </div>




              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">C#</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">SQL</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">React</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">

                <svg className="w-[48px] h-[48px]" viewBox="0 0 128 128">
                  <g fill="#ffffff">
                    <path d="M0 51.098V76.86h4.422V56.604L20.73 76.87h27.694v-4.113H30.553v-6.801h14.37v-4.113h-14.37v-6.621h17.87v-4.116H26.13v4.116h.002V76.68L5.527 51.098H0zm85.09.01v4.115h9.03v21.65h4.42v-21.65h8.847v-4.116H85.09zm-31.322.011 20.73 25.764h5.803L69.936 64.01l10.35-12.871-5.79.01-7.459 9.261-7.48-9.29h-5.79zm70.158 14.598c-.761 0-1.445.128-2.051.394-.602.263-1.078.633-1.426 1.108-.35.476-.525 1.032-.525 1.664 0 .77.258 1.384.78 1.847.517.464 1.227.809 2.124 1.036l1.24.312a7.02 7.02 0 0 1 1.026.334 1.91 1.91 0 0 1 .683.461 1.034 1.034 0 0 1 .248.697 1.25 1.25 0 0 1-.283.803 1.77 1.77 0 0 1-.76.535 3.11 3.11 0 0 1-1.132.192 3.24 3.24 0 0 1-1.116-.182 1.902 1.902 0 0 1-.804-.557 1.63 1.63 0 0 1-.352-.931h-1.941c.027.71.216 1.316.566 1.812s.836.873 1.46 1.13c.62.26 1.357.39 2.202.39.875 0 1.619-.136 2.233-.4.617-.27 1.088-.643 1.414-1.118.327-.479.488-1.028.488-1.658 0-.466-.09-.872-.266-1.217a2.726 2.726 0 0 0-.72-.887 4.227 4.227 0 0 0-1.028-.607 7.09 7.09 0 0 0-1.19-.385l-1.02-.25a6.975 6.975 0 0 1-.667-.195 2.82 2.82 0 0 1-.597-.285 1.304 1.304 0 0 1-.43-.418 1.037 1.037 0 0 1-.158-.58 1.21 1.21 0 0 1 .238-.717c.156-.21.385-.376.678-.5a2.771 2.771 0 0 1 1.056-.184c.585 0 1.062.126 1.43.383a1.424 1.424 0 0 1 .623 1.07h1.9a2.775 2.775 0 0 0-.513-1.607c-.333-.466-.792-.833-1.377-1.096-.584-.265-1.26-.394-2.033-.394zm-7.998.144v7.55c-.003.377-.062.697-.176.954a1.25 1.25 0 0 1-.506.584c-.218.133-.488.2-.803.2-.29 0-.546-.057-.771-.17a1.247 1.247 0 0 1-.522-.481 1.474 1.474 0 0 1-.195-.75h-1.963c0 .661.147 1.213.447 1.656a2.768 2.768 0 0 0 1.211 1.002 4.22 4.22 0 0 0 1.72.34c.697 0 1.311-.134 1.835-.4a2.97 2.97 0 0 0 1.236-1.149c.293-.499.444-1.093.448-1.787v-7.549h-1.961zm-53.332.059-8.844 10.982h5.805l5.937-7.38-2.898-3.602zm45.785 8.498c-.324 0-.6.112-.83.336a1.07 1.07 0 0 0-.344.807 1.082 1.082 0 0 0 .344.818c.23.225.506.336.83.336a1.105 1.105 0 0 0 .574-.156c.177-.101.318-.24.428-.416a1.115 1.115 0 0 0 .166-.582 1.097 1.097 0 0 0-.354-.807 1.133 1.133 0 0 0-.814-.336z"></path>
                  </g>
                </svg>
                <p className="text-[20px] ml-0 md:ml-4 text-white">NextJS</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">Angular</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">Tailwind</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">BootStrap</p>
              </div>


              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">.NET</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">Postman</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <svg className="h-[48px] w-[48px]" viewBox="0 0 128 128">
                  <g fill="#ffffff">
                    <svg viewBox="0 0 128 128">
                      <path d="M64.002 8.576 128 119.424H0Zm0 0"></path>
                    </svg>
                  </g>
                </svg>
                <p className="text-[20px] ml-0 md:ml-4 text-white">Vercel</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">Figma</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <svg className="w-[48px] h-[48px]" viewBox="0 0 128 128">
                  <g fill="#ffffff"><path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                </svg>
                <p className="text-[20px] ml-0 md:ml-4 text-white">Github</p>
              </div>



              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">Jira</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">Azure</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">Slack</p>
              </div>

              <div className="w-[124px] sm:w-48 h-24 sm:h-16 bg-slate-900 lg:m-6 rounded-[10px] flex mx-auto my-4 flex-col sm:flex-row  justify-center md:justify-start  items-center px-4 ">
                <img className="w-[48px] h-[48px]" alt="Html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" />
                <p className="text-[20px] ml-0 md:ml-4 text-white">Notion</p>
              </div>


            </div>


          </div>
        </section>








        <div className="max-w-[1200px] mx-auto px-[20px]">
          <section className="pt-32  pb-0 lg:pb-32 " id="myWork">
            <div className="flex items-center pb-4">
              <p className="text-3xl" >My  work </p>
              <div className="ml-6 flex-grow border-t border-white dark:border-white border-1 "></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">

              <div className=" mx-[20px] xl:ml-0 lg:py-0 pb-20  ">
                <p className=" text-[60px]  lg:text-[90px] w-[100px] font-semibold text-blue-300 leading-tight">TaskHub FullStack</p>
                <p className="text-[20px] pt-8">
                  Lead and Deployed a fully functioning task tracker application named TaskHub. This fullstack project utilizes NextJS and the Tailwind library for the frontend. C# was used to create the API endpoints, and Azure was used to host the database.
                </p>
              </div>

              <a className="   mx-auto" target="_blank" href="https://task-hub-fullstack.vercel.app/">
                <div className="" >
                  <div className="  hover:text-yellow-300  w-[340px] md:w-[380px] lg:w-[340px] bg-slate-900 rounded-[10px]">

                    <Image style={{ objectPosition: 'top left' }} className="object-cover   rounded-t-[10px] h-[285px]  w-[340px] md:w-[380px] lg:w-[340px]" src={taskHub} alt="TaskHub pic" />

                    <div className="  flex items-center lg:mx-[20px]  h-[140px]  w-[340px] md:w-[380px] lg:w-[340px] ">
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


                <a className=" mx-auto mt-10 col-span-1 lg:col-span-2 xl:col-span-1 xl:mt-0" target="_blank" href="https://pokedex-pkpd.vercel.app/">
                  <div className="  hover:text-yellow-300   w-[340px] md:w-[380px] lg:w-[340px] bg-slate-900 rounded-[10px]">

                    <Image style={{ objectPosition: 'top left' }} className="object-cover   rounded-t-[10px] h-[285px]  w-[340px] md:w-[380px] lg:w-[340px]" src={pokemonApi} alt="TaskHub pic" />
                    <div className="  flex items-center lg:mx-[20px]  h-[140px]  w-[340px] md:w-[380px] lg:w-[340px] ">
                      <span>
                        <p className=" font-semibold  text-[24px]">Pokemon API</p>
                        <p className=" text-[20px] text-slate-300">JS HTML CSS TailWind</p>
                      </span>
                    </div>
                  </div>
                </a>

                <a className=" mx-auto   mt-10 lg:mt-0" target="_blank" href="https://rock-paper-scissors-lizard-spock-iota.vercel.app/">
                  <div className="  hover:text-yellow-300  w-[340px] md:w-[380px] lg:w-[340px] bg-slate-900 rounded-[10px]">
                    <Image style={{ objectPosition: 'top left' }} className="object-cover   rounded-t-[10px] h-[285px]  w-[340px] md:w-[380px] lg:w-[340px]" src={rockPaperSpock} alt=" TaskHub pic" />
                    <div className="  flex items-center lg:mx-[20px]  h-[140px]  w-[340px] md:w-[380px] lg:w-[340px] ">
                      <span>
                        <p className=" font-semibold text-[24px]">Rock Paper Scissors Spock</p>
                        <p className=" text-[20px] text-slate-300">JS HTML CSS Bootstrap</p>
                      </span>
                    </div>
                  </div>
                </a>

                <a className=" mx-auto  xl:mt-0" target="_blank" href="https://news-homepage-main-five-plum.vercel.app/">
                  <div className="  hover:text-yellow-300  w-[340px] md:w-[380px] lg:w-[340px] bg-slate-900 rounded-[10px]">
                    <Image style={{ objectPosition: 'top left' }} className="object-cover   rounded-t-[10px] h-[285px]  w-[340px] md:w-[380px] lg:w-[340px]" src={techPage} alt="TaskHub pic 1" />
                    <div className="  flex items-center lg:mx-[20px]  h-[140px]  w-[340px] md:w-[380px] lg:w-[340px] ">
                      <span>
                        <p className=" font-semibold text-[24px]">Tech Home News Page</p>
                        <p className=" text-[20px] text-slate-300">HTML CSS Tailwind</p>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full h-full bg-black py-6" id="contact">
          <div className=" max-w-[1260px] mx-auto h-full  items-center grid grid-cols-1 md:grid-cols-2 ">

            <div className=" text-center md:text-left text-[16px] lg:text-[24px]">
              <p>marodriguez@codestack.co</p>
              <p>(209) 565-4841</p>
            </div>

            <div className="mx-auto md:mx-0 md:ml-auto flex">
              <a target="_blank" href="www.linkedin.com/in/marcos-rodriguez-b15b72276">
                <svg className="w-[48px] h-[48px]" viewBox="0 0 128 128" >
                  <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
                </svg>
              </a>
              <a href="https://github.com/MarcosRodriguez03" target="_blank">
                <svg className=" mx-[30px] w-[48px] h-[48px]" viewBox="0 0 128 128">
                  <g fill="#ffffff"><path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                </svg>
              </a>
              <a href="https://docs.google.com/document/d/1He3mDzgeQOpcBPR7bk25GzBJNu9FOgFHXvHPpB1u3ws/edit?usp=sharing" target="_blank">
                <Image className="w-[48px] h-[48px]" alt="Resume" src={documentPic} />
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>

  );
}