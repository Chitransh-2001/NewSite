"use client";

import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Modal,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Close } from "@mui/icons-material";
import Tiptap from "../tiptap/TipTap"; // Ensure correct import

export default function EditJobPost({ open, setOpen, job, onUpdate }) {
  const [form, setForm] = useState({
    id: "",
    title: "",
    description: "",
    skills: "",
    location: "",
    positions: "",
    openingDate: "",
    closingDate: "",
    experience: null,
  });

  useEffect(() => {
    if (job) {
      setForm(job);
    }
  }, [job]);

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/updatejob", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      onUpdate(form);
      handleClose();
    } else {
      alert("Error updating job");
    }
  };

  return (
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
          maxHeight: 600,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h5">Edit Job</Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Job Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            {/* <Grid size={{xs:12,sm:6}}>
              <TextField label="Skills" name="skills" value={form.skills} onChange={handleChange} required fullWidth />
            </Grid>
            <Grid size={{xs:12,sm:6}}>
              <Select
                name="location"
                value={form.location || ""}
                onChange={handleChange}
                required
                fullWidth
                displayEmpty
                variant="filled"
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
            <Grid size={{xs:12,sm:6}}>
              <Select
                name="experience"
                value={form.experience || ""}
                onChange={handleChange}
                required
                fullWidth
                displayEmpty
                variant="filled"
              >
                <MenuItem value="" disabled>
                  Experience
                </MenuItem>
                {[  "Freshers",
                  "1 Year",
                  "2 Years",
                  "3 Years",
                  "4 Years",
                  "5 Years",
                  "6 Years",
                  "7 Years"].map((exp) => (
                  <MenuItem key={exp} value={exp}>
                    {exp}
                  </MenuItem>
                ))}
              </Select>
            </Grid> */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="No of Positions"
                name="positions"
                type="number"
                value={form.positions}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
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
            <Grid size={{ xs: 12, sm: 6 }}>
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
            <Grid size={{ xs: 12 }}>
              {/* <TextField label="Description" name="description" value={form.description} onChange={handleChange} required multiline rows={3} fullWidth /> */}
              <Tiptap
                content={form.description}
                setContent={(value) => setForm({ ...form, description: value })}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleClose}
              sx={{ mr: 2 }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Update Job
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
