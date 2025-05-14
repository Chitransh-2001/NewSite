import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../../styles/Services.module.css";
import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
const UiDevelopment = () => {
  const Benefits = [
    {
      image: "/assets/img/economial.gif",
      title: "High volume components",
      desc: "Facilitates creation of customized high volume components using markup syntax as JavaScript XML to enable the creation of React elements.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Flexible and speedy process",
      desc: "Offers easy framework to facilitate web page replication which reduces cost and time to run business and pushes up the popularity charts",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Enables Building Rich UI",
      desc: "Clean and responsive UI to build an interactive and effective interface across different screens that offer an exciting and great browsing experience.",
    },
    {
      image: "/assets/img/trustedPartner.gif",
      title: "Robust Community Support",
      desc: "Contribution towards improving the framework by discovering and modifying components of the developer toolset with emerging technologies.",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "Boosts Developer Productivity",
      desc: "Updates frequently and modifies components in the next stages by eliminating additional development costs and boosting productivity.",
    },
    {
      image: "/assets/img/reusable.gif",
      title: "Cross-Platform Compatibility",
      desc: "Write once, run anywhere! React’s versatility allows seamless development across web, mobile, and even desktop platforms with frameworks like React Native and Electron.",
    },
  ];
  return (
    <Box>
      <Grid id="carousel" className={styles.backgroundUi}>
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
          UI/UX Development
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
          Our expertise and technology evolves continuously with new tools,
          frameworks and libraries along with a plethora of options for
          marketers and entrepreneurs. React JS is the best platform to develop
          UIs for mobile and web apps both without bugs and reading
          facilitation.
        </Typography>
      </Grid>
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
export default UiDevelopment;
