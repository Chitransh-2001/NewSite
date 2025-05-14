"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkIcon from "@mui/icons-material/Link";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "emailjs-com";
const ApplyNowPopup = ({ open, setOpen }) => {
  console.log(setOpen, "open");
  const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contact: "",
    experience: "",
    message: "",
    role: "",
    position: "",
    profileUrl: "",
  });
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const fileUrl = URL.createObjectURL(file);
    setResume(fileUrl);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) return;
    const emailParams = { ...formData, resumeUrl: resume };
    emailjs
      .send(
        "service_x299nyh",
        "template_jknz8by",
        emailParams,
        "94TtzAZZ4eCvZYHzO"
      )
      .then(() => {
        setFormData({
          firstName: "",
          email: "",
          contact: "",
          experience: "",
          message: "",
          role: "",
          position: "",
          profileUrl: "",
        });
        setResume(null);
        handleClose();
      })
      .catch((error) => console.error("Failed to send email:", error));
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
            width: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" align="center" fontWeight="bold" mb={3}>
            Fill this form
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {[
                {
                  name: "firstName",
                  label: "Name",
                  icon: <PersonIcon />,
                },
                { name: "email", label: "Email Address", icon: <EmailIcon /> },
                { name: "contact", label: "Contact", icon: <PhoneIcon /> },
              ].map(({ name, label, icon }) => (
                <Grid size={{ xs: 12, md: 6, sm: 12, lg: 6 }} key={name}>
                  <TextField
                    fullWidth
                    required
                    name={name}
                    value={formData[name] || ""}
                    onChange={handleChange}
                    placeholder={label}
                    variant="filled"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">{icon}</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              ))}
              <Grid size={{ xs: 12, md: 6, sm: 12, lg: 6 }}>
                <Select
                  fullWidth
                  required
                  name="experience"
                  value={formData.experience || ""}
                  onChange={handleChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Experience
                  </MenuItem>
                  {["Fresher", "1 year", "2 Years", "3+ Years"].map(
                    (option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    )
                  )}
                </Select>
              </Grid>
              {/* <Grid size={{xs:12,md:6,sm:12,lg:6}}>
                <TextField
                  fullWidth
                  name="profileUrl"
                  value={formData.profileUrl || ""}
                  onChange={handleChange}
                  placeholder="Portfolio URL"
                  type="url"
                  variant="filled"
                  InputProps={{ startAdornment: <InputAdornment position="start"><LinkIcon /></InputAdornment> }}
                />
              </Grid> */}
              <Grid xs={12}>
                <Typography>Upload Your CV/Resume</Typography>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="center" mt={3}>
              <Button variant="contained" color="primary" type="submit">
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default ApplyNowPopup;
