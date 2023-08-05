import React from 'react'
import css from "./Team.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination"


const Team = () => {
  return (
    <div className={css.container}>
     <div className={css.div1}>
        <span>“Driven by Innovation and collaboration”</span>
        <span> Meet the Invicious Team</span>
     </div>

     {/* <div className={css.div2}>
        <div className={css.box1}>
            <span>Barathi M S</span>
            <span>Co-founder & CEO</span>
            <span>With a diverse set of skills that spans across the entire spectrum of software development, and a wealth of experience, Barathi works meticulously to drive Invicious forward in the fast-paced world of technology.</span>
        </div>
        <div className={css.box1}>
            <span>Sinchana L</span>
            <span>CFO (Invicious Metacorp (P) Ltd.)</span>
            <span>With an eye for detail and a focus, Sinchana ensures that the company operates smoothly and efficiently. Her various skill sets in finance and administration enable her to manage the financial aspects of the business, ensuring the growth of Invicious</span>
        </div>
     </div> */}

     <div className={css.div3}>
        <Swiper cl
        
       breakpoints={{
        1440:{
          slidesPerView:3,
        },
        999:{
          slidesPerView:3,
        },
        650: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
      modules={[Pagination]}
        //  pagination={true}
         pagination={{ clickable: true }}
         loopFillGroupWithBlank={true}
         slidesPerView={4}
         spaceBetween={10}
         slidesPerGroup={1}
         loop={true}
         
        >
            <SwiperSlide> 
        <div className={css.box2}>
        <span>Barathi M S</span>
            <span>CEO</span>
            <span>With a diverse set of skills that spans across the entire spectrum
               of software development, and a wealth of experience, Barathi works
                meticulously to drive Invicious forward in the fast-paced world
                 of technology.</span>
            
        </div> </SwiperSlide>
        <SwiperSlide> 
        <div className={css.box2}>
        <span>Sinchana L</span>
            <span>CFO</span>
            <span>With an eye for detail and a focus, Sinchana ensures that the company
               operates smoothly and efficiently. Her various skill sets in finance and
                administration enable her to manage the financial aspects of
                 the business, ensuring the growth of Invicious</span>
            
        </div> </SwiperSlide>

      
        <SwiperSlide> 
        <div className={css.box2}>
            <span>Nivetha S</span>
            <span>UI/UX Designer</span>
            <span>Nivetha is responsible for creating intuitive and engaging user interfaces. With a keen eye for detail and passion for design, and her expertise, she helps Invicious create user friendly products.</span>
            
        </div> </SwiperSlide>
        <SwiperSlide> 
        <div className={css.box2}>
            <span>Anamika Devi G</span>
            <span>Back End Developer</span>
            <span>As a backend developer at Invicious, Anamika comes with a strong background in computer science and software engineering. Her technical expertise ensures that our products are robust, reliable and scalable.</span>
        </div>  </SwiperSlide>
        <SwiperSlide> 
        <div className={css.box2}>
            <span>Alhad T M</span>
            <span>Front End Developer</span>
            <span>Alhad brings a strong sense of design and functionality to every project, with a passion for creating interactive and engaging user interfaces. His expertise in the field ensures the high-quality and responsiveness of our products.</span>
        </div>  </SwiperSlide>
        <SwiperSlide> 
        <div className={css.box2}>
            <span>Karthikeyan</span>
            <span>Chief Designer</span>
            <span>As a UI/UX Designer at invicious, Karthikeyan has a strong sense of product research & development of a responsible product based on high-fidelity prototypes, Integrating user-centered designs and technologies.</span>
        </div>  </SwiperSlide>
        </Swiper> 
     </div>





    </div>
  )
}

export default Team
