"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Link from "next/link";
import Image from "next/image";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import rightarrow from "../../../public/assets/img/arrow-right.svg";
import styles from "../../styles/HomeContent.module.css";
const CardSection = () => {
  const cardData = [
    {
      image: "/assets/img/ror-min.png",
      title: " ROR Development",
      desc: "We are saving the applications that are not meant to go off the rails. Let’s get your business on track",
      path: "/services/ror",
    },
    {
      image: "/assets/img/react-min.png",
      title: " React JS Development",
      desc: " Speeding up the development process with react js enables the delivery of feature-rich and user-friendly apps",
      path: "/services/reactjs",
    },
    {
      image: "/assets/img/node-min.png",
      title: "Node JS Development",
      desc: "Creating a real-time application, an IoT device, or a high-traffic website through Node.js,a choice for lower development costs",
      path: "/services/nodejs",
    },
    {
      image: "/assets/img/angularjs.png",
      title: "Angular Js Development",
      desc: "The innovations in the digital space today are making lives easier and faster and leaving customers with more choices",
      path: "/services/angularjs",
    },
    {
      image: "/assets/img/amazon-min.png",
      title: " Amazon Services",
      desc: " Providing all the spheres of cloud services with a true revolutionary approach to cloud computing known as AWS",
      path: "/services/aws",
    },
    {
      image: "/assets/img/heroku-min.png",
      title: " Heroku Development",
      desc: " Availing the Heroku (Paas) platform for building, running, and operating applications securely in the cloud",
      path: "/services/heroku",
    },
  ];
  return (
    <>
      <Box>
        <Grid container className={styles.cardContainer} spacing={5}>
          {cardData?.map((item, index) => (
            <Grid
              className={styles.cardClass}
              key={index}
              size={{ xs: 12, lg: 4, md: 6, sm: 12 }}
            >
              <Card
                sx={{
                  // maxWidth: 345,
                  maxHeight: 395,
                  minHeight: 200,
                  // minWidth:200,
                  borderRadius: "18px",
                  border: "1px solid transparent ",
                  transition: "border 0.3s ease",
                  paddingBottom: "40px",
                  "&:hover": {
                    borderColor: " #ebebeb",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Link href={item?.path} passHref>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <CardMedia
                      className={styles.cardImage}
                      sx={{
                        width: "70%",
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                      component="img"
                      height="70px"
                      image={item?.image}
                      alt="CardImage"
                    />
                  </Box>
                </Link>
                <CardContent>
                  <Typography fontSize="20px" className={styles.titledrive}>
                    {item.title}
                  </Typography>
                  <Typography className={styles.desdrive} fontSize="16px">
                    {item.desc}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "10px",
                    }}
                  >
                    <Link href={item?.path} passHref>
                      <Image src={rightarrow} alt="" />
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default CardSection;
