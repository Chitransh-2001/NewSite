"use client";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import styles from "../../../styles/CaseStudy.module.css";
import { Typography, Box } from "@mui/material";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import { userAgent } from "next/server";
const Solutions = ({
  solutionTitle = "",
  CarouselData,
  isDigital = false,
  isPlatform = false,
  isBiodiversity = false,
  isFreelance=false,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = Math.ceil(CarouselData.length / 2); // Show two slides at a time
  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
  // const prevSlide = () =>
  //   setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  // const goToSlide = (index) => setSlideIndex(index);
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  const specilityLeft = [
    "Client",
    "Recommender User",
    "Review Board Member",
    "Applicant",
    "School counselor",
  ];
  const speclityright = [
    "Endorser Users",
    "NGB",
    "Team Member",
    "University staff",
  ];
  const clientApp=[
    {
      title:"1. Posting Jobs and Hiring Personnel",
      desc:"Project owners can submit their projects by highlighting all the details like project name, category, budget, project description, deadline, and all the necessary files and wait for proposals from freelancers from different parts of the world"
    },
    {
      title:"2. Analyse the proposals and choose the perfect match",
      desc:"Attentively clients can check out and compare quotes offered by diverse professionals. Before shortlisting the candidates they can go through their complete profiles and learn about their portfolios, success stories, client ratings, and more."
    },
    {
      title:"3. Access the bids and pick the relevant one",
      desc:"Clients can pick out the suitable cloud experts (Freelancers) depending on crucial factors like qualifications, experience, knowledge, overall cost, and time frame"
    },
    {
      title:"4. Connect with freelancers via chat",
      desc:"The feature enables the project owners to contact the professionals and provide the details via chat. It makes the job interview process much easier."
    },
    {
      title:"5. Pay securely",
      desc:"Project managers can pay the hired cloud expert on an hourly or fixed price basis and as soon as after the payment they can obtain invoicing that helps them to keep track of transaction history"
    }
  ]
  const Freelancers=[
    {
      title:"1. In detail profile creation",
      desc:"Freelancers can build impressive profiles by providing the details of complete work history, work portfolio, and the skills"
    },
    {
      title:"2. Search the skill suitable project",
      desc:"With this feature, a job seeker can find the variety of the projects or jobs posted by the clients and choose the relevant one that suits their skills and compensation requirements."
    },
    {
      title:"3. Start working",
      desc:"Once the clients select the required professionals, they can deeply discuss the project goals and start to work. Both the client and freelancer securely exchange digital data, share opinions and do a lot more things."
    },
    {
      title:"4. In-app Payment",
      desc:"Freelancers get paid as per their convenience as the platform supports multiple payment methods such as Paypal, Wire Transfer, direct deposit, and more"
    }
  ]
  return (
      <Box className={styles.solutionsMain}>
        <Grid className={styles.solutionContainer}>
          <Grid>
            <Typography
              sx={{fontFamily:"NovemberPro", fontSize:{ lg: "25px", md: "22px ", sm: "25px", xs: "22px" }}}
              className={styles.solutionHeading}
            >
              The Solution
            </Typography>
            <Typography
              sx={{ marginTop: "10px",fontFamily:"NovemberPro-Reg", fontSize:{ lg: "18px", md: "16px ", sm: "18px", xs: "16px" } }}
              textAlign="center"
            >
              {/* <AdjustOutlinedIcon 
              sx={{color:"white"}}
              />  */}
              {solutionTitle}
            </Typography>
            {(isPlatform || isBiodiversity) && (
              <Typography
                textAlign="center"
                sx={{
                  marginTop: isBiodiversity ? "40px" : "20px",
                  fontWeight: isBiodiversity ? "bold" : "",
                  fontFamily:"NovemberPro-Reg",
                  fontSize:{ lg: "18px", md: "16px ", sm: "18px", xs: "16px" }
                }}
              >
                {isBiodiversity
                  ? "Modules of the tool"
                  : "The well designed platform pull out sufficient soccer details like entire leagues, Upcoming match, All Season, Fixtures details, Live Games, Team Information, Player Information’s and all the stats associated with the team and players."}
              </Typography>
            )}
            {isBiodiversity && (
              <Grid
                container
                spacing={4}
                sx={{
                  padding: "0 20%",
                  textAlign: "center",
                  marginTop: "30px",
                  fontFamily:"NovemberPro-Reg",
                }}
              >
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
                  <Image src="/assets/img/user.png" alt="user" width={80} height={60}/>
                  <Typography sx={{ fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily:"NovemberPro-Reg",marginTop:"20px"}}>User (Individual/ Organization) Panel</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
                  <Image src="/assets/img/admin.png" alt="admin panel" width={80} height={60}/>
                 <Typography sx={{ fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily:"NovemberPro-Reg",marginTop:"20px"}}>  Admin Panel</Typography>
                  </Grid>
              </Grid>
            )}
          </Grid>
          {isFreelance && (
           <Grid container spacing={3} className={styles.freeContainer} >
             <Grid size={{xs:12,sm:12,md:6,lg:6}} className={styles.client}>
             <Typography className={styles.freetitle} sx={{fontSize:{lg:"25px",md:"22px",sm:"25px",xs:"22px"},fontFamily:"NovemberPro"}} >Key Features of Clients application</Typography>
            {clientApp?.map((item,index)=>(
            <Grid  key={index}>
                <Typography className={styles.freetitle} sx={{fontSize:{lg:"25px",md:"22px",sm:"25px",xs:"22px"},fontFamily:"NovemberPro"}}>{item?.title}</Typography>
                <Typography className={styles.freeDesc} sx={{fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily:"NovemberPro-Reg"}}>{item?.desc}</Typography>
              </Grid>
              ))}
              </Grid>
               <Grid className={styles.client} size={{xs:12,sm:12,md:6,lg:6}}>
              <Typography className={styles.freetitle} sx={{fontSize:{lg:"25px",md:"22px",sm:"25px",xs:"22px"},fontFamily:"NovemberPro"}} >Key Features of Freelancers</Typography>
              {Freelancers?.map((item,index)=>(
              <Grid  key={index}  >
                <Typography className={styles.freetitle} sx={{fontSize:{lg:"25px",md:"22px",sm:"25px",xs:"22px"},fontFamily:"NovemberPro"}}>{item?.title}</Typography>
               <Typography className={styles.freeDesc} sx={{fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily:"NovemberPro-Reg"}}>{item?.desc}</Typography>
           </Grid>
         ))}
           </Grid>
           </Grid>
          )}
          {isDigital || isPlatform || isBiodiversity ||isFreelance ? (
            ""
          ) : (
            <Grid
              className={styles.solutionContent}
              container
              spacing={{ xs: 3, sm: 3, md: 8, lg: 8 }}
            >
              <Grid size={{ sm: 12, md: 6, lg: 6, xl: 6 }}>
                <Typography
                  textAlign={{
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  }}
                  sx={{fontFamily:"NovemberPro-Reg"}}
                  fontSize={{ lg: "18px", md: "16px ", sm: "18px", xs: "16px" }}
                >
                  {/* <AdjustOutlinedIcon 
              sx={{color:"white"}}
              />  */}
                  InfoKoders technologies strategically developed, designed and
                  launched a profit-making and hassle-free tech-enabled online
                  scholarship management platform by clearly reflecting the
                  client vision.
                </Typography>
                <Typography
                  textAlign={{
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  }}
                  fontSize={{ lg: "18px", md: "16px ", sm: "18px", xs: "16px" }}
                  sx={{ marginTop: "15px", fontFamily:"NovemberPro-Reg" }}
                >
                  The Cloud-based platform enables the student to search and
                  apply for various private education finance schemes based on
                  their qualification. Fund providers, industries, and
                  corporates can encourage skill development for struggling
                  students by drafting education finance schemes in this Online
                  Scholarship portal and effectively can manage these schemes.
                </Typography>
              </Grid>
              <Grid size={{ sm: 12, md: 6, lg: 6, xl: 6 }}>
                <Typography
                  textAlign={{
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  }}
                  sx={{fontFamily:"NovemberPro-Reg"}}
                  fontSize={{ lg: "18px", md: "16px ", sm: "18px", xs: "16px" }}
                >
                  High tech automation functionalities integrated by our expert
                  developers facilitate the collection of customized
                  applications from candidates and assign them to the proper
                  reviewers.
                </Typography>
                <Typography
                  fontSize={{ lg: "22px", md: "18px ", sm: "22px", xs: "18px" }}
                  sx={{ marginTop: "15px", fontWeight: "800", fontFamily:"NovemberPro" }}
                >
                  Specifically built diverse modules depending on the specific
                  role such as
                </Typography>
                <Grid sx={{ marginTop: "10px" }} container>
                  <Grid
                    spacing={1}
                    size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                  >
                    {specilityLeft?.map((item, index) => (
                      <Typography
                        key={index}
                        sx={{
                          lineHeight: 1.5,
                          fontFamily:"NovemberPro-Reg"
                        }}
                        fontSize={{
                          lg: "16px",
                          md: "16px ",
                          sm: "16px",
                          xs: "16px",
                        }}
                      >
                        {" "}
                        <CheckCircleIcon
                          fontSize="medium"
                          sx={{ color: "white", mr: 1 }}
                        />
                        {item}
                      </Typography>
                    ))}
                  </Grid>
                  <Grid
                    spacing={1}
                    size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                  >
                    {speclityright?.map((item, index) => (
                      <Typography
                        sx={{
                          lineHeight: 1.5,
                          fontFamily: "NovemberPro-Reg",
                        }}
                        fontSize={{
                          lg: "16px",
                          md: "16px ",
                          sm: "16px",
                          xs: "16px",
                        }}
                        key={index}
                      >
                        {" "}
                        <CheckCircleIcon
                          sx={{
                            color: "white",
                            mr: 1,
                          }}
                        />
                        {item}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid sx={{ marginTop: "80px" }} className={styles.solutionCarousel}>
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
                      spacing={{ xs: 6, sm: 6, md: 12, lg: 12 }}
                      className={styles.gridContainer1}
                    >
                      {[firstItem, secondItem].map((itemIndex) =>
                        CarouselData[itemIndex] ? (
                          <Grid
                            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                            key={itemIndex}
                            className={styles.slideItem}
                          >
                            <Image
                              alt={CarouselData[itemIndex].alt ?? ""}
                              src={CarouselData[itemIndex].src ?? ""}
                              width={600}
                              height={100}
                            />
                          </Grid>
                        ) : null
                      )}
                    </Grid>
                  </Box>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Box>
  );
};
export default Solutions;
