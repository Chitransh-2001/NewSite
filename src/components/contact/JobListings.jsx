"use client";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Divider,
} from "@mui/material";
import React, { useState } from "react";

const JobsListings = ({ jobs }) => {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleOpen = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJob(null);
  };

  const scrollToApplyForm = () => {
    const applySection = document.getElementById("apply");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ padding: "50px 100px 100px" }} textAlign="center" p={2}>
      <Typography
        sx={{
          marginBottom: "30px",
          fontFamily: "NovemberPro",
        }}
        fontSize={{lg:"30px", md:"25px", sm:"24px", xs:"22px"}}
      >
        Current Job Openings
      </Typography>
      {jobs?.length > 0 ? (
        <Grid container spacing={3}>
          {jobs.map((job, index) => (
            <Grid item xs={12} key={job.id || index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 2,
                  backgroundColor: "#f9f9f9",
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    textAlign: "left",
                    minWidth: 0,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", fontFamily: "NovemberPro" }}
                  >
                    {job.title}
                  </Typography>
                  <Typography>
                    <strong>No. of Openings:</strong> {job.positions}
                  </Typography>
                  <Typography>
                    <strong>Apply Before:</strong> {job.closingDate}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    sx={{
                      ml: 1,
                      backgroundColor: "#333",
                      fontFamily: "NovemberPro-Reg",
                      color: "#fff",
                      textTransform: "capitalize",
                    }}
                    onClick={() => handleOpen(job)}
                  >
                    View Details
                  </Button>
                </CardActions>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    display: { xs: "none", md: "block" },
                    mx: 2,
                  }}
                />
                <CardActions>
                  <Button
                    variant="contained"
                    sx={{
                      ml: 1,
                      backgroundColor: "#333",
                      fontFamily: "NovemberPro-Reg",
                      color: "#fff",
                      textTransform: "capitalize",
                    }}
                    onClick={scrollToApplyForm}
                  >
                    Apply Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography sx={{fontSize:"18px",fontFamily:"NovemberPro-Reg",color:"#333"}}>
          No job openings available.
        </Typography>
      )}

      {/* Job Details Modal */}
      <Dialog
        style={{ maxWidth: "1400px !important" }}
        open={open}
        onClose={handleClose}
        fullWidth
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontFamily: "NovemberPro",
            fontSize: "20px",
          }}
        >
          Job Details
        </DialogTitle>
        <DialogContent>
          {selectedJob && (
            <div>
              <Typography sx={{ fontSize: "22px" }}>
                <strong>{selectedJob.title}</strong>
              </Typography>
              <Box
                dangerouslySetInnerHTML={{ __html: selectedJob.description }}
                sx={{
                  lineHeight: "1.6",
                  padding: "10px",
                  "& ul": {
                    listStyleType: "disc",
                    paddingLeft: "20px",
                  },
                  "& li": {
                    marginBottom: "4px",
                  },
                  "& h1": {
                    fontSize: "1.6rem",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  },
                  "& h2": {
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginBottom: "6px",
                  },
                }}
              />
              <Typography>
                <strong> Apply Before:</strong> {selectedJob.closingDate}
              </Typography>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button 
            onClick={() => {
              handleClose();
              scrollToApplyForm();
            }}
            color="primary"
          >
            Apply Now
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default JobsListings;
