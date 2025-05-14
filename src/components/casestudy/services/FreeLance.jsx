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
const FreeLance = () => {
  const CarouselData = [
    {
      src: "/assets/img/freelanceS2.png",
      alt: "ROR",
      title: "Dan McCarty",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/freelanceS1.png",
      alt: "Web Development",
      title: "Maria Elena",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/freelanceS3.png",
      alt: "Start-up",
      title: "Johan Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
    {
      src: "/assets/img/freelanceS4.png",
      alt: "Enterprise Solutions",
      title: "Dana Midby",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "/assets/img/freelanceS5.png",
      alt: "Enterprise Solutions",
      title: "Alex Ong",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels, as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "/assets/img/freelanceS1.png",
      alt: "Enterprise Solutions",
      title: "Enrico Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
  ];
  const solutionTitle =
    "Successfully built, designed, and delivered a user-friendly freelancing application facilitating millions of talents to get hitched with projects submitted by businesses around the world.";
  const productData = [
    {
      title: "Client and Product Goals",
      subTitle:
        "In this digital age, millions of specialists worldwide diverted from the 9 to 5 hectic work culture to freelancing/ flexible remote work for smooth maintenance of work-life balance. A tremendous number of enterprises, small start-ups as well as big companies are leveraging this smart opportunity of getting associated with freelancers in order to get their work done quickly and affordably.",
      des: "By analyzing the revolution in the job market and surveying the growth of freelancers, an ambitious client instructed his vision to InfoKoders technologies for developing a valuable imparting freelancing marketplace with the blend of phenomenal technologies.",
      buttonText:
        "Met the vision by developing a rewarding freelancing platform",
      imageSrc: "/assets/img/freelanceproduct.png",
    },
  ];
  const clientData = [
    "A great number of freelancers and clients have registered into this platform and shared their success stories.",
    "The phenomenal platform is offering high annual income for the freelancers and including the fast-growing skillsets every year for the companies looking to hire business-specific talents.",
    "Small to big organizations are using this platform for getting access to a large number of talent pools.",
  ];
  const clientSubTitle = "";
  const contactTitle =
    "Willing to build a profit-generating freelancing portal with high-tech features?";
  const contactSubTitle =
    "Get the innovative Freelancing app development plan from InfoKoders technologies experts";
  return (
      <Box>
        {/* Header and image  */}
        <Grid id="carousel" className={styles.backgroundFreelance}>
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
            },
            fontFamily:"NovemberPro",
            paddingRight: "5% !important",
            textAlign:{ xs: "center", sm: "center", md: "right", lg: "right"} }}
          >
            Case Study
          </Typography>
          <Typography
            className={styles.imageSubTitle}
            sx={{ paddingRight: "5% !important", 
            fontSize:{
              xs: "22px",
              sm: "30px",
              md: "22px",
              lg: "30px",
              xl: "30px",
            },
            fontFamily:"NovemberPro-Reg",
            textAlign:{ xs: "center", sm: "center", md: "right", lg: "right"}, }}
          >
            A full fledged freelance platform connecting project owners and
            proficient freelancers
          </Typography>
        </Grid>
        <ProductGoals productData={productData} />
        <Solutions CarouselData={CarouselData} solutionTitle={solutionTitle} isFreelance={true}/>
        {/* <Portal /> */}
        {/* Client Achivement  */}
        {/* <ClientAchivement
          clientData={clientData}
          clientSubTitle={clientSubTitle}
        /> */}
        {/* <Features /> */}
        <Contact
          title={contactTitle}
          subTitle={contactSubTitle}
          isFreelance={true}
        />
        <Footer />
      </Box>
  );
};
export default FreeLance;
