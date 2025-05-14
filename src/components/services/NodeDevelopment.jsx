"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button, CardMedia } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import Image from "next/image";
import Footer from "../footer/Footer";
import Contact from "../casestudy/clientAchivement/Contact";
import ContactUsModal from "../contact/ContactUsModal";
const NodeDevelopment = () => {
  const [open, setOpen] = useState(false);
  const nodecard = [
    {
      image: "/assets/img/ondemand.gif",
      title: "Node js consulting services",
      desc: "Based on your project necessities get professional and right consultation of Nodejs development services. Our on-demand developers are well versed with the Nodejs framework enabling you to pull high-end nodejs apps with the best customization, development, and maintenance.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "Custom App development",
      desc: "NodeJS is a powerful JavaScript-based, event-driven server that runs on a variety of platforms. We as a specialized Node.js development company properly make use of the Nodejs framework and provide you the excellent custom Node JS development services that are tailored to your project needs.",
    },
    {
      image: "/assets/img/DataBackup.gif",
      title: "API integration and Development",
      desc: "With a fast turnaround time, we help you to create a secure and ready-to-use REST API from scratch using Node.JS.We also provide assistance in integrating your applications built with Nodejs into other application systems.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Website development",
      desc: "Uplift your business user base by embracing easy to use, easy to understand, and authentic Nodejs based development solutions from our responsible website developers who are well recognized for building full-fledged nodejs websites.",
    },
    {
      image: "/assets/img/socialnoetwork.gif",
      title: "Node js Maintenance and support",
      desc: "Achieving a high functionality supported website is an easy thing, but maintaining and upgrading it with new features and releases is a challenging task, and that's where we take the spotlight. InfoKoders technologies takes up the complete liability from development, designing to furnishing you with ultimate Nodejs post-maintenance and support solutions.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Nodejs Mobile app development",
      desc: "Enhance your mobile app downloads with our ultra-modern Nodje mobile app development services. When it comes to developing Nodejs based mobile applications, you will be thrilled for taking up the app development solutions from our gem mobile app developers as they have crossed all the rough roads in the development space.",
    },
  ];
  const Process = [
    {
      title: "Assessment of Requirments",
      desc: "In order to create a high-tech roadmap, our experts access project requirements, objectives, and your project goals.",
    },
    {
      title: "Agreement on service models",
      desc: "We suggest the best-fit engagement model with correct analysis of the project's requirements, as well as the best-fit resources.",
    },
    {
      title: "Design and Development",
      desc: "Design and development begin with the goal of delivering high-quality, incremental, and functional software/application that meets your acceptance criteria and goals.",
    },
    {
      title: "Testing and QA",
      desc: "Extensive testing, client feedback, and documentation are all integrated into our process to ensure that we always deliver the highest quality product.",
    },
    {
      title: "Support",
      desc: 'Following go-live, "the end of the beginning begins" with ongoing monitoring and debugging to ensure proper operation.',
    },
    {
      title: "Blueprint & Strategy",
      desc: "Our team outlines a comprehensive project roadmap — including timelines, technology stack, and resource planning — to ensure smooth execution.",
    },
  ];
  const project = [
    {
      image: "/assets/img/payment.gif",
      title: "Fixed price model",
      desc: "Ideal for small to medium-sized Node.JS projects. Under this model, customers can pay a fixed price for all milestone deliverables i.e for the complete project.",
    },
    {
      image: "/assets/img/clock.gif",
      title: "Time and Material Model",
      desc: "Best for Node.JS outsourcing projects with flexible and changing requirements. The customer is billed based on the team's monthly efforts and time.",
    },
    {
      image: "/assets/img/quality.gif",
      title: "SLA/Milestone based Model",
      desc: "When you need to hire Node.JS developers for an iterative and process-oriented project with well-defined internal and external milestones, this model is highly suited to one",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Build Your Team",
      desc: "This model allows you to hire world-class, best-of-breed, and highly skilled Node.JS coders exactly when and where you need them.",
    },
  ];
  const partnerCrew = [
    {
      image: "/assets/img/teammember.gif",
      title: "360-degree requirements analysis",
      desc: "Following an assessment of your needs, we propose the best solution with the least number of Node.JS developers required to meet your business objectives.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Cutting-edge technology Design",
      desc: "A sleek UI with modern elements so that the app's design stands out as a USP and accelerates lead conversion.",
    },
    {
      image: "/assets/img/customers.gif",
      title: "Mobile friendly UI",
      desc: "Our developers develop a feature-rich UI that is compatible with all devices and aligned with the app's functionality.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Unmatched Speed and Performance",
      desc: "You get an unparalleled user experience with faster loading times, which also helps with search engine ranking and lead conversion.",
    },
    {
      image: "/assets/img/ondemand.gif",
      title: "Maximum security and scalability",
      desc: "Data encryption that is cutting-edge, as well as high-security plugins, for protection against new malware and threats. ",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Agile software development",
      desc: "Our cross-functional team adheres to the Agile Software Development collaborative approach.",
    },
  ];
  const contactTitle =
    "Seeking for Right Nodejs development team to hand over a project?";
  const contactSubtitle =
    "Zealous Nodejs developers, agile development process, or quality rich Nodejs development. Whatever you are looking for, InfoKoders technologies can help you with any kind of requirements.";
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundNode}>
        <Navbar />
        <Typography
          className={styles.imageTitle}
          sx={{
            fontSize: {
              xs: "30px",
              sm: "30px",
              md: "45px",
              lg: "45px",
            },
            fontFamily: "NovemberPro",
          }}
        >
          Node Js Development
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
          Leverage user-friendly and exceptional android and ios apps by gaining
          exclusive Node js development solutions from a reputable partner,
          InfoKoders technologies.
        </Typography>
      </Grid>
      {/* achieve Unbeatable nodejs development  services */}
      <Grid container spacing={3} className={styles.obstaclesContainer}>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          className={styles.obstaclesLeft}
        >
          <Typography
            className={styles.obstaclesLeftTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Achieve Unbeatable{" "}
            <span className={styles.OurUsp}>Nodejs Development</span> Services
          </Typography>
          <Typography
            className={styles.obstaclesLeftDesc}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Leverage user-friendly and exceptional android and ios apps by
            gaining exclusive <b>Node js development solutions</b> from a
            reputable partner, InfoKoders technologies. If you are aiming for
            function-rich, scalable, and secure web and mobile applications then
            fortunately you are at the right place to get served.
          </Typography>
          <Button
            className={styles.obstaclesLeftbtn}
            sx={{
              fontSize: { lg: "16px", md: "14px", sm: "16px", xs: "13px" },
              fontFamily: "NovemberPro-Reg",
              cursor: "pointer",
              padding: "8px 18px",
              border: "1px solid transparent",
              color: "#ffffff",
              backgroundColor: "#333",
              marginBottom: "1rem",
              textTransform: "capitalize",
              marginTop: "1rem",
            }}
            onClick={() => setOpen(true)}
          >
            Consult for ultimate Nodejs based apps
          </Button>
          {open && <ContactUsModal open={open} setOpen={setOpen} />}
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          className={styles.obstaclesRightNode}
        >
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            Creation of a stable underlying structure for mobile application
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />{" "}
            High-performance enterprise app development
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            Faster SDLC app development cycles for complex and large-scale SDLC
            apps
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            Client requested customization with 30% less code
          </Typography>
        </Grid>
      </Grid>
      {/* our node js development services */}
      <Grid container className={styles.uspContainer}>
        <Grid className={styles.coreQuote}>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Our Node js Development solutions
          </Typography>
          <Typography
            className={styles.coreDescriptionUsp}
            sx={{
              fontSize: {
                lg: "18px ",
                md: "16px ",
                sm: "18px ",
                xs: "16px",
              },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Are you looking for a business-changing Node.js Development Company
            to take up your project? Then confidently count on us for
            cutting-edge solutions in a shorter turnaround time. We are highly
            acclaimed among global clients for providing world-class Nodejs
            development services
          </Typography>
        </Grid>
        <Grid container spacing={4} className={styles.coresubcont}>
          {nodecard?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              key={index}
              className={styles.uspBox}
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
                    lg: "20px ",
                    md: "20px ",
                    sm: "20px ",
                    xs: "20px ",
                  },
                  fontFamily: "NovemberPro",
                  marginBottom: "20px",
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
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Our Nodejs website and Mobile app development Process Enterprises? */}
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
            Our <span className={styles.OurUsp}>Nodejs website </span>and{" "}
            <span className={styles.OurUsp}>Mobile app development </span>
            Process Enterprises?
          </Typography>
          <Typography
            className={styles.obstaclesLeftDesc}
            sx={{
              fontSize: {
                lg: "18px ",
                md: "16px ",
                sm: "18px ",
                xs: "16px",
              },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            We gained prominence in the website and mobile app development realm
            because of our systematic and well-selected development process. We
            follow the agile software development process, an international
            standard process for software development.
          </Typography>
        </Grid>
        <Grid container spacing={3} className={styles.cardsContainer}>
          {Process?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              className={styles.cardsProcess}
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
      {/* Hire Project-Based Nodejs Developers under our flexible engagements models */}
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
            Hire Project-Based Nodejs developers under our Flexible Engagements
            Models
          </Typography>
          <Typography
            className={styles.coreDescriptionUsp}
            sx={{
              fontSize: {
                lg: "18px ",
                md: "16px ",
                sm: "18px ",
                xs: "16px",
              },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            We have a client satisfying onshore/offshore project execution model
            in place, with centers in the United States, the UK, and India.
            Being a top Node.JS Development Company InfoKoders technologies
            presents you the flexible engagement plans for software development
            projects that are tailored to the needs of the client.
          </Typography>
        </Grid>
        {/* node card */}
        <Grid
          container
          spacing={2}
          className={styles.techContainer}
          sx={{ justifyContent: "center", marginTop: "20px" }}
        >
          {project?.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
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
                alt=""
                height={80}
                width={80}
              />
              <Typography
                sx={{
                  marginBottom: "5px",
                  fontFamily: "NovemberPro",
                  fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
                  color: "#333333",
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
        <Typography
          sx={{
            fontSize: {
              lg: "18px ",
              md: "16px ",
              sm: "18px ",
              xs: "16px",
            },
            fontFamily: "NovemberPro-Reg",
          }}
          className={styles.belowCardTitle}
        >
          If you require Node.JS programmers for a longer period or SMEs, we
          have the right people to serve your requirements
        </Typography>
      </Grid>
      {/* Nodejs Development Crew */}
      <Grid>
        <Grid className={styles.nodePartnerContainer}>
          <Grid className={styles.coreQuote}>
            <Typography
              className={styles.coreTitleUsppartner}
              sx={{
                fontSize: { lg: "25px", md: "22px ", sm: "25px", xs: "22px" },
                fontFamily: "NovemberPro",
              }}
            >
              {" "}
              Why InfoKoders’s
              <span className={styles.OurUsp}> Nodejs development </span> crew?
            </Typography>
            <Typography
              className={styles.coreDescriptionUsppartner}
              sx={{
                fontSize: {
                  lg: "18px ",
                  md: "16px ",
                  sm: "18px ",
                  xs: "16px",
                },
                fontFamily: "NovemberPro-Reg",
              }}
            >
              We have successfully developed and launched big projects in a
              variety of industries and business sizes. With an unbelievable
              track record of client retention, InfoKoders technologies has
              proven to be a leading Nodejs mobile and website development
              company.
            </Typography>
          </Grid>
          <Grid container spacing={4} className={styles.coresubcont}>
            {partnerCrew?.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
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
                  }}
                >
                  {item?.desc}
                </Typography>
              </Grid>
            ))}
          </Grid>
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
export default NodeDevelopment;
