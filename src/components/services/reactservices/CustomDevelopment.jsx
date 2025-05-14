import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../../styles/Services.module.css";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
const CustomDevelopment = () => {
  const Benefits = [
    {
      image: "/assets/img/reusable.gif",
      title: "Component reusability",
      desc: "Our team ensures compatibility, platform support, and code reusability with the primary benefits of the application framework for both IOS and Android systems.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Native Development",
      desc: "Native JS development with the transformation of React code and provision of excellent native features to accelerate your business scaling.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "SEO-Friendly",
      desc: "Effective and updated SEO with enough loading time and super-fast rendering for the client's problem to load the server and subsequent loads.",
    },
    {
      image: "/assets/img/trustedPartner.gif",
      title: "Easy to learn, test and monitor",
      desc: "Provide a full suite of development services with essential CSS and HTML apps to innovate your business with the latest technologies.",
    },
    {
      image: "/assets/img/customers.gif",
      title: "High user experience and revenue",
      desc: "Builds customized plugins and extensions for the client to create strong building blocks and open new revenue opportunities for business.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Lightning-Fast Performance",
      desc: "React's virtual DOM ensures faster updates and smooth rendering, delivering a snappy, seamless user experience — even for high-traffic applications.",
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
          Custom Development
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
          We build customized matching solutions up to your enterprise and
          project needs. After investigating your business goals and objectives,
          our team makes tailors feature-rich native applications for a larger
          audience and provides a better user experience.
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
export default CustomDevelopment;
