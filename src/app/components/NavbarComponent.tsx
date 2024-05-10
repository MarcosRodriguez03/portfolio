import React, { useEffect, useState } from 'react'

const NavbarComponent = () => {

    useEffect(() => {
        document.body.style.backgroundColor = "#1d1f21";
    })

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className=' fixed w-full top-0 navbar h-[70px] flex  justify-between items-center text-white px-[50px] py-[16px] z-50 backdrop-blur-md'>

                <p className=' font-[ArchivoSemi] text-[40px] me-10 font-bold cursor-pointer'>MR<span className='text-yellow-300'>.</span></p>


                <div className='hidden lg:block'>
                    <div className=' flex   gap-x-[30px]  text-[16px] h-full text-white'>
                        <a className=' font-[Archivo] my-auto hover:text-[#d3d5d5]' href="#mySkills">My Skills</a>
                        <a className=' font-[Archivo] my-auto hover:text-[#d3d5d5]' href="#myWork">My Work</a>
                        <a className=' font-[Archivo] my-auto hover:text-[#d3d5d5]' href="#contact">Contact</a>

                    </div>
                </div>

                <div className='block lg:hidden'>
                    <button className='focus:outline-none' >

                    </button>
                </div>



            </div>
            <div>
                {isOpen ?
                    <div className='bg-black p-10'>
                        <div className='flex flex-col gap-y-[20px] font-[ProximaNovaLight] text-white text-[30px]'>
                            <a className='font-[PoppinsRegular] my-auto hover:text-[#d3d5d5]' href="#dangers">Know the Dangers</a>
                            <a className='font-[PoppinsRegular] my-auto hover:text-[#d3d5d5]' href="#prepare">How to Prepare</a>
                            <a className='font-[PoppinsRegular] my-auto hover:text-[#d3d5d5]' href="#faq">FAQ</a>
                        </div>
                        <div className=' flex justify-evenly gap-x-[40px] pt-[20px]'>
                            <a href=""></a>
                        </div>
                    </div>
                    : ""}
            </div>
        </>
    )
}

export default NavbarComponent
