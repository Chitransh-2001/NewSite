"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button, CardMedia } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Image from "next/image";
import angularcontent from "../../../public/assets/img/angularcontent.jpg";
import ContactUsModal from "../contact/ContactUsModal";
import { title } from "process";
import Contact from "../casestudy/clientAchivement/Contact";
const AngularDevelopment = () => {
  const [open, setOpen] = useState(false);
  const services = [
    {
      image: "/assets/img/gathering.gif",
      title: "Fast & Efficient Development",
      desc: "AngularJS utilizes two-way data binding, which ensures real-time synchronization between the model and the view. This reduces development time and improves efficiency.",
    },
    {
      image: "/assets/img/quality.gif",
      title: "High Performance & Scalability",
      desc: "Built with MVC (Model-View-Controller) architecture, AngularJS makes it easier to develop and manage large-scale applications with high performance and scalability.",
    },
    {
      image: "/assets/img/Proficiency.gif",
      title: "Modular & Reusable Components",
      desc: "With AngularJS’s modular architecture, developers can create reusable components, leading to faster development, better maintainability, and cost-effective solutions.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "Rich User Experience",
      desc: "AngularJS offers a dynamic UI, AJAX-driven features, and smooth animations, ensuring an enhanced user experience across all devices.",
    },
    {
      image: "/assets/img/ondemand.gif",
      title: "Backed by Google & a Strong Community",
      desc: "AngularJS is supported by Google and has an extensive developer community, ensuring long-term support, regular updates, and a vast ecosystem of plugins and tools.",
    },
    {
      image: "/assets/img/reusable.gif",
      title: "Robust Security & Reliability",
      desc: "Our applications are fortified with the latest security protocols, ensuring data protection, secure transactions, and uninterrupted performance.",
    },
  ];
  const Process = [
    {
      title: "Custom AngularJS Web Application Development",
      desc: "We build tailored AngularJS web applications with interactive UIs, robust functionalities, and seamless performance to match your business needs.",
    },
    {
      title: "Single Page Application (SPA) Development",
      desc: "Our team specializes in developing high-speed, dynamic SPAs using AngularJS, ensuring fast navigation and a seamless browsing experience.",
    },
    {
      title: "Enterprise-Grade AngularJS Solutions",
      desc: "We deliver secure, scalable, and high-performance web applications for enterprises, enabling them to handle complex workflows with ease.",
    },
    {
      title: "AngularJS Plugin & Module Development",
      desc: "Need custom functionalities? Our developers create custom AngularJS plugins and modules to extend the capabilities of your web application.",
    },
    {
      title: "AngularJS API Development & Integration",
      desc: "We build robust RESTful APIs and seamlessly integrate them with AngularJS applications, ensuring smooth data communication across platforms.",
    },
    {
      title: "AngularJS Support & Maintenance",
      desc: "We provide ongoing support, bug fixes, and performance optimization to ensure your AngularJS applications run smoothly without any downtime.",
    },
  ];
  const solution = [
    {
      image: "/assets/img/teammember.gif",
      title: "Expert AngularJS Developers ",
      desc: "Our experienced team delivers high-quality, scalable solutions tailored to your business needs.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Secure & Scalable Solutions",
      desc: "We implement best practices for security, ensuring your web applications are safe from vulnerabilities.",
    },
    {
      image: "/assets/img/customers.gif",
      title: "Client-Centric Approach",
      desc: "We work closely with you to understand your business objectives and create customized solutions.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Agile Development Methodology ",
      desc: "We follow agile practices to ensure fast development, iterative improvements, and on-time delivery.",
    },
    {
      image: "/assets/img/Proficiency.gif",
      title: "Full-Cycle Development",
      desc: "From planning and design to development, testing, and maintenance, we handle everything end-to-end. ",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Rapid Deployment & Scaling",
      desc: "We streamline development cycles for faster go-to-market while ensuring your solution is fully scalable for future growth.",
    },
  ];
  const Industry = [
    {
      image: "/assets/img/eccomerce.gif",
      title: "E-commerce & Retail",
    },
    {
      image: "/assets/img/healthcare.gif",
      title: "Healthcare & Telemedicine",
    },
    {
      image: "/assets/img/educationandelearning.gif",
      title: "Education & E-learning",
    },
    {
      image: "/assets/img/logisticsanddistribution.gif",
      title: "Travel & Hospitality",
    },
    {
      image: "/assets/img/realestate.gif",
      title: "Real Estate",
    },
    {
      image: "/assets/img/netflix.gif",
      title: "Media & Entertainment",
    },
  ];
  const development = [
    {
      image: "/assets/img/quality.gif",
      title: "Requirement Analysis",
      desc: "We understand your business goals, challenges, and technical requirements to create a detailed project roadmap.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "UI/UX Design & Prototyping",
      desc: "Our designers create intuitive, user-friendly interfaces and interactive prototypes for the best user experience.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "AngularJS Development & Coding",
      desc: "Our developers implement clean, efficient, and maintainable code to bring your web application to life.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Testing & Quality Assurance",
      desc: "We perform rigorous testing to ensure a bug-free, high-performing application that meets industry standards.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Deployment & Optimization",
      desc: "Once everything is perfected, we deploy your application, optimize its performance, and ensure smooth operation.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Ongoing Support & Maintenance",
      desc: "We provide regular updates, security patches, and performance enhancements to keep your app running seamlessly. ",
    },
  ];
  const contactTitle = "Let’s Build Your Next AngularJS Project!";
  const contactSubtitle =
    "Looking for reliable AngularJS development services? Partner with InfoKoders technologies and get a high-performing, scalable, and secure web application tailored to your business needs.";
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundAngular}>
        <Navbar />
        <Typography
          className={styles.imageTitle}
          sx={{
            fontSize: {
              xs: "30px",
              sm: "30px",
              md: "45px",
              lg: "45px",
              xl: "45px",
            },
            fontFamily: "NovemberPro",
          }}
        >
          AngularJS Development
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
          At InfoKoders, we offer top-notch AngularJS development services to
          build highly interactive, scalable, and feature-rich web applications.
          As a powerful JavaScript framework maintained by Google, AngularJS
          provides a robust foundation for dynamic web applications with
          seamless user experiences.
        </Typography>
      </Grid>
      {/* <Grid container spacing={3} className={styles.angularContainer}>
        <Grid size={{xs:12,sm:12,md:6,lg:6}}>
        <Typography className={styles.angularintro}  sx={{fontSize:{lg:"25px",md:"22px",sm:"25px",xs:"22px"},fontFamily:"NovemberPro"}}>Introduction</Typography>
          <Typography className={styles.angularTitle} sx={{fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily:"NovemberPro-Reg"}}><b>The innovations in the digital space today are making lives easier and faster and leaving customers with more choices than ever before.</b></Typography>
          <Typography className={styles.angularTitle} sx={{fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily:"NovemberPro-Reg"}}>As the business environment continues to grow competitive with each passing day, you need to materialize your business concepts into successful web endeavors that efficiently utilizes various customization options. AngularJS lets you do exactly that. With our diverse AngularJS development services, InfoKoders Technilogies will help you build scalable, flexible and interactive web designs and applications that efficiently cater to your business needs.</Typography>
        </Grid>
        <Grid size={{xs:12,sm:12,md:6,lg:6}}>
         <Typography className={styles.angularTitleRight} sx={{fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily:"NovemberPro-Reg",marginTop:"40px"}}> AngularJS is a structured, client-side Javascript MVC framework. As a powerful and flexible JavaScript framework, it helps in building fast real-time solutions for enterprises. Widely used for browser-based application development and responsive website development, it is maintained by Google. AngularJS augments web-based applications and helps in building single-page applications with MVC (model view controller) capability. If you need responsive websites or web or mobile applications, AngularJS development can offer you flexible apps with high-end user experience.</Typography>
        </Grid>
      </Grid> */}
      {/* AngularJS Development Company */}
      <Grid container spacing={3} className={styles.angularContainer}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.angularintro}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            <span className={styles.OurUsp}>AngularJS Development</span> Company
          </Typography>
          <Typography
            className={styles.angularContent}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              fontWeight: "bold",
            }}
          >
            Empower Your Web Applications with AngularJS
          </Typography>
          <Typography
            className={styles.angularContent}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            At <b>InfoKoders</b>, we offer top-notch{" "}
            <b>AngularJS development services</b> to build highly interactive,
            scalable, and feature-rich web applications. As a powerful
            JavaScript framework maintained by Google,<b> AngularJS</b> provides
            a robust foundation for dynamic web applications with seamless user
            experiences.
          </Typography>
          <Typography
            className={styles.angularContent}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Whether you need a custom web application, single-page application
            (SPA), enterprise-grade solution, or API-driven development, our
            skilled <b>AngularJS developers</b> have the expertise to turn your
            vision into reality.
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
            src={angularcontent}
            alt="angular development company"
            width={600}
            height={300}
          />
        </Grid>
      </Grid>
      {/* Why Choose AngularJS for Web Development? */}
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
            Why Choose AngularJS for Web Development?
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
      {/* Our AngularJS Development Services */}
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
            Our <span className={styles.OurUsp}> AngularJS </span>Development
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
      {/* Why Partner with Infokoders Technologies */}
      <Grid container className={styles.containerExpert}>
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          className={styles.gridExpert}
        >
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            {" "}
            Why Partner with InfoKoders technologies ?
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          className={styles.techContainer}
          sx={{ justifyContent: "center", marginTop: "20px" }}
        >
          {solution?.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              className={styles.techBoxcard}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <Image
                // style={{ width: "40%" }}
                src={item?.image}
                alt="solutions"
                height={80}
                width={80}
              />
              <Typography
                sx={{
                  marginBottom: "10px",
                  fontFamily: "NovemberPro",
                  fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
                  color: "#333333",
                  marginTop: "10px",
                }}
              >
                {item?.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "NovemberPro-Reg",
                  fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "16px" },
                  color: "#333333",
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Industries We Serve */}
      {/* <Grid>
        <Grid container spacing={3} className={styles.industries}>
          <Grid size={{xs:12,sm:12,md:12,lg:12}}>
          <Typography className={styles.Industriestitle} sx={{fontSize:{lg:"25px",md:"22px",sm:"25px",xs:"22px"},fontFamily:"NovemberPro"}}>Industries We Serve</Typography>
          </Grid>
          </Grid>
          <Grid container spacing={3} className={styles.industriesCard}>
          {Industry?.map((item,index)=>(
          <Grid size={{xs:12,sm:12,md:6,lg:4}} key={index} className={styles.industriesGrid}>
            <Image src={item?.image} alt="no image found" width={80} height={80}/>
            <Typography className={styles.Industriestitle} sx={{fontSize:{lg:"20px",md:"20px",sm:"20px",xs:"20px"},fontFamily:"NovemberPro",marginTop:"10px"}}>{item?.title}</Typography>
            </Grid>
        ))}
        </Grid>
        </Grid> */}
      {/* Our Development Process */}
      <Grid container className={styles.development}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Typography
            className={styles.Industriestitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              marginBottom: "3rem",
            }}
          >
            Our Development Process
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          {development?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              key={index}
              className={styles.developmentCard}
            >
              <Image
                src={item?.image}
                alt="images not found of development process"
                width={80}
                height={80}
              />
              <Typography
                sx={{
                  fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
                  fontFamily: "NovemberPro",
                  marginTop: "10px",
                }}
                className={styles.Industriestitle}
              >
                {item?.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "16px" },
                  fontFamily: "NovemberPro-Reg",
                }}
                className={styles.developmentdesc}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Contact
        title={contactTitle}
        subTitle={contactSubtitle}
        isFreelance={true}
      />
      <Footer />
    </Box>
  );
};
export default AngularDevelopment;
