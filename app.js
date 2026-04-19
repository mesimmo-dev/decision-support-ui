const records = [
  { name: "Project A", score: 8.4, status: "High Priority" },
  { name: "Project B", score: 7.8, status: "Review" },
  { name: "Project C", score: 8.1, status: "Viable" }
];

const container = document.getElementById("records");

records.forEach(record => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${record.name}</h2>
    <p><strong>Score:</strong> ${record.score}</p>
    <p><strong>Status:</strong> ${record.status}</p>
  `;
  container.appendChild(card);
});
