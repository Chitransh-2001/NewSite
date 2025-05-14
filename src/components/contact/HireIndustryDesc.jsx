import React from "react";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/Services.module.css";
import { Typography} from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
const HireIndustryDesc = () => {
  const Industry = [
    {
      title: "Save 70% on development cost",
    },
    {
      title: "Fast On-boarding",
    },
    {
      title: "Easy scale up and Scale down",
    },
    {
      title: "Proficiency on advance technologies",
    },
    {
      title: "Agile development process",
    },
  ];
  return (
    <>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <Typography
          className={styles.hirerubyTitle}
          sx={{
            fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
            fontFamily: "NovemberPro",
          }}
        >
          Hire Industry's Best{" "}
          <span style={{ color: "#650909" }}> Software developers </span> in
          India
        </Typography>
        <Typography
          className={styles.industrySubtitle}
          sx={{
            fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
            fontFamily: "NovemberPro-Reg",
          }}
        >
          Achieve the best access to professional and skilled software
          developers in Bangalore, Delhi, and Mumbai India that empowers you to
          create systematic and streamlined custom software solutions for your
          company, agency, or start-up. At InfoKoders Technologies, we
          understand how critical it is for you to hire a trustworthy software
          development team that keeps the capabilities to fulfill your business
          objectives.
        </Typography>
        <Typography
          className={styles.industrySubtitle}
          sx={{
            fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
            fontFamily: "NovemberPro-Reg",
          }}
        >
          As a result, we carefully hire proficient in India that holds a
          thorough expertise in working with the latest software development
          technologies and ensure to add value to your team. For over 10+ years,
          we have been offering software and app development solutions to
          organizations of any size and industry.
        </Typography>
        <Typography
          className={styles.industrySubtitle}
          sx={{
            fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
            fontFamily: "NovemberPro-Reg",
            marginBottom: "1rem",
          }}
        >
          If you’re looking for a reliable and cost-effective way to hire an
          experienced and best software engineering team in India on an hourly,
          part-time, or Monthly basis, then relying on us can turn out to be
          business changing decision ever.
        </Typography>
        {Industry?.map((item, index) => (
          <Typography
            className={styles.obstaclesRightTitle}
            key={index}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              // marginBottom: "0.5rem",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            {item?.title}
          </Typography>
        ))}
      </Grid>
    </>
  );
};
export default HireIndustryDesc;






