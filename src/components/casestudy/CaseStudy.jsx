"use client";
import React, { useState } from "react";
import clsx from "clsx";
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
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const CaseStudy = () => {
  const TABS = ["Services", "Industries", "Technologies"];

  // Subcategories for "Industries"
  const SUB_CATEGORIES = ["All", "Hospitals", "Educations", "Real State"];

  const CARD_DATA = {
    Services: [
      {
        title: "Online Schlorship",
        description:
          "A Minneapolis-based start-up wished to eradicate the student’s financial struggle in an educational realm by taking the advantage of new-age technologies. He narrated his entire vision of building an online scholarship management platform for revolutionizing the process school is paid, helping deserving students, and effective management of award programs.",
        image: "./assets/img/start-up-slide3.webp",
        path: "/studies/services/schlorship",
      },
      {
        title: "A serviceable platform providing awareness of digital payments",
        description:
          "Digital payments are accelerating the entrepreneur’s profitability by facilitating them to carry out financial transactions with customers, suppliers, and the governments in a more effective,safer, and cheaper way.",
        image: "./assets/img/start-up-slide1.webp",
        path: "/studies/services/digital",
      },
      {
        title: "A full fledged freelance platform",
        description:
          "In this digital age, millions of specialists worldwide diverted from the 9 to 5 hectic work culture to freelancing/ flexible remote work for smooth maintenance of work-life balance. A tremendous number of enterprises, small start-ups as well as big companies are leveraging this smart opportunity of getting associated with freelancers in order to get their work done quickly and affordably.",
        image: "./assets/img/start-up-slide4.webp",
        path: "/studies/services/freelance",
      },
      {
        title: "World’s Popular Biodiversity Assessment tool",
        description:
          "A UK based Client came up with the innovative mission of developing an incredible Biodiversity data collection platform for instructing the decision-makers about geographic information of global biodiversity.",
        image: "./assets/img/start-up-slide5.webp",
        path: "/studies/services/diversity",
      },
      {
        title: "A Remarkable football platform",
        description:
          "A UK-based Client presented his plan to develop a visually consistent, easy navigate, and engaging football portal that delivers A-Z insights of football matches that are going to take place around the globe.The main objective of the client was to provide an online convenience to football lovers, through which they can easily learn about the complete live or past match stats without missing any details.",
        image: "./assets/img/start-up-slide6.webp",
        path: "/studies/services/platform",
      },
    ],
    Industries: [
      {
        title: "Docker",
        description: "Containerization with Docker for scalable applications.",
        image: "./assets/img/start-up-slide1.webp",
        category: "Educations",
        path: "/studies/services/diversity",
      },
      {
        title: "React",
        description: "Build modern UI with React and Next.js.",
        image: "./assets/img/start-up-slide3.webp",
        category: "Hospitals",
        path: "/studies/services/diversity",
      },
    ],
    Technologies: [
      {
        title: "React",
        description: "Build modern UI with React and Next.js.",
        image: "./assets/img/start-up-slide3.webp",
        path: "/studies/services/diversity",
      },
      {
        title: "Node.js",
        description: "Backend services with Node.js and Express.",
        image: "./assets/img/start-up-slide3.webp",
        path: "/studies/services/diversity",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [activeSubCategory, setActiveSubCategory] = useState("All");

  // Filtered data based on selected tab and subcategory (if applicable)
  const filteredCards =
    activeTab === "Industries" && activeSubCategory !== "All"
      ? CARD_DATA[activeTab].filter(
          (card) => card.category === activeSubCategory
        )
      : CARD_DATA[activeTab];

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
    setActiveSubCategory("All"); // Reset subcategory when switching tabs
  };

  return (
    <Box>
      <Grid id="carousel" className={styles.background}>
        <Navbar />
        <Typography
          textAlign={{ xs: "center", sm: "center", md: "left" }}
          fontSize={{ xs: "30px",sm:"30px", md: "45px",lg:"45px" }}
          className={styles.case}
        sx={{fontFamily:"NovemberPro"}}
        >
          Case Studies
        </Typography>
      </Grid>

      <Grid className={styles.studiesMain}>
        <Grid className={styles.container}>
          {/* Tabs */}
          {/* <Grid container className={styles.tabContainer}>
            <Tabs
              value={activeTab}
              onChange={handleChange}
              centered
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontSize: { xs: "15px", sm: "20px", md: "25px", lg: "25px" },
                  fontWeight: 600,
                  color: "#808080",
                  fontFamily: "NovemberPro",
                },
                "& .Mui-selected": {
                  color: "#650909 !important",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#650909",
                },
              }}
            >
              {TABS.map((tab) => (
                <Tab key={tab} label={tab} value={tab} />
              ))}
            </Tabs>
          </Grid> */}

          {/* Subcategory Filter (Only for Industries Tab) */}
          {/* {activeTab === "Industries" && (
            <Grid
              container
              spacing={2}
              sx={{ marginTop: "30px" }}
              className={styles.subCategoryContainer}
            >
              {SUB_CATEGORIES.map((sub) => (
                <Button
                  key={sub}
                  variant={activeSubCategory === sub ? "contained" : "outlined"}
                  onClick={() => setActiveSubCategory(sub)}
                  sx={{
                    marginRight: "10px",
                    marginBottom: "15px",
                    fontFamily: "NovemberPro-Reg",
                    backgroundColor: activeSubCategory === sub ? "#333" : "",
                    borderColor: "#333",
                    color: activeSubCategory === sub ? "#fff" : "#333",
                    textTransform: "capitalize",
                  }}
                >
                  {sub}
                </Button>
              ))}
            </Grid>
          )} */}

          {/* <Grid>
          <Divider  />
          </Grid> */}

          {/* Cards */}
          <Grid container spacing={5} className={styles.studyCards}>
            {filteredCards.length > 0 ? (
              filteredCards.map((card, index) => (
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
                      borderRadius:"10px"
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        height: 140,
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
                      sx={{fontFamily:"NovemberPro",fontSize: "20px"}}
                      className={styles.title} gutterBottom>
                        {card.title.length > 50
                          ? `${card.title.slice(0, 50)}...`
                          : card.title}
                      </Typography>
                      <Typography
                      sx={{fontFamily:"NovemberPro-Reg", fontSize: "16px"}}
                      className={styles.CaseStudySubTitle}> 
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
                            fontFamily:"NovemberPro-Reg"
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
              ))
            ) : (
              <Typography sx={{ padding: "20px", fontSize: "18px" }}>
                No case studies available for this category.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default CaseStudy;
