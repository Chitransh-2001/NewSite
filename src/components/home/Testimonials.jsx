"use client";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/Home.module.css";

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const CarouselData = [
    {
      src: "https://infusionforhealth.com/wp-content/uploads/2021/01/Dan-McCarty-Headshot.jpg",
      alt: "ROR",
      title: "Dan McCarty",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "https://cindytalks.com/wp-content/uploads/2023/10/Maria-salinas-breaking-barriers.jpeg",
      alt: "Web Development",
      title: "Maria Elena",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "https://www.chinadaily.com.cn/sports/images/attachement/jpg/site1/20160325/eca86bd9d543185ed40204.jpg",
      alt: "Start-up",
      title: "Johan Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRliNy8utS5Yo6lgCaUkK2d6lKGX9rBPJ8ipw&s",
      alt: "Enterprise Solutions",
      title: "Dana Midby",
      description:
        "It was a tight deadline and a very big project. They truly helped us to streamline and automate diverse processes, which saved our staff productive time. With their exceptional solution, we can now track everything online, which has been beneficial. That's pretty incredible.",
    },
    {
      src: "https://yt3.googleusercontent.com/SfWlHmeuJNs36FLH8aakSn4h_jagOGs96sT2bp5nfa6aBIKco0okddyluHbFEbKlXcbFDTxI=s900-c-k-c0x00ffffff-no-rj",
      alt: "Enterprise Solutions",
      title: "Alex Ong",
      description:
        "The app has got overwhelming responses from our users. They like how it looks and feels, as well as how simple it is to use and navigate. The features fit in well with the workflows of users. InfoKoders's Technologies team was extraordinary and went above and beyond to meet our expectations.",
    },
    {
      src: "https://www.chinadaily.com.cn/sports/images/attachement/jpg/site1/20160325/eca86bd9d543185ed40204.jpg",
      alt: "Enterprise Solutions",
      title: "Enrico Cruyff",
      description:
        "I don't think you could find a better company to manage and build your ambitious project like InfoKoders technologies. I get a lot of compliments on my app, which holds multiple unique and complex development.",
    },
  ];

  const totalSlides = Math.ceil(CarouselData.length / 2); // Show two slides at a time

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
  // const prevSlide = () =>
  //   setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  // const goToSlide = (index) => setSlideIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ width: "100%" }} id="client">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          marginTop="50px"
        >
          <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}
          sx={{marginBottom:"20px"}}
          >
            <Typography
              sx={{
                fontSize: {
                  lg: "32px",
                  md: "25px",
                  sm: "25px",
                  xs: "20px",
                },
              }}
              className={styles.testimonialHeading}
            >
              Testimonials
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "18px",
                  md: "16px",
                  sm: "18px",
                  xs: "16px",
                },
              }}
              className={styles.testimonialPara}
            >
              Our beloved clients shared their thrilling experience on how our
              product development and services helped them to set a benchmark in
              their business realm.
            </Typography>
          </Grid>
        </Grid>
        <span
        style={{fontFamily:"NovemberPro"}}
        className={styles.testimonialsText}>TESTIMONIALS</span>

        <div className={styles.slideContainer}>
          {Array.from({ length: totalSlides }).map((_, index) => {
            const firstItem = index * 2;
            const secondItem = firstItem + 1;

            return (
              <Box
                key={index}
                className={styles.slide}
                style={{
                  display: slideIndex === index ? "flex" : "none",
                }}
              >
                <Grid
                  container
                  size={{ xs: 12, md: 4, lg: 6 }}
                  spacing={2}
                  className={styles.gridContainer1}
                >
                  {[firstItem, secondItem].map((itemIndex) =>
                    CarouselData[itemIndex] ? (
                      <Grid
                        size={{ xs: 12, md: 4, lg: 6 }}
                        key={itemIndex}
                        className={styles.slideItem}
                      >
                        <Box className={styles.slideContent}>
                          <Stack alignItems="center" spacing={2}>
                            <Avatar
                              alt={CarouselData[itemIndex].alt}
                              src={CarouselData[itemIndex].src}
                              className={styles.avatar}
                            />
                          </Stack>
                          <Typography  
                          className={styles.cardTitle}>
                            {CarouselData[itemIndex].title}
                          </Typography>
                          <Typography
                            className={styles.description1}
                          >
                            {CarouselData[itemIndex].description}
                          </Typography>
                        </Box>
                      </Grid>
                    ) : null
                  )}
                </Grid>
              </Box>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
