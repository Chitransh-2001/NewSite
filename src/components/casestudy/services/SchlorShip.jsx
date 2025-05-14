"use client";
import React, { useState } from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import ClientAchivement from "../clientAchivement/ClientAchivement";
import Solutions from "../clientAchivement/Solutions";
import ProductGoals from "../clientAchivement/ProductGoals";
import Portal from "../clientAchivement/Portals";
import Features from "../clientAchivement/Features";
import Contact from "../clientAchivement/Contact";
import Footer from "../../footer/Footer";
const Schlorship = () => {
  const clientData = [
    "Financial awards are being offered by big giant organizations: Taco Bell Foundation, the Houstan Livestock Show and Rodeo, Land O Lakes, TB12 Foundation, and The University of Alaska.",
    "Asper the info claimed by Forbes, the system declares millions in private scholarships for college students and also stated the accessibility of more than $24 million of fresh scholarship opportunities.",
    "The platform got scaled from 0 to 3 million active users and still reaching the new heights.",
  ];
  const CarouselData = [
    {
      src: "/assets/img/schlorshipS1.png",
      alt: "ROR",
      title: "Dan McCarty",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/schlorshipS2.png",
      alt: "Web Development",
      title: "Maria Elena",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/schlorshipS3.png",
      alt: "Start-up",
      title: "Johan Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
    {
      src: "/assets/img/schlorshipS2.png",
      alt: "Enterprise Solutions",
      title: "Dana Midby",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/schlorshipS3.png",
      alt: "Enterprise Solutions",
      title: "Alex Ong",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels, as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/schlorshipS3.png",
      alt: "Enterprise Solutions",
      title: "Enrico Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
  ];
  const solutionTitle = "";
  const productData = [
    {
      title: "Client and Product Goals",
      subTitle: "",
      des: " A Minneapolis-based start-up wished to eradicate the student’s financial struggle in an educational realm by taking the advantage of new-age technologies. He narrated his entire vision of building an online scholarship management platform for revolutionizing the process school is paid, helping deserving students, and effective management of award programs.",
      buttonText: "Transformed the Vision into Reality",
      imageSrc: "/assets/img/laptopMobile.png",
    },
  ];
  const contactTitle = "Have a similar project idea?";
  const contactSubTitle =
    "Share your requirements and get a free consultation.";
  const clientSubTitle =
    " The Platform innovatively built and structured by InfoKoders technologies is now skyrocketing in USA educational space and helping millions of students to achieve their dreams";
  return (
    <>
      <Box>
        {/* Header and image  */}
        <Grid id="carousel" className={styles.backgroundSchlorship}>
          <Navbar />
          <Typography
            className={styles.imageTitle}
            sx={{fontFamily:"NovemberPro", fontSize:{
              xs: "25px",
              sm: "35px",
              md: "25px",
              lg: "35px",
              xl: "35px",
            }}}
          >
            Case Study
          </Typography>
          <Typography
            className={styles.imageSubTitle}
            sx={{fontFamily:"NovemberPro-Reg", fontSize:{
              xs: "22px",
              sm: "30px",
              md: "22px",
              lg: "30px",
              xl: "30px",
            }}}
          >
            A Online Scholarship Management Platform - fulfilling Educational
            Aspirations of Million Students
          </Typography>
        </Grid>
        <ProductGoals productData={productData} />
        <Solutions CarouselData={CarouselData} solutionTitle={solutionTitle} />
        <Portal />
        {/* Client Achivement  */}
        <ClientAchivement
          clientData={clientData}
          clientSubTitle={clientSubTitle}
          isSchlorship={true}
        />
        {/* <Features /> */}
        <Contact title={contactTitle} subTitle={contactSubTitle} />
        <Footer />
      </Box>
    </>
  );
};

export default Schlorship;
