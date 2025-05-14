// "use client";
// import { useState } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Box } from "@mui/material";

// const JobsListings = ({ jobs }) => {
//   const [open, setOpen] = useState(false);
//   const [selectedJob, setSelectedJob] = useState(null);

//   const handleOpen = (job) => {
//     setSelectedJob(job);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedJob(null);
//   };

//   return (
//     <Box textAlign="center" p={2}>
//       <Typography  sx={{ mb: 10, fontFamily: "NovemberPro", fontSize:"30px" }}>
//        Current  Job Openings
//       </Typography>
//       {jobs?.length > 0 ? (
//         <Box sx={{ overflowX: "auto" }}>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
//                   <TableCell sx={{ fontWeight: "bold" }}>Skills Required</TableCell>
//                   <TableCell sx={{ fontWeight: "bold" }}>No. of Positions</TableCell>
//                   <TableCell sx={{ fontWeight: "bold" }}>Experience (Years)</TableCell>
//                   <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {jobs.map((job, index) => (
//                   <TableRow key={job.id || index}>
//                     <TableCell>{job.title}</TableCell>
//                     <TableCell>{job.skills}</TableCell>
//                     <TableCell>{job.positions}</TableCell>
//                     <TableCell>{job.experience}</TableCell>
//                     <TableCell>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}
//                         onClick={() => handleOpen(job)}
//                       >
//                         View Details
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       ) : (
//         <Typography>No job openings available.</Typography>
//       )}

//       {/* Job Details Modal */}
//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>Job Details</DialogTitle>
//         <DialogContent>
//           {selectedJob && (
//             <div>
//               <Typography><strong>Title:</strong> {selectedJob.title}</Typography>
//               <Typography><strong>Description:</strong> {selectedJob.description}</Typography>
//               <Typography><strong>Skills Required:</strong> {selectedJob?.skills}</Typography>
//               <Typography><strong>No. of Positions:</strong> {selectedJob.positions}</Typography>
//               <Typography><strong>Experience (Years):</strong> {selectedJob.experience}</Typography>
//               <Typography><strong>Opening Date:</strong> {selectedJob.openingDate}</Typography>
//               <Typography><strong>Closing Date:</strong> {selectedJob.closingDate}</Typography>
//             </div>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default JobsListings;

"use client";
import { useState } from "react";
import ApplyNowPopup from "../../components/contact/ApplyNowPopup";
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

const JobsListings = ({ jobs }) => {
  const [open, setOpen] = useState(false);
  const [openApply, setOpenApply] = useState(false);
  const handleOpenApply = () => setOpenApply(true);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleOpen = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJob(null);
  };

  return (
    <Box sx={{ padding: "50px 100px 100px" }} textAlign="center" p={2}>
      <Typography
        // variant={{ xs: "h6", sm: "h5", md: "h4" }}
        sx={{
          marginBottom: "30px",
          fontFamily: "NovemberPro",
          // fontSize: "30px",
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
                  flexDirection: { xs: "column", md: "row" }, // Column on small, Row on medium and up
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
                  {/* <Typography>
                    <strong>Skills Required:</strong> {job.skills}
                  </Typography> */}
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
                    // color="primary"
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
                    display: { xs: "none", md: "block" }, // Only show on medium and up
                    mx: 2,
                  }}
                />
                <CardActions>
                  <Button
                    variant="contained"
                    color="#fff"
                    sx={{
                      ml: 1,
                      backgroundColor: "#333",
                      fontFamily: "NovemberPro-Reg",
                      color: "#fff",
                      textTransform: "capitalize",
                    }}
                    onClick={handleOpenApply}
                  >
                    Apply Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
         
        </Grid>
      ) : (
        <Typography sx={{fontSize:"18px",fontFamily:"NovemberPro-Reg",color:"#333"}}>No job openings available.</Typography>
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
              {/* <Typography> */}
              {/* <strong>Description:</strong> {selectedJob.description} */}
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

              {/* </Typography> */}
              {/* <Typography>
                <strong>Skills Required:</strong> {selectedJob?.skills}
              </Typography>
              <Typography>
                <strong>No. of Positions:</strong> {selectedJob.positions}
              </Typography>
              <Typography>
                <strong>Experience:</strong>{" "}
                {selectedJob.experience !== "Freshers"
                  ? `Min. 0 to ${selectedJob.experience}`
                  : selectedJob.experience}
              </Typography> */}

              {/* <Typography>
                <strong>Opening Date:</strong> {selectedJob.openingDate}
              </Typography> */}
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
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default JobsListings;
