import React from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
const Features = ({ isBiodiversity = false, featuresData }) => {
  return (
      <Box className={styles.featuresMain}>
        <Grid className={styles.featureContainer}>
          <Grid textAlign="center">
            <Typography
              sx={{ color: "#333" }}
              fontSize={{ lg: "25px", md: "22px ", sm: "25px", xs: "22px",fontFamily:"NovemberPro" }}
              className={styles.solutionHeading}
            >
              {isBiodiversity ? "Product Highlights" : "Features"}
            </Typography>
          </Grid>
          <Grid className={styles.featureCards} container spacing={3}>
            {featuresData?.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                key={index}
                className={styles.featureBox}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  "&:hover": {
                    borderColor: " #ebebeb",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image
                  // style={{ width: "20%" }}
                  src={item?.image}
                  alt="images"
                  height={90}
                  width={90}
                />
                {/* <Typography>{item?.title}</Typography> */}
                <Typography
                  sx={{
                    color: "#333",
                    fontSize: "20px",
                    fontFamily: "NovemberPro",
                    fontWeight: "bold",
                  }}
                >
                  {item?.des}
                </Typography>
                <Typography
                  sx={{
                    color: "#333",
                    fontSize: "18px",
                    fontFamily: "NovemberPro-Reg",
                  }}
                >
                  {item?.subDes}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
  );
};
export default Features;
