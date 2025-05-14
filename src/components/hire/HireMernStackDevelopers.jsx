"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import { Typography, Box } from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import merncontent from "../../../public/assets/img/hiremerns.png";
import Image from "next/image";
import { Tab, Tabs, CardMedia } from "@mui/material";
import Footer from "../footer/Footer";
import HireContact from "../contact/HireContact";
import HireIndustryDesc from "../contact/HireIndustryDesc";
const HireMernStackDevelopers = () => {
  const Industry = [
    {
      title: "Save 70% on development cost",
    },
    {
      title: "Quality assurance and Quick turnaround time",
    },
    {
      title: "Fast On-Boarding",
    },
    {
      title: "Certified and fully interviewed team of Mern Stack developers",
    },
  ];
  const partnerValue = [
    {
      image: "/assets/img/teammember.gif",
      title: "Expertise in MERN stack",
      desc: "Our MERN stack developers have expertise in MongoDB, Express.js, React, and Node.js. They can develop full-stack web applications using the MERN stack and provide end-to-end development services.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Agile development methodology",
      desc: "We follows an agile development methodology, which emphasizes collaboration, flexibility, and rapid iteration. Our MERN stack developers to hire in India can work in sprints, provide regular updates, and adapt to changing requirements.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Problem-solving skills",
      desc: "The MERN stack developers from us have strong problem-solving skills, which they can apply to develop innovative solutions to complex business problems. They can analyze your requirements, identify potential issues, and develop solutions that meet your needs.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Communication and collaboration",
      desc: "Our MERN stack developers are excellent communicators and collaborators. They can work closely with your team to understand your requirements, provide regular updates, and address any concerns.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Quality and security",
      desc: "We follow industry standards and best practices to ensure that the code is robust, scalable, and secure. We can perform code reviews, write automated tests, and implement security measures to protect your applications.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Continuous learning",
      desc: "Our MERN stack developers are committed to continuous learning and professional development. They stay up-to-date with the latest trends and technologies in the MERN stack and can apply their knowledge to develop cutting-edge solutions for your business.",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);
  const tabContent = [
    "We understand that enterprise web applications require a high level of security and reliability. Our MERN stack developers to hire in Mumbai and Delhi are experts in developing secure and reliable applications that meet industry standards and best practices. We use the latest security technologies and protocols to ensure that your application is secure and protected from potential threats. We provide timely updates, bug fixes, and security patches to ensure your application runs smoothly and efficiently.",
    "Web applications need to be user-friendly, responsive, and optimized for performance. Our MERN stack developers in Bangalore, Delhi and Mumbai are experts in developing applications that meet industry standards and best practices. We use the latest web development technologies and frameworks to ensure that your application is fast, responsive, and optimized for performance.",
    "When you hire MERN stack developers from us for e-commerce website development, you gain access to a team of professionals who can help you develop custom solutions that meet your unique business requirements. Our developers work closely with you to understand your business objectives and challenges and develop solutions that help you achieve your goals. We take a customer-centric approach to development, which means that we prioritize your needs and requirements throughout the project.",
    "By leveraging CMS development services from InfoKoders Technologies, you can develop a CMS that meets your specific needs and helps you streamline your content management workflows. Our experienced MERN stack developers can help you achieve your CMS development goals efficiently and cost-effective. Additionally, we can assist you in integrating your current CMS with your web app, social network, blog, and online store.",
    "If you are looking to migrate your existing application to a new platform, InfoKoders Technologies MERN stack developers can help. They can analyze your existing application and suggest the best platform for migration, such as moving from a legacy system to the cloud. Further our experienced MERN stack developers can help you migrate to new platforms or technology stacks efficiently and with minimal disruption to your business.",
    "If you need technical support for your applications or systems, MERN stack developers can provide timely and responsive support. They can troubleshoot issues, provide guidance and advice, and escalate issues as needed to ensure that your applications are running smoothly. If you encounter any bugs or issues with your applications or systems, our MERN stack developers can help you identify and fix them quickly. They can perform root cause analysis, develop and implement fixes, and test the solutions to ensure that the issues are resolved.",
  ];
  const services = [
    {
      image: "/assets/img/teammember.gif",
      title: "Experience and Expertise",
      desc: "InfoKoders Technologies has a team of experienced and highly skilled MERN stack developers who have a proven track record of delivering high-quality web applications. Our developers have in-depth knowledge of MERN stack technologies and can create custom solutions to meet your unique business needs.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Flexibility",
      desc: "We offer flexible engagement models that allow you to hire MERN stack developers on a full-time, part-time, or hourly basis, depending on your project needs. This gives you the flexibility to scale your team up or down as your project evolves.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Communication",
      desc: "Communication is key to the success of any project, and our MERN stack developers are fluent in English and have excellent communication skills. We keep you updated on the progress of your project and are available to address any concerns or questions that you may have.",
    },
    {
      image: "/assets/img/clock.gif",
      title: "Quality and Timeliness",
      desc: "At InfoKoders Technologies, we are committed to delivering high-quality web applications within the agreed timelines. Our MERN stack developers follow industry best practices and use the latest tools and technologies to ensure that your project is completed to your satisfaction. ",
    },
    {
      image: "/assets/img/payment.gif",
      title: "Cost-effective",
      desc: "Hiring MERN stack developers from InfoKoders Technologies is a cost-effective way to develop high-quality web applications. Our rates are competitive, and our flexible engagement models allow you to optimize your development costs. Hiring MERN stack developers from InfoKoders Technologies can help you develop custom web applications that are tailored to your business needs, delivered on time and within budget, and supported by a team of experienced and dedicated developers.",
    },
  ];
  return (
    <>
      <Grid id="carousel" className={styles.backgroundMern}>
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
          Hire MERN Stack Developers
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
            marginBottom: "1rem",
          }}
        >
          Our MERN stack developers are experts in MongoDB, Express.js,
          React.js, and Node.js and have extensive knowledge of both relational
          and non-relational databases. To integrate, deploy, upgrade, and
          migrate your app, contact one of our 80+ MERN stack engineers.
        </Typography>
      </Grid>
      {/* Hire MERN Stack developers in India */}
      <Grid container spacing={3} className={styles.hirecontainer}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ margin: "5% 0%" }}>
          <Typography
            className={styles.hirerubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Hire{" "}
            <span style={{ color: "#650909" }}> MERN Stack developers </span> in
            India
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Hire a MERN stack developer in Bangalore, Mumbai, and Delhi from us
            and take advantage of the potent combination of MERN stack for your
            needs in developing custom web applications.
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Our MERN stack developers are experts in MongoDB, Express.js,
            React.js, and Node.js and have extensive knowledge of both
            relational and non-relational databases. To integrate, deploy,
            upgrade, and migrate your app, contact one of our 80+ MERN stack
            engineers. Your current application will run more efficiently and
            with better functionality by hiring our MERN stack developers in
            Delhi.
          </Typography>
          {Industry?.map((item, index) => (
            <Typography
              className={styles.obstaclesRightTitle}
              key={index}
              sx={{
                fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
                fontFamily: "NovemberPro-Reg",
                marginBottom: "1rem",
              }}
            >
              <TripOriginIcon className={styles.obstaclesRightIcon} />
              {item?.title}
            </Typography>
          ))}
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ padding: "0 4%" }}>
          <HireContact />
        </Grid>
      </Grid>
      {/* Boost Up Your Business processes through our MERN stack developers */}
      <Grid container spacing={5} className={styles.RailsEngineers}>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          sx={{
            marginTop: "2%",
          }}
        >
          <Image
            src={merncontent}
            className={styles.engineerImage}
            alt="image not found of the hire ror developers"
            width={600}
            height={400}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.hirerubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Boost Up Your Business processes through our MERN stack developers
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            At InfoKoders Technologies we offer clients the opportunity to hire
            top MERN stack developers in Bangalore, Delhi, Mumbai, and Gurgaon
            who specialize in creating robust, scalable full-stack web
            applications. Our developers have extensive experience working with
            MongoDB, Express, React, and Node.js and have a deep understanding
            of their capabilities.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            When you hire ambitious MERN stack developers in India from
            InfoKoders Technologies, you gain access to a team of professionals
            who are well-versed in various aspects of MERN stack development.
            Our developers can help you with project analysis, development,
            testing, and deployment. They are also skilled in working with
            pre-built components and modules, which can significantly reduce
            development time and help you get your application to market faster.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            Our MERN stack developers to hire in Bangalore and Mumbai have the
            knowledge and expertise required to develop customized solutions
            that meet your specific business needs and requirements. They work
            closely with you to understand your unique challenges and develop
            solutions that help you achieve your business goals. Additionally,
            our developers are highly skilled in other technologies, such as
            Angular, Ruby on Rails, and more. This enables us to provide you
            with a full range of development services to meet all of your
            technology needs.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            Hiring fully interviewed MERN stack developers from InfoKoders
            Technologies is an excellent choice for businesses that require
            top-tier professionals who have been rigorously screened and
            evaluated for their expertise and professionalism. Our developers
            have extensive experience and expertise in MERN stack development
            and can help you achieve your business goals through efficient and
            effective solutions.
          </Typography>
        </Grid>
      </Grid>
      {/* Skills and Responsibilities you would embrace */}
      <Grid className={styles.growth}>
        <Grid className={styles.coreQuote}>
          <Typography
            className={styles.hirepart}
            sx={{
              fontSize: { lg: "25px", md: "22px ", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              marginBottom: "1rem",
            }}
          >
            Skills and Responsibilities you would embrace by hiring our{" "}
            <span className={styles.OurUsp}> Mern Stack developers </span>
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
            Hiring MERN stack developers from InfoKoders Technologies can bring
            several skills and qualities to your development team. Here are some
            of the key skills and qualities that you can expect:
          </Typography>
        </Grid>
        <Grid container spacing={4} className={styles.partnerContainer}>
          {partnerValue?.map((item, index) => (
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
                  marginBottom: "1rem",
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
      {/* Our MERN Stack development services */}
      <Grid container className={styles.Professionals}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Typography
            className={styles.nodeproffession}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Our{" "}
            <span style={{ color: "#650909" }}> MERN Stack development </span>{" "}
            services
          </Typography>
          <Box
            sx={{
              display: "flex",
              height: "500px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="standard"
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                // borderRight: "1px solid #ddd",
                width: { lg: "300px", md: "200px", sm: "170px", xs: "80px" },
                // backgroundColor: "#f4f4f4"
              }}
            >
              {[
                "Enterprise Web application development",
                "Website development",
                "E-commerce website development",
                "CMS Development",
                "Migration & Porting",
                "Technical assistance and support",
              ].map((label, index) => (
                <Tab
                  key={index}
                  label={label}
                  sx={{
                    fontFamily: "NovemberPro",
                    fontSize: {
                      lg: "16px",
                      md: "14px",
                      sm: "12px",
                      xs: "8px",
                    },
                    textAlign: "center",
                    color: "#333",
                    marginBottom: "10px",
                    transition: "0.3s ease",
                    "&.Mui-selected": {
                      color: "#ffffff",
                      backgroundColor: "#650909",
                    },
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "#650909",
                    },
                  }}
                />
              ))}
            </Tabs>
            <Box
              sx={{
                flex: 1,
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "NovemberPro-Reg",
                  fontSize: { lg: "18px", md: "16px", sm: "12px", xs: "12px" },
                }}
              >
                {tabContent[activeTab]}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Why Hire MERN stack developers */}
      <Grid container className={styles.servicesContainer}>
        <Grid>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Why Hire MERN stack developers from InfoKoders Technologies?
          </Typography>
        </Grid>
        <Grid container spacing={4} className={styles.partnerContainer}>
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
      {/* Hire Industry's Best Software developers in India  */}
      <Grid container spacing={3} className={styles.hirecontainer}>
        <HireIndustryDesc />
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          sx={{ padding: "0 4%", display: "flex", alignItems: "center" }}
        >
          <HireContact />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default HireMernStackDevelopers;