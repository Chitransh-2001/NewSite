"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import angularjs from "../../../public/assets/img/angularcolor.png";
import nextjs from "../../../public/assets/img/nextjscolor.png";
import VuejsIcon from "../../../public/assets/img/vuejscolor.png";
import TypeScript from "../../../public/assets/img/typescriptcolor.png";
import reacticon from "../../../public/assets/img/reactcolor.png";
import HTML5 from "../../../public/assets/img/htmlcolor.png";
import JavaScript from "../../../public/assets/img/javascriptcolor.png";
import nodejs from "../../../public/assets/img/nodejscolor.png";
import RoR from "../../../public/assets/img/rorcolor.png";
import mongo from "../../../public/assets/img/mongodbcolor.png";
import postsql from "../../../public/assets/img/postgrecolor.png";
import Redis from "../../../public/assets/img/rediscolor.png";
import awsCloudServices from "../../../public/assets/img/awscolor.png";
import GoogleCloudServices from "../../../public/assets/img/googlecloudcolor.png";
import DigitalOcean from "../../../public/assets/img/digitaloceancolor.jpg";
import herokuicon from "../../../public/assets/img/herokucolor.png";
import engineYard from "../../../public/assets/img/engineyardcolor.jpg";
import mysql from "../../../public/assets/img/mysqllogo.png";
import styles from "../../styles/Home.module.css";
const Services = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // marginY: "30px",
        }}
      >
        <Grid sx={{ textAlign: "center", padding: "3% 5%" }}>
          <Typography
            // variant="h4"
            sx={{
              fontSize: {
                lg: "28px",
                md: "22px",
                sm: "25px",
                xs: "22px",
              },
            }}
            className={styles.serviceHeader}
          >
            Your quest for hiring{" "}
            <span style={{ color: "#650909" }}> dedicated </span>remote
            developers ends here
          </Typography>
          <Typography
            className={styles.serviceSubHeader}
            // variant="body1"
            sx={{
              fontSize: {
                lg: "18px",
                md: "16px",
                sm: "18px",
                xs: "16px",
              },
            }}
          >
            It doesn’t matter what tech resources you are looking for, we
            possess a team of offshore dedicated development experts having the
            years of experience in all the leading tools and technologies.
            Associate with InfoKoders technologies, handpick your tech team, and
            achieve short and long-term business objectives.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          // maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "30px",
          paddingLeft: "3.3%",
          paddingRight: "3.3%",
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            padding: "20px",
            border: "1px solid #ebebeb",
            borderRadius: "8px",
            display: "flex",
            flexDirection: { sm: "column", md: "row", xs: "column", xl: "row" },
            justifyContent: "center",
          }}
        >
          <Grid
            textAlign={{ xs: "center", sm: "center", md: "left", lg: "left" }}
            size={{ xs: 12, md: 6 }}
          >
            <Typography
              className={styles.frontendfontSize}
              // variant="body1"
              sx={{
                fontSize: {
                  lg: "25px",
                  md: "22px",
                  sm: "25px",
                  xs: "22px",
                },
                color: "#333",
              }}
            >
              <span style={{ color: "#650909" }}>Frontend </span>development
            </Typography>
            <Typography
              className={styles.frontDesfontSize}
              sx={{
                fontSize: {
                  lg: "18px",
                  md: "16px",
                  sm: "16px",
                  xs: "16px",
                },
              }}
            >
              Avail top-notch app development services by hiring our skillful
              front-end developers that have delivered game-changing solutions.
            </Typography>
            <Link
              href="/contact"
              style={{
                color: "#650909",
                textDecoration: "underline",
                fontFamily: "NovemberPro-Reg",
              }}
            >
              Own your team
            </Link>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "8px",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={nextjs}
                  style={{
                    // border: "1px dotted #333",
                    // borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "6px",
                  }}
                  width={70}
                  height={70}
                  alt="angular"
                />
                Next Js
              </span>
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "3pxpx",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={angularjs}
                  style={{
                    // border: "1px dotted #333",
                    // borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "2px",
                  }}
                  width={70}
                  height={70}
                  alt="angular"
                />
                Angular Js
              </span>

              <span
                style={{ textAlign: "center", fontSize: "14px", color: "#333" }}
              >
                <Image
                  src={TypeScript}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="TypeScript"
                />
                TypeScript
              </span>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={reacticon}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="REactjs"
                />
                React Js
              </span>
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "3px",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={VuejsIcon}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                  width={60}
                  height={60}
                  alt="Vue.js"
                />
                Vue Js
              </span>
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={JavaScript}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    padding: "10px",
                    marginBottom: "8px",
                    minHeight: "70px",
                    minWidth: "70px",
                  }}
                  width={70}
                  height={70}
                  alt="javascript"
                />
                JavaScript
              </span>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          size={{ xs: 12, md: 6, lg: 6 }}
          textAlign={{ xs: "center", sm: "center", md: "left", lg: "left" }}
          sx={{
            padding: "20px",
            border: "1px solid #ebebeb",
            borderRadius: "8px",
            // flexDirection: { sm: "column", md: "row", xs: "column", xl: "row" },
            justifyContent: "center",
            paddingX: "40px",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              className={styles.frontendfontSize}
              // variant="body1"
              sx={{
                fontSize: {
                  lg: "25px",
                  md: "22px",
                  sm: "25px",
                  xs: "22px",
                },
                color: "#333",
              }}
            >
              <span style={{ color: "#650909" }}>Backend </span>development
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "18px",
                  md: "16px",
                  sm: "16px",
                  xs: "16px",
                },
              }}
              className={styles.frontDesfontSize}
            >
              Attract your end-customers by picking our offshore development
              team notable for developing solutions that deliver outstanding
              user experience
            </Typography>
            <Link
              href="/contact"
              style={{
                color: "#650909",
                textDecoration: "underline",
                fontFamily: "NovemberPro-Reg",
              }}
            >
              Own your team
            </Link>
          </Grid>
          <Grid
            container
            size={{ xs: 6, sm: 6, md: 6 }}
            spacing={2}
            justifyContent="center"
          >
            <Grid size={{ xs: 6, md: 6 }}>
              <Box
                className={styles.devlopOpt}
                sx={{
                  flexDirection: "column",
                  display: "flex",
                  // alignItems: "center",
                }}
              >
                <Image
                  src={nodejs}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    padding: "5px",
                    marginBottom: "2px",
                  }}
                  width={70}
                  height={70}
                  alt="nodejs"
                />
                <span
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  Node Js
                </span>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 6, md: 6 }}>
              <Box
                className={styles.devlopOpt}
                sx={{
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <Image
                  src={RoR}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    padding: "2px",
                    marginBottom: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="ROR"
                />
                <span
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  Ruby on Rails
                </span>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          // maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "30px",
          paddingLeft: "3.3%",
          paddingRight: "3.3%",
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          textAlign={{ xs: "center", sm: "center", md: "left", lg: "left" }}
          sx={{
            padding: "20px",
            border: "1px solid #ebebeb",
            borderRadius: "8px",
            display: "flex",
            flexDirection: { sm: "column", md: "row", xs: "column", xl: "row" },
            justifyContent: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              className={styles.frontendfontSize}
              // variant="body1"
              sx={{
                fontSize: {
                  lg: "25px",
                  md: "22px",
                  sm: "25px",
                  xs: "22px",
                },
                color: "#333",
              }}
            >
              <span style={{ color: "#650909" }}>Database </span>development
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "18px",
                  md: "16px",
                  sm: "16px",
                  xs: "16px",
                },
              }}
              className={styles.frontDesfontSize}
              // variant="body1"
            >
              Our offshore developers gather, organize, and extract key insights
              from massive amounts of data.
            </Typography>
            <Link
              href="/contact"
              style={{
                color: "#650909",
                textDecoration: "underline",
                fontFamily: "NovemberPro-Reg",
              }}
            >
              Own your team
            </Link>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={mongo}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    padding: "2px",
                    marginBottom: "6px",
                  }}
                  width={70}
                  height={70}
                  alt="mongodb"
                />
                MongoDB
              </span>
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={postsql}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    minHeight: "70px",
                    minWidth: "70px",
                    marginBottom: "6px",
                    padding: "10px",
                  }}
                  width={70}
                  height={70}
                  alt="PostgreSQL"
                />
                PostgreSQL
              </span>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={Redis}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    padding: "2px",
                    marginBottom: "10px",
                    marginTop: "18px",
                  }}
                  width={70}
                  height={70}
                  alt="Redis"
                />
                Redis
              </span>
              <span
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={mysql}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    minHeight: "70px",
                    minWidth: "70px",
                    marginBottom: "8px",
                    padding: "3px",
                  }}
                  width={70}
                  height={70}
                  alt="PostgreSQL"
                />
                MySQL
              </span>
            </Box>
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          textAlign={{ xs: "center", sm: "center", md: "left", lg: "left" }}
          sx={{
            padding: "20px",
            border: "1px solid #ebebeb",
            borderRadius: "8px",
            display: "flex",
            flexDirection: { sm: "column", md: "row", xs: "column", xl: "row" },
            justifyContent: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              // variant="body1"
              className={styles.frontendfontSize}
              sx={{
                fontSize: {
                  lg: "25px",
                  md: "22px",
                  sm: "25px",
                  xs: "22px",
                },
                color: "#333",
              }}
            >
              <span style={{ color: "#650909" }}>Cloud </span>services
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "18px",
                  md: "16px",
                  sm: "16px",
                  xs: "16px",
                },
              }}
              className={styles.frontDesfontSize}
            >
              Cloud services provide users with duplicating and scaling, great
              flexibility, resources to balance the requirements of users and
              hosted applications and solutions.
            </Typography>
            <Link
              href="/contact"
              style={{
                color: "#650909",
                textDecoration: "underline",
                fontFamily: "NovemberPro-Reg",
              }}
            >
              Own your team
            </Link>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  paddingBottom: "22px",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={awsCloudServices}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    padding: "15px",
                    marginBottom: "10px",
                    minHeight: "70px",
                    minWidth: "70px",
                  }}
                  width={70}
                  height={70}
                  alt=" AWS Services"
                />
                AWS Services
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                  paddingBottom: "22px",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={DigitalOcean}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    padding: "2px",
                    marginBottom: "5px",
                    minHeight: "70px",
                    minWidth: "70px",
                  }}
                  width={70}
                  height={70}
                  alt="Digital Ocean"
                />
                Digital Ocean
              </span>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              className={styles.devlopOpt}
              sx={{
                flexDirection: {
                  lg: "column",
                  sm: "row",
                  md: "column",
                  xs: "row",
                },
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={GoogleCloudServices}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    padding: "2px",
                    marginBottom: "10px",
                    minHeight: "70px",
                    minWidth: "70px",
                  }}
                  width={70}
                  height={70}
                  alt="Google Cloud Services "
                />
                Google Cloud Services
              </span>
              <span
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                <Image
                  src={herokuicon}
                  style={{
                    // border: "1px dotted  #333",
                    // borderRadius: "50%",
                    padding: "15px",
                    marginBottom: "3px",
                    minHeight: "60px",
                    minWidth: "60px",
                  }}
                  width={70}
                  height={70}
                  alt="Heroku"
                />
                Heroku
              </span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Services;
