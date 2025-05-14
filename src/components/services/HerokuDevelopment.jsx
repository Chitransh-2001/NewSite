"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button, CardMedia } from "@mui/material";
import Image from "next/image";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import aweExper from "../../../public/assets/img/awsExper.png";
import Footer from "../footer/Footer";
import Contact from "../casestudy/clientAchivement/Contact";
import ContactUsModal from "../contact/ContactUsModal";
const HerokuDevelopment = () => {
  const [open, setOpen] = useState(false);
  const servicesCard = [
    {
      image: "/assets/img/railsmvp.gif",
      title: "Heroku consultation",
      desc: "Harness InfoKoders technologies’s top-of-the-line Heroku consultation and cloud services and take your business to the next level. Your company's success is based on providing top-tier services to customers. We at InfoKoders provides treat our clients with the best Heroku development and implementation services.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "Heroku application Development",
      desc: "Having great years of experience, we have come over all the challenges and are capable enough to provide you a successful Heroku app development solutions that address the business needs in healthcare, retail, professional services, education, and other industries.",
    },
    {
      image: "/assets/img/DataBackup.gif",
      title: "Heroku integration",
      desc: "We offer secure, scalable, and seamless Heroku integration with your organization's applications. Besides that, we enable fast and effective building, deploying, and scaling of web applications.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Heroku Migration",
      desc: "Our expert Heroku developers will migrate modules, functionality, and add-on to the ever-classic Heroku platform as part of this Heroku migration service. Our Heroku automated migration service is an excellent way to host and set up your business securely on a cloud.",
    },
    {
      image: "/assets/img/socialnoetwork.gif",
      title: "Heroku support and Maintenance",
      desc: "InfoKoders technologies’s dedicated Heroku developers, business analysts, and administrators are always ready to ensure the stability and rapid emergence of your Heroku solution. We provide administrative assistance through Heroku support and maintenance services.",
    },
    {
      image: "/assets/img/reusable.gif",
      title: "Heroku Connect",
      desc: "Seamlessly sync your Heroku apps with Salesforce using Heroku Connect. We ensure smooth data synchronization, empowering your business to harness customer insights in real time. With optimized performance and robust data handling, we make sure your data flows securely and efficiently between platforms.",
    },
  ];
  const platform = [
    {
      title: "Achieve more value in a complete project lifecycle",
      desc: "Heroku enable our project teams to collaborate with you on early prototypes, iterate quickly through rapid deployment and short development cycles, and easily transition app code and maintain or manage correctly after its launch.",
    },
    {
      title: "Accelerate ROI",
      desc: "Reduced engagement timeframes and increased capacity for new business are aided by the faster project turnaround encouraged by this platform. The PaaS model eliminates the need for additional DevOps personnel.",
    },
    {
      title: "Briskly expand your business",
      desc: "Heroku-oriented apps can connect to Salesforce products because they are part of the Salesforce Platform. This allows us to provide enterprise-based solutions with enhanced security and control resulting in your business broadening its services, targeting new customers, and doing a lot more things.",
    },
  ];
  const solution = [
    {
      image: "/assets/img/quality.gif",
      title: "Start-ups",
      desc: "When you elect InfoKoders technologies as your desired Heroku app development company, your startup is going to get apps to market quickly while remaining lean, efficient, and development-focused.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Enterprises",
      desc: "Our proficient and certified Heroku developers meet the requirements of your large organization and deliver high-performance apps, offering enterprise-grade auditing, support, and scalability.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Agencies",
      desc: "Quickly grow your business by accessing our proficient Heroku development solutions. A Single comprehensive platform, Heroku, enable us to deliver apps with great transparency and provides control over time and cost.",
    },
  ];
  const partner = [
    {
      image: "/assets/img/economial.gif",
      title: "Competitive pricing",
      desc: "We have been recognized as an affordable Heroku app development partner because we deliver high standard, bug-free, and feature-rich solutions at budget-friendly pricing.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Agile methodologies",
      desc: "We take up the agile methodology that makes us fulfil any kind of project requirements and needs effectively and smoothly.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "Service Global clients",
      desc: "Until now we sincerely and professionally delivered around 300+ successful projects globally with top-notch tools, frameworks, platforms, and technologies.",
    },
  ];
  const cloud = [
      {
        title: "Heroku Runtime",
        desc: "Your apps perform within the smart containers and are securely managed under runtime environment, as the platform takes care of every critical phase of production-Configuration, load balancing, failovers, logging, security, and more.",
      },
      {
        title: "Heroku Postgres(SQL)",
        desc: "We offer reliable PostgreSQL as a service empowering us for easy setup, encryption at rest, simple scaling, database forking, continuous protection, and more.",
      },
      {
        title: "Heroku Redis",
        desc: "The prominent in-memory, key-value datastore- now accessible as a service. The Outstanding Heroku Redis feature furnishes powerful data types, high throughput, and built-in support for popular programming languages.",
      },
      {
        title: "Add-ons",
        desc: " With Heroku, we help you to extend, improve and manage your applications with pre-integrated services such as New Relic, MongoDB, SendGrid, Searchify, Fastly, Papertrail, ClearDB MySQL, Treasure Data, and others.",
      },
      {
        title: "Scale",
        desc: "Heroku scales quickly, both vertically and horizontally. This feature facilitates us to smoothly run everything from small hobby projects to enterprise-level e-commerce.",
      },
      {
        title: "App metrics",
        desc: "You will be always aware of what’s going on with your app, thanks to Heroku built-in monitoring of throughput, response times, memory, CPU load, and more.",
      },
    ],
    contactTitle = "Want to Skyrocket your business on Cloud?",
    contactSubtitle =
      "Access top-of-the-line and specialized Heroku development service from the InfoKoders technologies team and enjoy your business transformation in different ways.";
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundHeroku}>
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
          Heroku
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
          Invest in our Heroku app development services and leverage modern
          architectures, innovative quickly and scalable applications hosted on
          a powerful cloud platform- I,e Heroku
        </Typography>
      </Grid>
      {/* Experience the Perks of Heroku Platform with a reliable Heroku partner */}
      <Grid container spacing={2} className={styles.rubycontainer}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.rubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Experience the Perks of Heroku Platform with a reliable{" "}
            <span className={styles.OurUsp}>Heroku</span> partner
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Invest in our <b>Heroku app development services</b> and leverage
            modern architectures, innovative quickly and scalable applications
            hosted on a powerful cloud platform- I,e Heroku
          </Typography>
          <Button
            sx={{
              fontSize: { lg: "16px", md: "14px", sm: "16px", xs: "13px" },
              fontFamily: "NovemberPro-Reg",
              cursor: "pointer",
              padding: "8px 18px",
              border: "1px solid transparent",
              color: "#ffffff",
              backgroundColor: "#333",
              marginBottom: "1rem",
              marginTop: "1rem",
              textTransform: "none",
            }}
            onClick={() => setOpen(true)}
          >
            Transform your business destiny with us
          </Button>
          {open && <ContactUsModal open={open} setOpen={setOpen} />}
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={aweExper} alt="fullstack" width={500} height={300} />
        </Grid>
      </Grid>
      {/* Our Heroku Development Services */}
      <Grid container className={styles.uspContainer}>
        <Grid className={styles.coreQuote}>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Our Heroku Development Services
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
            Being a reliable and trusted Heroku service partner, we emphasize to
            develop the out of box applications without getting distracted on
            maintaining servers, hardware, or infrastructure
          </Typography>
        </Grid>
        <Grid container spacing={4} className={styles.coresubcont}>
          {servicesCard?.map((item, index) => (
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
      {/* One Ultimate platform for all your secure app development needs */}
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
            One Ultimate platform for all your secure app{" "}
            <span className={styles.OurUsp}> development needs </span>
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
            Whether you are a start-up, enterprise, or large tech organization
            we provide a Heroku-based solution, a potential cloud platform as a
            Service(PaaS) enabling us to precisely build, deploy and manage your
            dream apps. Being one of the leading{" "}
            <b>Heroku service partners ,</b> our developers focus on creating
            great user experiences without worrying about managing servers
            (virtual or otherwise), hardware, or infrastructure, thus, resulting
            in the biggest hit solutions.
          </Typography>
        </Grid>
        <Grid container spacing={3} className={styles.cardsContainer}>
          {platform?.map((item, index) => (
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
      {/* Who can avail of our exclusive Heroku-based solution */}
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
            Who can avail of our exclusive Heroku-based solution
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
                alt="solutions"
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
      </Grid>
      {/* Why count on InfoKoders technologies as your right Heroku development partner? */}
      <Grid>
        <Grid className={styles.rubypartnerContainer}>
          <Grid className={styles.coreQuote}>
            <Typography
              className={styles.coreTitleUsppartner}
              sx={{
                fontSize: { lg: "25px", md: "22px ", sm: "25px", xs: "22px" },
                fontFamily: "NovemberPro",
              }}
            >
              {" "}
              Why count on InfoKoders technologies as your right
              <span className={styles.OurUsp}> Heroku development </span>{" "}
              partner?
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
              There are quite a great many facts that reflect how InfoKoders
              technologies deserves to be your best Heroku development company.
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
                marginTop: "1rem",
              }}
            >
              <b>Certified and experienced Heroku developers</b> without owing a
              vibrant and high spirited Heroku development team it’s
              unimaginable to embrace high tech web or app development
              solutions. That’s the main reason we are known for. We are guarded
              with a vision-oriented Heroku developers that commit to offer
              satisfied solutions
            </Typography>
          </Grid>
          <Grid container spacing={4} className={styles.coresubcont}>
            {partner?.map((item, index) => (
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
      {/* How Heroku is different from other cloud platforms? */}
      <Grid container className={styles.ProcessContainerHeroku}>
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          className={styles.ProcessGrid}
        >
          <Typography
            className={styles.ProcessHerokuTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            How Heroku is different from other cloud platforms?
          </Typography>
          <Typography
            className={styles.ProcessHerokuDesc}
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
            No matter if you are looking to develop a simple prototype or a
            mission-critical product. Whatever the size and scope of your
            projects can be, Heroku proves to be the best, directing our
            developers the quickest path to deliver engaging apps with the use
            of diverse tools and technologies The platform’s flexibility and
            designed experience support encourage our team to adopt development
            style suitable for your project needs.
          </Typography>
        </Grid>
        <Grid container spacing={3} className={styles.cardsContainer}>
          {cloud?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              className={styles.cardsProcess}
              key={index}
            >
              <Typography
                className={styles.ProcessHerokuTitle}
                sx={{
                  fontSize: {
                    lg: "20px ",
                    md: "20px ",
                    sm: "20px ",
                    xs: "20px",
                  },
                  fontFamily: "NovemberPro",
                }}
              >
                {" "}
                {item?.title}
              </Typography>
              <Typography
                className={styles.ProcessHerokuDesc}
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
      <Contact
        title={contactTitle}
        subTitle={contactSubtitle}
        isFreelance={true}
      />
      <Footer />
    </Box>
  );
};
export default HerokuDevelopment;
