import fs from "fs";
import path from "path";

export async function POST(req) {
    const jobsFilePath = path.join(process.cwd(), "data", "jobs.json");

    try {
        const { id } = await req.json(); // Get job ID from request
        if (!id) {
            return new Response(JSON.stringify({ error: "Job ID is required" }), { status: 400 });
        }

        // Read existing jobs
        const jobs = fs.existsSync(jobsFilePath)
            ? JSON.parse(fs.readFileSync(jobsFilePath, "utf8"))
            : [];

        // Filter out the job to delete
        const updatedJobs = jobs.filter((job) => job.id !== id);

        // Write updated jobs back to the file
        fs.writeFileSync(jobsFilePath, JSON.stringify(updatedJobs, null, 2), "utf8");

        return new Response(JSON.stringify({ message: "Job deleted successfully" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
