"use client";
import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Modal,
  IconButton,
  Select,
  MenuItem,
  Snackbar,
  Alert
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Close } from "@mui/icons-material";
import Tiptap from "../tiptap/TipTap";
export default function AddJobPost({ setOpen, open, setJobs }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    skills: "",
    location: "",
    positions: "",
    openingDate: "",
    closingDate: "",
    experience: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/savejob", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        const result = await response.json();
        setSnackbar({
          open: true,
          message: "Job posted successfully!",
          severity: "success"
        });
        // Reset form
        setForm({
          title: "",
          description: "",
          skills: "",
          location: "",
          positions: "",
          openingDate: "",
          closingDate: "",
          experience: "",
        });
        // Refresh jobs list 
        
        const jobsResponse = await fetch("/api/getjobs", { cache: "no-store" });
        if (jobsResponse.ok) {
          const jobsData = await jobsResponse.json();
          setJobs(jobsData);
        }
        handleClose();
      } else {
        throw new Error("Failed to post job");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      setSnackbar({
        open: true,
        message: "Failed to post job. Please try again.",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            overflow: "hidden",
            overflowY: "scroll",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            width: "50vw",
            maxWidth: 600,
            maxHeight: "90vh",
          }}
        >
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h5">Add New Job</Typography>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          {/* Job Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}>
                <TextField
                  label="Job Title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  label="Skills (comma separated)"
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <Select
                  name="location"
                  value={form.location || ""}
                  onChange={handleChange}
                  required
                  fullWidth
                  displayEmpty
                  variant="outlined"
                >
                  <MenuItem value="" disabled>
                    Select Job Type
                  </MenuItem>
                  {["On-Site", "Hybrid", "Remote"].map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid xs={12} sm={6}>
                <Select
                  name="experience"
                  value={form.experience || ""}
                  onChange={handleChange}
                  required
                  fullWidth
                  displayEmpty
                  variant="outlined"
                >
                  <MenuItem value="" disabled>
                    Experience
                  </MenuItem>
                  {["Freshers", "1 Year", "2 Years", "3 Years", "4 Years", "5 Years", "6 Years", "7 Years"].map((exp) => (
                    <MenuItem key={exp} value={exp}>
                      {exp}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  label="No of Positions"
                  name="positions"
                  type="number"
                  value={form.positions}
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ min: 1 }}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  label="Start Date"
                  type="date"
                  name="openingDate"
                  value={form.openingDate}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  label="End Date"
                  type="date"
                  name="closingDate"
                  value={form.closingDate}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>
              {/* Tiptap Editor for Description */}
              <Grid xs={12}>
                <Tiptap
                  content={form.description}
                  setContent={(value) => setForm({ ...form, description: value })}
                />
              </Grid>
            </Grid>
            {/* Buttons */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <Button
                variant="contained"
                color="error"
                onClick={handleClose}
                sx={{ mr: 2 }}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? "Posting..." : "Post Job"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}