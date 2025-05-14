"use client"
import Carousel from '../../components/home/Carousel'
import Prototype from '../../components/startup/Prototype'
import React from 'react'
const page = () => {
  const startupData = [
    {
      title: "Case Study",
      backgroundImage: "url(/assets/img/start-up-slide1.webp)",
      des: "A serviceable platform providing awareness of digital payments",
      button: "Know More",
      path:"/studies/services/digital"
    },
    {
      title: "Case Study",
      backgroundImage: "url(/assets/img/start-up-slide3.webp)",
      des: "A Online Scholarship Management Platform - fulfilling Educational Aspirations of Million Students",
      button: "Know More",
      path:"/studies/services/schlorship"
    },
    {
      title: "Case Study",
      backgroundImage: "url(/assets/img/start-up-slide4.webp)",
      des: "A full fledged freelance platform connecting project owners and proficient freelancers ",
      button: "Know More",
      path:"/studies/services/freelance"
    },
    {
      title:"Case Study",
      backgroundImage:"url(/assets/img/start-up-slide5.webp)",
      des:"World’s Popular Biodiversity Assessment tool unleashing global biodiversity information",
      button:"Know More",
      path:"/studies/services/diversity"
    },
    {
      title:"Case Study",
      backgroundImage:"url(/assets/img/start-up-slide6.webp)",
      des:"A Remarkable football platform delivering in-depth soccer details ",
      button:"Know More",
       path:"/studies/services/platform"
    },
  ]
  return (
    <div>
      <Carousel isStartup={true} data={startupData}  />
     <Prototype/>
    </div>
  ) 
}

export default page
