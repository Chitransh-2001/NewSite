"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button, CardMedia } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import RorBanner from "../../../public/assets/img/ror-banner.png";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import enter from "../../../public/assets/img/enter.gif";
import upstart from "../../../public/assets/img/upstart.gif";
import Contact from "../casestudy/clientAchivement/Contact";
import Footer from "../footer/Footer";
import ContactUsModal from "../contact/ContactUsModal";
const RorDevelopment = () => {
  const [open, setOpen] = useState(false);
  const uspValues = [
    {
      title: "Rails application Migration",
      desc: "To stay competitive, go with the evolving technology trends. Get professional migration services to switch your app data from your internal system to the RoR app. InfoKoders's expert team has the knowledge and experience to automate SQL interactions with your company's database.",
      image: "/assets/img/railapp.gif",
    },
    {
      title: "Rails MVP Development",
      desc: "MVP is all about keeping things simple. Creating the Least Viable Product is a great way to understand and go with your customers' preferences and know the reactions to your product. RoR is the best framework for making it happen. It's the quickest way to get your products in front of your prospects. We create a minimum viable product (MVP) to determine its market viability.",
      image: "/assets/img/railsmvp.gif",
    },
    {
      title: "Ecommerce Development",
      desc: "Our Ruby on Rails experts are capable of updating and gaining access to cutting-edge technology in order to build e-commerce solutions with Rails. We develop a personal blog, corporate blog, or even an e-commerce store using Ruby on Rails framework features. Our programmers integrate apps and payment gateways into your CMS system to make it easier to use.",
      image: "/assets/img/eccomerce.gif",
    },
    {
      title: "Only API development",
      desc: "APIs are now essential tools that interact with third-party software to deliver results quickly. To interact with other systems and tools, any web-based product must have the appropriate API. You can get the best and perfect API that you need by using RoR development services, and our RoR developers know how to create customized APIs for your business's benefit.",
      image: "/assets/img/agiledevelopment.gif",
    },
    {
      title: "Custom Ruby on Rails Web Application Development",
      desc: "InfoKoders Technologies combines pre-built software to create custom applications for your specific business requirements. We can also add custom features to your existing mobile or web-based applications based on your business needs. It will be in line with your company's objectives.",
      image: "/assets/img/socialnoetwork.gif",
    },
    {
      title: "Plugins development",
      desc: "After customizing open-source Ruby on Rails framework applications, we create supportive plugins. It will help you with your business requirements. When you incorporate social media plugins and useful lightweight widgets into your ROR CMS, portal, and blogs, it makes it all more engaging. This also allows you to reach a broader range of target markets.",
      image: "/assets/img/teammember.gif ",
    },
    {
      title: "Rails Application Maintenance",
      desc: "Outsource your Ruby on Rails development needs to our expert team, and you will be amazed by our excellent 24/7 maintenance and support services that will keep your website up and running at all times. Whether you want to upgrade the system, add new features, or migrate the database, you are going to win top-notch ROR support and maintenance.",
      image: "/assets/img/customers.gif",
    },
    {
      title: "Code Audit",
      desc: "A code audit is imperative to update software and a business environment. We perform code audits and provide consulting for your existing code bases. If you want to build a powerful repository for your future business needs. We review the code and test the architecture and code quality of your software.",
      image: "/assets/img/customersupport.gif",
    },
    {
      title: "Modernization of Enterprises",
      desc: "An outdated technique can surpass your company's growth. It may necessitate exorbitant maintenance costs. InfoKoders technologies assists you in developing a lean, robust, and future-ready IT asset portfolio that enhances the flexibility of existing applications while lowering IT operating costs.",
      image: "/assets/img/global.gif",
    },
    {
      title: "Our Systematic Ruby on Rails Development process(Practice)",
      desc: "Organizing and following the systematic process for your Ruby on Rails development project is more important than anything else. Examine the process that our Ruby on Rails developers follow when they get assigned to your project.",
      image: "/assets/img/ondemand.gif",
    },
    {
      title: "Gathering Requirements",
      desc: "Clearly defining the problem and challenging areas will assist you in solving them quickly. Our sales team starts the RoR app development process by communicating with you to understand your questions and your specific business requirements, goals, competition, target group, and so on that you want to achieve with your Ruby on Rails app development.",
      image: "/assets/img/gathering.gif",
    },
    {
      title: "Creating a Framework",
      desc: "Before our technical development team begins to design or develop your RoR app, we start. We have a separate business analyst team that creates wireframes for all mobile screens. The wireframe describes a complete user flow of your app's functionalities and features in order to create the best product according to your company's vision.",
      image: "/assets/img/dataprotections.gif",
    },
    {
      title: "App UI Design",
      desc: "Following the creation of wireframes, our mobile app designing team, which has years of experience in app design serves your users with beautiful apps. To provide your users an exceptional experience, our team will design (user interfaces) your app with perfect graphics, color schemes, and iconography. Our team will then begin with developing your RoR software app to make it simple and appealing.",
      image: "/assets/img/file.gif",
    },
    {
      title: "Mobile app development or software development",
      desc: "When our professional UI/UX designers have finished designing your app for the end-user, our development process begins. We develop your RoR application with the appropriate features and functionalities using the latest RoR practices and technologies to solve the specific problems and issues your users face in the current infrastructure",
      image: "/assets/img/mobileapp.gif",
    },
    {
      title: "Quality Assurance",
      desc: "Even a single bug in the software will irritate your customers. As a result, we have a dedicated team of quality analysts who conduct mobile app testing to ensure that all aspects of functionality and features are met. We also ensure that the application runs smoothly across all platforms. If our analysts discover any flaws, they remove them and retest the software until it is completely bug-free.",
      image: "/assets/img/quality.gif",
    },
    {
      title: "Deployment Product",
      desc: "This is the end process of the app development process. We will deploy and launch your application on your server, making it available for download by your end-users. We take care of the entire implementation phase with the utmost security here. Our technical team also offers 3-months of support even after the product is delivered to ensure that your business runs smoothly.",
      image: "/assets/img/deploypro.gif",
    },
    {
      title: "AI-Powered RoR Solutions",
      desc: "Integrate AI and machine learning capabilities into your Ruby on Rails app to gain insights, automate processes, and enhance user experiences. From recommendation engines to predictive analytics, we empower your app with next-gen intelligence.",
      image: "/assets/img/reusable.gif",
    },
    {
      title: "Microservices Architecture",
      desc: "Break down your monolithic app into smaller, independent services. We design microservices-based RoR architectures that boost scalability, improve performance, and allow faster feature updates without downtime.",
      image: "/assets/img/reduction.gif",
    },
  ];
  const techStack = [
    {
      image: "/assets/img/mobileapp.gif",
      title: "Mobile",
      subtitle1: "Rails 6.0.0.rcl",
      subtitle2: "Ruby 2.6.3",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Database",
      subtitle1: "PostgresqlMysql",
      subtitle2: "MongoDBDynamoDB",
    },
    {
      image: "/assets/img/reduction.gif",
      title: "Authentication/Authorization",
      subtitle1: "Devise",
      subtitle2: "Oauth",
    },
    {
      image: "/assets/img/payment.gif",
      title: "Payment Gateways",
      subtitle1: "Stripe",
      subtitle2: "Braintree",
      subtitle3: "Paypal",
    },
  ];
  const partnerValue = [
    {
      image: "/assets/img/teammember.gif",
      title: "Experienced and results-oriented ROR developers",
      desc: "Our developers have built numerous apps over this framework, each with its own set of features and functionalities.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Flexible Hiring Models",
      desc: "We provide a variety of flexible models for hiring professional and dedicated ROR developers on your project basis which can be hourly, daily, weekly, or monthly basis.",
    },
    {
      image: "/assets/img/customers.gif",
      title: "One-Point-Of-Contact",
      desc: "If you have any project queries, you will be given the contact information for a point-of-contact person.",
    },
    {
      image: "/assets/img/dataprotections.gif",
      title: "Project confidentiality and privacy",
      desc: "We guarantee that any licenses or patterns we use for your project will not be reused for another project.",
    },
    {
      image: "/assets/img/quality.gif",
      title: "Work of High Quality",
      desc: "We have been committed to quality work for many years, which is why we use best practices and deliver excellent apps to you.",
    },
    {
      image: "/assets/img/reduction.gif",
      title: "Technical Support",
      desc: "We will not abandon you even after the app has been delivered. Get three months of free technical support and we will gladly assist you!",
    },
  ];
  const framework = [
    {
      title: "Open-source",
      desc: "Open-source frameworks are more easily accessible. As a result, Ruby on Rails is easier to read and can be used to create dynamic software faster, which is advantageous for any startup or a new entrant in the market.",
    },
    {
      title: "Universal and adaptable",
      desc: "With Ruby on Rails, flexibility is granted for a highly customizable application or web development. As an enterprise, your business requirements may vary, and RoR is the right fit for meeting them all.",
    },
    {
      title: "Helpful community",
      desc: "The Ruby on Rails community is large and extremely helpful in dealing with all of the issues and problems that arise at the stack. This speeds up the app development process without requiring any additional funds or time.",
    },
    {
      title: "Simple",
      desc: "In the present day’s simplicity and minimalism went a long way. So, with no complications, our expert developers make it easier for various enterprises to complete the RoR application development process smoothly and quickly.",
    },
    {
      title: "Cost-Efficient",
      desc: "Even with adequate funding and investors, it becomes problematic to keep costs under control all of the time. That is not in the case of RoR, as it provides a quick and easy development process, allowing startups to save more money.",
    },
    {
      title: "Quick",
      desc: "The competition becomes more difficult as a company grows in size. To stay forefront and competitive, you need to launch products or software at breakneck speed. RoR enables you to develop quickly and compete with a large number of companies.",
    },
    {
      title: "Universal and adaptable",
      desc: "Ruby on Rails is a highly adaptable framework that can be used to create almost anything. This makes it simple for a startup or even a large corporation to develop and launch small-scale applications at first.",
    },
    {
      title: "Stable and mature",
      desc: "Most apps and websites undergo user retention issues across industries. One thing you can do to avoid losing users is to make sure your app is built on a secure framework like RoR. (Ruby on Rails).",
    },
    {
      title: "Simple",
      desc: "It's not overly complicated or perplexing. Whatever your vision to create will be a lightweight software app, resulting in a smooth and quick user experience. Simple code is preferable over heavy or complicated code.",
    },
    {
      title: "Automation Testing",
      desc: "Testing is an essential phase of enterprise app and web development. The RoR framework places a strong emphasis on testing mechanisms that will ensure that the enterprise does not experience testing errors.",
    },
  ];
  const contactTitle = "Let's Build A RoR Masterpiece And Grow Your Clientele!";
  const contactSubtitle =
    "Share your requirements with us, and we'll analyze them for you.";
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundRor}>
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
          Ruby on Rails
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
          Get scalable, secure, and well-supported features web applications by
          embracing exclusive Ruby on rails development services from InfoKoders
          technologies.
        </Typography>
      </Grid>
      {/* Best Ruby on Rails Development Company */}
      <Grid container spacing={2} className={styles.rubycontainer}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.rubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            {" "}
            Best{" "}
            <span style={{ color: "#650909" }}>
              {" "}
              Ruby on Rails Development{" "}
            </span>
            Company
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Get scalable, secure, and well-supported features web applications
            by embracing exclusive Ruby on rails development services from
            InfoKoders technologies. As one of the top specialists in
            <b> ROR development services,</b> we have developed and delivered
            world-class solutions that have outshined our clients and their
            end-customers expectations.
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
              marginBottom: "1rem",
              marginTop: "1rem",
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={RorBanner} alt="About Us" width={400} height={300} />
        </Grid>
      </Grid>
      {/* Our ROR development solutions */}
      <Grid container className={styles.uspContainer}>
        <Grid className={styles.coreQuote}>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "20px" },
              fontFamily: "NovemberPro",
            }}
          >
            Our ROR development solutions
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
            Where Ruby on Rails is applied? This is a question we get asked far
            too frequently. Here is the following Ruby on Rails web development
            services we offer:
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
      {/* {/ obstacles InfoKoders /} */}
      <Grid container spacing={3} className={styles.obstaclesContainer}>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          className={styles.obstaclesLeft}
        >
          <Typography
            className={styles.obstaclesLeftTitle}
            sx={{
              fontSize: { lg: "25px", md: "22x", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Why elect <span className={styles.OurUsp}>Ruby on Rails</span> over
            other Cross-platform Frameworks?
          </Typography>
          <Typography
            className={styles.obstaclesLeftDesc}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Every technology and framework has its own advantages and
            disadvantages. The following are some advantages of using Ruby on
            Rails over other cross-platform frameworks:
          </Typography>
          <Button
            className={styles.obstaclesLeftbtn}
            sx={{
              fontSize: { lg: "16px", md: "14px", sm: "16px", xs: "14px" },
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
            Talk to Our ROR Experts
          </Button>
          {open && <ContactUsModal open={open} setOpen={setOpen} />}
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          className={styles.obstaclesRight}
        >
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            Ruby on Rails is well-known for its ability to help you create
            scalable applications.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} /> With our
            development, releasing the API is a breeze.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            RoR is an excellent choice because it allows you to create a
            functional mobile, web, or desktop app for your company.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            When you don't have much time, it saves time.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            It is used by many big giant companies, including Shopify, Hulu,
            Twitch, and others. The RoR web development framework is beneficial
            to them.
          </Typography>
        </Grid>
      </Grid>
      {/* RoR expert */}
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
            Are you looking for an RoR expert to develop a user-oriented app?
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
            We offer a complimentary consultation. Reflect us on your RoR
            mobility app idea, and our tech team will analyze your business
            process and recommend the best solution.
          </Typography>
        </Grid>
        {/* <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          className={styles.stackGrid}
        >
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Technology Stack
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
            Our RoR experts are well-versed in these technologies.
          </Typography>
        </Grid> */}
        {/* ror expert */}
        {/* <Grid
          container
          spacing={2}
          className={styles.techContainer}
          sx={{ justifyContent: "center" }}
        >
          {techStack?.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
              className={styles.techBox}
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
                  wordBreak: "break-word",
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
                {item?.subtitle1}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "NovemberPro-Reg",
                  fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "16px" },
                  color: "#333333",
                }}
              >
                {item?.subtitle2}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "NovemberPro-Reg",
                  fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "16px" },
                  color: "#333333",
                }}
              >
                {item?.subtitle3}
              </Typography>
            </Grid>
          ))}
        </Grid> */}
      </Grid>
      {/* Ruby on Rails partner? */}
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
              Why InfoKoders technologies to be your right
              <span className={styles.OurUsp}> Ruby on Rails </span> partner?
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
              As a client-oriented <b>Ruby on Rails Development Company,</b> we
              hold highly skilled and expert Ruby on Rails developers who use
              the best gems and Rails modules to help you scale your business.
              We can assist you in maximizing all of the benefits of Ruby on
              Rails and assuring you to get advanced quality apps for better and
              smoother operation.
            </Typography>
          </Grid>
          <Grid container spacing={4} className={styles.coresubcont}>
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
      {/* right framework for Startups */}
      <Grid container className={styles.frameworkContainer}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            How Ruby on Rails is the right framework for Startups and
            Enterprises?
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          className={styles.frameworkGrid}
        >
          <Image src={upstart} alt="startup" height={80} width={60} />
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Start-ups
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          className={styles.frameworkGrid}
        >
          <Image src={enter} alt="enterprise" height={80} width={60} />
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Enterprises
          </Typography>
        </Grid>
        <Grid spacing={3} container className={styles.frameworkCard}>
          {framework.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              key={index}
              className={styles.frameworkCardcontent}
            >
              <Typography
                className={styles.frameworktitle}
                sx={{
                  fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
                  fontFamily: "NovemberPro",
                }}
              >
                {item?.title}
              </Typography>
              <Typography
                className={styles.frameworkdesc}
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
      <Contact
        title={contactTitle}
        subTitle={contactSubtitle}
        isFreelance={true}
      />
      <Footer />
    </Box>
  );
};
export default RorDevelopment;
