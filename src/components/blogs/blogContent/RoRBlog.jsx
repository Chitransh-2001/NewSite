"use client";
import React from "react";
import styles from "../../../styles/RoRBlog.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import aboutimg from "../../../../public/assets/img/rorcode.png";
const page = () => {
  const goodChoiceData = [
    {
      title: "E-commerce website platforms",
      subTitle: "Shopify",
      des: "ROR has taken many industries by just rendering the customer service environment. One of them is Shopify, the best e-commerce software platform that facilitates online shops, shipping, payments, and trade. This company started lakhs of businesses in 175 countries with the ROR framework as a base. This aims at e-commerce platforms and prevents common threats of cybersecurity issues.",
      imageSrc: "/assets/img/shoppingcart.gif",
    },
    {
      title: "Software Development Platforms",
      subTitle: "GitHub",
      des: "ROR is developed to cater to the arising needs and scalability issues of the software. It has a true test automation process. One of the best software GitHub is a global company that uses Git for development and version control. It has 40 million active users and million projects with a web service to host billions of code lines every day.",
      imageSrc: "/assets/img/agiledevelopment.gif",
    },
    {
      title: "Entertainment and Music platforms",
      subTitle: "Netflix",
      des: "Netflix is a social media provider and the globe’s foremost Internet entertainment company. This offer services of collection of films and television programs. It has around 182 million paid subscriptions. Here, ROR web implementation is an easy task, but it still depends on the framework of infrastructure.",
      imageSrc: "/assets/img/netflix.gif",
      subTitles2:"SoundCloud",
      des2:"Soundcloud enables users to discover, stream and share music by emerging artists around the world. Now, this platform has over 272 million enlisted users with highly enlisted music tools. That's how the ROR framework maintains the scalability and dynamics of the music platform."
    },
    {
      title: "Educational and informative platforms",
      subTitle: "Dribble",
      des: "This is a cherry on top. ROR is famous for its vibrant community, where active members help to enhance the code. As such, Dribble is a community where designers present their work, opinions, images and shots. It facilitates 4 million visitors per month. Thus people in such communities share experiences, get inspired and seek ideas.",
      imageSrc: "/assets/img/dribble.gif",
      subTitles2:"Slideshare",
      des2:"SlideShare is a slide hosting service with 80 million users designed to upload documents and presentations. This platform uses expressive language and syntax. Besides this, we can upload work and embed blogs or websites for more convenient use. Therefore, this is very popular with web conferencing and education."
    },
    {
      title: "Hospitality and service platforms",
      subTitle: "Airbnb",
      des: "ROR plays an essential role to convey the correct information. Airbnb is built with such a ROR framework to find a cosy house by sharing their personal information. This idea of Airbnb is to connect travellers with hosts looking to rent their house space to other people. Such a ROR Platform requires high development and less cost.",
      imageSrc: "/assets/img/healthcare.gif",
    },
    {
      title: "HR Websites and networking platforms",
      subTitle: "Fiverr",
      des: "If you are working in any field ROR is a full-stack framework suited for all types. For example, Fiverr is a global online marketplace for people to purchase and sell services by freelancers. These services include writing, graphic design, translation, and video editing. Such a Platform allows people to earn money on their abilities and skills.",
      imageSrc: "/assets/img/teammember.gif",
    },
    {
      title: "Social media and Book reading platforms",
      subTitle: "Twitter",
      des: "Rails scale dramatically nowadays. Do you know that Twitter's mother was ROR? As we know ROR is very flexible and adaptable. After a few years, the app transformed from a traditional web framework to a broadcasting system. Still, we will credit the success of Twitter to the Ruby on Rails framework.",
      imageSrc: "/assets/img/ondemand.gif",
      subTitles2:"Good read",
      des2:"Goodreads is the world’s largest library with bookshelves. Goodreads is a platform for people to connect reviews freely. It has over 90 million users with the largest collection of book enthusiasts. The individuals sign up and register books to create reading lists by aiding productivity."
    },
    {
      title: "Crowdfunding and Business platforms",
      subTitle: "Kick starter",
      des: "Startups and SMBs choose ROR due to its reliability, maintenance and ability to compete with larger firms. Kickstarter is another crowdsourcing service on our list that has helped many creative projects to raise money for their ideas. It has a huge community of over 10 million users where the public donates funds for accomplishing their goals.",
      imageSrc: "/assets/img/reduction.gif",
    },
  ];
  const fontSizeTitle={
    lg:"25px",md:"22px",sm:"25px",xs:"22px"
  }
  const fontSizeDesc={
    lg: "18px", md: "16px ", sm: "18px", xs: "16px"
  }
  const fontSizeCardTitle={
    lg: "20px", md: "20px", sm: "20px", xs: "20px"
  }
  const fontSizeCardSubTitle={
     lg: "20px", md: "20px", sm: "20px", xs: "20px" 
  }
  const fontSizeCardDes={
    lg: "16px", md: "16px", sm: "16px", xs: "16px"
  }
  return (
      <Box className={styles.rorContainer}>
        <Grid id="carousel" className={styles.backgroundRor}>
          <Grid>
            <Navbar />
            <Typography
              className={styles.imageSubTitle} 
              sx={{
                 textAlign:"center",
                fontSize:{
                xs: "22px",
                sm: "22px",
                md: "30px",
                lg: "30px",
                xl: "30px",},fontFamily:"NovemberPro"
              }}
            >
              A Online Scholarship Management Platform - fulfilling Educational
              Aspirations of Million Students
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "NovemberPro-Reg",
                fontSize: {lg:"18px",md:"16px",sm:"16px",xs:"16px"},
                textAlign: "center",
                opacity:0.9
              }}
            >
              Author&nbsp;&nbsp;admin{"\u00A0\u00A0"} Posted on&nbsp;&nbsp; June
              24, 2020{"\u00A0\u00A0"} In&nbsp;&nbsp;Design{"\u00A0\u00A0"} No
              Comments
            </Typography>
          </Grid>
        </Grid>
        <Grid className={styles.howRorContainer}>
          <Typography className={styles.howRorTitle}
            sx={{
              fontSize:fontSizeTitle,
              fontFamily:"NovemberPro"
            }}
          >
            How Ruby on rails (ROR) is the best choice to build your project in
            2021
          </Typography>
          <Typography
          sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}
            className={styles.howRorDesc}
          >
            In most cases, our clients often take an interest in technologies we
            set to use in their projects.
          </Typography>
          <Typography
            sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}
            className={styles.howRorDesc}
          >
            Nevertheless, we must assert that it's your right to choose the best
            option among others. The 2021 Index of TIOBE titled Ruby as the 13th
            most established programming language based on SERP results. In
            other words, despite the severe popularity of other web platforms,
            Rails is something that didn't lose its followers and is now the
            most popular server-side web framework.
          </Typography>
          <Typography
            sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}
            className={styles.howRorDesc}
          >
            So how is it a good choice for your project? The answer to your
            curiosity lies in the next section of the beneficial list about ROR,
            which is landing next.
          </Typography>
          <Grid className={styles.codeImg}>
            <Image
              style={{ borderRadius: "10px" }}
              src={aboutimg}
              alt="White Wave"
              width={1000}
              height={400}
            />
          </Grid>
          </Grid>
        <Grid className={styles.whatRorcontainer}>
          <Typography
            sx={{fontSize:fontSizeTitle,fontFamily:"NovemberPro"}}
            className={styles.whatRorTitle}
          >
            What is Ruby on Rails?
          </Typography>
          <Typography className={styles.whatRorDesc}
            
            sx={{ fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}
          >
            ROR is open-source software with a model–view–controller (MVC)
            framework written and interpreted in the Ruby programming language.
          </Typography>
          <Typography
            className={styles.whatRorDesc}
            sx={{ fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}
          >
            Ruby on rails was originally invented by David Heinemeier Hansson in
            2004.
          </Typography>
          <Typography
               className={styles.whatRorDesc}
               sx={{ fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}
          >
            This is a combination of HTML, JavaScript and CSS.
          </Typography>
          <Typography
            className={styles.whatRorDesc}
            sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}
          >
            Ruby is used to building web pages, web applications and providing
            web default services.
          </Typography>
        </Grid>
          <Grid className={styles.howRorCard}>
            <Typography 
              className={styles.goodChoiceTitle}
              sx={{
                fontSize:fontSizeTitle,
                fontFamily:"NovemberPro"
              }}
            >
              How ROR is a good choice for any project?
            </Typography>
            <Typography
              className={styles.goodChoiceDesc}
              sx={{ fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg" }}
            >
              Ruby on Rail is still in the game. No matter how many websites
              will publish or applications may develop, even so, ROR will never
              lose its fame.
            </Typography>
            <Typography
              className={styles.goodChoiceDesc}
              sx={{ fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg" }}
            >
              By the means of different platforms, ROR has made our life easy,
              quicker and hassle-free. Let's leap into the working of
              prestigious applications built by ROR. This will make it clear
              that ROR is the best choice for your upcoming project.
            </Typography>
          </Grid>
          <Grid
            container
            spacing={3}
            className={styles.goodchoiceContainer}
          >
            {/* Left Card */}
            {goodChoiceData?.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                className={styles.cards}
                key={index}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Image
                    style={{ width: "20%" }}
                    src={item?.imageSrc}
                    alt=""
                    height={40}
                    width={40}
                  />
                </Box>
                <Typography
                  className={styles.CardTitle}
                  sx={{
                    fontSize:fontSizeCardTitle,fontFamily:"NovemberPro"
                  }}
                >
                  {item?.title}
                </Typography>
                <Typography
                   className={styles.subTitle}
                  sx={{
                    fontSize:fontSizeCardSubTitle,fontFamily:"NovemberPro"
                  }}
                >
                  {item?.subTitle}
                </Typography>
                <Typography 
                className={styles.des}
                  sx={{
                    fontSize:fontSizeCardDes,fontFamily:"NovemberPro-Reg"
                  }}
                >
                  {item?.des}
                </Typography>
                <Typography
                   className={styles.subTitle}
                  sx={{
                   fontSize: fontSizeCardSubTitle,fontFamily:"NovemberPro"
                  }}
                >
                  {item?.subTitles2}
                </Typography>
                <Typography
                 className={styles.des}
                  sx={{
                    fontSize:fontSizeCardDes,fontFamily:"NovemberPro-Reg"
                  }}
                >
                  {item?.des2}
                </Typography>
              </Grid>
            ))}
            <Typography className={styles.CardEnd} sx={{ fontSize:fontSizeDesc,fontFamily: "NovemberPro-Reg" }}>That's how ROR helps in delivering a successful project without any flaws.</Typography>
          </Grid>
          <Grid className={styles.conclusionRor}>
            <Typography
              className={styles.conclusionTitle}
              sx={{
                fontSize:fontSizeTitle,fontFamily:"NovemberPro"
              }}
            >
              Conclusion
            </Typography>
            <Typography
             className={styles.conclusionDes}
              sx={{ fontSize: fontSizeDesc,fontFamily:"NovemberPro-Reg" }}
            >
              Ruby on rails is constructed on MVC architecture and holds varied
              advantages. Without any doubt, it is the most important technology
              and best web application framework for various companies and
              communities. This information is all your leading manual for your
              primary engagement with ROR. Hopefully, we’ve answered all of your
              curiosity and questions about Ruby on Rails.
            </Typography>
            <Typography
              className={styles.conclusionDes}
              sx={{ fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg" }}
            >
              An eye on Ruby on Rails development company? Hold your takeaway in
              this and begin with a new innovative strategy of Ruby on Rails.
              Believe us, we use the best Ruby on Rails advancement practices
              and technologies to create outputs that function perfectly. Feel
              free to ask us any of your concerns.
            </Typography>
          </Grid>
        <Footer />
      </Box>
  );
};
export default page;
