"use client";
import React, { useState } from "react";
import { Box, Typography, CardMedia, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import uiux from "../../../public/assets/img/uiuxcontent.png";
import Image from "next/image";
import ContactUsModal from "../contact/ContactUsModal";
import Contact from "../casestudy/clientAchivement/Contact";
const UiDevelopment = () => {
  const [open, setOpen] = useState(false);
  const Benefits = [
    {
      image: "/assets/img/economial.gif",
      title: "High volume components",
      desc: "Facilitates creation of customized high volume components using markup syntax as JavaScript XML to enable the creation of React elements.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Flexible and speedy process",
      desc: "Offers easy framework to facilitate web page replication which reduces cost and time to run business and pushes up the popularity charts",
    },
    {
      image: "/assets/img/deploypro.gif",
      title: "Enables Building Rich UI",
      desc: "Clean and responsive UI to build an interactive and effective interface across different screens that offer an exciting and great browsing experience.",
    },
    {
      image: "/assets/img/trustedPartner.gif",
      title: "Robust Community Support",
      desc: "Contribution towards improving the framework by discovering and modifying components of the developer toolset with emerging technologies.",
    },
    {
      image: "/assets/img/customers.gif",
      title: "Boosts Developer Productivity",
      desc: "Updates frequently and modifies components in the next stages by eliminating additional development costs and boosting productivity.",
    },
    {
      image:"/assets/img/teammember.gif",
      title:"Personalized User Experiences",
      desc:"Designs tailored to user preferences and behavior, enhancing engagement and satisfaction."
    }
  ];
  const services = [
    {
      image: "/assets/img/teammember.gif",
      title: "Boosts User Engagement",
      desc: "A compelling UI keeps users engaged longer.",
    },
    {
      image: "/assets/img/quality.gif",
      title: "Improves Conversion Rates",
      desc: "A seamless UX simplifies user journeys, driving more sales and sign-ups.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Enhances Brand Reputation",
      desc: "A visually appealing and functional design builds trust and credibility.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Reduces Development Costs",
      desc: "Proper UX research minimizes revisions and costly fixes.",
    },
  ];
  const Process = [
    {
      title: "Research & Analysis",
      desc1: "Conduct user research to understand target audiences.",
      desc2: "Analyze competitor designs to identify industry trends.",
      desc3: "Define user personas, goals, and pain points.",
    },
    {
      title: "Wireframing & Prototyping",
      desc1:
        "Designing low-fidelity wireframes to structure the interface layout.",
      desc2: "Developing interactive prototypes for early user feedback.",
      desc3: "Iterating based on insights to enhance usability.",
    },
    {
      title: "UI Design & Branding",
      desc1:
        "Creating visually stunning, brand-aligned UI elements for consistency.",
      desc2:
        "Applying color schemes, typography, and design components that enhance user engagement.",
      desc3: "Ensuring accessibility and responsiveness across all devices.",
    },
    {
      title: "Usability Testing & Feedback",
      desc1:
        "Conducting A/B testing, heatmaps, and user testing sessions to gather insights.",
      desc2:
        "Identifying usability issues and refining designs for better engagement.",
      desc3:
        "Optimizing performance for speed, accessibility, and responsiveness.",
    },
    {
      title: "Development & Implementation",
      desc1: "Collaborating with developers to bring the designs to life.",
      desc2:
        "Ensuring seamless integration with frontend and backend technologies.",
      desc3: "Maintaining pixel-perfect accuracy during implementation.",
    },
    {
      title: "Deployment & Post-Launch Support",
      desc1: "Ensuring a seamless transition from development to production.",
      desc2: "Providing guidelines and resources for managing the UI.",
      desc3:
        "Making iterative improvements based on user behavior and analytics.",
    },
  ];
  const Design = [
    {
      image: "/assets/img/mobileapp.gif",
      title: "Mobile Apps",
      desc: "iOS & Android applications with intuitive and engaging designs.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Web & SaaS Platforms",
      desc: "Visually stunning and highly functional websites and SaaS applications.",
    },
    {
      image: "/assets/img/eccomerce.gif",
      title: "E-commerce Interfaces",
      desc: "Optimized for conversions and seamless shopping experiences.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Enterprise Software & Dashboards",
      desc: "Clean, efficient, and data-driven interfaces for productivity.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Custom Digital Products",
      desc: "Tailored UI/UX solutions for unique business needs.",
    },
    {
      image: "/assets/img/reusable.gif",
      title: "AR/VR Interface Design",
      desc: "Immersive interfaces tailored for augmented and virtual reality experiences.",
    },
  ];
  const infoCon = [
    {
      image: "/assets/img/teammember.gif",
      title: "User-Centered Approach",
      desc: "We prioritize user needs, behaviors, and expectations to create designs that truly resonate.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Creative & Modern Aesthetics",
      desc: "Our designs blend innovation with functionality, keeping up with the latest trends in UI/UX.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Agile & Collaborative Process",
      desc: "We work closely with clients, incorporating feedback at every stage to ensure the best outcome.",
    },
    {
      image: "/assets/img/quality.gif",
      title: "Performance & Accessibility Focused",
      desc: "We optimize designs for speed, usability, and inclusivity, ensuring a frictionless experience for all users.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "End-to-End Solutions ",
      desc: "From research and design to testing and post-launch improvements, we handle every aspect of UI/UX design.",
    },
    {
      image: "/assets/img/reusable.gif",
      title: "Security-First Approach",
      desc: "We prioritize data privacy and user protection, incorporating secure design principles into every project.",
    },
  ];
  const contactTitle = "Let’s Build Something Amazing Together!";
  const contactSubtitle =
    "Your users deserve a seamless and engaging experience. Let's create a UI/UX design that enhances your digital product and sets you apart from the competition.";
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundUi}>
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
          UI/UX Development
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
          At InfoKoders, we craft intuitive and visually appealing user
          interfaces that enhance user engagement and satisfaction. Our UI/UX
          Development Services focus on creating seamless, user-centric digital
          experiences that drive conversions and business growth.
        </Typography>
      </Grid>
      {/* UI/UX Development Company */}
      <Grid container spacing={3} className={styles.angularContainer}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.angularintro}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            <span className={styles.OurUsp}>UI/UX Development</span> Company
          </Typography>
          <Typography
            className={styles.angularContent}
            sx={{
              fontSize: {
                lg: "18px",
                md: "16px",
                sm: "18px",
                xs: "16px",
                fontWeight: "bold",
                fontFamily: "NovemberPro-Reg",
              },
            }}
          >
            Delivering Seamless and Engaging User Experiences
          </Typography>
          <Typography
            className={styles.angularContent}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            At <b>InfoKoders</b>, we craft intuitive and visually appealing user
            interfaces that enhance user engagement and satisfaction. Our{" "}
            <b>UI/UX Development Services</b> focus on creating seamless,
            user-centric digital experiences that drive conversions and business
            growth. We combine{" "}
            <b>
              cutting-edge design principles, user psychology, and the latest
              industry trends
            </b>{" "}
            to deliver interfaces that are not only aesthetically pleasing but
            also functional and easy to navigate.
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
            Get in touch
          </Button>
          {open && <ContactUsModal open={open} setOpen={setOpen} />}
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Image src={uiux} alt="Image not found of the ui and ux" />
        </Grid>
      </Grid>
      {/* Why UI/UX Matters? */}
      <Grid container className={styles.servicesContainer}>
        <Grid>
          <Typography
            className={styles.uiintro}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              paddingBottom: "20px",
            }}
          >
            Why UI/UX Matters?
          </Typography>
          <Typography
            className={styles.uiContent}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "3rem",
            }}
          >
            A well-designed UI/UX can <b>make or break </b> your digital
            presence. Users expect smooth, efficient, and engaging interactions
            when they visit a website or use an app. A poor user experience
            leads to frustration, increased bounce rates, and lost business
            opportunities.
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
      {/* Our UI/UX Development Process */}
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
            Our <span className={styles.OurUsp}> UI/UX </span>Development
            Process
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
                  textAlign: "center",
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
                  textAlign:"center"
                }}
              >
                {item?.desc1}
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
                  textAlign:"center"
                }}
              >
                {item?.desc2}
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
                  textAlign:"center"
                }}
              >
                {item?.desc3}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* What We Design */}
      <Grid container className={styles.ProcessContainerDesign}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Typography
            className={styles.DesignTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            What We Design
          </Typography>
          <Typography
            className={styles.DesignDesc}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "3rem",
            }}
          >
            We specialize in crafting seamless experiences for a variety of
            digital platforms:
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          {Design?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              key={index}
              className={styles.DesignBox}
            >
              <Image
                src={item?.image}
                alt="images of the what we design is not found"
                width={90}
                height={90}
              />
              <Typography
                sx={{
                  fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
                  fontFamily: "NovemberPro",
                  marginTop: "10px",
                }}
                className={styles.uspBoxTitle}
              >
                {item?.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "16px" },
                  fontFamily: "NovemberPro-Reg",
                }}
                className={styles.uspBoxDesc}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* why choose infokoders */}
      <Grid container className={styles.infoCon}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Typography
            className={styles.infoConTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              marginBottom: "3rem",
            }}
          >
            Why Choose InfoKoders Technologies?
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          {infoCon?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              key={index}
              className={styles.infoCards}
            >
              <Image
                src={item?.image}
                alt="images not found of the cards of the why choose infokoders"
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
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Benefits and Features */}
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
              Benefits and Features
            </Typography>
          </Grid>
          <Grid container spacing={4} className={styles.coresubcont}>
            {Benefits?.map((item, index) => (
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
      {/* contact details of the ui/ux developement page of services */}
      <Contact
        title={contactTitle}
        subTitle={contactSubtitle}
        isFreelance={true}
      />
      <Footer />
    </Box>
  );
};
export default UiDevelopment;
