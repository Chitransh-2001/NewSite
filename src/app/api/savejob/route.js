import fs from "fs";
import path from "path";
// import { v4 as uuidv4 } from "uuid"; // Import UUID for unique IDs

// export async function POST(req) {
//     const jobsFilePath = path.join(process.cwd(), "data", "jobs.json");

//     try {
//         const newJob = await req.json();
//         newJob.id = uuidv4(); // Assign unique ID

//         const jobs = fs.existsSync(jobsFilePath)
//             ? JSON.parse(fs.readFileSync(jobsFilePath, "utf8")) 
//             : [];

//         jobs.push(newJob);
//         fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2), "utf8");

//         return new Response(JSON.stringify({ message: "Job added successfully" }), { status: 201 });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//     }
// }

export async function POST(req) {
    const jobsFilePath = path.join(process.cwd(), "data", "jobs.json");

    try {
        const newJob = await req.json();
        newJob.id = crypto.randomUUID(); // Use built-in Web API for UUID

        const jobs = fs.existsSync(jobsFilePath)
            ? JSON.parse(fs.readFileSync(jobsFilePath, "utf8"))
            : [];

        jobs.push(newJob);
        fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2), "utf8");

        return new Response(JSON.stringify({ message: "Job added successfully" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

