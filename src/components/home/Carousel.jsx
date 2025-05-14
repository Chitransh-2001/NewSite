"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Grid2, Typography, Button } from "@mui/material";
import styles from "../../styles/Carousel.module.css";
import whiteWave from "../../../public/assets/img/white-wave.png";
import Link from "next/link";
import Navbar from "../navbar/Navbar";
const Carousel = ({ data, isStartup = false }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = data.length;
  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setSlideIndex(index);
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      id="carousel"
      className={`${styles.slideContainer} ${styles.startupCarousel}`}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          className={`${styles.slide} ${styles.startupSlide}`}
          style={{
            backgroundColor: item.backgroundColor,
            display: slideIndex === index ? "flex" : "none",
            ...(isStartup
              ? {
                  backgroundImage: item.backgroundImage,
                  position: "relative",
                }
              : {}),
          }}
        >
          {isStartup && (
            <Box
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            />
          )}
          <Grid2 container spacing={2} className={styles.gridContainer}>
            <Grid2
              size={{ xs: 12, md: 7 }}
              className={`${styles.textContainer} ${styles.startContainer}`}
            >
              <Typography
                fontSize={{xs:"22px",sm:"25px",md:"30px",lg:"35px"}}
                className={styles.title}
                style={{
                  width: isStartup ? "100%" : "auto",
                  color: isStartup ? "rgb(183 46 52)" : "inherit",
                  fontSize:isStartup ? "35px" :"",
                  opacity: isStartup ? 0.8 : 1,
                  fontFamily: "NovemberPro",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                className={styles.description}
                fontSize={{xs:"16px",sm:"16px",md:"20px",lg:"24px"}}
                style={{
                  opacity: isStartup ? 0.9 : 1,
                   fontSize: isStartup ? "30px" : "",
                  fontFamily: isStartup ? "NovemberPro-Reg" : "NovemberPro-Reg",
                  marginTop: isStartup ? "15px" : "",
                  marginBottom:"15px"
                }}
              >
                {item.des}
              </Typography>
              <Link href={item?.path}  passHref>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#fff", color: "#333", fontFamily:"NovemberPro-Reg"}}
                  className={styles.button}
                >
                  {item.button}
                </Button>
              </Link>
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 5 }}
              className={styles.imageContainer}
              style={{ display: isStartup ? "none" : "" }}
            >
              <Box
                className={styles.backgroundImage}
                style={{
                  backgroundImage: item.backgroundImage,
                  ...(isStartup
                    ? {
                        backgroundImage: "",
                      }
                    : {}),
                }}
              />
            </Grid2>
          </Grid2>
        </Box>
      ))}
      <span className={styles.prev} onClick={prevSlide}>
        &#10094;
      </span>
      <span className={styles.next} onClick={nextSlide}>
        &#10095;
      </span>
      <div className={styles.dotsContainer}>
        {data.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              slideIndex === index ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Carousel;
