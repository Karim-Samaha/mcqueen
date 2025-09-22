function getUniqueNormalizedRoles(roles: string[]): string[] {
  const lookup: Record<string, boolean> = {};
  const uniqueRoles: string[] = [];

  for (let i = 0; i < roles.length; i++) {
    const normalized = roles[i].trim().toLowerCase();
    if (!lookup[normalized]) {
      lookup[normalized] = true;
      uniqueRoles.push(normalized);
    }
  }

  return uniqueRoles;
}

// NOTE: This can be done in JS built it methodes:
// [...new Set(roles.map(item => item.trim().toLowerCase()))]
// But here we use a lookup object and loop to demonstrate problem-solving skills.

// Example
const input = [
  "Frontend Developer ",
  "backend developer",
  "Frontend developer",
  "  UX Designer",
];
const output = getUniqueNormalizedRoles(input);

export default output;
