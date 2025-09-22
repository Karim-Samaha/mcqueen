interface Application {
  jobId: number;
  userId: string;
}
interface TJob {
  id: number;
  title: string;
}
interface JobWithApplications extends TJob {
  applications: number;
}

function getJobsWithApplications(
  jobs: TJob[],
  applications: Application[]
): JobWithApplications[] {
  const applicationCounts: Record<number, number> = {};

  for (let i = 0; i < applications.length; i++) {
    if (applicationCounts[applications[i].jobId]) {
      applicationCounts[applications[i].jobId] += 1;
    } else applicationCounts[applications[i].jobId] = 1;
  }

  const result: JobWithApplications[] = [];
  for (let i = 0; i < jobs.length; i++) {
    if (applicationCounts[jobs[i].id]) {
      result.push({ ...jobs[i], applications: applicationCounts[jobs[i].id] });
    }
  }


  return result;
}


// Example
const applications: Application[] = [
  { jobId: 1, userId: "u1" },
  { jobId: 2, userId: "u2" },
  { jobId: 1, userId: "u3" },
  { jobId: 3, userId: "u4" },
];

const jobs: TJob[] = [
  { id: 1, title: "Frontend Developer" },
  { id: 2, title: "Backend Developer" },
  { id: 3, title: "UX Designer" },
  { id: 4, title: "DevOps Engineer" },
];

// const result = getJobsWithApplications(jobs, applications);
