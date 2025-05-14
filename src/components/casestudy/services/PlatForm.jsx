import React from "react";
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

const PlatForm = () => {
  const CarouselData = [
    {
      src: "/assets/img/footballS1.png",
      alt: "ROR",
      title: "Dan McCarty",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/footballS2.png",
      alt: "Web Development",
      title: "Maria Elena",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/footballS3.png",
      alt: "Start-up",
      title: "Johan Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
    {
      src: "/assets/img/footballS1.png",
      alt: "Enterprise Solutions",
      title: "Dana Midby",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/footballS4.png",
      alt: "Enterprise Solutions",
      title: "Alex Ong",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels, as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/footballS2.png",
      alt: "Enterprise Solutions",
      title: "Enrico Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
  ];
  const solutionTitle =
    "By clearly understanding the Client mission, the InfoKoders technologies team beautifully built, designed, and launched an exceptional football web-based platform fulfilling all the needs of football lovers by enabling them to keep an eye on every football league turning up across the globe and reflects the strategies or trading knowledge.";
  const productData = [
    {
      title: "Client and Business Goals",
      subTitle:
        "A UK-based Client presented his plan to develop a visually consistent, easy navigate, and engaging football portal that delivers A-Z insights of football matches that are going to take place around the globe.",
      des: "The main objective of the client was to provide an online convenience to football lovers, through which they can easily learn about the complete live or past match stats without missing any details.",
      buttonText: "Successfully achieved Client Vision.",
      imageSrc: "/assets/img/platformproduct.png",
    },
  ];
  const clientSubTitle = "";

  const featuresData = [
    {
      image:"/assets/img/clock.gif",
      des: "Stay up to date",
      subDes:
        "The portal provides quick access to favorite championship, table standing, and complete fixtures so that the user doesn’t miss any match moment",
    },
    {
      image:"/assets/img/mobileapp.gif",
      des: "Simple and Handy user interface",
      subDes:
        "Clean, Minimal, and attractive user interface that reflects game reviews and summary of football matches.",
    },
    {
      image:"/assets/img/dribble.gif",
      des: "Fixture tracker",
      subDes:
        "Empower the football fans to track the team’s progress by switching between player and upcoming fixture.",
    },
    {
      image:"/assets/img/teammember.gif",
      des: "Discover all leagues",
      subDes:
        "Users can be updated about all the upcoming leagues by accessing this feature",
    },
    {
      image:"/assets/img/Proficiency.gif",
      des: " Live Games",
      subDes:
        "Live on the pitch with your favorite team by viewing the live scores and player performance in an Ongoing football match.",
    },
  ];

  const clientData = [
    "Provide the precise football trading assistance to users aiming to create second income",
    "High probability, reliable trading, and secure betting tips everything can be achieved with the platform.",
    "Cherished as one of the best football trading platforms among football admires for the people looking to derive income from football betting and trading",
  ];
  const contactTitle = "Have a similar project idea?";
  const contactSubTitle =
    "Share your requirements and get a free consultation.";

  return (
    <>
      <Box>
        {/* Header and image  */}
        <Grid id="carousel" className={styles.backgroundPlatform}>
          <Navbar />
          <Typography
            className={styles.imageTitle}
            sx={{
              fontSize:{
              xs: "23px",
              sm: "22px",
              md: "25px",
              lg: "30px",
              xl: "30px",},fontFamily:"NovemberPro"
            }}
          >
            Case Study
          </Typography>
          <Typography
            className={styles.imageSubTitle}
            sx={{ fontSize:{
              xs: "23px",
              sm: "25px",
              md: "30px",
              lg: "35px",
              xl: "35px",
            },fontFamily: "NovemberPro"
            }}
          >
            A Remarkable football platform delivering in-depth soccer details
          </Typography>
        </Grid>
        <ProductGoals productData={productData} />
        <Solutions
          CarouselData={CarouselData}
          solutionTitle={solutionTitle}
          isPlatform={true}
        />
        {/* <Portal /> */}
        {/* Client Achivement  */}
        <Features featuresData={featuresData} isBiodiversity={true} />
        {/* <ClientAchivement
          clientData={clientData}
          clientSubTitle={clientSubTitle}
        /> */}

        <Contact title={contactTitle} subTitle={contactSubTitle} />

        <Footer />
      </Box>
    </>
  );
};

export default PlatForm;
