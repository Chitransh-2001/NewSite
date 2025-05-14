"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/HomeContent.module.css";
const Industry = () => {
  const industry = [
    {
      title: "01",
      name: "Retail & eCommerce",
      image: "/assets/img/eccomerce.gif"
    },
    {
      title: "02",
      name: "Education & Elearning",
      image: "/assets/img/educationandelearning.gif",
    },
    {
      title: "03",
      name: "Healthcare & fitness",
      image: "/assets/img/healthcare.gif",
    },
    {
      title: "04",
      name: "Logistics & distribution",
      image: "/assets/img/logisticsanddistribution.gif",
    },
    {
      title: "05",
      name: "Social networking",
      image: "/assets/img/socialnoetwork.gif",
    },
    {
      title: "06",
      name: "Real estate",
      image: "/assets/img/realestate.gif",
    },
    {
      title: "07",
      name: "Travel & Hospitality",
      image: "/assets/img/travelandhospital.gif",
    },
    {
      title: "08",
      name: "Food&Restaurant",
      image: "/assets/img/foodandrestuarant.gif",
    },
    {
      title: "09",
      name: "On-demand solutions",
      image: "/assets/img/ondemand.gif",
    },
  ];
  return (
      <Box className={styles.industryBackground}>
        <Grid className={styles.industryContainer}>
          <Typography
            sx={{
              fontSize: {
                lg: "30px",
                md: "25px",
                sm: "25px",
                xs: "22px",
              },
              fontFamily:"NovemberPro",
            }}
            className={styles.industryHeader}
          >
            Industries we serve
          </Typography>
          <Grid spacing={4} container>
            {industry?.map((item, index) => (
              <Grid
                className={styles.industryCards}
                size={{ sm: 12, md: 6, lg: 4 }}
                key={index}
              >
                {" "}
                {/* Add key prop */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={60}
                />
                <Typography className={styles.industryName} sx={{fontSize:{lg:"20px",md:"20px",sm:"20px",xs:"17px"},fontFamily:"NovemberPro"}}>
                  {item?.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
  );
};
export default Industry;
