import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import twoMobile from "../../../../public/assets/img/twoMobile.png";
const Portal = () => {
  return (
      <Box
        sx={{ background: "#f8f9fd !important" }}
        className={styles.productMain}
      >
        <Grid
          container
          spacing={{ xs: 3, sm: 3, md: 10, lg: 10 }}
          className={styles.productContainer}
        >
          <Grid size={{ xs: 12, sm: 12, md: 6, xl: 6 }}>
            <Typography
            sx={{fontFamily:"NovemberPro",fontSize:{ lg: "25px", md: "22px ", sm: "25px", xs: "22px" }}}
              className={styles.productHeading}
            >
              Working of the Portal:
            </Typography>
            <Typography
              className={styles.productDes}
              sx={{fontFamily:"NovemberPro-Reg",fontSize:{ lg: "18px", md: "16px ", sm: "18px", xs: "16px"}}}
            >
              We have created a two-sided marketplace by harnessing the
              potential of enterprise-grade technology that precisely matches
              the private funding with student wants.
            </Typography>
            <Typography
              className={styles.productDes}
              sx={{fontFamily:"NovemberPro-Reg",fontSize:{ lg: "18px", md: "16px ", sm: "18px", xs: "16px"}}}
            >
              Firstly are the college students who set the foot into this portal
              to apply for private scholarships or grants and secondly are
              around 300 sponsors unleashing a greater range of grants and
              scholarships from foundations, private companies, universities,
              and colleges.
            </Typography>
            <Typography
              className={styles.productDes}
              sx={{fontFamily:"NovemberPro-Reg",fontSize:{ lg: "18px", md: "16px ", sm: "18px", xs: "16px"}}}
            >
              Firstly are the college students who set the foot into this portal
              to apply for private scholarships or grants and secondly are
              around 300 sponsors unleashing a greater range of grants and
              scholarships from foundations, private companies, universities,
              and colleges.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6, xl: 6 }}
            className={styles.productData}
          >
            <Image src={twoMobile} alt="White Wave" width={400} height={100} />
          </Grid>
        </Grid>
      </Box>
  );
};
export default Portal;
