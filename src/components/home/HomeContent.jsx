"use client";
import React from "react";
import { Typography, Box, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import aboutBanner from "../../../public/assets/img/ror-banner.png";
import CardSection from "../../app/career/CardSection";
import Card from "@mui/material/Card";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import Industry from "./Industry";
import styles from "../../styles/HomeContent.module.css";
const HomeContent = () => {
  const Technology = [
    {
      image: "/assets/img/DataBackup.gif",
      title: "30 +",
      desc: "Technology Solutions",
    },
    {
      image: "/assets/img/customers.gif",
      title: "200 +",
      desc: "Customers",
    },
    {
      image: "/assets/img/global.gif",
      title: "100 %",
      desc: "Customer satisfaction",
    },
    {
      image: "/assets/img/teammember.gif",
      title: "100 +",
      desc: "Team Members",
    },
  ];
  const Morals = [
    {
      image: "/assets/img/DataBackup.gif",
      title: "Data Backups",
      desc: "The first imperative step in our product development process is gathering requirements and analyzing it.",
    },
    {
      image: "/assets/img/agiledevelopment.gif",
      title: "Agile development",
      desc: "We follow Agile Development Process, which enables us to deliver the project with the highest quality and a solid product.",
    },
    {
      image: "/assets/img/dataprotections.gif",
      title: "Data protection",
      desc: "By signing an NDA, our company guarantees the security of all your personal information. We provide top-rated products to our high-profile clients while maintaining strict confidentiality.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Friendly Support",
      desc: "When it comes to providing beneficial support, you will never across a team like InfoKoders software. We are always there for clients right from the project idea discussion to launch",
    },
  ];
  return (
    <>
      {/* Who We Are  section */}
      <Box>
        <Grid
          sx={{
            backgroundImage: "url(assets/img/bg-shape1-home5.png)",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            paddingTop: { sm: "20px", xs: "20px" },
            marginY: "20px",
          }}
        >
          <Grid className={styles.whoweContainer}>
            <Grid container spacing={5}>
              <Grid
                className={styles.whoweImage}
                size={{ xs: 12, sm: 12, md: 6, xl: 6 }}
              >
                <Image
                  src={aboutBanner}
                  alt="About Us"
                  width={470}
                  height={400}
                />
              </Grid>
              <Grid
                textAlign={{ sm: "center", md: "left" }}
                size={{ xs: 12, sm: 12, md: 6, xl: 6 }}
              >
                <Typography
                  className={styles.whoTitle}
                  sx={{
                    fontSize: {
                      lg: "30px",
                      md: "25px",
                      sm: "25px",
                      xs: "22px",
                    },
                    // fontFamily:"NovemberPro-Reg"
                  }}
                >
                  Who we are
                </Typography>
                <Typography
                  className={styles.whoSubTitle}
                  sx={{
                    fontSize: {
                      lg: "25px",
                      md: "22px",
                      sm: "25px",
                      xs: "22px",
                    },
                  }}
                >
                  {" "}
                  Recognized as the Best Ruby on Rails and Product Engineering
                  Company
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
                  className={styles.whoDes}
                >
                  {" "}
                  As today’s competitive world stepping into digital approaches,
                  and digital transformation becoming more than a buzzword, it’s
                  become essential than ever for your business to collaborate
                  with the top software application development company that
                  serves valuable tech development services and solutions at an
                  economical budget. This is where InfoKoders technologies comes
                  in!
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
                  className={styles.whoDes}
                >
                  InfoKoders technologies is the unmatched destination to
                  embrace exceptional Software development and business-centric
                  technological solutions. Whether you're a startup, SMB, or a
                  large corporation, we can help you plan your digital path with
                  expert consultancy, services, and solutions. Make the most
                  from our long-standing expertise and imagine the endless
                  digital possibilities.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* //How We Drive Business? */}
      <Grid container className={styles.driveContent}>
        <Grid sx={{ textAlign: "center", padding: "0 10%" }}>
          <Typography
            className={styles.driveHeader}
            sx={{
              fontSize: {
                lg: "25px",
                md: "22px",
                sm: "25px",
                xs: "22px",
              },
            }}
          >
            How We Drive Business?
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
            className={styles.drivedes}
          >
            We bring the right scope of services that drives impact by unlocking
            next-gen analytics and effectively transform your business
            operations.
          </Typography>
        </Grid>
      </Grid>
      {/* card section */}
      <CardSection />
      {/*Our key Morals that draw your trust*/}
      <Grid
        className={styles.keybackground}
        sx={{
          backgroundImage: "url(assets/img/bg-shape1-home5.png)",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          marginTop: "5px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, sm: 2, lg: 5, md: 8 }}
          sx={{ padding: "3% 8%" }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
            <Typography
              className={styles.moralTitle}
              sx={{
                fontSize: { lg: "25px", md: "25px", sm: "25px", xs: "22px" },
                fontFamily: "NovemberPro",
                textAlign: "center",
              }}
            >
              Our key Morals that draw your trust
            </Typography>
            <Typography
              className={styles.moralDesc}
              sx={{
                fontSize: { lg: "18px", md: "18px", sm: "18px", xs: "16px" },
                fontFamily: "NovemberPro-Reg",
                marginBottom: {
                  lg: "22px",
                  md: "60px",
                  sm: "30px",
                  xs: "30px",
                },
                marginTop: { md: "25px",lg:"15px",sm:"25px",xs:"25px" },
                textAlign: "center",
              }}
            >
              We emphasize on customer-centric model while delivering
              applications, which ultimately helps our clients achieve success
              and gain a competitive advantage over others.
            </Typography>
            <Box>
              {Technology.map((item, index) => (
                <Box
                  key={index}
                  className={styles.techMoral}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={item?.image}
                    alt="image not found"
                    width={90}
                    height={90}
                  />
                  <Box
                    sx={{
                      flexDirection: "column",
                      textAlign: "center",
                      display: "flex",
                      marginLeft: "10px",
                      paddingLeft: {
                        lg: "25px",
                        md: "5px",
                        sm: "25px",
                        xs: "25px",
                      },
                      borderLeft: "1px solid #ebebeb",
                    }}
                  >
                    <Typography
                      className={styles.moraltechtitle}
                      sx={{
                        fontSize: {
                          lg: "20px",
                          md: "16px",
                          sm: "20px",
                          xs: "20px",
                        },
                        fontFamily: "NovemberPro",
                      }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      className={styles.moralDesc}
                      sx={{
                        fontSize: {
                          lg: "16px",
                          md: "14px",
                          sm: "16px",
                          xs: "16px",
                        },
                        fontFamily: "NovemberPro-Reg",
                      }}
                    >
                      {item?.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
                gap: "20px",
              }}
            >
              {Morals.slice(0, 2).map((item, index) => (
                <Box
                  key={index}
                  className={styles.moralBox}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    width: { xs: "100%", sm: "100%", md: "45%", lg: "45%" },
                  }}
                >
                  <Image
                    src={item?.image}
                    alt="images not found of the cards"
                    width={90}
                    height={90}
                  />
                  <Typography
                    sx={{
                      fontFamily: "NovemberPro",
                      fontSize: {
                        lg: "20px",
                        md: "16px",
                        sm: "20px",
                        xs: "20px",
                      },
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                    className={styles.moraltechtitle}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "NovemberPro-Reg",
                      fontSize: {
                        lg: "16px",
                        md: "14px",
                        sm: "16px",
                        xs: "16px",
                      },
                    }}
                    className={styles.moralDesc}
                  >
                    {item?.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
              }}
            >
              {Morals.slice(2).map((item, index) => (
                <Box
                  key={index}
                  className={styles.moralBox}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    marginTop: "24px",
                    width: { xs: "100%", sm: "100%", md: "45%", lg: "45%" },
                  }}
                >
                  <Image
                    src={item?.image}
                    alt="images not found of the cards"
                    width={90}
                    height={90}
                  />
                  <Typography
                    sx={{
                      fontFamily: "NovemberPro",
                      fontSize: {
                        lg: "20px",
                        md: "16px",
                        sm: "20px",
                        xs: "20px",
                      },
                      marginTop: "1rem",
                      marginBottom: "1rem",
                    }}
                    className={styles.moraltechtitle}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "NovemberPro-Reg",
                      fontSize: {
                        lg: "16px",
                        md: "14px",
                        sm: "16px",
                        xs: "16px",
                      },
                    }}
                    className={styles.moralDesc}
                  >
                    {item?.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* Industries we serve */}
      <Industry />
    </>
  );
};
export default HomeContent;
