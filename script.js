const apiKey = 'DEMO_KEY';  // Replace with your NASA API key
const contentSection = document.getElementById('content');

// Event listeners for buttons
document.getElementById('apod-btn').addEventListener('click', fetchAPOD);
document.getElementById('rovers-btn').addEventListener('click', () => {
  contentSection.innerHTML = '<h2>Rover Photos coming soon!</h2>';
});
document.getElementById('asteroids-btn').addEventListener('click', () => {
  contentSection.innerHTML = '<h2>Asteroid Tracker coming soon!</h2>';
});

document.getElementById('fetch-apod-btn').addEventListener('click', fetchAPOD);

// Fetch Astronomy Picture of the Day (APOD)
async function fetchAPOD() {
  const dateInput = document.getElementById('apod-date').value; 
  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  // Add date parameter if it's provided
  if (dateInput) {
    apiUrl += `&date=${dateInput}`; 
  }

  console.log("Fetching URL:", apiUrl);  // Debugging: Check the API URL
  
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data);  // Debugging: Check the response
    displayAPOD(data);
  } catch (error) {
    console.error('Error fetching APOD:', error);
    contentSection.innerHTML = `<p>Error fetching Astronomy Picture of the Day. ${error.message}</p>`;
  }
}

// Display APOD
function displayAPOD(data) {
  contentSection.innerHTML = `
    <h2>${data.title}</h2>
    <img src="${data.url}" alt="${data.title}" style="max-width: 100%; height: auto;">
    <p>${data.explanation}</p>
  `;
}
