"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import { Typography, Box } from "@mui/material";
import { Tab, Tabs, CardMedia } from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import hirenodejs from "../../../public/assets/img/hirenodejs.png";
import Image from "next/image";
import Footer from "../footer/Footer";
import HireContact from "../contact/HireContact";
import HireIndustryDesc from "../contact/HireIndustryDesc";
const HireNodeJsDevelopers = () => {
  const partnerValue = [
    {
      image: "/assets/img/payment.gif",
      title: "Cost-effective",
      desc: "When compared to other countries, India offers a large pool of highly trained and experienced developers that provide cost-effective solutions. As a result, it is an appealing choice for businesses wishing to recruit developers without breaking the budget.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "A large reservoir of talent",
      desc: "There is a vast and increasing pool of talented software engineers in India, including Node.js developers. This provides businesses with a wide range of options when it comes to selecting the correct developer for their project.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Technical knowledge",
      desc: "Indian developers are well-known for their technical expertise and strong problem-solving abilities, both of which are essential when designing sophisticated Node.js apps.",
    },
    {
      image: "/assets/img/clock.gif",
      title: "Time zone benefit",
      desc: "India is in a convenient time zone for organizations in North America and Europe, allowing engineers and clients to communicate and collaborate seamlessly.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Excellent work ethic",
      desc: "Node js developers in India to hire are hardworking and dedicated to providing high-quality solutions. This, together with their technical knowledge, makes them an invaluable asset to any team.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "The IT industry is expanding",
      desc: "The Indian IT industry is quickly expanding, creating a dynamic ecosystem for Node.js engineers to expand their skills and knowledge.",
    },
  ];
  const role = [
    {
      image: "/assets/img/railsmvp.gif",
      title: "Proficiency in JavaScript and Node.js programming",
      desc: "Hire our skilled Node js developers in Bangalore that has depth understanding of JavaScript language fundamentals, asynchronous programming, and Node.js frameworks and libraries.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Excellent knowledge of web application architecture",
      desc: "Our best Nodejs resources in Delhi have the depth of Experience with server-side development, client-side scripting, and the interaction of front-end and back-end systems is required.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "Experience with server-side development",
      desc: "This includes building REST APIs, working with databases (such as MongoDB, MySQL, or PostgreSQL), and integrating with third-party services.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Attention to code quality and efficiency",
      desc: "With a focus on performance optimization, error management, and security, this involves knowing how to develop scalable and maintainable code.",
    },
    {
      image: "/assets/img/railapp.gif",
      title: "Familiarity with version control systems",
      desc: "Included in this is Git, which is frequently used in the software development sector to track code modifications and coordinate with other developers.",
    },
    {
      image: "/assets/img/techPartnerRight.gif",
      title: "Strong problem-solving skills",
      desc: "This includes the ability to analyse complex problems, identify root causes, and develop effective solutions.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Excellent communication and collaboration skills",
      desc: "This involves the capacity to collaborate effectively with team members, clients, and stakeholders, both individually and as part of a team.",
    },
    {
      image: "/assets/img/socialnoetwork.gif",
      title: "Commitment to continuous learning and professional development",
      desc: "This involves a drive to keep up with the most recent technology, processes, and best practices as well as a readiness to pick up new knowledge and tackle challenging tasks.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Knowledge of Agile software development methodologies",
      desc: "Understanding of Agile approaches such as Scrum and Kanban, as well as familiarity with agile software development practices, are required.",
    },
    {
      image: "/assets/img/file.gif",
      title: "Passion for delivering high-quality software solutions",
      desc: "This entails a dedication to creating software of the greatest caliber, as well as a significant focus on customer happiness and meeting their needs.",
    },
  ];
  const services = [
    {
      image: "/assets/img/railsmvp.gif",
      title: "Discover astonishing and inventive solutions",
      desc: "Embrace creative solutions by putting your trust in our Nodejs developers, who believe that innovation is the only way to surpass the competition and serve you with unique app development solutions that generate significant income and profit.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Customized solutions",
      desc: "We understand that every organization has distinct needs, thus our Nodejs coders offer additional possibilities in bespoke app development services that deliver great outcomes according to your expectations.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Latest technologies",
      desc: "Our node js programmers in Bangalore stay ahead of the curve by staying up-to-date with the latest technologies and industry trends. This enables them to deliver innovative solutions that are ahead of the curve.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Privacy and security",
      desc: "When it comes to offering an extraordinary level of privacy and security for your projects, InfoKoders Technologies developers are extremely dedicated. Furthermore, we sign a tight NDA (Non-disclosure agreement) with the clients and the hired nodejs team to ensure that your project ideas and processes are safe with us. ",
    },
    {
      image: "/assets/img/payment.gif",
      title: "Cost-effective and predictable",
      desc: "We provide you with the best support for success at a cheaper cost. InfoKoders Technologies  is preferred by global clientele for providing high-quality finest app development services at a reasonable cost. ",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);
  const tabContent = [
    "Hire Nodejs developers in Bangalore, Delhi, and Mumbai at InfoKoders Technologies and embrace the comprehensive Node.js App Development services to meet the unique needs of clients. our developers are experts in using JavaScript and Node.js programming to build high-quality, scalable, and secure applications. With a focus on delivering solutions that meet customer needs and a commitment to producing software of the highest quality, our Node.js developers in India are well-equipped to help clients achieve their goals.",
    "Our developers offer exceptional Enterprise Nodejs web app development services designed to meet the needs of large-scale businesses and organizations. Our developers use the latest technologies and methodologies to build robust and secure web applications that can handle high traffic and large amounts of data. By hiring node js backend developers in Mumbai, Delhi, and Bangalore from us you would leverage the complete skills package, because our developers hold expertise in working with databases, such as MongoDB, MySQL, and PostgreSQL, and in integrating with third-party services, such as payment gateways and cloud services.",
    "The Serverless framework is a popular open-source tool for building and deploying serverless applications and services on various cloud platforms such as AWS, Google Cloud, and Azure. A skilled Node.js developer can help you build and deploy a scalable, cost-effective, and easily maintainable serverless application. If you hire our cost-effective Node.js resources in Delhi India, they will be able to help you build and deploy your Node. js-based application in a scalable and efficient manner as they own experience in using the Serverless framework. They are capable to make use of the many available plugins and templates offered by the Serverless framework to help you speed up your development process.",
    "Node.js power pack platform for building server-side applications unleashes a number of libraries and frameworks for building REST APIs quickly and easily. With the help of our experienced Node.js developers to hire in Delhi, Gurgaon, and Bangalore, you can create efficient, scalable, and secure REST APIs that can be easily consumed by a variety of client applications. Additionally, Node.js’ asynchronous programming model makes it a great choice for building high-performance REST APIs that can handle a large number of concurrent requests.",
    "On-board our ambitious Node.js programmers in India who can support you in building phenomenal real-time chat applications. As we know Node.js is well-suited for building real-time applications due to its event-driven architecture and support for WebSockets, which allows for bi-directional communication between a client and server. Our experienced Node.js developers empower you to win a real-time chat application that provides instant messaging and real-time notifications to your business end users. Our developers leverage a number of popular libraries and frameworks to speed up development and ensure the scalability and performance of the application.",
    "Node.js has a rich ecosystem of plugins, packages, and APIs that can be leveraged to extend its functionality and improve the performance of your applications. Our efficient Node.js developer in Delhi can help you build custom plugins and packages that can be used to add specific functionality to your applications, as well as create APIs that can be consumed by other applications and services. With their expertise, you can ensure that your plugins, packages, and APIs are well-designed, maintainable, and scalable and that they meet your specific requirements.",
  ];
  return (
    <>
      <Grid id="carousel" className={styles.backgroundNode}>
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
          Hire Node Js Developers
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
          Hire top-notch Node js developers in India from us, stick to quality
          development approaches, and embrace scalable, data-intensive, and
          feature-rich applications.
        </Typography>
      </Grid>
      {/* Hire qualified and experienced Nodejs developers in India */}
      <Grid container spacing={3} sx={{ padding: "4% 8%" }}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ margin: "8% 0%" }}>
          <Typography
            className={styles.hirerubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Hire qualified and experienced{" "}
            <span style={{ color: "#650909" }}> Nodejs developers </span> in
            India
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Hire top-notch Node js developers in India from us, stick to quality
            development approaches, and embrace scalable, data-intensive, and
            feature-rich applications.
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Our top-tier Node.js programmers to hire in Mumbai, Bangalore,
            Delhi, and India are skilled in creating event-driven, non-blocking
            I/O model-based solutions that operate flawlessly on the server side
            by deftly managing numerous connections.
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Our 10+ years of expertise and army of highly skilled Nodejs
            developers enable us to provide solutions that are nothing short of
            faultless. InfoKoders Technologies only recruits experts after a
            rigorous evaluation process. Thus, every developer is the best in
            their industry.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ padding: "0 4%" }}>
          <HireContact />
        </Grid>
      </Grid>
      {/* Create Unrivalled Backend Solutions by hiring our enthusiastic Nodejs developers */}
      <Grid container spacing={5} className={styles.RailsEngineers}>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          sx={{
            marginTop: "4%",
          }}
        >
          <Image
            src={hirenodejs}
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
            Create Unrivalled Backend Solutions by hiring our enthusiastic
            Nodejs developers
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            C-suite executives have often approached us, wondering if we can
            provide an access to the dedicated Node js developer in Mumbai and
            Bangalore, and the answer is yes. InfoKoders Technologies is known
            for providing top-tier Node js engineers who have been taught,
            tested, and vetted.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            Whether you want to hire a Node js developer to crank out code, you
            need a full stack Nodejs architect to assist you to construct CI/CD
            pipelines, or you want to operate micro services interconnected with
            other APIs, we can help by supplying your preferred Node js
            programmer at your leisure and convenience.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            We only hire the best & brightest Node js developers in Bangalore,
            Mumbai, and Delhi India who outperforms diverse level of interviews
            and commit to delivering high-quality and reliable solutions that
            meet your specific business needs.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            The Node.js developers we hire have a proven track record of
            delivering successful Node.js projects, and they stay up-to-date
            with the latest advancements in the field to ensure that your
            project is built using the most up-to-date and efficient techniques.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            By choosing our company for hiring the best Nodejs developers in
            Bangalore, Mumbai, and Gurgaon you can rest assured that you will
            receive the best possible service and support from a team of experts
            who are dedicated to your success.
          </Typography>
        </Grid>
      </Grid>
      {/* Why India is the right destination to hire your visionary Nodejs developers? */}
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
            Why India is the right destination to hire your visionary{" "}
            <span className={styles.OurUsp}> Nodejs developers? </span>
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
            India offers excellent Node js developers that are knowledgeable in
            a wide range of technologies. And when you hire Indian devs, you
            get,
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
            India provides a compelling combination of low cost, technical
            competence, and a large pool of experienced engineers, making it an
            ideal destination for firms looking to hire Node.js experts.
          </Typography>
        </Grid>
      </Grid>
      {/* Top-Notch Skills you get to Benefit  */}
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
            Top-Notch Skills you get to Benefit from InfoKoders Technologies
            Node Js Developers
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
            Node.js developers at InfoKoders Technologies likely possess the
            following in-depth key qualities:
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
      {/* Our Nodejs Developers' expertise */}
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
            Our <span style={{ color: "#650909" }}> Nodejs Developers' </span>{" "}
            Expertise
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            As an experienced Node js development company in Mumbai, Bangalore
            and Delhi, we are known for providing full-edge Node js development
            services that enable us to design a powerful web application with
            back-end API services. Our Dedicated Node Developer understands the
            functional event loop ideas, which allows us to provide 360-degree
            Nodejs solutions.
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
                "Nodejs app development service",
                "Enterprise Nodejs web apps service",
                "Node js serverless framework APP Development",
                "Rest API Development in Nodejs",
                "Real-time chat app",
                "Nodejs Plugin, Package, and API Development",
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
      {/* Advantages of hiring */}
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
            Advantages of hiring InfoKoders Technologies remote node js
            developers
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
            InfoKoders Technologies a leading software development solution
            provider is immensely dedicated to delivering innovative and
            cutting-edge solutions as per your business needs. Each of our
            Nodejs developers is capable of mastering the framework and is
            committed to delivering secure, dynamic, and demanding web apps in a
            timely manner. Based on your individual needs, our developers may
            create a wide range of applications, including e-commerce apps,
            social apps, real-time apps, CMS, Chatting apps, and more.
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
export default HireNodeJsDevelopers;
