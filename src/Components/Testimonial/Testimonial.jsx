import React from 'react'
import "./Testimonial.css"
import ProfilePic1 from "../../img/profile1.jpg"
import ProfilePic2 from "../../img/profile2.jpg"
import ProfilePic3 from "../../img/profile3.jpg"
import ProfilePic4 from "../../img/profile4.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper'

import "swiper/css/pagination"
import "swiper/css"


const Testimonial = () => {
    const clients = [
        {
            img: ProfilePic1,
            review : "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente accusamus repudiandae alias, veritatis consequatur eligendi reiciendis, nesciunt praesentium nihil numquam, ipsum saepe "
        },
           {
            img: ProfilePic2,
            review : "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente accusamus repudiandae alias, veritatis consequatur eligendi reiciendis, nesciunt praesentium nihil numquam, ipsum  "
        },
           {
            img: ProfilePic3,
            review : "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente accusamus repudiandae alias, veritatis consequatur eligendi reiciendis, nesciunt praesentium nihil numquam, ipsum  "
        },
           {
            img: ProfilePic4,
            review : "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente accusamus repudiandae alias, veritatis consequatur eligendi reiciendis, nesciunt praesentium nihil numquam, ipsum  "
        }
        
   ]
   
  return (
      <div className="testimonial-wrapper" id='testimonial'>
          <div className="testimonial-heading">
              <span>Clients always get</span>
              <span>Exceptional Work</span>
              <span> from me</span>
          <div className="blur testimonial-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur testimonial-blur2" style={{ background: "skyblue" }}></div>
          </div>

        
          {/*Slider*/}
          <Swiper modules={[Pagination]}
              slidesPerView={1}
              pagination = {{clickable:true}}
          >
             
          {
              clients.map((clients, index) => {
                  return(
                      <SwiperSlide key={index}>
                          <div className="testimonial">
                      <img src={clients.img} alt="" />
                      <span>{clients.review} </span> 
</div>
                  </SwiperSlide>) 
              })
              }
              </Swiper>
      </div>
  )
}

export default Testimonial