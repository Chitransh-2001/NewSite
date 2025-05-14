import fs from "fs";
import path from "path";

const jobsFilePath = path.join(process.cwd(), "data", "jobs.json");

export async function GET() {
    try {
        let jobs = [];
        if (fs.existsSync(jobsFilePath)) {
            const fileData = fs.readFileSync(jobsFilePath, "utf8");
            jobs = JSON.parse(fileData);
        }

        return new Response(JSON.stringify(jobs), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return new Response(JSON.stringify({ error: "Error fetching jobs" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
