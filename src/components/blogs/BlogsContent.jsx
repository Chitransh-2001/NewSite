"use client";
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/CaseStudy.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Footer from "../footer/Footer";
import Link from "next/link";
const BlogsContent = () => {
  const blogsData = [
    {
      title:
        "What is Ruby on Rail (ROR) and why it is the best choice for your project 2021",
      description:
        "Ruby on Rail is still in the game. No matter how many websites will publish or applications may develop, even so, ROR will never lose its fame.",
      image: "./assets/img/homeBlog.png",
      path: "/blog/content/ror",
    },
    {
      title: "How React Native can be a game-changer to your business?",
      description:
        "Put effort in making one best code and apply it anywhere”- this wise mindset is being applied in every goal-centric business since Facebook was made out from React Native one of the leading open-source networks from 2015.",
      image: "./assets/img/reactNative.png",
      path: "/blog/content/react",
    },
  ];
  return (
      <Box>
        <Grid id="carousel" className={styles.blogBackground}>
          <Navbar />
          <Typography
           sx={{
           textAlign:{ xs: "center", sm: "center", md: "left" },
            fontSize:{ xs: "30px",sm:"30px", md: "45px",lg:"45px"},
             fontFamily: "NovemberPro" }}
            className={styles.case}
          >
            Blogs
          </Typography>
        </Grid>
        <Grid sx={{ marginBottom: "100px" }} className={styles.studiesMain}>
          <Grid className={styles.container}>
            <Grid container spacing={5} className={styles.studyCards}>
              {blogsData.map((card, index) => (
                <Grid
                  key={index}
                  size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                  className={styles.cardBox}
                >
                  <Card
                    className={styles.studyCards1}
                    sx={{
                      maxWidth: 545,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "none",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        height: 150,
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s ease-in-out",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                      title={card.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        sx={{ fontFamily: "NovemberPro", fontSize: "20px" }}
                        className={styles.title}
                        gutterBottom
                      >
                        {card.title.length > 50
                          ? `${card.title.slice(0, 50)}...`
                          : card.title}
                      </Typography>
                      <Typography
                        sx={{ fontFamily: "NovemberPro-Reg", fontSize: "16px" }}
                        className={styles.CaseStudySubTitle}
                      >
                        {card.description.length > 170
                          ? `${card.description.slice(0, 170)}...`
                          : card.description}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ paddingBottom: "15px", paddingLeft: "15px" }}
                    >
                      <Link href={card?.path} passHref>
                        <Button
                          sx={{
                            color: "#fff",
                            backgroundColor: "#333",
                            textTransform: "capitalize",
                            fontFamily: "NovemberPro-Reg",
                          }}
                          variant="contained"
                          size="medium"
                        >
                          Read More
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Box>
  );
};
export default BlogsContent;
