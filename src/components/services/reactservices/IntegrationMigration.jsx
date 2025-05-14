import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import styles from "../../../styles/Services.module.css";
import Navbar from "../../navbar/Navbar";
import Grid from "@mui/material/Grid2";
import Footer from "../../footer/Footer";
const IntegrationMigration = () => {
  const Benefits = [
    {
      image: "/assets/img/gathering.gif",
      title: "Hassle-Free Migration",
      desc: "Our expert team ensures that the migration process is smooth and doesn’t disrupt your ongoing business operations. We handle all the complexities of moving your site or application to a new platform.",
    },
    {
      image: "/assets/img/DataBackup.gif",
      title: "Cloud Integration",
      desc: "We assist with cloud integration to ensure your business is aligned with the latest technology. We help you leverage cloud infrastructure to improve scalability, flexibility, and performance.",
    },
    {
      image: "/assets/img/trustedPartner.gif",
      title: "Multi-Platform Support",
      desc: "We ensure that your migrated website or application is compatible across multiple platforms, so you can serve customers effectively on all devices.",
    },
    {
      image: "/assets/img/deployPro.gif",
      title: "Seamless Transition",
      desc: "Our migration service ensures minimal downtime and a seamless transition with no impact on your business cycle, guaranteeing business continuity during the migration process.",
    },
    {
      image: "/assets/img/customers.gif",
      title: "Scalable Solutions",
      desc: "Post-migration, we ensure that your infrastructure is highly scalable and able to handle increased traffic, so your business can grow without limitations.",
    },
    {
      image: "/assets/img/railapp.gif",
      title: "Built-in Security Enhancements",
      desc: "React supports secure coding practices, helping protect against common vulnerabilities like XSS (Cross-Site Scripting) and data breaches.",
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
          Integration & Migration
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
          We provide hassle-free migration services to adjust your offering to
          new market demands, updates and cloud integration. Our experts help
          you to migrate your existing website with multi-platform support
          without affecting your business cycle.
        </Typography>
      </Grid>
      {/* Benefits and Features */}
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
export default IntegrationMigration;
