import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';  
import backgroundImage from '../assets/hero_bg.jpg';
import {projects} from '../export';

export const Portfolio = () => {
  useEffect(() => {
      AOS.init({ duration: 800,
        delay : 200, 
        once: false
      });
       }, []);
  return (
    <div id='projects' className='w-full h-auto flex flex-col justify-center items-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[60px] bg-cover bg-center ' 
    style={{ backgroundImage: `url(${backgroundImage})`, }}>
     <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themegreen uppercae text-sm font-poppins '>OUR PROTOFOLIO</h1>
     <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[45px] text-[30px] capitalize leading-[1.2em] font-poppins lg:w-[50%] w-full text-center '>Explore our protfolio and showcase our best works </h1>
     <p data-aos="zoom-in" data-aos-delay="150" className='text-gray-300 text-md font-poppins lg:w-[60%] w-full text-center '>“We empower businesses to embrace innovation, streamline processes, and achieve growth by driving digital transformation with excellence.”</p>

     <div className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 mt-8'>
      {projects.map((project, index) => (
        <div key={index} className='w-full flex flex-col justify-start items-start '>
          <img src={project.img} alt=""  className='w-full bg-cover bg-center '/>
      <div className='w-full bg-gray-600 p-8  flex flex-col justify-start items-start gap-4'>
        <h1 className='text-white lg:text-[25px] text-[22px] font-poppins capitalize leading-[1.2em] text-left'>{project.title}</h1>
        <p className='text-gray-300 text-sm font-poppins text-left '>{project.para}</p>
        <button className='text-themegreen hover:text-white text-sm font-semibold mt-5'>VIEW MORE</button>
      </div>
     </div>
      ))}
    </div>
    </div>
  )
}
