interface Job {
  id: number;
  title: string;
}
interface FetchJobsResult {
  fulfilled: Job[];
  rejected: { reason: unknown; jobId: number }[];
}

// Mock async function to simulate fetching a job
function fetchJob(id: number): Promise<{ id: number; title: string }> {
  const mockTitles: Record<number, string> = {
    101: "Frontend Developer",
    102: "Backend Developer",
    103: "UX Designer",
  };
  return new Promise((resolve) => {
    // Simulate network delay
    const delay = Math.random() * 1000;
    setTimeout(() => {
      resolve({ id, title: mockTitles[id] || "Unknown Role" });
    }, delay);
  });
}

 async function fetchAllJobs(jobIds: number[]): Promise<FetchJobsResult> {
  const promises = jobIds.map((id) =>
    fetchJob(id).catch((err) => {
      throw { jobId: id, reason: err };
    })
  );

  const results = await Promise.allSettled(promises);

  const fulfilled: Job[] = [];
  const rejected: { reason: unknown; jobId: number }[] = [];

  for (const r of results) {
    if (r.status === "fulfilled") {
      fulfilled.push(r.value);
    } else {
      rejected.push(r.reason);
    }
  }

  return { fulfilled, rejected };
}

// Example
const jobIds = [101, 102, 103];
fetchAllJobs(jobIds).then(({ fulfilled, rejected }) => {
  console.log("Fulfilled jobs:", fulfilled);
  console.log("Failed jobs:", rejected);
});
// use Case
async function getJobs() {
  const { fulfilled } = await fetchAllJobs([101, 102, 103]);
  return fulfilled;
}
