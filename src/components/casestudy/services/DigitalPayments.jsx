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

const DigitalPayments = () => {
  const CarouselData = [
    {
      src: "/assets/img/s-5.png",
      alt: "ROR",
      title: "Dan McCarty",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/s-1.png",
      alt: "Web Development",
      title: "Maria Elena",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/s-2.png",
      alt: "Start-up",
      title: "Johan Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
    {
      src: "/assets/img/s-5.png",
      alt: "Enterprise Solutions",
      title: "Dana Midby",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/s-2.png",
      alt: "Enterprise Solutions",
      title: "Alex Ong",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels, as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/s-2.png",
      alt: "Enterprise Solutions",
      title: "Enrico Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
  ];
  const solutionTitle =
    "InfoKoders technologies team has thoroughly tested the platform and identified the bugs in features, design, and functionality, and reengineered it by giving a user-friendly feel and touch.";
  const productData = [
    {
      title: "Client and Business Goals",
      subTitle:
        "Digital payments are accelerating the entrepreneur’s profitability by facilitating them to carry out financial transactions with customers, suppliers, and the governments in a more effective, safer, and cheaper way.",
      des: "The smart way is more favorable for women entrepreneurs encouraging them to take greater control over income, smoothly benefiting the entire household especially children With a bright intention to bring awareness about the importance of digital payments, an ambitious client addressed his valuable motive of improvising the platform and making it bug-free and user friendly.",
      buttonText: "Perfectly remodeled the platform.",
      imageSrc: "/assets/img/mactablet.png",
    },
  ];
  const clientSubTitle = "";

  const featuresData = [
    {
      image:"/assets/img/payment.gif",
      des: "The platform provides advisory services to member priorities for digital payments",
    },
    {
      image:"/assets/img/socialnoetwork.gif",
      des: "Share action-oriented research and foster peer learning",
    },
    {
      image:"/assets/img/global.gif",
      des: "Conduct advocacy at a national, regional, and global level",
    },
    {
      image:"/assets/img/mobileapp.gif",
      des: "Provide awareness of digital payments through content sharing",
    },
  ];

  const clientData = [
    "The stunning platform modernized by InfoKoders technologies supports the alliance of 75 members including national governments from Africa, Asia-pacific and Latin America, companies and international organizations which have committed to digitizing payments.",
    "Numerous big countries, international organizations like UNICEF, UNDP, UNFP, and companies like Unilever, The Coca-Cola Company, H&M, Marks, and Spenser are actively associated with this educating platform.",
  ];
  const contactTitle = "Have a similar project idea?";
  const contactSubTitle =
    "Share your requirements and get a free consultation.";
  return (
    <>
      <Box>
        {/* Header and image  */}
        <Grid id="carousel" className={styles.backgroundPayments}>
          <Navbar />
          <Typography
            className={styles.imageTitle}
           sx={{
            fontSize:{
              xs: "25px",
              sm: "35px",
              md: "25px",
              lg: "35px",
              xl: "35px",
              fontFamily:"NovemberPro",}}}
          >
            Digital Payments
          </Typography>
          <Typography
            className={styles.imageSubTitle}
            sx={{fontSize:{
              xs: "22px",
              sm: "30px",
              md: "22px",
              lg: "30px",
              xl: "30px",
              fontFamily:"NovemberPro-Reg"},}}
          >
            A serviceable platform providing awareness of digital payments
          </Typography>
        </Grid>
        <ProductGoals productData={productData} />
        <Solutions
          isDigital={true}
          CarouselData={CarouselData}
          solutionTitle={solutionTitle}
        />
        {/* <Portal /> */}
        {/* Client Achivement  */}
        <Features featuresData={featuresData} />
        {/* <ClientAchivement
          isClientAchivement={true}
          clientData={clientData}
          clientSubTitle={clientSubTitle}
        /> */}
        <Contact title={contactTitle} subTitle={contactSubTitle} />

        <Footer />
      </Box>
    </>
  );
};

export default DigitalPayments;
