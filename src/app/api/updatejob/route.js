import fs from "fs";
import path from "path";

export async function POST(req) {
    const jobsFilePath = path.join(process.cwd(), "data", "jobs.json");

    try {
        const updatedJob = await req.json();
        if (!updatedJob.id) {
            return new Response(JSON.stringify({ error: "Job ID is required" }), { status: 400 });
        }

        // Read existing jobs
        const jobs = fs.existsSync(jobsFilePath)
            ? JSON.parse(fs.readFileSync(jobsFilePath, "utf8"))
            : [];

        // Find and update job
        const jobIndex = jobs.findIndex((job) => job.id === updatedJob.id);
        if (jobIndex === -1) {
            return new Response(JSON.stringify({ error: "Job not found" }), { status: 404 });
        }

        jobs[jobIndex] = updatedJob;

        // Save updated jobs
        fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2), "utf8");

        return new Response(JSON.stringify({ message: "Job updated successfully" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
