const interns = [
  { name: "Alice", scores: [78, 85, 56, 82, 88] },
  { name: "Ben", scores: [92, 81, 76, 95, 89] },
  { name: "Cynthia", scores: [85, 90, 87, 91, 88] },
  { name: "David", scores: [70, 75, 72, 68, 74] },
  { name: "Ella", scores: [88, 93, 95, 90, 91] }
];

function calculateAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return (total / scores.length).toFixed(2);
}

interns.forEach(intern => {
  const average = calculateAverage(intern.scores);
  console.log(`Intern: ${intern.name} | Average Score: ${average}`);
});