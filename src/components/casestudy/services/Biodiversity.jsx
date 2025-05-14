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

const Biodiversity = () => {
  const CarouselData = [
    {
      src: "/assets/img/biodiversityS1.png",
      alt: "ROR",
      title: "Dan McCarty",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/biodiversityS2.png",
      alt: "Web Development",
      title: "Maria Elena",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/biodiversityS3.png",
      alt: "Start-up",
      title: "Johan Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
    {
      src: "/assets/img/biodiversityS4.png",
      alt: "Enterprise Solutions",
      title: "Dana Midby",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/biodiversityS4.png",
      alt: "Enterprise Solutions",
      title: "Alex Ong",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels, as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/biodiversityS2.png",
      alt: "Enterprise Solutions",
      title: "Enrico Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
  ];
  const solutionTitle =
    "According to client vision, InfoKoders technologies perfectly designed and developed a web-based biodiversity mapping and reporting tool by integrating top-notch technologies and features. Currently, the remarkable biodiversity assessment tool is rocking around the world by helping diverse companies, governments, researchers, and financial institutions with fast and effective access to global biodiversity datasets such as IUCN Red list of threatened species, the world database on protected areas, and the world database of key diversity areas.";
  const productData = [
    {
      title: "Client and Product Goals",
      // des: "",
      subTitle:
        "A UK based Client came up with the innovative mission of developing an incredible Biodiversity data collection platform for instructing the decision-makers about geographic information of global biodiversity.",
      buttonText: "Successfully mirrored the Vision into Reality",
      imageSrc: "/assets/img/diversitytab.png",
    },
  ];
  const featuresData = [
    {
       image:"/assets/img/Proficiency.gif",
      des: "Data Search Service for easily collecting authoritative Global biodiversity Info",
      subDes:
        "This is one of the most demanding functionality of the platform that facilities the users to obtain the biodiversity report of a specific country in required form as PDF document, raw data in CSV format, and map files. The Report templates consist of a simple proximity report, a World bank group risk report, and a freshwater report",
    },
    {
      image:"/assets/img/socialnoetwork.gif",
      des: "Access and Download service",
      subDes:
        "Users can gain the information of the three datasets through GIS download services. The data can be retrieved in two forms one as global downloads and another possible way is by selecting smaller areas to download.",
    },
    {
      image:"/assets/img/mobileapp.gif",
      des: "Quick visual screening of critical biodiversity",
      subDes:
        "It is rooted with the world’s most authoritative global biodiversity datasets that direct the users to make the correct decisions in policy and practice. Enter the location by applying several filters and seize the productive details.",
    },
    {
      image:"/assets/img/railsmvp.gif",
      des: "Subscription plan",
      subDes:
        "Depending on the users or organization necessities, they can select relevant plans like Free, Basic, Pro, and enterprise by analysing the features and functionalities in each plan.",
    },
  ];
  const clientSubTitle = "";
  const clientData = [
    "Presently the Platform has prominent users including WWF, the world bank group, Shell,Mitsubishi, Cambridge university, and the department of environment Australia",
    "Its partnered with leading conservation organizations- BirdLife International (BirdLife), Conservation International (CI), International Union for Conservation of Nature (IUCN), and UN Environment World Conservation Monitoring Centre (UNEP-WCMC).",
    "From 12+ years the platform is actively maintained and incredibly supporting numerous organizations, academics, governments, researchers, and financial sectors with authoritative biodiversity data.",
    "Recently it launched STAR( Species threat abatement and Restoration) a notable biodiversity metric to support nature positive action.",
  ];

  const contactTitle = "Have a similar project idea?";
  const contactSubTitle =
    "Share your requirements and get a free consultation.";

  return (
    <>
      <Box>
        {/* Header and image  */}
        <Grid id="carousel" className={styles.backgroundDiversity}>
          <Navbar />
          <Typography
            className={styles.imageTitle}
            sx={{
              fontSize:{
              xs: "23px",
              sm: "22px",
              md: "25px",
              lg: "30px",
              xl: "30px",},
            fontFamily:"NovemberPro",
             paddingRight: "5% !important",
            textAlign:{ xs: "center", sm: "center", md: "right", lg: "right"}, }}
          >
            Case Study
          </Typography>
          <Typography
            className={styles.imageSubTitle}
            sx={{
              fontSize:{
              xs: "23px",
              sm: "25px",
              md: "30px",
              lg: "35px",
              xl: "35px",},
            fontFamily:"NovemberPro-Reg",
             paddingRight: "5% !important",
            textAlign:{ xs: "center", sm: "center", md: "right", lg: "right"}, }}
          >
            World’s Popular Biodiversity Assessment tool unleashing global
            biodiversity information
          </Typography>
        </Grid>
        <ProductGoals productData={productData} />
        <Solutions
          CarouselData={CarouselData}
          solutionTitle={solutionTitle}
          isBiodiversity={true}
        />
        {/* <Portal /> */}
        {/* Client Achivement  */}
        <Features featuresData={featuresData} isBiodiversity={true} />
        {/* <ClientAchivement
          clientData={clientData}
          isClientAchivement={true}
          clientSubTitle={clientSubTitle}
        /> */}

        <Contact title={contactTitle} subTitle={contactSubTitle} />
        <Footer />
      </Box>
    </>
  );
};

export default Biodiversity;
