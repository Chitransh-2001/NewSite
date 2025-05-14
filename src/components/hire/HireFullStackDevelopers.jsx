"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import HireContact from "../contact/HireContact";
import { Tab, Tabs, CardMedia } from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { Typography, Box } from "@mui/material";
import hirefullstack from "../../../public/assets/img/hirefullstack.jpg";
import Image from "next/image";
import Footer from "../footer/Footer";
import HireIndustryDesc from "../contact/HireIndustryDesc";
const HireFullStackDevelopers = () => {
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
  ];
  const role = [
    {
      image: "/assets/img/railsmvp.gif",
      title: "Strong technical skills",
      desc: "InfoKoders Technologies full-stack developers to hire in Bangalore have a strong foundation in both front-end and back-end technologies, including languages such as JavaScript, HTML, CSS, and frameworks such as React JS, Node Js, and Angular Js. They possess the capability to handle server-side and client-side programming and have experience with database management systems.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Problem-solving skills",
      desc: "A good full-stack developer needs to be able to identify, troubleshoot, and solve problems quickly and efficiently. Our developers have a logical mindset and are capable to find creative solutions to complex technical challenges.",
    },
    {
      image: "/assets/img/techPartnerLeft.gif",
      title: "Attention to detail",
      desc: "Full-stack developers often work on multiple projects simultaneously, and therefore need to have excellent attention to detail. That’s where hiring our best full-stack developers in India can help to stand out shining from others because they manage multiple tasks, ensure all code is well-documented and written to a high standard, and thoroughly test their work before deployment.",
    },
    {
      image: "/assets/img/socialnoetwork.gif",
      title: "Communication and collaboration",
      desc: "Full-stack developers should be able to work effectively in teams and communicate their ideas clearly. Our developers are open to feedback and able to collaborate with designers, developers, project managers, and other stakeholders to ensure that your projects are delivered on time and to the highest quality.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "Adaptability",
      desc: "With technology constantly evolving, full-stack developers should be able to learn new programming languages and frameworks quickly.At InfoKoders Technologies, full-stack developers to hire in Delhi and Gurgaon stay up-to-date with industry trends and adapt their skills to meet the needs of new projects and clients. ",
    },
  ];
  const partnerValue = [
    {
      image: "/assets/img/mobileapp.gif",
      title: "Large talent pool",
      desc: "India has a vast pool of highly skilled and talented software developers. This means that you have a wide range of options to choose from when hiring full-stack developers. You can select the best talent that matches your business requirements.",
    },
    {
      image: "/assets/img/payment.gif",
      title: "Cost-effective",
      desc: "One of the primary reasons to hire full-stack developers from India is the cost advantage. India offers highly skilled developers at a lower cost than other countries, without compromising on the quality of work.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Multilingual and diverse",
      desc: "Indian developers are highly proficient in English and can communicate fluently. This is an added advantage for businesses that operate globally. Moreover, the Indian workforce is highly diverse, enabling developers to understand and appreciate different cultures and perspectives.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "Expertise in the latest technologies",
      desc: "Full-stack developers in India have a solid academic background and are up-to-date with the latest trends in technology. They have expertise in various front-end and back-end technologies and frameworks such as React, Angular, Node.js, and PHP.",
    },
    {
      image: "/assets/img/quality.gif",
      title: "Quality of work",
      desc: "Indian developers are known for their quality of work and attention to detail. They follow an agile development methodology and ensure that they deliver solutions that are fast, reliable, and secure.",
    },
    {
      image: "/assets/img/clock.gif",
      title: "Time zone advantage",
      desc: "India is located in a time zone that overlaps different parts of the world, which is an added advantage for businesses that operate globally. This means that you can collaborate and communicate with developers in real time.",
    },
  ];
  const services = [
    {
      image: "/assets/img/teammember.gif",
      title: "Expertise",
      desc: "Our full-stack developers are highly skilled in multiple technologies and frameworks, which allows them to develop scalable and robust applications. They have experience in working on diverse projects and can deliver solutions that meet your business requirements.",
    },
    {
      image: "/assets/img/payment.gif",
      title: "Cost-effective",
      desc: "Hiring full-stack developers in India can be a cost-effective option, as the hourly rates are generally lower than in other countries. InfoKoders Technologies provides flexible engagement models, which allows you to choose a model that suits your budget.",
    },
    {
      image: "/assets/img/techPartnerLeft.gif",
      title: "Dedicated Teams",
      desc: "We offer dedicated teams of full-stack developers that work exclusively on your project, providing complete control and transparency. You can choose to hire a team of developers for a specific project or for a longer term.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Agile Methodologies",
      desc: "We follow agile methodologies, which allows us to deliver projects quickly and efficiently. Our full-stack developers are skilled in agile practices like Scrum and Kanban, which enables them to work collaboratively and deliver high-quality solutions.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Quality Assurance",
      desc: "We have a dedicated team of quality assurance professionals who ensure that every project we deliver meets the highest standards of quality. Our developers follow rigorous testing protocols to ensure that the applications are bug-free and perform optimally.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Innovation",
      desc: "We believe in continuous innovation and staying updated with the latest technologies and frameworks. Our full-stack developers are skilled in emerging technologies like Artificial Intelligence, Machine Learning, Blockchain, and IoT, which enables them to develop cutting-edge solution.",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);
  const tabContent = [
    "Hiring top full-stack developers in Bangalore, you can expect a comprehensive and customized app development service that meets your specific business needs and provides a high-quality, user-friendly, and efficient app solution. Our full-stack developers offer a complete app development service that starts with requirements gathering and analysis, where they work closely with you to understand your business needs, goals, and user expectations. They use modern web technologies like HTML, CSS, and JavaScript to build the front end, ensuring that the app is responsive, user-friendly, and intuitive across different devices and screen sizes. For the back end, they use programming languages like Node.js to build the app’s infrastructure, including the database schema, APIs, and server setup.",
    "Our full-stack app integration service in Mumbai, Bangalore, and Delhi is aimed at providing high-quality, customizable, and efficient app solutions that meet your specific business needs and user expectations. By hiring our full-stack developers in Bangalore, you can expect a comprehensive and professional app integration service that covers the entire software development lifecycle, from requirements gathering to ongoing maintenance and support. Our developers collaborate closely with you and then use modern web technologies and programming languages to integrate the app’s various components seamlessly. During the integration process, they identify and troubleshoot any potential issues to ensure that the app is fully functional and user-friendly.",
    "At InfoKoders Technologies our full stack developers to hire in India provide an app enhancement and updates service that is aimed at improving and updating existing apps to meet changing business needs and user expectations. They identify potential areas for improvement, use modern web technologies and programming languages to enhance the app’s front-end and back-end components, and ensure that the app remains scalable and fully functional. Our developers conduct thorough testing to ensure that the updated app is bug-free and deploy it to the client’s server or the cloud. They provide ongoing maintenance and support to ensure that the app remains up-to-date and runs smoothly. By hiring our full-stack developers in Bangalore, you can expect a professional and comprehensive app enhancement and updates service that covers the entire software development lifecycle, from requirements gathering to ongoing maintenance and support.",
    "Our full-stack developers provide a migration and upgradation service that is aimed at migrating and upgrading existing apps to new technologies or platforms. They work closely with you to understand your requirements and use modern web technologies and programming languages to migrate the app’s front-end and back-end components to the new technology or platform. Our developers ensure that the app remains scalable, user-friendly, and fully functional during the migration and upgradation process. They also provide ongoing maintenance and support to ensure that the app remains up-to-date and runs smoothly on the new technology or platform.",
    "We offer a full-stack social media service that is focused on developing and integrating social media features into an app or website. They work immensely on diverse programming languages to seamlessly integrate social media features such as logging in with social media accounts, sharing content on social media platforms, and social media analytics. Our developers ensure that the social media features are easy to use, secure, and fully functional. They also provide ongoing maintenance and support to ensure that the social media features remain up-to-date and running smoothly. Our full-stack social media service is aimed at providing high-quality, customizable, and efficient app solutions that meet our client’s specific business needs and user expectations.",
  ];
  return (
    <>
      <Grid id="carousel" className={styles.backgroundFullStack}>
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
          Hire Full Stack Developers
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
          At InfoKoders Technologies we help you to hire skilled Full Stack
          developers in Bangalore, and Mumbai that facilitate you to build any
          type of mobile, web, or desktop app from scratch to finish. Our
          professional Full Stack programmers are well-versed in diverse tiers
          of software development, databases, servers, MVC, APIs, and hosting
          environments, among others.
        </Typography>
      </Grid>
      {/* Hire Experienced Full stack developers in India */}
      <Grid container spacing={3} className={styles.hirecontainer}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.hirerubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Hire Experienced
            <span style={{ color: "#650909" }}> Full stack developers</span> in
            India
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Don't ruin your ideal team by adding too many programmers for
            various technologies; you risk compromising the results. Hire a
            full-stack developer in India who can handle front ends, back end,
            and all other tech stacks.
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            At InfoKoders Technologies we help you to hire skilled Full Stack
            developers in Bangalore, and Mumbai that facilitate you to build any
            type of mobile, web, or desktop app from scratch to finish. Our
            professional Full Stack programmers are well-versed in diverse tiers
            of software development, databases, servers, MVC, APIs, and hosting
            environments, among others.
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            Our skilled Full Stack developers will guide you through your web
            development needs. We provide excellence in open-source software
            such as MEAN Stack (MongoDB, Express.js, AngularJS, and Node.js) and
            LAMP (Linux operating system, the Apache HTTP Server, the MySQL
            relational database management system, and the PHP programming
            language
          </Typography>
          {Industry?.map((item, index) => (
            <Typography
              className={styles.obstaclesRightTitle}
              key={index}
              sx={{
                fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
                fontFamily: "NovemberPro-Reg",
                // marginBottom: "0.5rem",
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
      {/* Hire Full Stack Developers in India Based on Your Needs */}
      <Grid container spacing={10} className={styles.RailsEngineers}>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          sx={{ alignItems: "center", display: "flex" }}
        >
          <Image
            src={hirefullstack}
            className={styles.engineerImage}
            alt="image not found of the hire ror developers"
            width={600}
            height={1500}
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
            Hire Full Stack Developers in India Based on Your Needs
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            When it comes to{" "}
            <b>
              hiring full-stack developers in Bangalore, Mumbai, and Delhi India
            </b>{" "}
            it is crucial to ensure that you are bringing in the right talent
            for your project.InfoKoders Technologies, being recognized as the
            leading full stack Development Company in India, offers a unique
            service where you can hire fully interviewed full-stack developers
            who have been thoroughly vetted by their team.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            We hold has a rigorous hiring process that involves multiple rounds
            of technical assessments and interviews. This process ensures that
            the developers have the required technical skills and expertise to
            handle complex full-stack development projects. The team at
            InfoKoders Technologies also verifies the developer’s previous work
            experience and checks their references to ensure that they have a
            proven track record of delivering high-quality solutions.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            When you hire passionate and efficient full-stack developers in
            Mumbai from InfoKoders Technologies, you can be confident that you
            are bringing in top-notch talent to your project. These developers
            are proficient in both front-end and back-end development
            technologies and can develop robust, scalable, and secure
            applications that cater to the unique needs of your business.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            InfoKoders Technologies full-stack developers are well-versed in
            popular programming languages such as RoR and JavaScript, and have
            expertise in the latest front-end frameworks such as Next JS,
            Angular Js, React Js, and Vue Js, and back-end technologies such as
            Node.js . They follow an agile development methodology and use the
            latest tools and technologies to deliver applications that are fast,
            reliable, and secure.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            By hiring fully interviewed full-stack developers from InfoKoders
            Technologies, you can save time and money that would otherwise be
            spent on the hiring process. The team at InfoKoders Technologies
            takes care of the entire hiring process, including screening,
            interviewing, and onboarding, so you can focus on your core business
            activities.
          </Typography>
        </Grid>
      </Grid>
      {/* Top Reasons to Hire Full stack developers from India */}
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
            Top Reasons to Hire{" "}
            <span className={styles.OurUsp}> Full stack developers </span> from
            India
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
            India has emerged as a global leader in the IT industry, with a vast
            pool of talented and skilled software developers. Hiring full-stack
            developers from India can be a smart business decision for several
            reasons.
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
            Hiring full-stack developers from India is an excellent choice for
            businesses looking for cost-effective, highly skilled, and
            proficient developers who have a strong academic background and
            expertise in the latest technologies. With their attention to detail
            and ability to deliver high-quality solutions, Indian developers can
            provide a competitive edge to your business.
          </Typography>
        </Grid>
      </Grid>
      {/* Top Skills You Get to Embrace */}
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
            Top Skills You Get to Embrace from InfoKoders Technologies full
            Stack developers
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
            Based on our reputation and past performance, the full-stack
            developers to hire in Bangalore, Mumbai, Delhi, and India are likely
            to possess the following key qualities:
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
      {/* Services offered by our full-stack developers */}
      <Grid container className={styles.Professionals}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Typography
            className={styles.ProfessionalsTitlehire}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Services offered by our{" "}
            <span style={{ color: "#650909" }}>full-stack developers</span>
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
                "Full Stack App Development",
                "Full Stack Integration",
                "Full Stack enhancement and Updates",
                "Full stack Migration and Upgradation",
                "Full Stack Social Media Integration",
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
                  fontSize: { lg: "18px", md: "16px", sm: "12px", xs: "10px" },
                }}
              >
                {tabContent[activeTab]}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* hiring ideal Full stack developers in India? */}
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
            Why InfoKoders Technologies for hiring ideal Full stack developers
            in India?
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

export default HireFullStackDevelopers;