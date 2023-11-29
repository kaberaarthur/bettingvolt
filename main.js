// Function to fetch data from the API and update the div content
async function fetchDataAndUpdateDiv(endpoint) {
  try {
    const response = await fetch(`http://localhost:3000/${endpoint}`);
    const data = await response.text();
    document.getElementById("free-winning-tips").innerHTML = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Event listeners for button clicks
document.getElementById("todayButton").addEventListener("click", () => {
  fetchDataAndUpdateDiv("today");
});

document.getElementById("tomorrowButton").addEventListener("click", () => {
  fetchDataAndUpdateDiv("tomorrow");
});

document.getElementById("yesterdayButton").addEventListener("click", () => {
  fetchDataAndUpdateDiv("yesterday");
});
