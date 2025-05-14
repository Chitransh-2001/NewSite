"use client";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Typography,
  CircularProgress,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import { useState } from "react";
import Grid from "@mui/material/Grid2";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData: formData,
        }),
      });
      if (!response.ok) throw new Error("Failed to send enquiry");
      const data = await response.json();
      console.log("SUCCESS!", data);
      setMessage("Your enquiry was successfully sent!");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      setError("Failed to send your enquiry. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage("");
        setError("");
      }, 4000);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: 800,
        mt: 2,
        p: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          // fontSize: "25px",
          fontWeight: "bold",
          fontFamily: "NovemberPro",
          color: "#333",
          mb: 2,
        }}
        fontSize={{ lg: "25px", md: "22px", sm: "21px", xs: "21px" }}
      >
        Get in Touch With Us
      </Typography>

      <Grid className="mt-10" container spacing={6}>
        {/* First Name & Last Name */}
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Email, Contact & Subject */}
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
          <TextField
            fullWidth
            required
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
          <TextField
            fullWidth
            required
            name="contact"
            type="number"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
          <TextField
            fullWidth
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SubjectIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Message */}
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <TextField
            fullWidth
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            multiline
            rows={2.5}
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{
                    marginBottom: "28px",
                    fontFamily: "NovemberPro-Reg",
                  }}
                >
                  <MessageIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      {message && (
        <Typography
          sx={{
            color: "green",
            textAlign: "center",
            mt: 3,
            fontFamily: "NovemberPro-Reg",
          }}
        >
          {message}
        </Typography>
      )}

      {error && (
        <Typography
          sx={{
            color: "red",
            textAlign: "center",
            mt: 3,
            fontFamily: "NovemberPro-Reg",
          }}
        >
          {error}
        </Typography>
      )}

      {/* Submit Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: message || error ? 6 : 10,
          fontFamily: "circular",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            minWidth: 160, // adjust as needed
            minHeight: 40,
            px: 3,
            py: 1,
            textTransform: "capitalize",
            backgroundColor: "#333",
            fontFamily: "NovemberPro-Reg",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={22} thickness={6} sx={{ color: "#333" }} />
          ) : (
            "Send Enquiry"
          )}
        </Button>
      </Box>
    </Box>
  );
}
