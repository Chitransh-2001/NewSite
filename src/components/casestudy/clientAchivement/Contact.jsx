"use client";
import React, { useState } from "react";
import styles from "../../../styles/CaseStudy.module.css";
import Grid from "@mui/material/Grid2";
import { Typography, Box, Button } from "@mui/material";
import ContactUsModal from "../../contact/ContactUsModal";
const Contact = ({ title = "", subTitle = "", isFreelance = false }) => {
  const[open,setOpen]=useState(false)
  return (
      <Box className={styles.contactMain}>
        <Grid
          sx={{ display: "flex" }}
          container
          spacing={10}
          className={styles.gridContainerContact}
        >
          <Grid>
            <Typography
              sx={{ fontFamily: "NovemberPro" }}
              fontSize={{
                lg: isFreelance ? "22px" : "35px",
                md: isFreelance ? "22px" : "26px ",
                sm: "22px",
                xs: "22px",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{ fontFamily: "NovemberPro-Reg" }}
              fontSize={{ lg: "18px", md: "16px ", sm: "18px", xs: "16px" }}
            >
              {subTitle}
            </Typography>
          </Grid>
          <Grid>
            <Button
              sx={{
                backgroundColor: "#fff !important",
                marginTop: "10px",
                color: "#333 !important",
                justifyContent: isFreelance ? "center" : "",
              }}
              className={styles.productButton}
              variant="contained" onClick={()=>setOpen(true)}
            >
              Contact Now
            </Button>
          </Grid>
        </Grid>
        {open && <ContactUsModal open={open} setOpen={setOpen}/>}
      </Box>
  );
};

export default Contact;
