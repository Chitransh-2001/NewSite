"use client";
import React from "react";
import { Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";
import Grid2 from "@mui/material/Grid2";

const processSteps = [
  {
    id: 1,
    title: "Requirement Gathering",
    description:
      "The first imperative step in our product development process is gathering requirements and analyzing it.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "We create attractive app designs using modern design tools.",
  },
  {
    id: 3,
    title: "Prototype",
    description:
      "Followed with a prototype that shows a preliminary visual of the app portraying its fundamental design and function.",
  },
  {
    id: 4,
    title: "Coding and Development",
    description:
      "With complete transparency, development begins on the preferred platforms.",
  },
  {
    id: 5,
    title: "Quality Assurance",
    description:
      "We don't cut corners when it comes to quality, so you'll get a bug-free app.",
  },
  {
    id: 6,
    title: "Deployment",
    description:
      "At this stage of development, your app is ready to appear on the App Store or Google Play.",
  },
  {
    id: 7,
    title: "Support and Maintenance",
    description:
      "After deployment, we provide future support and maintenance for developed products.",
  },
];

const OurProcess = () => {
  return (
    <div
    style={{paddingBottom:"30px !important"}}
    className={styles.carouselContainer}>
      <Typography 
       sx={{
        fontSize: {
          lg: "30px",
          md: "25px",
          sm: "25px",
          xs: "22px",
        },
      }}
      className={styles.processtitle}>OUR PROCESS</Typography>

      {/* Grid Layout */}
      <Grid2 container spacing={2} className={styles.gridContainer}>
        {processSteps.map((step, index) => (
          <Grid2
            size={{ xs: 12, sm: 6, lg: 6, xl: 12 }}
            key={index}
            className={styles.stepContainer}
          >
            <div className={styles.bullets}>{index + 1}</div>
            <div className={styles.headerprocess}>{step.title}</div>
            <p className={styles.OurProcessdescription}>{step.description}</p>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default OurProcess;
