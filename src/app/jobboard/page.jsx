"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AppBar, Toolbar, Typography, Button, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, IconButton
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import AddJobPost from "../../components/adminview/AddJobPost";
import EditJobPost from "../../components/adminview/EditJobPost";
// import FullScreenLoader from "../../components/loadingscreen/FullScreenLoader";
export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Loading state
  const [open, setOpen] = useState(false); // Modal state
  const [jobs, setJobs] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
  // useEffect(() => {
  //   if (localStorage.getItem("auth") !== "true") {
  //     router.push("/admin");
  //   }
  // }, []);
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/getjobs", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Failed to fetch jobs: ${response.statusText}`);
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      // Optionally set an error state here to show a message to the user
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/admin");
  };
  const handleEdit = (job) => {
    setSelectedJob(job);
    setOpenEdit(true);
};
// Update job list after editing
const handleUpdate = async (updatedJob) => {
  try {
    const response = await fetch("/api/updatejob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result.message); // "Job updated successfully"
      // Update job in local state
      setJobs((prevJobs) =>
        prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
      );
      // Optionally show a snackbar or success message here
    } else {
      const error = await response.json();
      console.error("Update failed:", error);
      // Optionally show error message to the user
    }
  } catch (error) {
    console.error("Error updating job:", error);
    // Optionally show error message to the user
  }
};
const deleteJob = async (id) => {
  const response = await fetch("/api/deletejob", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (response.ok) {
    setJobs(jobs.filter((job) => job.id !== id));
    setTimeout(()=>{
      fetchJobs(); // Refresh the job list
    },2000)
  } else {
    const error = await response.json();
    console.error("Failed to delete job:", error);
  }
};
  const handleAddJob = () => {
    setOpen(true);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <AppBar
      sx={{backgroundColor:"#333 !important",color:"#fff"}}
      position="static">
        <Toolbar className="flex justify-between">
          <Typography variant="h6"
          sx={{fontFamily:"NovemberPro"}}
          >Jobs Board</Typography>
          <div className="flex items-center gap-4">
            <Button  sx={{textTransform:"capitalize",fontFamily:"NovemberPro-Reg"}} color="inherit" onClick={handleAddJob}>Add Job</Button>
            <Button sx={{textTransform:"capitalize", fontFamily:"NovemberPro-Reg"}} color="inherit" onClick={handleLogout}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
      {/* Table */}
      <div className="p-6">
        <Paper className="p-4">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Job Title</strong></TableCell>
                  {/* <TableCell><strong>Skills</strong></TableCell> */}
                  <TableCell><strong>No. of Positions</strong></TableCell>
                  <TableCell><strong>Start Date</strong></TableCell>
                  <TableCell><strong>End Date</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs.map((job, index) => (
                    console.log(job,"job"),
                  <TableRow key={index}>
                    <TableCell>{job.title}</TableCell>
                    {/* <TableCell>{job.skills}</TableCell> */}
                    <TableCell>{job.positions}</TableCell>
                    <TableCell>{job.openingDate}</TableCell>
                    <TableCell>{job.closingDate}</TableCell>
                    <TableCell>
                      <IconButton color="error" onClick={() => deleteJob(job.id)}>
                        <Delete />
                      </IconButton>
                      <IconButton
                      color="#333">
                        <Edit onClick={() => handleEdit(job)} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        {open && <AddJobPost setOpen={setOpen} open={open}  setJobs={setJobs}/>}
        {selectedJob && (
                <EditJobPost open={openEdit} setOpen={setOpenEdit} job={selectedJob} onUpdate={handleUpdate}  />
            )}
            {/* {loading && <FullScreenLoader />} */}
      </div>
    </div>
  );
}