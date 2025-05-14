"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box, CardMedia, Button } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Link from "next/link";
import Image from "next/image";
import ContactUsModal from "../contact/ContactUsModal";
import reactDevelop from "../../../public/assets/img/reactpage.jpeg";
import Contact from "../casestudy/clientAchivement/Contact";
const ReactDevelopment = () => {
  const [open, setOpen] = useState(false);
  const cards = [
    {
      image: "/assets/img/gathering.gif",
      title: "Custom Development",
      desc: " We build customized matching solutions up to your enterprise and project needs. After investigating your business goals and objectives, our team makes tailors feature-rich native applications for a larger audience and provides a better user experience. ",
      button: "More Details",
      path: "customdevelopment",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "UX/UI Development",
      desc: "Our expertise and technology evolves continuously with new tools, frameworks and libraries along with a plethora of options for marketers and entrepreneurs. React JS is the best platform to develop UIs for mobile and web apps both without bugs and reading facilitation.",
      button: "More Details",
      path: "uiuxdevelopment",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Integration & Migration",
      desc: "We provide hassle-free migration services to adjust your offering to new market demands, updates and cloud integration. Our experts help you to migrate your existing website with multi-platform support without affecting your business cycle.",
      button: "More Details",
      path: "integration",
    },
    {
      image: "/assets/img/reduction.gif",
      title: "Maintenance & Upgradation",
      desc: "Our React development services offer all essential maintenance services and take care of browser security updates. We are always ready to take challenges based on customer marketing strategies to increase user satisfaction levels.",
      button: "More Details",
      path: "maintenance",
    },
  ];
  const services = [
    {
      image: "/assets/img/timeduration.gif",
      title: "Component-Based Architecture",
      desc: "ReactJS allows for modular, reusable components, reducing development time and ensuring better maintainability.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Fast Rendering with Virtual DOM",
      desc: "The Virtual DOM enhances performance by updating only the necessary components, making applications lightning-fast.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "SEO-Friendly Applications",
      desc: "ReactJS improves page load speed and rendering, helping businesses achieve better SEO rankings.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Rich UI & Interactive Experience",
      desc: "ReactJS offers dynamic, responsive, and engaging user interfaces for superior user experience.",
    },
    {
      image: "/assets/img/ondemand.gif",
      title: "Strong Community & Ecosystem",
      desc: "ReactJS is backed by Facebook and a large global community, ensuring continuous improvements and a vast library of tools.",
    },
    {
      image: "/assets/img/reusable.gif",
      title: "Cross-Platform Compatibility",
      desc: "Why build separate apps for web and mobile? With ReactJS and React Native, you can share business logic between platforms, accelerating development while ensuring a consistent user experience across devices.",
    },
  ];
  const Process = [
    {
      title: "Custom ReactJS Web Application Development",
      desc: "We build tailored ReactJS applications with advanced UI/UX and seamless functionality to meet unique business requirements.",
    },
    {
      title: "Single Page Application (SPA) Development",
      desc: "Our developers specialize in fast-loading SPAs that deliver a smooth user experience with quick transitions.",
    },
    {
      title: "Enterprise-Grade ReactJS Solutions",
      desc: "We develop scalable and secure enterprise applications capable of handling complex workflows.",
    },
    {
      title: "ReactJS Plugin & Component Development",
      desc: "Need additional features? We create reusable, efficient components and plugins to enhance your app’s capabilities.",
    },
    {
      title: "ReactJS API Development & Integration",
      desc: "We build and integrate RESTful APIs, ensuring smooth data communication between platforms.",
    },
    {
      title: "ReactJS Support & Maintenance",
      desc: "Our team provides regular updates, security patches, and performance optimization for your ReactJS applications.",
    },
  ];
  const partner = [
    {
      image: "/assets/img/teammember.gif",
      title: "Expert ReactJS Developers",
      desc: "Our team of experienced developers delivers high-quality, scalable, and robust solutions.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Secure & Scalable Solutions",
      desc: "We follow the best security practices, ensuring your applications are protected from vulnerabilities.",
    },
    {
      image: "/assets/img/customers.gif",
      title: "Client-Centric Approach",
      desc: "We work closely with you to understand your business needs and deliver tailor-made solutions.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Agile Development Methodology",
      desc: "We follow agile practices to ensure iterative improvements and on-time project delivery.",
    },
    {
      image: "/assets/img/railapp.gif",
      title: "Full-Cycle Development",
      desc: "From planning and design to development, testing, and maintenance—we handle everything end-to-end.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Performance-Optimized Applications",
      desc: "We prioritize speed and efficiency from the ground up, optimizing both frontend and backend to ensure lightning-fast load times and seamless user experiences.",
    },
  ];
  const development = [
    {
      image: "/assets/img/quality.gif",
      title: "Requirement Analysis",
      desc: "Understanding your business goals, challenges, and technical needs to create a clear roadmap.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "UI/UX Design & Prototyping",
      desc: "Designing intuitive, user-friendly interfaces and interactive prototypes for an enhanced user experience.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "ReactJS Development & Coding",
      desc: "Implementing clean, efficient, and maintainable code for high-performing applications.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Testing & Quality Assurance",
      desc: "Conducting rigorous testing to ensure a bug-free and optimized application.",
    },
    {
      image: "/assets/img/deploypro.gif",
      title: "Deployment & Optimization",
      desc: "Launching and optimizing the application for the best performance across all devices.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Ongoing Support & Maintenance",
      desc: "Regular updates, security patches, and performance enhancements to keep your app running smoothly.",
    },
  ];
  const contactTitle = "Let’s Build Your Next ReactJS Project!";
  const contactSubtitle =
    "Looking for top-notch ReactJS development services? Partner with InfoKoders Technologies and get a scalable, secure, and high-performing web application tailored to your business needs.";
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundReact}>
        <Navbar />
        <Typography
          className={styles.imageTitle}
          fontSize={{
            xs: "30px",
            sm: "30px",
            md: "45px",
            lg: "45px",
            xl: "45px",
          }}
          sx={{ paddingTop: "200px !important", fontFamily: "NovemberPro" }}
        >
          React Js
        </Typography>
        <Typography
          className={styles.imageSubTitle}
          sx={{
            fontSize: {
              xs: "18px",
              sm: "18px",
              md: "20px",
              lg: "25px",
              xl: "25px",
            },
            fontFamily: "NovemberPro-Reg",
          }}
        >
          InfoKoders Technologies delivers interactive designs for multiple web
          and mobile development projects. We are a renowned and leading Custom
          Application Development company building innovative applications such
          as UI/UX design, development, deployment, maintenance, and support.
          With our expertise and professional values, we adhere to providing
          exclusive and customized React.js Apps for all businesses and
          enterprises.
        </Typography>
      </Grid>
      {/* ReactJS Development Company */}
      <Grid container spacing={3} className={styles.angularContainer}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.angularintro}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            <span className={styles.OurUsp}>ReactJS Development</span> Company
          </Typography>
          <Typography
            className={styles.angularContent}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              fontWeight: "bold",
            }}
          >
            Empower Your Web Applications with ReactJS
          </Typography>
          <Typography
            className={styles.angularContent}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            At <b>InfoKoders</b>, we offer expert{" "}
            <b>ReactJS development services</b> to build highly dynamic, fast,
            and scalable web applications. ReactJS, maintained by Facebook, is a
            powerful JavaScript library that enables the development of
            interactive UIs and high-performance applications.
          </Typography>
          <Typography
            className={styles.angularContent}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Whether you need a custom web application,{" "}
            <b>single-page application (SPA)</b>, enterprise-grade solution, or
            API-driven development, our experienced <b>ReactJS developers</b>{" "}
            deliver robust, secure, and feature-rich applications tailored to
            your business needs.
          </Typography>
          <Button
            sx={{
              fontSize: { lg: "16px", md: "14px", sm: "16px", xs: "14px" },
              fontFamily: "NovemberPro-Reg",
              cursor: "pointer",
              padding: "8px 18px",
              border: "1px solid transparent",
              color: "#ffffff",
              backgroundColor: "#333",
              marginTop: "1rem",
              marginBottom: "1rem",
              textTransform: "none",
            }}
            onClick={() => setOpen(true)}
          >
            Let's connect
          </Button>
          {open && <ContactUsModal open={open} setOpen={setOpen} />}
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={reactDevelop}
            alt="image of the react development company"
            width={600}
            height={300}
          />
        </Grid>
      </Grid>
      {/* reactjs pages like custom developer,ui/ux,Maintenance,Integration  */}
      <Grid container spacing={4} className={styles.cardsReact}>
        {cards?.map((item, index) => (
          <Grid
            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
            key={index}
            className={styles.uspBoxPartner}
          >
            <CardMedia
              sx={{ width: "90px", height: "90px", marginBottom: "20px" }}
              component="img"
              image={item?.image}
            />
            <Typography
              className={styles.uspBoxTitle}
              sx={{
                fontSize: {
                  lg: "20px",
                  md: "20px",
                  sm: "20px",
                  xs: "20px",
                },
                fontFamily: "NovemberPro",
              }}
            >
              {item?.title}
            </Typography>
            <Typography
              className={styles.uspBoxDesc}
              sx={{
                fontSize: {
                  lg: "16px",
                  md: "16px",
                  sm: "16px",
                  xs: "16px",
                },
                fontFamily: "NovemberPro-Reg",
              }}
            >
              {item?.desc.length > 170
                ? `${item?.desc.slice(0, 170)}...`
                : item.desc}
            </Typography>
            <Link href={`/services/reactjs/${item.path}`} passHref>
              <Button
                sx={{
                  fontSize: { lg: "16px", md: "14px", sm: "16px", xs: "14px" },
                  fontFamily: "NovemberPro-Reg",
                  cursor: "pointer",
                  padding: "8px 18px",
                  border: "1px solid transparent",
                  color: "#ffffff",
                  backgroundColor: "#333",
                  margin: "1rem 0 1rem 0",
                  textTransform: "none",
                }}
              >
                {item?.button}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
      {/* why choose reactjs for the web development   */}
      <Grid container className={styles.servicesContainer}>
        <Grid>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              paddingBottom: "20px",
              textAlign:"center"
            }}
          >
            Why Choose ReactJS for Web Development?
          </Typography>
        </Grid>
        <Grid container spacing={4} className={styles.coresubcont}>
          {services?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              key={index}
              className={styles.uspBox}
            >
              <CardMedia
                sx={{ width: "90px", height: "90px", marginBottom: "10px" }}
                component="img"
                image={item?.image}
              />
              <Typography
                className={styles.uspBoxTitle}
                sx={{
                  fontSize: {
                    lg: "20px ",
                    md: "20px ",
                    sm: "20px ",
                    xs: "20px ",
                  },
                  fontFamily: "NovemberPro",
                  marginTop: "10px",
                }}
              >
                {item?.title}
              </Typography>
              <Typography
                className={styles.uspBoxDesc}
                sx={{
                  fontSize: {
                    lg: "16px ",
                    md: "16px ",
                    sm: "16px ",
                    xs: "16px ",
                  },
                  fontFamily: "NovemberPro-Reg",
                  marginTop: "10px",
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Our ReactJS Development Services */}
      <Grid container className={styles.ProcessContainer}>
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          className={styles.ProcessGrid}
        >
          <Typography
            className={styles.obstaclesLeftTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Our <span className={styles.OurUsp}> ReactJS </span>Development
            Services
          </Typography>
        </Grid>
        <Grid container spacing={3} className={styles.cardsContainer}>
          {Process?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              className={styles.cardsProcessangular}
              key={index}
            >
              <Typography
                className={styles.obstaclesLeftTitle}
                sx={{
                  fontSize: {
                    lg: "20px ",
                    md: "20px ",
                    sm: "20px ",
                    xs: "20px",
                  },
                  fontFamily: "NovemberPro",
                  marginBottom: "1rem",
                }}
              >
                {" "}
                {item?.title}
              </Typography>
              <Typography
                className={styles.obstaclesLeftDesc}
                sx={{
                  fontSize: {
                    lg: "16px ",
                    md: "16px ",
                    sm: "16px ",
                    xs: "16px",
                  },
                  fontFamily: "NovemberPro-Reg",
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* why partner with infokoders technologies         */}
      <Grid container className={styles.servicesContainer}>
        <Grid>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              paddingBottom: "20px",
              textAlign:"center"
            }}
          >
            Why Partner with InfoKoders Technologies?
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          {partner?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              key={index}
              className={styles.uspBox}
            >
              <Image
                src={item?.image}
                alt="images not found of the why partner with infokoders technologies cards"
                width={90}
                height={90}
              />
              <Typography
                className={styles.uspBoxTitle}
                sx={{
                  fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
                  fontFamily: "NovemberPro",
                  marginTop: "10px",
                }}
              >
                {item?.title}
              </Typography>
              <Typography
                className={styles.uspBoxDesc}
                sx={{
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "16px",
                    xs: "16",
                    marginTop: "10px",
                    fontFamily: "NovemberPro-Reg",
                  },
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Our ReactJS Development Process */}
      <Grid container className={styles.reactProcessContainer}>
        <Grid>
          <Typography
            className={styles.reactProcessTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              paddingBottom: "20px",
              textAlign:"center"
            }}
          >
            Our<span className={styles.OurUsp}> ReactJS</span> Development
            Process
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          {development?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              key={index}
              className={styles.reactdevelopment}
            >
              <Image
                src={item?.image}
                alt="images not found of the our reactjs development process"
                width={90}
                height={90}
              />
              <Typography
                className={styles.uspBoxTitle}
                sx={{
                  fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
                  fontFamily: "NovemberPro",
                  marginTop: "10px",
                }}
              >
                {item?.title}
              </Typography>
              <Typography
                className={styles.uspBoxDesc}
                sx={{
                  fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "16px" },
                  fontFamily: "NovemberPro-Reg",
                  marginTop: "10px",
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* contact us */}
      <Contact
        title={contactTitle}
        subTitle={contactSubtitle}
        isFreelance={true}
      />
      <Footer />
    </Box>
  );
};
export default ReactDevelopment;
