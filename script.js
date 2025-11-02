const interns = [
  { name: "Prosper", scores: [100, 8.5, 8, 5, 6] },
  { name: "Ben", scores: [92, 6, 8, 8, 7] },
  { name: "Cynthia", scores: [100, 10, 10, 9, 9] },
  { name: "David", scores: [70, 10, 6, 9, 9] },
  { name: "Ella", scores: [88, 9, 9.5, 8.5, 9] }
];

function calculateAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return (total / scores.length).toFixed(2);
}

interns.forEach(intern => {
  const average = calculateAverage(intern.scores);
  console.log(`Intern: ${intern.name} | Average Score: ${average}`);
});