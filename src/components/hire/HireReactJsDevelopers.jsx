"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import { Typography, Box, CardMedia } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import hirereactjs from "../../../public/assets/img/hirereactjs.png";
import Image from "next/image";
import Footer from "../footer/Footer";
import HireContact from "../contact/HireContact";
import HireIndustryDesc from "../contact/HireIndustryDesc";
const HireReactJsDevelopers = () => {
  const Industry = [
    {
      title: "Flexible Engagement Models",
    },
    {
      title: "Advanced technologies",
    },
    {
      title: "Rapid Delivery",
    },
    {
      title: "Swift Development",
    },
  ];
  const partnerValue = [
    {
      image: "/assets/img/mobileapp.gif",
      title: "Large talent pool",
      desc: "India has a large pool of highly skilled and experienced software developers, including React JS experts. This gives firms a variety of options for finding the proper people for their project needs.",
    },
    {
      image: "/assets/img/payment.gif",
      title: "Cost-effective",
      desc: "The cost of living in India is lower than in other countries, resulting in lower developer pay. This makes India an appealing option for organizations seeking cost-effective Reactjs development solutions.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "High-quality work",
      desc: "Indian React js programmers, especially from Mumbai, Bangalore and Gurgaon have a reputation for producing high-quality work and have worked with clients from all around the world.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Solid technological background",
      desc: "Indian developers have a strong technical background and are well-versed in the most recent technologies, such as React JS.",
    },
    {
      image: "/assets/img/techPartnerLeft.gif",
      title: "Excellent work ethic",
      desc: "The best Reactjs developers to hire in Mumbai, Delhi, and Gurgaon have a high work ethic and are known for completing projects on schedule and satisfying the needs of their clients.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Cultural affinities",
      desc: "Because India has a culture that values education and technology, there is a vast pool of highly motivated and skilled software developers willing to work hard to create high-quality work.",
    },
  ];
  const role = [
    {
      image: "/assets/img/teammember.gif",
      title: "Technical Expertise",
      desc: "InfoKoders React JS developers to hire in Delhi are well-versed with React JS and its key ideas, such as components, state management, and the virtual DOM. The developer is even skillful with related technologies including JavaScript, HTML, and CSS.",
    },
    {
      image: "/assets/img/dataprotections.gif",
      title: "Experience",
      desc: "Look for a developer who has hands-on experience working with React JS in real-world projects. Our react js developer holds extensive experience in delivering complex and scalable applications and has the skills and expertise to handle any kind project requirements.",
    },
    {
      image: "/assets/img/deploypro.gif",
      title: "Problem-solving skills",
      desc: "We Onboard those React JS developers who are problem solvers and can come up with innovative solutions to complicated technical problems.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Communication abilities",
      desc: "Our React JS developers are well-versed in communication and can effectively communicate with clients and other stakeholders.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Detail-oriented",
      desc: "React JS engineers need to have a great eye for detail and be dedicated to creating high-quality code that fulfills the needs of their clients. And we hold that kind of react js resources.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Adaptability",
      desc: "InfoKoders React JS engineers to hire in India are adaptive and can learn new technologies and tools as needed to fulfill the needs of their clients.",
    },
  ];
  const services = [
    {
      image: "/assets/img/teammember.gif",
      title: "Expertise",
      desc: "InfoKoders Technologies is a leading software development company that specializes in creating web and mobile applications with React JS. They have a team of professional React JS developers who are up to date on the latest industry technologies and best practices.",
    },
    {
      image: "/assets/img/payment.gif",
      title: "Cost-effective",
      desc: "We provide cost-effective ways for hiring React JS developers in Mumbai, Delhi, and Gurgaon India, allowing the organization to save money and lower the total cost of ownership.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Flexibility",
      desc: "To fulfill the company's specific requirements,InfoKoders Technologies can provide flexible engagement models such as full-time hiring, contract-based recruiting, and dedicated team hiring.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Tech support",
      desc: "We offer technical support to our clients long after the project is completed, ensuring smooth operations and resolving any technical issues that may emerge.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Quality Assurance",
      desc: "We follow a strict quality assurance procedure in place to verify that the solutions offered satisfy the company's specifications and standards.",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);
  const tabContent = [
    "Reactjs developers at  InfoKoders Technologies offer out beating enterprise ReactJS web application development services that assist organizations in delivering their online services and products in a scalable, secure, and adaptable manner. Our developers have vast experience designing custom web applications utilizing ReactJS, and they have the abilities and competence to provide high-quality work that fulfills the needs of our clients.",
    "Ensure your ReactJS applications run smoothly and efficiently with our dedicated ReactJS support services at InfoKoders Technologies. Our team of experienced developers provides continuous monitoring, troubleshooting, and performance optimization to keep your applications up and running without disruptions. Whether it's fixing bugs, enhancing features, or adapting to evolving business needs, we ensure your ReactJS application remains reliable, secure, and high-performing.",
    "Our ReactJS engineers can offer a variety of web development services based on the ReactJS technology. This can include developing single-page applications, custom UI components, interacting with APIs, and writing reusable code. Our engineers have vast ReactJS experience and can use it to offer high-quality, scalable, and effective solutions for your web development needs. Whether you require a basic website or a complicated web application, our developers can help you bring your idea to life and create a wonderful user experience for your consumers.",
    "Whether you need to add new functionality to your website or build a complex web application, our developers can help you achieve your goals and deliver a great user experience for your customers. Our ReactJS developers can provide custom development services using the ReactJS framework. This can include developing new applications, adding custom features to existing applications, or building customized user interfaces. Our developers have extensive experience in ReactJS and can work with you to understand your specific needs and requirements to create tailored solutions.",
    "Move your existing application to the latest version of ReactJS by embracing the top-quality Reactjs Migration services from our react js resources. This involves updating the application code to use the latest features and best practices of ReactJS, as well as ensuring that the application remains compatible with any dependencies or third-party libraries that are being used. Our developers have extensive experience working with ReactJS and can help you with a smooth and efficient migration process.",
    "Hire ReactJS engineers in Delhi and Bangalore and achieve high-quality UI/UX development services that enable to you in creating engaging and user-friendly interfaces for your web applications. Our developers are skilled in ReactJS and similar technologies and can collaborate with you to create and implement bespoke UI components, animations, and other interactive elements that match your needs. We can also assist with the general look and feel of your application, ensuring that it is optimized for a great user experience across all devices and screen sizes.",
    "Our ReactJS experts can create custom plugins to help you enhance the functionality of your ReactJS applications. This may entail creating new plugins from scratch or updating existing plugins to match your specific requirements. Our developers have worked with a variety of technologies and can assist you with integrating your ReactJS plugins with other systems and tools to create a seamless user experience. We can also provide continuous support and maintenance to guarantee that your plugins continue to function as expected as your application changes over time.",
  ];
  return (
    <>
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
          Hire React JS Developers
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
          InfoKoders Technologies is assisting numerous organizations,
          regardless of their sector, structure, or niche, in Hiring certified
          React JS developers in India in a frictionless manner. Being the best
          React JS outsourcing provider, we make certain that all the resources
          we provide go through many filtration processes.
        </Typography>
      </Grid>
      <Grid container spacing={3} className={styles.hirecontainer}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.hirerubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Hire Skillful
            <span style={{ color: "#650909" }}> React JS developers</span> in
            india
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Willing to achieve the most Innovative Web solution by hiring
            affordable React js developers in Mumbai, Bangalore, Delhi, and
            Gurgaon?
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Then Quickly Get started with, InfoKoders Technologies where Reactjs
            developers are committed to delivering user-winning web development
            solutions that unleash the power to differentiate your business from
            your competitors.
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            InfoKoders Technologies is assisting numerous organizations,
            regardless of their sector, structure, or niche, in Hiring certified
            React JS developers in India in a frictionless manner. Being the
            best React JS outsourcing provider, we make certain that all the
            resources we provide go through many filtration processes.
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            By doing this, it will be ensured that these resources can be
            increased in size as needed for the project.
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
      {/* Boost your business strategy */}
      <Grid container spacing={5} className={styles.RailsEngineers}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Image
            src={hirereactjs}
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
            Boost your business strategy by hiring specialized react js
            developers in India
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            Hiring top React JS developers in Bangalore from InfoKoders
            Technologies will provide you access to the greatest professionals
            in the market and open a wide door to cutting-edge concepts and
            original online solutions for the growth of your company.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            We provide world-class services with our highly qualified and
            certified React JS developers in India, ensuring the development of
            a solution imitates your business concepts with comprehensive
            solutions for each business necessity. The resources you recruit
            from us are on board after several rounds of intense interviews to
            ensure that they can handle projects of any complexity, from simple
            to sophisticated, with ease. This allows you to make the most of
            these resources.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            Our professionals not only have exceptional React JS skills, but
            also a vast understanding of the numerous tools and technologies
            utilized to create an unrivaled solution with extensive and
            incomparable user experience.
          </Typography>
        </Grid>
      </Grid>
      {/* Proven Reasons that intensify */}
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
            Proven Reasons that intensify your will to hiring{" "}
            <span className={styles.OurUsp}> React JS developers </span> in
            india
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
            India is regarded as one of the greatest places for outsourcing
            software development services, and the following are some of the
            reasons why it is a smart choice for hiring React JS developers:
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
            As a result, India provides a solid combination of
            cost-effectiveness, high-quality work, and a vast pool of competent
            developers, making it an attractive spot for companies looking to
            Hire quality best, cost-effective React JS developers in Mumbai,
            Bangalore India.
          </Typography>
        </Grid>
      </Grid>
      {/* Key Qualities you get */}
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
            Key Qualities you get to embrace from InfoKoders Technologies React
            JS developers
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
            There are some crucial qualities to look for when hiring a leading
            React JS developer in Mumbai, Bangalore and India to ensure that the
            developer is the correct fit for your project needs:
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
      {/* Top-notch services provided by our
        top React JS developers */}
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
            Top-notch services provided by our top{" "}
            <span style={{ color: "#650909" }}> React JS developers </span>
            to help diversify business ideas:
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
                width: { lg: "300px", md: "200px", sm: "170px", xs: "130px" },
                // backgroundColor: "#f4f4f4"
              }}
            >
              {[
                "Enterprise Reactjs Web application",
                "ReactJS Support, Maintenance, and Testing",
                "Reactjs web development",
                "Custom Reactjs development",
                "Reactjs Migration Service",
                "React JS UI/UX development",
                "ReactJs plugin development",
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
                      xs: "10px",
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
                  fontSize: { lg: "25px", md: "18px", sm: "14px", xs: "10px" },
                }}
              >
                {tabContent[activeTab]}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Why choose */}
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
            Why Choose InfoKoders Technologies to Hire React JS developers in
            Mumbai, Bangalore, and Delhi India?
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
      {/* Hire Industry's Best Software developers in India */}
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

export default HireReactJsDevelopers;