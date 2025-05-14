"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import { Typography, Box } from "@mui/material";
import hireHeroku from "../../../public/assets/img/hireheroku.png";
import Image from "next/image";
import { Tab, Tabs, CardMedia } from "@mui/material";
import Footer from "../footer/Footer";
import HireContact from "../contact/HireContact";
import HireIndustryDesc from "../contact/HireIndustryDesc";
const HireHerokuDevelopers = () => {
  const partnerValue = [
    {
      image: "/assets/img/payment.gif",
      title: "Cost-Effective",
      desc: "Hiring developers from India can be more cost-effective compared to other countries, as the cost of living in India is lower and wages for software developers are relatively lower compared to other developed countries. This allows you to save money on your development budget while still getting high-quality work.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Talent Pool",
      desc: "India has a large pool of talented and experienced developers who are skilled in working with Heroku. This makes it easier for you to find the right person for your project and ensure that you get the results you need. With a large pool of developers to choose from, you have the advantage of being able to find the best talent to fit your specific needs and budget.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "Technical Expertise",
      desc: "Indian developers have a good understanding of Heroku and its features, and are well-versed in cloud computing, web development, and DevOps. This technical expertise makes it easy for them to help you build and deploy applications on the Heroku platform.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Flexibility",
      desc: "Many Indian developers are willing to work on flexible schedules, which can be especially useful if you need to collaborate with them from a different time zone. This allows you to work with developers who can be available during your working hours, ensuring smooth communication and efficient collaboration.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "English Proficiency",
      desc: "English is widely spoken and understood in India, which makes communication between you and your developer much easier. This helps to eliminate language barriers and ensures that your project can progress smoothly.",
    },
  ];
  const role = [
    {
      image: "/assets/img/teammember.gif",
      title: "Cloud Computing Expertise",
      desc: "Our Heroku developers to hire in Mumbai and Delhi have a deep understanding of cloud computing technologies and concepts, such as scalability, reliability, and security, and can apply this expertise to your project to ensure that your application is built to the highest standards.",
    },
    {
      image: "/assets/img/global.gif",
      title: "Web Development",
      desc: "They extensive experience with web development technologies, such as HTML, CSS, JavaScript, and Ruby, and can build and deploy high-quality web applications on the Heroku platform.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "DevOps",
      desc: "They are well-versed in DevOps practices, such as continuous integration and continuous deployment, and can help you implement these practices to streamline your development process and improve the quality of your applications.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Heroku Platform",
      desc: "Our heroku resources have a deep understanding of the Heroku platform, including its architecture, deployment methods, and available tools and services, and can use this expertise to help you build and deploy applications on the platform effectively and efficiently.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Performance Optimization",
      desc: "The Heroku resources you get to hire from us have experience with performance optimization and can help you optimize the performance of your applications deployed on the Heroku platform.",
    },
    {
      image: "/assets/img/socialnoetwork.gif",
      title: "Problem Solving",
      desc: "They have strong problem-solving skills and are experienced in troubleshooting and resolving any issues that may arise during the development process.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Communication and Collaboration",
      desc: "We hire heroku developers with strong communication and collaboration skills, which makes it easy for them to work with your team and stakeholders to build and deploy applications on the Heroku platform.",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);
  const tabContent = [
    "Our efficient Heroku developers in Bangalore can provide in-depth Heroku consultation services to help you plan and execute your project effectively. Our developers will work with you to understand your requirements and goals, and help you plan and develop a strategy for your project. This includes identifying the resources and tools you’ll need, and developing a timeline for delivering your applications. They’ll also help you plan and execute your project effectively, ensuring that your applications are built and deployed to the highest standards, and that you’re getting the most value from the Heroku platform.",
    "By hiring the affordable Heroku developers in Bangalore, Mumbai and Gurgeon you are getting the access of the best expertise and experience required to help you build and deploy high-quality applications on the Heroku platform. They can help you take full advantage of the benefits offered by Heroku, including scalability, reliability, and security, to ensure that your applications are performing at their best. With their knowledge and experience, you can be confident that your Heroku applications are built to the highest standards and are optimized for the platform.",
    "Heroku integration is the process of integrating your applications with other systems and services. By hiring our Heroku developers in Bangalore, you’ll have access to their expertise in integrating your Heroku applications with other systems, services, and tools, to help you create a seamless and integrated solution. Our developers can help you integrate your Heroku applications with third-party services, such as databases, payment gateways, and more, to help you build a comprehensive solution.",
    "API (Application Programming Interface) integration is a key aspect of modern application development and is essential for connecting your Heroku applications with other systems and services. By hiring our full-fledge heroku developers in Delhi can help you to connect your Heroku applications to other systems and services through APIs, enabling efficient and secure data exchange. They will also help you design and develop custom APIs, provide API documentation, test and validate API functionality, and provide ongoing API maintenance and support. With their knowledge and experience, you can be confident that your Heroku API integrations will be efficient, secure, and optimized for the Heroku platform.",
    "Our resources serves the exceptional Heroku Migration service by assessing your current applications and data, plan the migration process, and then execute the migration to ensure that your applications and data are moved efficiently and effectively to the Heroku platform. They will also provide ongoing maintenance and support to ensure that your applications continue to run smoothly on the new platform. With their proficiency, you can be confident that your Heroku migration will be successful and that your applications and data will be well-supported on the new platform.",
    "Our resources commits to ensure the stability and reliability of your applications by fixing any bugs, optimizing performance, and ensuring security and compliance. They will provide ongoing support and maintenance to ensure that your Heroku applications continue to run smoothly and effectively. Our developers will help you optimize the performance of your Heroku applications, ensuring that they run quickly and efficiently.",
  ];
  const services = [
    {
      image: "/assets/img/teammember.gif",
      title: "Expertise in Heroku Development",
      desc: "InfoKoders Technologies has a team of experienced and skilled Heroku developers in Bangalore, Mumbai, Delhi and Gurgaon India who are well-versed in the latest technologies and best practices in Heroku development. We have a deep understanding of the Heroku platform and can help organizations to build, run, and manage their Heroku applications effectively.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Customizable Solutions",
      desc: "We provide customizable solutions that are tailored to meet the specific requirements of each client. We work closely with our clients to understand their unique requirements and deliver solutions that are aligned with their goals and objectives.",
    },
    {
      image: "/assets/img/economial.gif",
      title: "Competitive Pricing",
      desc: "We believe in delivering cost-effective Heroku development services without compromising on quality. They offer flexible engagement models that are designed to meet the budget constraints of different organizations.",
    },
    {
      image: "/assets/img/clock.gif",
      title: "Timely Delivery",
      desc: "Our team are committed to delivering projects on time and within budget. They use a agile development methodology that allows them to respond quickly to changes and deliver projects faster.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Strong Technical Capabilities",
      desc: "We have strong technical infrastructure and a team of experts who are well-versed in the latest technologies and tools. This enable us to provide high-quality services and support to their clients.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Dedicated Project Management",
      desc: "InfoKoders Technologies provides dedicated project management support to ensure that each project is delivered on time and within budget. We use a transparent and collaborative approach that allows clients to stay informed and involved in the development process.",
    },
  ];
  return (
    <>
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
          Hire Heroku Developers
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
          Whether you're looking to build a simple prototype or a
          mission-critical product, our Heroku developer’s take the complete
          advantage of the fully-managed platform and ensure you to deliver the
          app quickly.
        </Typography>
      </Grid>
      {/* Hire Best Heroku developers in India */}
      <Grid container spacing={3} sx={{ padding: "4% 8%" }}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ margin: "8% 0%" }}>
          <Typography
            className={styles.hirerubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Hire Best{" "}
            <span style={{ color: "#650909" }}> Heroku developers </span> in
            India
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Deploy, manage and Scale modern apps by hiring top notch Heroku
            developers in Mumbai, Bangalore, Delhi India from the tech House of
            InfoKoders Technologies.
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Our team specialises in offering the best Heroku cloud development
            services based on your project requirements. Heroku Developers to
            hire at DxMinds work closely with client to ensure the best
            application development with Heroku cloud services.
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Whether you're looking to build a simple prototype or a
            mission-critical product, our Heroku developer’s take the complete
            advantage of the fully-managed platform and ensure you to deliver
            the app quickly.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ padding: "0 4%" }}>
          <HireContact />
        </Grid>
      </Grid>
      {/* Be ahead of your competitors by hiring our dedicated Heroku developers */}
      <Grid container spacing={5} className={styles.RailsEngineers}>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          sx={{
            marginTop: "2%",
          }}
        >
          <Image
            src={hireHeroku}
            className={styles.engineerImage}
            alt="image not found of the hire ror developers"
            width={600}
            height={300}
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
            Be ahead of your competitors by hiring our dedicated Heroku
            developers
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            Heroku is a complex platform, and having to hire a skillful heroku
            developer in Mumbai, Bangalore, and Delhi who is an expert in the
            technology can help you get the most out of it. Our dedicated
            developer have a deep understanding of Heroku’s features and
            capabilities, and can help you build applications that are optimized
            for performance and scalability.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            Being a reputable Heroku app development company in India, we makes
            sure that the Heroku developers you hire in Bangalore from us are
            thoroughly interviewed and evaluated for their skills, experience,
            and expertise in the technology. This helps ensure that you get the
            best talent and the best results for your project.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            When you work with our passionate developer, you can expect better
            communication and a more collaborative relationship ensuring that
            your project stays on track and that you get the results you want
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            Your Heroku developer will have a deep understanding of the
            technology, and can help you take full advantage of its features and
            capabilities. This can help you build better applications and stay
            ahead of your competitors.
          </Typography>
        </Grid>
      </Grid>
      {/* Why Hire Heroku developers from India? */}
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
            Why Hire <span className={styles.OurUsp}> Heroku developers </span>{" "}
            from India?
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
            India is a hub for technology and software development, and it
            offers a variety of advantages when it comes to hiring Heroku
            developers in Mumbai, Bangalore and Delhi. Here are some detailed
            reasons why you might consider hiring Heroku developers from India
            for your project:
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
            Hiring Heroku developers from India can be a cost-effective and
            efficient solution for your project, providing you with access to
            talented and experienced developers who can help you build and
            deploy applications on the platform. They can help you to save
            money, find the right talent, and ensure that your project is
            completed to the highest standards.
          </Typography>
        </Grid>
      </Grid>
      {/* Key Qualities You Would Embrace by  */}
      <Grid container className={styles.servicesContainer}>
        <Grid>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              MarginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Key Qualities You Would Embrace by Hiring InfoKoders Technologies
            Heroku developers
          </Typography>
          <Typography
            className={styles.keyquality}
            sx={{
              fontSize: {
                lg: "18px ",
                md: "16px ",
                sm: "18px ",
                xs: "16px",
              },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            InfoKoders Technologies Heroku developers bring a range of top-notch
            skills to the table, which can benefit your project in numerous
            ways. Some of these skills include:
          </Typography>
        </Grid>
        <Grid container spacing={4} className={styles.partnerContainer}>
          {role?.map((item, index) => (
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
                  marginTop: "10px",
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Services offer by our Heroku developers */}
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
            Services offer by our{" "}
            <span style={{ color: "#650909" }}> Heroku developers </span>
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
                "Heroku Consultation",
                "Heroku application development",
                "Heroku Integration",
                "Heroku API integration",
                "Heroku Migration",
                "Heroku Support and Maintenance",
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
      {/* hiring your desired Heroku developers in India? */}
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
            Why InfoKoders Technologies for hiring your desired Heroku
            developers in India?
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
export default HireHerokuDevelopers;