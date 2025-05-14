"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/About.module.css";
import Navbar from "../navbar/Navbar";
import aboutimg from "../../../public/assets/img/about-img.jpg";
import Image from "next/image";
import CardMedia from "@mui/material/CardMedia";
import Footer from "../footer/Footer";
import vissionandmission from "../../../public/assets/img/vissionandmission.png";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
const AboutUsPart = () => {
  const coreValues = [
    {
      title: "Everlasting Relationship",
      desc: "We don't believe in building a client list, but rather a community of partners who have invested in each other's success.",
    },
    {
      title: "Craziness at Work",
      desc: "The fire to go the extra mile, the zeal to be better than we were yesterday, and the desire to win—all point to one thing: excellence.",
    },
    {
      title: "Innovation and Creativity",
      desc: "The ability to think outside the box consistently, even when it borders on the bizarre, is how the world revolutionize.",
    },
  ];
  const coreStats = [
    {
      value: "10+",
      desc: "Years of experience in Software development and technologies",
    },
    { value: "50+", desc: "Software engineers and technical staff" },
    { value: "100+", desc: "Software designed, developed, and deployed" },
    { value: "100%", desc: "Customer satisfaction" },
  ];
  const uspValues = [
    {
      title: "Proficiency",
      description:
        "We hold great experience and knowledge of working with the world's top brands and leaders.",
      image: "./assets/img/Proficiency.gif",
    },
    {
      title: "Standard process-oriented",
      description:
        "We use high-end processes for each task while keeping an overall view of the projects in mind.",
      image: "./assets/img/gathering.gif",
    },
    {
      title: "No unexpected Results",
      description:
        "We maintain transparency in our work to keep unexpected outcomes at bay.",
      image: "./assets/img/barChart.gif",
    },
    {
      title: "Mindfulness",
      description:
        "We dedicate ourselves to working for your company in order to ensure the smooth completion of projects while avoiding any unexpected hazards.",
      image: "./assets/img/customers.gif",
    },
    {
      title: "Committed support",
      description:
        "We are ambitious about our industry and enjoy what we do. We provide regular updates, phone calls, and product demonstrations to ensure our clients' satisfaction.",
      image: "./assets/img/dataprotections.gif",
    },
    {
      title: "Customer satisfaction",
      description:
        "Customer satisfaction is our foremost priority, which contributes to continuous improvement for maintaining and improving client satisfaction.",
      image: "./assets/img/teammember.gif",
    },
  ];
  return (
    <Box>
      <Grid id="carousel" className={styles.background}>
        <Navbar />
        <Typography sx={{ fontSize: "45px" }} className={styles.about}>
          About us
        </Typography>
      </Grid>
      {/* Achiving Section  */}
      <Grid className={styles.achieving}>
        <Grid className={styles.container}>
          <Grid className={styles.titledata}>
            <Typography
              className={styles.mainhead}
              sx={{
                fontSize: {
                  lg: "28px",
                  md: "22px",
                  sm: "25px",
                  xs: "22px",
                },
              }}
            >
              Vision-Achieving Software, App and Web Development Company
            </Typography>
            <Typography
              className={styles.maindes}
              sx={{
                fontSize: { lg: "20px", md: "18px ", sm: "20px", xs: "18px" },
              }}
            >
              Pledge to outshine the businesses with customer-winning
              technological and Software development.
            </Typography>
            <Typography
              className={styles.maindess}
              sx={{
                fontSize: { lg: "18px", md: "16px ", sm: "18px", xs: "16px" },
              }}
            >
              InfoKoders technologies is a partner of innovation and a ray of
              hope for diverse world’s leading enterprises, SME’S and technology
              channellers. We bring together a team of passionate minds whose
              DNA echoes to bring victory to your businesses with authentic
              software, apps, and Software development solutions.
            </Typography>
          </Grid>
          <Grid>
            <Image src={aboutimg} alt="White Wave" width={400} height={100} />
          </Grid>
        </Grid>
      </Grid>
      {/* Who we section */}
      <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }} className={styles.whowe}>
        <Grid className={styles.whoContainer}>
          <Grid className={styles.whoweLeft}>
            <Typography
              className={styles.whoweHeading}
              sx={{
                fontSize: {
                  lg: "28px",
                  md: "22px",
                  sm: "25px",
                  xs: "22px",
                },
              }}
            >
              Who we are and what we do
            </Typography>
            <Typography
              className={styles.subheading}
              sx={{
                fontSize: { lg: "18px", md: "16px ", sm: "18px", xs: "16px" },
              }}
            >
              InfoKoders technologies is an exclusive digital transformation
              studio that provides remarkable solutions across the digital value
              chain. We take a spotlight in providing out-of-the-box services in
              Software development (Ruby on Rails, ReactJS, NextJs NodeJS,
              AngularJS), full-stack and web development, AWS Cloud solutions,
              Heroku Cloud solutions, Mobile app development, and many more.
            </Typography>
          </Grid>
          <Grid className={styles.whoweRight}>
            <Typography
              className={styles.whoweHeading}
              sx={{
                fontSize: {
                  lg: "28px",
                  md: "22px",
                  sm: "25px",
                  xs: "22px",
                },
              }}
            >
              An unbelievable story of 10+ years
            </Typography>
            <Typography
              className={styles.subheading}
              sx={{
                fontSize: { lg: "18px", md: "16px ", sm: "18px", xs: "16px" },
                paddingBottom: "10px",
              }}
            >
              <TripOriginIcon className={styles.obstaclesRightIcon} />
              Since day one we measure our success with our client success, have
              faith in our kick-butt skills, and swear by the computer code.
              Shaping out an exclusive digital solution is not our work, it’s
              our duty. Within a short period, we have successfully delivered
              50+ projects covering diverse technologies and web part and
              eventually became prominent in the Software development realm
            </Typography>
            <Typography
              className={styles.subheading}
              sx={{
                fontSize: { lg: "18px", md: "16px ", sm: "18px", xs: "16px" },
              }}
            >
              <TripOriginIcon className={styles.obstaclesRightIcon} />
              Our ultimate focus is on client satisfaction which has been the
              key differentiator for our company. Our inquisitive nature and
              creativity ensure that we never become stagnant in our approach to
              dealing with new challenges.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Core value Section  */}
      <Grid className={styles.coreMain}>
        <Grid className={styles.coreContainer}>
          <Grid className={styles.coreQuote}>
            <Typography
              className={styles.ourcoreTitle}
              sx={{
                fontSize: { lg: "30px", md: "26px ", sm: "26px", xs: "22px" },
              }}
            >
              Our Core Values
            </Typography>
            <Typography
              className={styles.ourcoreDescription}
              sx={{
                fontSize: {
                  lg: "20px ",
                  md: "18px ",
                  sm: "18px ",
                  xs: "16px",
                },
              }}
            >
              We are an enthusiastic team of nerd minds, pro coders,
              technocrats, and incredibly creative beings using our knowledge
              and experience to create user-centric products
            </Typography>
          </Grid>
          <Grid container spacing={3} className={styles.coresubcont1}>
            {coreValues?.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                className={styles.coreBox}
                key={index}
              >
                <Typography
                  className={styles.coreBoxTitle}
                  sx={{
                    fontSize: "21px",
                  }}
                >
                  {item?.title}
                </Typography>
                <Typography
                  className={styles.coreBoxDesc}
                  sx={{
                    fontSize: "16px",
                    marginTop: "8px",
                  }}
                >
                  {item?.desc}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid>
            <Typography
              className={styles.capabilities}
              sx={{
                fontSize: { lg: "30px", md: "26px ", sm: "26px", xs: "22px" },
              }}
            >
              Number that roars our capabilities
            </Typography>
          </Grid>
          <Grid container spacing={3} className={styles.coresubcont}>
            {coreStats?.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
                className={styles.coreBox1}
                key={index}
              >
                <Typography
                  className={styles.coreBox1Value}
                  sx={{
                    fontSize: {
                      lg: "22px ",
                      md: "20px ",
                      sm: "18px ",
                      xs: "16px ",
                    },
                  }}
                >
                  {item?.value}
                </Typography>
                <Typography
                  className={styles.coreBox1Desc}
                  sx={{
                    fontSize: "16px",
                  }}
                >
                  {item?.desc}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Our Usps  */}
      <Grid>
        <Grid className={styles.uspContainer}>
          <Grid className={styles.coreQuote}>
            <Typography
              className={styles.coreTitleUsp}
              sx={{
                fontSize: { lg: "30px", md: "26px ", sm: "26px", xs: "22px" },
              }}
            >
              <span className={styles.OurUsp}>Our</span> USP’s
            </Typography>
            <Typography
              className={styles.coreDescriptionUsp}
              sx={{
                fontSize: {
                  lg: "20px ",
                  md: "18px ",
                  sm: "18px ",
                  xs: "16px",
                },
              }}
            >
              ‘Our passion for every project that comes our way' is how the USP
              can be defined in a single phrase. But we believe in
              collaboration, and that's how we build strong bonds with clients
              as well as with employees.
            </Typography>
          </Grid>
          <Grid container spacing={4} className={styles.coresubcont}>
            {uspValues?.map((item, index) => (
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
                <Typography className={styles.uspBoxTitle} fontSize="20px">
                  {item?.title}
                </Typography>
                <Typography className={styles.uspBoxDesc} fontSize="16px">
                  {item?.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Our Vision and Mission  */}
      <Grid className={styles.whowe} id="mission">
        <Grid container className={styles.visionMissonContainer}>
          <Grid size={{ xs: 12, sm: 12, lg: 6 }} className={styles.visionLeft}>
            <Typography
              className={styles.visionleftTitle}
              sx={{
                fontSize: { lg: "30px", md: "26px ", sm: "26px", xs: "22px" },
              }}
            >
              Our Mission & Vision
            </Typography>
            <Typography
              className={styles.visionLeftSubTitle}
              sx={{
                fontSize: { lg: "22px", md: "20px ", sm: "20px", xs: "18px" },
              }}
            >
              Mission
            </Typography>
            <Typography
              className={styles.visionDesc}
              sx={{
                fontSize: { lg: "18px", md: "16px ", sm: "18px", xs: "16px" },
              }}
            >
              To disrupt the outdated processes of tech or nontech business with
              innovative and modern solutions.
            </Typography>
            <Typography
              className={styles.visionLeftSubTitle}
              sx={{
                fontSize: { lg: "22px", md: "20px ", sm: "20px", xs: "18px" },
              }}
            >
              Vision
            </Typography>
            <Typography
              className={styles.visionDesc}
              sx={{
                fontSize: { lg: "18px", md: "16px ", sm: "18px", xs: "16px" },
              }}
            >
              To keep up with the latest and most promising technology that
              empowers and influences everyone and also allows us to steadily
              develop our inner selves.
            </Typography>
          </Grid>
          <Grid className={styles.visionRight}>
            <Image
              src={vissionandmission}
              alt="logo"
              width={500}
              height={500}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Start working with InfoKoders technologies */}
      <Grid>
        <Grid container className={styles.startWorking}>
          <Grid size={{ xs: 12, sm: 12, lg: 6 }}>
            <Typography
              className={styles.startWorkingTitle}
              sx={{
                fontSize: { lg: "30px", md: "26px ", sm: "26px", xs: "22px" },
              }}
            >
              Start working with{" "}
              <span className={styles.startWorkingSpan}>
                InfoKoders technologies
              </span>
            </Typography>
            <Typography
              className={styles.startWorkingDesc}
              sx={{
                fontSize: { lg: "20px", md: "18px ", sm: "18px", xs: "16px" },
              }}
            >
              Look no further if you are looking for a{" "}
              <b>Software Development company!</b> InfoKoders is an industry
              leader in this niche with many years of experience.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Our Footer  */}
      <Footer />
    </Box>
  );
};
export default AboutUsPart;
