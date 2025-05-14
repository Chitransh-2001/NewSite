import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import styles from "../../../styles/Services.module.css";
import Navbar from "../../navbar/Navbar";
import Grid from "@mui/material/Grid2";
import Footer from "../../footer/Footer";
const MaintenanceUpgradation = () => {
  const Benefits = [
    {
      image: "/assets/img/mobileapp.gif",
      title: "Essential Maintenance Services",
      desc: "We provide a comprehensive range of maintenance services to ensure your website stays up-to-date with security patches and optimal performance, reducing potential risks.",
    },
    {
      image: "/assets/img/DataBackup.gif",
      title: "Seamless Upgrades",
      desc: "Our experts carry out seamless upgrades to ensure your systems are using the latest technology without any disruption to your services or business cycle.",
    },
    {
      image: "/assets/img/reduction.gif",
      title: "Browser & Security Updates",
      desc: "We ensure your website is compatible with all the latest browser updates and implement necessary security patches to protect from vulnerabilities and breaches.",
    },
    {
      image: "/assets/img/trustedPartner.gif",
      title: "User Experience Focused",
      desc: "We align our maintenance strategies with your marketing goals to enhance user satisfaction and ensure your platform meets customer expectations at all times.",
    },
    {
      image: "/assets/img/clock.gif",
      title: "Round-the-Clock Support",
      desc: "Our team offers round-the-clock support to resolve any technical issues and ensure your platform is always running smoothly, giving you peace of mind.",
    },
    {
      image: "/assets/img/railapp.gif",
      title: "Performance Optimization",
      desc: "We continuously monitor and optimize your website’s speed and performance to deliver lightning-fast load times and a seamless user experience.",
    },
  ];
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundReact}>
        <Navbar />
        <Typography
          className={styles.imageTitle}
          sx={{
            fontSize: {
              xs: "30px",
              sm: "30px",
              md: "45px",
              lg: "45px",
            },
            fontFamily: "NovemberPro",
          }}
        >
          Maintenance & Upgradation
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
          Our React development services offer all essential maintenance
          services and take care of browser security updates. We are always
          ready to take challenges based on customer marketing strategies to
          increase user satisfaction levels.
        </Typography>
      </Grid>
      {/* Benefits and Features */}
      <Grid>
        <Grid className={styles.rubypartnerContainer}>
          <Grid className={styles.coreQuote}>
            <Typography
              className={styles.coreTitleUsppartner}
              sx={{
                fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
                fontFamily: "NovemberPro",
              }}
            >
              {" "}
              Benefits and Features
            </Typography>
          </Grid>
          <Grid container spacing={4} className={styles.coresubcont}>
            {Benefits?.map((item, index) => (
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
      <Footer />
    </Box>
  );
};
export default MaintenanceUpgradation;
