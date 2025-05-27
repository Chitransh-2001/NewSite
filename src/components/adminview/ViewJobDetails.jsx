import React from "react";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Divider
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const ViewJobDetails = ({ open, setOpen, job, selectedJob }) => {
    const handleClose = () => {
    setOpen(false);  }
    console.log(open, "open");
  return (
    <Dialog 
    style={{maxHeight:"600px"}}
    open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogActions
        sx={{ justifyContent: "flex-end", padding: "8px 16px 0 0" }}
      >
        <Button onClick={handleClose} sx={{ color: "#555" }}>
          <ClearIcon />
        </Button>
      </DialogActions>

      <DialogTitle
        sx={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: 600,
          fontFamily: "NovemberPro, sans-serif",
          marginBottom: 2,
        }}
      >
        Job Details
      </DialogTitle>

      <DialogContent sx={{ px: 4, pb: 4 }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h6" fontWeight="bold">
            {selectedJob.title || "Untitled Position"}
          </Typography>

          <Divider />

          <Box
            dangerouslySetInnerHTML={{
              __html:
                selectedJob.description || "<p>No description provided.</p>",
            }}
            sx={{
              lineHeight: 1.6,
              whiteSpace: "pre-line",
              "& ul": { listStyleType: "disc", pl: 3 },
              "& li": { mb: 1 },
            }}
          />

          <Typography>
            <strong>Skills Required:</strong>{" "}
            {selectedJob.skills || "Not specified"}
          </Typography>
          <Typography>
            <strong>Experience:</strong>{" "}
            {selectedJob.experience || "Not specified"}
          </Typography>
          <Typography>
            <strong>Open Positions:</strong>{" "}
            {selectedJob.positions || "Not specified"}
          </Typography>
          <Typography>
            <strong>Location:</strong> {selectedJob.location || "Not specified"}
          </Typography>
          <Typography>
            <strong>Opening Date:</strong> {selectedJob.openingDate || "N/A"}
          </Typography>
          <Typography>
            <strong>Closing Date:</strong> {selectedJob.closingDate || "N/A"}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ViewJobDetails;
