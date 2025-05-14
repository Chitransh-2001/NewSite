"use client";
import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

import Grid from "@mui/material/Grid2"; // Import the CSS module

const OurCaseStudies = () => {
  const blogContent = [
    {
      image: "./assets/img/homeBlog.png",
      content: "What is Ruby on Rail (ROR)",
      path: "/blog/content/ror",
    },
    {
      image: "./assets/img/reactNative.png",
      content: "How React Native can be a game-changer",
      path: "/blog/content/react",
    },
  ];

  return (
    <Box className={styles.blogContainer2}>
      <Grid className={styles.blogContainer1} >
        <Grid>
          <Typography
            className={styles.blogHeader}
            sx={{
              fontSize: {
                xs: "20px",
                sm: "25px",
                lg: "30px",
              },
              marginBottom: "30px",
              marginLeft: "30px",
            }}
          >
            Our Blogs
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {blogContent?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 3 }}
              key={index}
              className={styles.gridItem}
            >
              <Card className={styles.blogCard}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={styles.cardImage}
                    image={item.image}
                    alt="Blog Image"
                  />
                  <Box className={styles.overlay} />
                  <Box className={styles.contentBox}>
                    <Typography className={styles.title1}>
                      {item.content}
                    </Typography>
                    <Link href={item?.path} passHref>
                      <Typography className={styles.readMore}>
                        Read More
                      </Typography>
                    </Link>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurCaseStudies;
