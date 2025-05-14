import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  CircularProgress
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
const HireContact = () => {
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
      setError( "Failed to send your enquiry. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage("");
        setError("");
      }, 4000);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          border: "1px solid #EBEBEB",
          borderRadius: "10px",
          maxWidth: 800,
          marginTop: "20px",
          padding: "6% 4% 8% 4%",
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "NovemberPro",
            color: "#333",
            mb: 2,
          }}
        >
          Hire Software Developers
        </Typography>
        <Grid className="mt-10" container spacing={6}>
          {/* First Name & Last Name */}
          <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12 }}>
            <TextField
              fullWidth
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              type="text"
              required
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
          <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12 }}>
            <TextField
              fullWidth
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              type="text"
              required
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
          <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12 }}>
            <TextField
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              type="email"
              required
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
          <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12 }}>
            <TextField
              fullWidth
              name="contact"
              type="number"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact"
              required
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
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
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
            mt: 5,
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
    </>
  );
};
export default HireContact;