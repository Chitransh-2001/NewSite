"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/Footer.module.css";
import Grid from "@mui/material/Grid2";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../../public/assets/img/logo.png";
import Image from "next/image";
const Footer = () => {
  const goTo = [
    // { href: "/", label: "Home" },
    { href: "/blog", label: "Blogs" },
    // { href: "/studies", label: "Case Studies" },
    { href: "/about#mission", label: "Mission & Vision" },
    { href: "/#client", label: "Client Testimonial" },
  ];
  const services = [
    { href: "/services/ror", label: "Ruby on Rails" },
    { href: "/services/reactjs", label: "React JS" },
    { href: "/services/nodejs", label: "Node JS" },
    { href: "/services/angularjs", label: "Angular JS" },
    { href: "/services/fullstackdevelopment", label: "End to End Full Stack Development" },
    { href: "/services/uiuxdevelopment", label: "UI/UX" },
    { href: "/services/aws", label: "AWS" },
    { href: "/services/heroku", label: "Heroku" },
  ];
  return (
    <section>
      <Box
        className={styles.footerMain}
        sx={{
          backgroundColor: "#333",
          color: "#fff",
          fontFamily: "circular",
        }}
      >
        <Grid
          container
          sx={{ justifyContent: "space-between", padding: "30px" }}
          spacing={4}
        >
          {/* Go To  */}
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} >
            <Typography
              sx={{ marginLeft: "8px" }}
              variant="h6"
              className={styles.subHead}
            >
             Quick Links
            </Typography>
            <ul className={styles.ui}>
              {goTo.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* Logo Section */}
              <li className="pt-7">
                <Link href="/" passHref>
                  <Image src={logo} alt="logo" className={styles.logo} />
                </Link>
              </li>
              {/* Footer Text */}
              <li className="pt-3">
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "13px",
                    fontFamily: "NovemberPro-Reg",
                    color: "#BFC5C5",
                  }}
                >
                  © 2025 InfoKoders Technologies. All Rights Reserved.
                </Typography>
              </li>
            </ul>
          </Grid>
          {/* Our Services  */}
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
            <Typography variant="h6" className={styles.subHead}>
              Our Services
            </Typography>
            <ul className={styles.ui}>
              {services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span>
                      <ChevronRightIcon />
                    </span>{" "}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          {/* Enquires  */}
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
            <Typography variant="h6" className={styles.subHead}>
              Business Enquires
            </Typography>
            <ul className={styles.ui}>
              <li style={{ marginLeft: "10px " }}>
                <Link href="mailto:info@infokoders.com">
                  <span>
                    <EmailIcon sx={{ fontSize: "large" }} />
                  </span>{" "}
                  info@infokoders.com
                </Link>
              </li>
              <li style={{ marginLeft: "10px " }} className="pt-2">
                <Link href="tel:+91%2007314105427">
                  <span>
                    <LocalPhoneIcon sx={{ fontSize: "large" }} />
                  </span>{" "}
                  +91 - 0731 - 4105427
                </Link>
              </li>
            </ul>
            <Typography
              sx={{ marginTop: "20px" }}
              variant="h6"
              className={styles.subHead}
            >
              HR Enquires
            </Typography>
            <ul className={styles.ui}>
              <li style={{ marginLeft: "10px " }}>
                <Link href="mailto:hr@infokoders.com">
                  <span>
                    <EmailIcon sx={{ fontSize: "large" }} />
                  </span>{" "}
                  hr@infokoders.com
                </Link>
              </li>
              <li style={{ marginLeft: "10px " }} className="pt-2">
                <Link href="tel:+91%2007314105427">
                  <span>
                    <LocalPhoneIcon sx={{ fontSize: "large" }} />
                  </span>{" "}
                  +91 - 0731 - 4105427
                </Link>
              </li>
              <li style={{ marginLeft: "10px " }} className="pt-4">
                <Link href="https://in.linkedin.com/company/infokoders-technologies">
                  <LinkedInIcon sx={{ width: "30px", height: "30px" }} />
                </Link>
                <Link href="https://www.facebook.com/infokoders">
                  <FacebookIcon sx={{ width: "30px", height: "30px" }} />
                </Link>
                {/* <Link href="https://www.facebook.com/infokoders">
                  <TwitterIcon sx={{ width: "30px", height: "30px" }} />
                </Link>
                <Link href="">
                  <InstagramIcon sx={{ width: "30px", height: "30px" }} />
                </Link> */}
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};
export default Footer;
