"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import fullstack from "../../../public/assets/img/fullstack.png";
import Footer from "../footer/Footer";
import ContactUsModal from "../contact/ContactUsModal";
import Contact from "../casestudy/clientAchivement/Contact";
const FullStackDevelopment = () => {
  const [open, setOpen] = useState(false);
  const visionaryCard = [
    {
      image: "/assets/img/global.gif",
      title: "Full stack web hosting",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Full stack CMS development",
    },
    {
      image: "/assets/img/eccomerce.gif",
      title: "Full stack E-commerce development",
    },
    {
      image: "/assets/img/railapp.gif",
      title: "Full stack integration",
    },
    {
      image: "/assets/img/customers.gif",
      title: "Full stack Migration and porting",
    },
    {
      image: "/assets/img/api.gif",
      title: "API development",
    },
  ];
  const fullstackdata = [
    {
      image:"/assets/img/ror-min.png",
      title:"Ruby on Rails",
      des:"Ruby on Rails is a powerful backend framework that accelerates development with clean, maintainable code. It’s ideal for building scalable, data-driven web applications, enabling faster MVP launches and feature-rich, production-ready solutions with ease."
    },
    {
      image: "/assets/img/react-min.png",
      title: "React.js",
      des: "React.js, a leading frontend JavaScript library, delivers dynamic, high-performance user interfaces. Its component-based architecture ensures fast rendering, reusable code, and seamless user experiences across web and mobile applications.",
    },
    {
      image: "/assets/img/node-min.png",
      title: "Node.js",
      des: "Node.js is possibly the best platform for rapidly creating a network of scalable applications. It is designed to be a workhorse for developers due to its cross-browser environment. Our knowledgeable Node.js developers help you to stay on top of competitors by unleashing you with mind-blowing web development solutions.",
    },
    {
      image: "/assets/img/angularjs.png",
      title: "Angular js",
      des: "AngularJS is popular due to the versatility it provides for all types of web app development requirements. With AngularJS, we help you to create flexible and easy-to-use a browser, mobile, and web-based apps with wonderful features and functionalities.",
    },
    {
      image: "/assets/img/phpfull.png",
      title: "PHP",
      des: "Standout exclusive in your competitive business space by accessing our exceptional Php development services. PHP is used to create dynamic web pages due to its simplified programming. We precisely use this server-side scripting language for web development that creates robust back-end systems.",
    },
    {
      image: "/assets/img/javafull.png",
      title: "Java",
      des: "Java can run on a single server as well as multiple servers. It is excellent for all-around programming and has significant advantages when combined with a full stack development project. Ship excellent java based apps by obtaining our marvelous full-stack app development solutions",
    },
  ];
  const leveraging = [
    {
      image: "/assets/img/railapp.gif",
      title: "Economic development cycle",
      desc: "Full-stack development is embedded with rich features and can be used to finish large projects with just a few resources.",
    },
    {
      image: "/assets/img/customers.gif",
      title: "Improved productivity",
      desc: "Scalability, combined with satisfying outputs, makes full-stack development extremely productive.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Top-notch development process",
      desc: "As full-stack development is made with many handy components, project development is much faster.",
    },
    {
      image: "/assets/img/quality.gif",
      title: "Highly scalable",
      desc: "We are notable for providing durable full stack development solutions that are capable of handling heavy application loads.",
    },
    {
      image: "/assets/img/dataprotections.gif",
      title: "Extremely secure",
      desc: "This technology is based on secure architecture, making it robust and reliable.",
    },
    {
      image:"/assets/img/gathering.gif",
      title:"Enhanced Performance",
      desc:"By optimizing both frontend and backend components, full-stack development delivers lightning-fast performance, ensuring a seamless user experience."
    }
  ];
  const industry = [
    {
      image: "/assets/img/healthcare.gif",
      title: "Healthcare",
      desc: "We create custom full-stack applications to help the healthcare industry simplify and accelerate various processes that improve medical care.",
    },
    {
      image: "/assets/img/eccomerce.gif",
      title: "Retail and Commerce",
      desc: "Our full-stack web developers help your digital customers have a better shopping experience by creating user-friendly, responsive web pages, chatbots, a secure and simple checkout process, and more!",
    },
    {
      image: "/assets/img/realestate.gif",
      title: "Banking and Finance",
      desc: "With the real-time efficiency of our full-stack web developers, you can improve and accelerate your banking and finance efforts. Hire us and create first-rate, enterprise-grade software solutions to accomplish maximum efficiency.",
    },
    {
      image: "/assets/img/logisticsanddistribution.gif",
      title: "Travel and Tourism",
      desc: "We create highly customized travel apps with the integration of augmented reality navigation, e-ticketing systems, virtual tours, kiosks, and payment gateways.",
    },
    {
      image: "/assets/img/socialnoetwork.gif",
      title: "Media and Entertainment",
      desc: "You can take your digital media and entertainment business to a whole new level with our AI-integrated applications.",
    },
    {
      image: "/assets/img/deploypro.gif",
      title: "Education and E-learning",
      desc: "With our 3D book-reading solutions, smart learning, knowledge apps, and more, you can now make the most of e-learning!",
    },
  ];
  const hire = [
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Agile Methodology",
      desc: "App development takes time, but by using agile development methodologies, our full-stack web developers make it look easy.",
    },
    {
      image: "/assets/img/barchart.gif",
      title: "Supreme quality",
      desc: "When you associate with us, we ensure you with the highest quality results that too at a budget-friendly cost. With dexterity, our skilled full-stack developers handle client issues and queries.",
    },
    {
      image: "/assets/img/clock.gif",
      title: "On-time project delivery",
      desc: "The process of creating an app can be excruciatingly tedious. We as an experienced company have gone through all the obstacles with such confidence we ensure you with timely delivery of your full-stack development project",
    },
    {
      image: "/assets/img/customers.gif",
      title: "Client Satisfaction",
      desc: "We have the expertise to cater to every client requirement after delivering successful projects to hundreds of clients across diverse industries.",
    },
    {
      image: "/assets/img/deploypro.gif",
      title: "Customized software solutions",
      desc: "Our product designers and full stack developers passionately provide custom web and mobile app development solutions. We dedicate our complete efforts to transforming and bringing your app vision to life.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "Continuing support and Maintenance",
      desc: "Our communication does not end once the project is completed as we believe in maintaining long-term relationships with our cherished clients. We offer ongoing support and maintenance to our clients as needed.",
    },
  ];
  const databases = [
    {
      image: "/assets/img/postgreysqldata.png",
      title: "PostgreSQL",
      desc: "PostgreSQL is a sophisticated database system that is well-known for its extensibility and compliance. InfoKoders technologies developers primly consider this versatile framework because of its capability to handle both single- and multi-user systems. Furthermore, a large number of users can access the system at the same time.",
    },
    {
      image: "/assets/img/mongodb.png",
      title: "MongoDB",
      desc: "MongoDB is a cross-platform database that is well-suited for cloud data distribution. We perfectly specialized to use the NoSQL-based, multi-purpose, document-oriented framework that is ideal for full-stack development.",
    },
    {
      image: "/assets/img/mysqldata.png",
      title: "MySQL",
      desc: "Popular relational database, MySQL, developed by Oracle that is popular among developers due to its fast speed and small size. Our developers specifically use MySQL for web development in Drupal, WordPress, and Joomla!.",
    },
    {
      image:"/assets/img/redisDatabase.png",
      title:"Redis",
      desc:"Redis is an open-source, in-memory data structure store, widely known for its lightning-fast performance and versatility. Our developers leverage Redis to build high-performance applications, utilizing its support for caching, real-time analytics, session management, and message brokering — ensuring low-latency and optimized data handling."
    },
    {
      image: "/assets/img/nosqldata.png",
      title: "NoSQL Development",
      desc: "NoSQL is a nonrelational database management system mainly utilized by our developers for its massive storage capacity. It is highly scalable and can handle large amounts of unstructured, structured, and semi-structured data.",
    },
   
  
  ];
  const contactTitle =
    "Looking to build striking web and mobile apps with full-stack technologies?";
  const contactSubtitle =
    "Rightly associate with InfoKoders technologies and achieve customer winning full stack development solutions";
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundFullStack}>
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
          End to End Full Stack Development
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
                  InfoKoders technologies is been esteemed as a top full stack development company for delivering a comprehensive gamut of cutting edge front-end and back-end development solutions.
                </Typography>
      </Grid>
      {/* Scaling up the bussiness */}
      <Grid container spacing={2} className={styles.rubycontainer}>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={fullstack} alt="fullstack" width={500} height={300} />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.rubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            {" "}
            Scaling up the businesses with our full Stack Development Services
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Harness the end-end possibilities of our full-stack development
            services and achieve quality rich, unbeatable mobile or web apps
            that meet and greets your business goals. InfoKoders technologies is
            been esteemed as a <b> top full stack development company</b> for
            delivering a comprehensive gamut of cutting edge front-end and
            back-end development solutions.
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
            Get in touch
          </Button>
          {open && <ContactUsModal open={open} setOpen={setOpen} />}
        </Grid>
      </Grid>
      {/* visionary Full stack development */}
      <Grid container spacing={2} className={styles.visionaryContainer}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Typography
            className={styles.visionaryTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              textAlign: "center",
            }}
          >
            Your visionary Full stack development Service Company that meets
            your development needs
          </Typography>
          <Typography
            className={styles.visionaryDesc}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              textAlign: "center",
              fontFamily: "NovemberPro-Reg",
            }}
          >
            {" "}
            Every company wants to accelerate its growth, and with our
            full-stack development services, you can accomplish that. Our
            full-stack developers have the extensive knowledge and experience
            essential to create full-fledged applications for your business.
          </Typography>
          <Typography
            className={styles.visionaryDesc}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              textAlign: "center",
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Being a <b>best full-stack development service provider</b> we
            specialises in a wide range of technologies, from front end
            prototyping to a full set of back end services
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          {visionaryCard?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              className={styles.visionaryRight}
              key={index}
            >
              <Image
                src={item?.image}
                alt="image not found"
                width={60}
                height={80}
              />
              <Typography
                className={styles.visionaryTitle}
                sx={{
                  fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
                  fontFamily: "NovemberPro",
                  marginTop: "10px",
                }}
              >
                {item?.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Our Full stack development expertise */}
      <Grid container className={styles.driveContent}>
        <Grid sx={{ textAlign: "center", padding: "0 10%" }}>
          <Typography
            className={styles.visionaryTitle}
            sx={{
              fontSize: {
                lg: "25px",
                md: "22px",
                sm: "25px",
                xs: "22px",
              },
              fontFamily: "NovemberPro",
            }}
          >
            Our Full stack development expertise
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "18px",
                md: "16px",
                sm: "18px",
                xs: "16px",
              },
              fontFamily: "NovemberPro-Reg",
            }}
            className={styles.visionaryDesc}
          >
            We have a zealous team of software developers, database engineers,
            front-end software engineers, back-end developers, and operating
            system specialists holding up a commitment to offering world-class
            web development solutions. From start-ups to big giants, we serve
            every size of business with satisfying software development
            outsourcing services and allowing clients to hire full stack
            developers with proven track records in technologies and tools such
            as PHP, MEAN Stack, ReactJS, Angular.JS, Node.JS, Ruby on Rails,
            Vue.JS, and others.
          </Typography>
        </Grid>
        <Grid container className={styles.cardContainer} spacing={5}>
          {fullstackdata?.map((item, index) => (
            <Grid
              className={styles.cardClass}
              key={index}
              size={{ xs: 12, lg: 4, md: 6, sm: 12 }}
            >
              <Card
                sx={{
                  height: "100%",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                  borderRadius: "18px",
                  border: "1px solid transparent ",
                  transition: "border 0.3s ease",
                  paddingBottom: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // padding: "20px",
                  }}
                >
                  <CardMedia
                    className={styles.cardImage}
                    sx={{
                      width: "70%",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                    component="img"
                    height="70px"
                    image={item?.image}
                    alt="CardImage"
                  />
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    className={styles.visionaryTitle}
                    sx={{
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "20px",
                        xs: "20px",
                      },
                      fontFamily: "NovemberPro",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className={styles.visionaryDesc}
                    sx={{
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "16px",
                        xs: "16px",
                      },
                      fontFamily: "NovemberPro-Reg",
                    }}
                  >
                    {item.des}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* benefits of leveraging our full-stack development */}
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
              What are the benefits of leveraging our full-stack development
              services for your business?
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
              Our full-stack web developers are experts having an understanding
              of the use of various frameworks, tools, and programming languages
              needed for a successful full-stack development project. We create
              custom, aesthetically pleasing applications by incorporating
              cutting-edge technology.
            </Typography>
          </Grid>
          <Grid container spacing={4} className={styles.coresubcont}>
            {leveraging?.map((item, index) => (
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
      </Grid>
      {/* specialized full-stack development services */}
      <Grid container className={styles.uspContainer}>
        <Grid className={styles.coreQuote}>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Our Industry specialized full-stack development services
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
            Hire full-stack developers from InfoKoders technologies in order to
            achieve your business objectives in a variety of industries and
            business niches. We conduct a thorough assessment of all factors as
            full-stack development service providers to ensure the delivery of
            high-quality web development, as well as testing applications and
            products. Our full-stack development services have benefited the
            following industries:
          </Typography>
        </Grid>
        <Grid container spacing={4} className={styles.coresubcont}>
          {industry?.map((item, index) => (
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
                  marginTop: "10px",
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Why hire Full-stack web developers from InfoKoders Software? */}
      <Grid>
        <Grid
          className={styles.rubypartnerContainer}
          sx={{ backgroundColor: "#f3f5f5" }}
        >
          <Grid className={styles.coreQuote}>
            <Typography
              className={styles.coreTitleUsppartner}
              sx={{
                fontSize: { lg: "25px", md: "22px ", sm: "25px", xs: "22px" },
                fontFamily: "NovemberPro",
              }}
            >
              {" "}
              Why hire Full-stack web developers from InfoKoders Software?
            </Typography>
          </Grid>
          <Grid container spacing={4} className={styles.coresubcont}>
            {hire?.map((item, index) => (
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
      </Grid>
      {/* Our Database offering */}
      <Grid container className={styles.driveContent}>
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          sx={{ textAlign: "center" }}
        >
          <Typography
            className={styles.visionaryTitle}
            sx={{
              fontSize: {
                lg: "25px",
                md: "22px",
                sm: "25px",
                xs: "22px",
              },
              fontFamily: "NovemberPro",
            }}
          >
            Our Database offering
          </Typography>
        </Grid>
        <Grid container className={styles.cardDatabaseContainer} spacing={5}>
          {databases?.map((item, index) => (
            <Grid
              className={styles.cardClass}
              key={index}
              size={{ xs: 12, lg: 4, md: 6, sm: 12 }}
            >
              <Card
                sx={{
                  height: "100%",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                  borderRadius: "18px",
                  border: "1px solid transparent ",
                  transition: "border 0.3s ease",
                  paddingBottom: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // padding: "20px",
                  }}
                >
                  <CardMedia
                    className={styles.cardImage}
                    sx={{
                      width: "70%",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                    component="img"
                    height="70px"
                    image={item?.image}
                    alt="CardImage"
                  />
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    className={styles.visionaryTitle}
                    sx={{
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "20px",
                        xs: "20px",
                      },
                      fontFamily: "NovemberPro",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className={styles.visionaryDesc}
                    sx={{
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "16px",
                        xs: "16px",
                      },
                      fontFamily: "NovemberPro-Reg",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
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
export default FullStackDevelopment;
