"use client";
import React from "react";
import styles from "../../../styles/RoRBlog.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box,Button } from "@mui/material";
import Image from "next/image";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import CardMedia from "@mui/material/CardMedia";
import reactnative from "../../../../public/assets/img/reactnativeblog.png"
import TripOriginIcon from '@mui/icons-material/TripOrigin';
const ReactNativeBlog = () => {
  const ReactNativeCard=[
    {
      image:'/assets/img/economial.gif',
      title:"Economical cost",
      desc:"Affordable pricing is a key consideration when it comes to developing an app for a startup. If you are in need of a mobile app that works best both on iOS and Android but you're on a budget, a cross-platform mobile app is a way to go. Because you only need to pay developers for a single technology, cross-platform apps are cost-effective.",
    },
    {
      image:"/assets/img/barchart.gif",
      title:"Quickly hit the market",
      desc:"Your app success completely relies on how soon you bring it to the market. This is the length of time it takes for a product to go from conception to market launch. If you want to get a head start in the mobile app industry, a cross-platform framework is a way to go. You can allure a significant user base from both marketplaces if you go with two platforms at the same time.",
    },
    {
      image:"/assets/img/global.gif",
      title:"Upgrades after the launch",
      desc:"Native development is the greatest option for your business if you have a different strategy for upgrades after the first version of the mobile app is out. It will almost cost more because becoming native makes managing the frequent upgrades easier. Native app development is a budget friendly investment when post-launch enhancements are not predicted.",
    },
    {
      image:"/assets/img/liveupdate.gif",
      title:"Live Updates in Real-Time",
      desc:"Developers have the ability to drive the changes directly to the user's phone instead of going through the app update cycle because of the extensive use of JavaScript. Easily users can get to know about the up-to-date version. Furthermore, the entire operation is streamlined and straightforward. Mainly Microsoft’s live update service CodePush SDK, this integrated with the React Native app to push notifications to the app.",
    },
    {
      image:"/assets/img/customers.gif",
      title:"React Native-enabled apps are faster",
      desc:"React Native enables the creation of apps using declarative programming paradigms based on JavaScript, empowering in code that is clearer, simpler, and easier to understand. The framework creates asynchronous JavaScript interactions with the native environment to provide a highly responsive and fluid mobile UI. In comparison to a traditional hybrid app, this enables a faster app load time.",
    },
    {
      image:"/assets/img/teammember.gif",
      title:"Reusable code",
      desc:"This is by far the most effective feature. React Native code is compatible with practically all mobile platforms. iOS, Android, Windows, and other platforms have come under the category. There's no need to write code in Swift, Java, or C# for iOS, Android, or Windows. The applications are native and may run on a variety of systems.",
    },
    {
      image:"/assets/img/reduction.gif",
      title:"Reduction of app load time",
      desc:"Today, the sole criteria that distinguish popular and unpopular mobile apps are their performance. The big issue that mobile app developers confront is reducing the time it takes for an app to load. With React Native, this problem is easily solved. This platform focuses on reducing app load time by enhancing memory efficiency, list-view scrolling performance, app starting time, and UI responsiveness.",
    },
    {
      image:"/assets/img/dataprotections.gif",
      title:"With the Hot Reloading Feature, it's simple to keep an app's state.",
      desc:"React Native improves the experience of mobile app developers. The main requirement for this is a reduction in the amount of time it takes to save and view changes in the file. With the 'Hot Reload' functionality, which works like magic, the framework achieves this purpose. React Native 0.22 includes this feature.",  
    }
  ]
  const fontSizeTitle={
      lg:"25px",md:"22px",sm:"25px",xs:"22px",
  }
  const fontSizeDesc={
     lg:"18px",md:"16px",sm:"18px",xs:"16px",
  }
  const fontBigFirm={
      lg:"25px",md:"22px",sm:"25px",xs:"22px",
  }
  const paddingBigFirm={
      lg:"45px",md:"20px",sm:"10px",xs:"10px",
  }
  return (
      <Box className={styles.rorContainer}>
        <Grid id="carousel" className={styles.backgroundReact}>
          <Grid>
            <Navbar />
            <Typography
              className={styles.imageSubTitleReactNative}
              sx={{
                fontSize:{
                xs: "22px",
                sm: "22px",
                md: "30px",
                lg: "30px",
                xl: "30px",},fontFamily:"NovemberPro"
              }}
              textAlign="center"
            >
              React Native
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "NovemberPro-Reg",
                fontSize: {lg:"18px",md:"16px",sm:"16px",xs:"16px"},
                padding:"0 20px",
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
        {/* How React Native can be a game-changer to your business? */}
        <Grid container className={styles.gameChanger}>
          <Grid size={{xs:12,sm:12,md:12,lg:12}} className={styles.gameChangerGrid}>
            <Typography className={styles.gameChangerTitle} sx={{fontSize:fontSizeTitle,fontFamily:"NovemberPro"}}>How React Native can be a game-changer to your business?</Typography>
            <Typography className={styles.gameChangerDes} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}} >
                    “Put effort in making one best code and apply it anywhere”- this wise mindset is
                     being applied in every goal-centric business since Facebook was made out from
                     React Native one of the leading open-source networks from 2015. 
            </Typography>
            <Typography className={styles.gameChangerDes} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}>
                     The technology's concept- to reach as many users as possible with a single
                     codebase, was not a new novel. For the first time, though, the native experience
                     was taken into account. Simply put, RN mobile apps maintain the user interface
                     and behavior of the platform on which they operate.
            </Typography>
            <Typography className={styles.gameChangerDes} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}>
                     React Native has become the only framework of choice for millions of enterprises,
                     from startups to big giants like Instagram, Skype, Uber, Walmart, Coinbase, and,
                     of course, Facebook, due to its outstanding capability to deliver a native look
                     and feel.In this blog, we'll look at the big benefits of React Native frameworks, and how
                     it’s going to turn out to be a big hit to your business.
            </Typography>
            <Button className={styles.gameChangerButton} sx={{fontSize:{lg:"16px",md:"16px",sm:"16px",xs:"14px"}, padding: "8px 18px",border: "1px solid transparent",color:" #ffffff",backgroundColor: "#333333",marginBottom: "1rem",textTransform: "none",fontFamily:"NovemberPro-Reg"}}>Let’s begin with a base</Button>
          </Grid>
        </Grid>
        {/* What is React Native? */}
        <Grid container className={styles.reactnative}>
        <Grid size={{xs:12,sm:12,md:12,lg:12}} className={styles.reactnativeGrid}>
          <Typography className={styles.gameChangerTitle} sx={{fontSize:fontSizeTitle,fontFamily:"NovemberPro"}}>What is React Native?</Typography>
          <Typography className={styles.gameChangerDes} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}>React Native is a framework that makes time taking and big app development processes effortless by enabling you to build both android and iOS apps with a single code base.  In simple terms, you need to <b>hire both ios app developers and android app developers</b> if you desire for huge customer base on both android and iOS platforms. That’s where React Native comes out to be the boon, giving you the power to win two platforms with one solidified code that too by hiring dedicated <b>React Native developers</b> from successful <b>React Native app development companies.</b> </Typography>
          </Grid>
        </Grid>
        {/* In terms of market share and Stats */}
        <Grid container spacing={3} className={styles.marketShare}>
          <Grid size={{xs:12,sm:12,md:6,lg:6}}>
            <Typography className={styles.gameChangerTitle} sx={{fontSize:fontSizeTitle,fontFamily:"NovemberPro"}}>In terms of market share and Stats, where does React native take the stand?</Typography>
            <Typography className={styles.gameChangerDes} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}>The popularity of react-native versus all other frameworks is clearly visible on the below graph. Here's an example, based on Google Trends:</Typography>
            <Typography className={styles.gameChangerDes} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}>React Native is an open-source framework owning supporters from huge communities. This innovative framework, unlike other hybrid apps, is focused on mobile platforms. The framework which is based on the JavaScript library, allows you to construct a single JavaScript codebase that incorporates on a variety of mobile devices (iOS, Android & Windows).</Typography>
          </Grid>
          <Grid size={{xs:12,sm:12,md:6,lg:6}}>
            <Grid className={styles.marketShareGrid}>
            <Image src={reactnative}  alt="reactNative Blog" />
            </Grid>
            <Typography className={styles.gameChangerDes} sx={{fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px",fontFamily:"NovemberPro-Reg"}}}>According to the bi-annual Developer Economics survey, JavaScript is used by more than 9.7 million developers. Another report backs up the previous assertion. The results from Stack Overflow Developer Survey 2021, React native is ranked 6th with 14.51 percent of the votes cast. Considering the professional aspect, and React Native comes in fifth with 16.48 percent.</Typography>
          </Grid>
        </Grid>
        {/* Why React Native? */}
        <Grid container  className={`${styles.whyReactNative} ${styles.Nativecard}`}>
          <Grid size={{xs:12,sm:12,md:12,lg:12}}>
        <Typography className={styles.gameChangerTitle} sx={{fontSize:fontSizeTitle,fontFamily:"NovemberPro"}}>Why React Native?</Typography>
         </Grid>
             <Grid container spacing={4}  >
              {ReactNativeCard?.map((item, index) => (
                <Grid
                  size={{ xs: 12, sm: 12, lg: 6 }}
                  key={index}
                  className={styles.uspBox}
                >
                  <CardMedia
                    sx={{ width: "90px", height: "90px", marginBottom: "20px" }}
                    component="img"
                    image={item?.image}
                  />
                  <Typography
                    className={styles.uspBoxTitle}
                    sx={{
                      fontSize:{lg:"20px",md:"20px",sm:"20px",xs:"20px"},fontFamily:"NovemberPro"
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    className={styles.uspBoxDesc}
                    sx={{
                      fontSize: {
                        lg: "16px ",
                        md: "16px ",
                        sm: "16px ",
                        xs: "16px ",
                      },fontFamily:"NovemberPro-Reg"
                    }}
                  >
                    {item?.desc}
                  </Typography>
                </Grid>
              ))}
            </Grid>
        </Grid>
        {/* reshaped */}
        <Grid container className={styles.reshaped}> 
          <Typography className={styles.reshapedtitle} sx={{fontSize:fontSizeTitle,fontFamily:"NovemberPro"}}>Big firms that have reshaped with React Native Development</Typography>
          {/* Walmart */}
        <Grid container spacing={3} className={styles.reshapedContent}>
           <Grid size={{xs:12,sm:12,md:6,lg:6}}  >
            <Typography className={styles.reshapedContentLeft} sx={{fontSize:fontBigFirm,fontFamily:"NovemberPro"}}>Walmart</Typography>
            <Typography className={styles.reshapedContentLeftDesc} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}>Walmart was one of the prior companies to use React Native Development. Walmart has demonstrated its inventive spirit by including Node.js into their stack. After a few years, it was renamed React Native. Walmart heightened up the app's performance on both iOS and Android by using fewer resources and completing it in less time. The mobile app developers' talents and experience were exploited across several enterprises, with 96 percent of the codebase shared between platforms.</Typography>
          </Grid> 
           <Grid size={{xs:12,sm:12,md:6,lg:6}} >
            <Typography className={styles.reshapedContentRight} sx={{fontSize:fontBigFirm,fontFamily:"NovemberPro"}}>The Reality of Walmart taking up React Native</Typography>
            <Typography className={styles.reshapedContentRightDesc} sx={{fontSize:{lg:"18px",md:"16px",sm:"18px",xs:"16px"},fontFamily:"NovemberPro-Reg"}}> <TripOriginIcon  className={styles.reshapedContentLeftDescIcon}
                />Walmart is strongly seeking to become the largest internet store in the world. The corporation wants to undertake a bold step with substantial risk to achieve a competitive advantage since it has high expectations. They experiment with new technologies in order to find attractive methods to improve the consumer experience.</Typography>
            <Typography className={styles.reshapedContentRightDesc} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}> <TripOriginIcon className={styles.reshapedContentLeftDescIcon}
                />As a result, React Native provides excellent performance, which is nearly identical to native apps, as well as flawless animations.</Typography>
           </Grid>
           </Grid> 
           {/* Bloomberg */}
           <Grid container spacing={3} className={styles.reshapedContent}>
           <Grid size={{xs:12,sm:12,md:6,lg:6}}  >
           <Typography className={styles.reshapedContentLeft} sx={{fontSize:fontBigFirm,paddingTop:paddingBigFirm,fontFamily:"NovemberPro"}}>Bloomberg</Typography>
          <Typography className={styles.reshapedContentLeftDesc} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}>Bloomberg's new version of the mobile app for iOS and Android provides customers with a streamlined, interactive experience that includes easy-to-find tailored content, videos, and live feeds from Bloomberg's Media. The company used a proprietary mobile app development platform to create the app. React Native was used by a development team to produce an app that fulfilled the promise of cross-platform development.</Typography>
           </Grid>
           <Grid size={{xs:12,sm:12,md:6,lg:6}} >
           <Typography className={styles.reshapedContentRight} sx={{fontSize:fontBigFirm,paddingTop:paddingBigFirm,fontFamily:"NovemberPro"}}>The Reality of Bloomberg taking up React Native</Typography>
           <Typography className={styles.reshapedContentRightDesc} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}><TripOriginIcon className={styles.reshapedContentLeftDescIcon}  /> "We had to move the entire organization to React Native for the consumer mobile app," stated Gabriel Lew, a senior application engineer at Bloomberg who spearheaded the development team's effort. </Typography>
           <Typography className={styles.reshapedContentRightDesc} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}><TripOriginIcon className={styles.reshapedContentLeftDescIcon} /> React Native speeds up the introduction of new product features by automating code refreshes. Rather than recompiling, the app just reloads. </Typography>
         </Grid>
        </Grid>
        {/* Instagram */}
        <Grid container spacing={3} className={styles.reshapedContent}>
           <Grid size={{xs:12,sm:12,md:6,lg:6}}  >
           <Typography className={styles.reshapedContentLeft} sx={{fontSize:fontBigFirm,paddingTop:paddingBigFirm,fontFamily:"NovemberPro"}}>Instagram</Typography>
          <Typography className={styles.reshapedContentLeftDesc} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}>Instagram took on the challenge of integrating React Native into their existing native app, starting with the most basic view. There was no need to construct navigation infrastructure because the UI was relatively simple in the Push notification view that was built as a Web View.</Typography>
           </Grid>
           <Grid size={{xs:12,sm:12,md:6,lg:6}} >
           <Typography className={styles.reshapedContentRight} sx={{fontSize:fontBigFirm,paddingTop:paddingBigFirm,fontFamily:"NovemberPro"}}>The Reality of Instagram taking up React Native</Typography>
           <Typography className={styles.reshapedContentRightDesc} sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}}><TripOriginIcon className={styles.reshapedContentLeftDescIcon}  /> The Instagram development team claims to have increased developer velocity significantly. Between 85 and 99 percent of the code in Android and iOS apps were shared. The team completes the project in less time than it would have taken them to develop native solutions.  </Typography>
         </Grid>
        </Grid>
        </Grid>
        {/* Conclusion */}
        <Grid container className={styles.conclusion} >
          <Grid size={{xs:12,sm:12,md:12,lg:12}}>
            <Typography className={styles.conclusionReact} sx={{fontSize:fontSizeTitle,fontFamily:"NovemberPro"}} >Conclusion</Typography>
            <Typography className={styles.conclusionReactDesc}  sx={{fontSize:fontSizeDesc,fontFamily:"NovemberPro-Reg"}} >Among all other cross-platform frameworks, React Native offers the best and most effective performance. This technology gives apps a native look and feel. React Native is, without a doubt, superior to and distinct from other similar platforms. It's a fantastic framework that's simple to understand and use, with good speed and a user interface that's equivalent to native apps. Furthermore, some technology experts believe that react native apps are the way of the future for hybrid mobile apps. Overall, it's a win-win condition for businesses looking to please clients on a low budget.  Before deciding to choose to react-native framework it’s imperative to get associated with reliable <b>react native app development companies</b> like <b>InfoKoders technologies</b> owning the dedicated, passionate, and enthusiastic react native developers. </Typography>
          </Grid>
        </Grid>
        <Footer />
      </Box>
  );
};
export default ReactNativeBlog;
