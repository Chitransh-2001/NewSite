"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button, CardMedia } from "@mui/material";
import styles from "../../styles/Services.module.css";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import aweExper from "../../../public/assets/img/awsExper.png";
import Footer from "../footer/Footer";
import Contact from "../casestudy/clientAchivement/Contact";
import ContactUsModal from "../contact/ContactUsModal";
const AWSDevelopment = () => {
  const [open, setOpen] = useState(false);
  const services = [
    {
      image: "/assets/img/gathering.gif",
      title: "Strategy",
      desc: "Because AWS is the world's best comprehensive and widely adopted cloud platform, it unleashes both significant opportunities and challenges. With strategic cloud-native application design, our experienced, certified AWS developers enable you to fully realize the power and commit you to excellent Amazon's cloud computing services. You can rely on us to create innovative infrastructure for projects ranging from a single application to enterprise SaaS that utilizes multiple AWS services.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "AWS App development",
      desc: "You can't just hire an AWS developer and wish for the best in building and deploying native applications through the cloud. Our AWS development team is proficient in designing and scaling flexible architecture to create robust, agile, secure applications from the ground up or to migrate legacy applications to the cloud.",
    },
    {
      image: "/assets/img/DataBackup.gif",
      title: "Cloud Security and Risk Management",
      desc: "AWS is popular for its amazing core infrastructure, which is introduced to provide stringent security for high-profile clients such as the military and global banks. Our AWS specialists are skilled in a wide range of AWS security tools and have extensive experience developing custom cloud security plans. For your healthier business — and peace of mind — we provide custom AWS security enterprise integration solutions, AWS security audits, risk and identity management, and AWS technical security architecture consulting.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Monitoring, Management, and support",
      desc: "Utilizing the Amazon Web Services platform to provide an attractive digital experience while optimizing efficiencies in time, resources, and budget is an enlightening opportunity. Allow our AWS Managed Services team to handle the ongoing details of configuring, managing, and troubleshooting and confidently free up your team to focus on other areas of business growth. AWS efficiency audits, SLA management, and comprehensive monitoring of all aspects of your AWS cloud-based business are all part of our full-service offering.",
    },
    {
      image: "/assets/img/socialnoetwork.gif",
      title: "Implementation and Migration",
      desc: "Migrating your business to the AWS platform is a worthy decision for your business — and even smarter is selecting a partner who can assure you with smooth migration and implementation process. Our passionate team of Amazon AWS development experts provides flawless transitions that enhance user experience and support business objectives such as enterprise cloud adoption and CloudOps by leveraging AWS' technology stack for reliable, secure solutions.",
    },
    {
      image:"/assets/img/reusable.gif",
      title:"Cloud Architecture Design",
      desc:"We build resilient, scalable, and high-performance cloud architectures tailored to your business needs. From microservices to serverless solutions, we ensure optimal resource utilization and cost-efficiency on AWS. Our experts design fault-tolerant systems with auto-scaling capabilities to handle unpredictable workloads seamlessly. We also ensure disaster recovery and high availability, keeping your operations running smoothly around the clock."
    }
  ];
  const Technologies = [
    {
      image: "/assets/img/awstechnologiesfirst.png",
      title: "Amazon Elastic Container Service",
    },
    {
      image: "/assets/img/awstechnologiessecond.png",
      title: "AWS Elastic Beanstalk",
    },
    {
      image: "/assets/img/awstechnologiesthree.png",
      title: "Amazon Simple Email Service (Amazon SES)",
    },
    {
      image: "/assets/img/awstechnologiesfour.png",
      title: "Amazon Redshift",
    },
    {
      image: "/assets/img/awstechnologiesfive.png",
      title: "Elastic Load Balancing",
    },
    {
      image: "/assets/img/awstechnologies6.png",
      title: "AWS CodePipelne",
    },
    {
      image: "/assets/img/awstechnologies7.png",
      title: "AWS DMS",
    },
    {
      image: "/assets/img/awstechnologies8.png",
      title: "Amazon Connect",
    },
    {
      image: "/assets/img/awstechnologies9.png",
      title: "Amazon Aurora",
    },
    {
      image: "/assets/img/awstechnologies1.png",
      title: "Amazon Route 53",
    },
    {
      image: "/assets/img/awstechnologies11.png",
      title: "AWS Communication Tools",
    },
    {
      image: "/assets/img/awstechnologies12.png",
      title: "AWS Fargate",
    },
    {
      image: "/assets/img/awstechnologies13.png",
      title: "Amazon CloudWatch",
    },
    {
      image: "/assets/img/awstechnologies14.png",
      title: "Amazon DynamoDB",
    },
    {
      image: "/assets/img/awstechnologies9.png",
      title:"Amazon RDS"
    }
  ];
  const Reliable = [
    {
      image: "/assets/img/payment.gif",
      title: "Highly cost-effective",
      desc: "With AWS, you need to pay for the compute power, storage, and other resources that you use, with no long-term contracts or up-front commitments.",
    },
    {
      image: "/assets/img/Proficiency.gif",
      title: "Reliability",
      desc: "AWS provides the benefit of a scalable, reliable, and secure global computing infrastructure, serving as Amazon's virtual backbone.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Simple to Use",
      desc: "AWS enables application providers, ISVs, and vendors to host applications quickly and securely.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Secure",
      desc: "AWS employs a start-to-end approach to infrastructure security and hardening, including physical, operational, and software safeguards.",
    },
  ];
  const solutions = [
    {
      image: "/assets/img/teammember.gif",
      title: "Customer Satisfaction",
      desc: "We go above and beyond to ensure that our customers are satisfied with our development solutions. We assign you an account manager and a project manager to ensure that all aspects of your engagement with us run smoothly.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "VPC configuration",
      desc: "We configure the VPC (Virtual Private Cloud) platform from Amazon Web Services that allows you to fully manage your own networking resources.",
    },
    {
      image: "/assets/img/customers.gif",
      title: "Vast Experience ",
      desc: "We have extensive experience in integrating existing Internet technologies and practices to the new wave of infinitely scalable Amazon solutions.",
    },
    {
      image: "/assets/img/economial.gif",
      title: "Economical pricing",
      desc: "Our highly cost-effective and dependable services ensure that you get the most bang for your buck.",
    },
    {
      image: "/assets/img/ondemand.gif",
      title: "24/7 tech support",
      desc: "Our communication channels are open 24/7 and connect you with the right team of experts to reduce complexity and increase project productivity.",
    },
    {
      image: "/assets/img/reduction.gif",
      title: "Database configuration",
      desc: "We can set up SQL and No-SQL databases for optimal performance, durability, and availability.",
    },
  ];
  const contactTitle =
    "Are you ready to Renovate your business with AWS powered solution?";
  const contactSubtitle =
    "Consult our AWS experts and embrace groundbreaking cloud computing services provided by Amazon.";
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundAWS}>
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
          AWS Development
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
          InfoKoders technologies is admired among clients as a reliable partner
          in AWS development, management, optimization, automation, and
          deployment.
        </Typography>
      </Grid>
      {/* AWS Development Company */}
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
            <span className={styles.OurUsp}>AWS Development</span> Company
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              fontWeight: "bold",
            }}
          >
            Reinforce your Business with our lucrative AWS development services
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Securely host your business on Amazon web services (AWS), a powerful
            cloud computing platform offering impeccable services for storage,
            security, networking, remote computing, and more. InfoKoders
            technologies is admired among clients as a reliable partner in AWS
            development, management, optimization, automation, and deployment.
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
            Get Top-level AWS services{" "}
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
      {/* our aws services */}
      <Grid container className={styles.servicesContainer}>
        <Grid>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              paddingBottom: "20px",
            }}
          >
            Our AWS Development Services
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
      {/* Technologies */}
      <Grid container className={styles.technologyContainer}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Typography
            className={styles.techTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              textAlign: "center",
            }}
          >
            Technologies
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          {Technologies?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
              key={index}
              className={styles.technologiesBox}
            >
              <Image
                src={item?.image}
                alt="not image found"
                width={120}
                height={100}
              />
              <Typography
                className={styles.techcardtitle}
                sx={{
                  fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
                  fontFamily: "NovemberPro",
                }}
              >
                {item?.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Reliable & Scalable AWS Cloud Computing platform */}
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
            Reliable & Scalable AWS Cloud Computing platform
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
            AWS is formed by diverse cloud computing products and services.
            Amazon's extremely profitable division offers servers, storage,
            networking, remote computing, email, mobile development, and
            security. When a software development firm migrates its services to
            the cloud, Amazon's AWS services support in setting up the cloud
            environment with a combo of the platform as a service (PaaS),
            infrastructure as a service (IaaS), and packaged software as a
            service (SaaS) offerings.
          </Typography>
          <Typography
            className={styles.coreDescriptionUsp}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginTop: "20px",
            }}
          >
            The platform offers a landing zone, a tried-and-true business
            operating model, day-to-day infrastructure management, and ongoing
            cost reduction.
          </Typography>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              marginTop: "10px",
            }}
          >
            Advantages of AWS
          </Typography>
        </Grid>
        {/* node card */}
        <Grid
          container
          spacing={2}
          className={styles.techContainer}
          sx={{ justifyContent: "center", marginTop: "20px" }}
        >
          {Reliable?.map((item, index) => (
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
              <Image src={item?.image} alt="reliable" height={80} width={80} />
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
      {/* Why Choose InfoKoders technologies for AWS development? */}
      <Grid>
        <Grid className={styles.client}>
          <Grid className={styles.coreQuote}>
            <Typography
              className={styles.coreTitleUsppartner}
              sx={{
                fontSize: { lg: "25px", md: "22px ", sm: "25px", xs: "22px" },
                fontFamily: "NovemberPro",
              }}
            >
              {" "}
              Why Choose InfoKoders technologies for
              <span className={styles.OurUsp}> AWS development? </span>
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
              We know every client's desires for premium and exclusive
              development solutions and that’s where InfoKoders technologies
              praised for offering trustworthy AWS development solutions takes
              the spotlight. With whatever AWS requirements you come with, our
              specialized developers serve you with high tech and quality rich
              solutions that help you to stand alone from your competitors.
            </Typography>
          </Grid>
          <Grid container spacing={4} className={styles.coresubcont}>
            {solutions?.map((item, index) => (
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
                    marginBottom: "10px",
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
      <Contact
        title={contactTitle}
        subTitle={contactSubtitle}
        isFreelance={true}
      />
      <Footer />
    </Box>
  );
};
export default AWSDevelopment;
