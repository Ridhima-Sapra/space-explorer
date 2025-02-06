const apiKey = 'DEMO_KEY'; // Replace with your NASA API key

const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
const contentSection = document.getElementById('content');

// Event listeners for buttons
// document.getElementById('apod-btn').addEventListener('click', fetchAPOD);
/*document.getElementById('fetch-apod-btn').addEventListener('click', fetchAPOD);

document.getElementById('rovers-btn').addEventListener('click', () => {
  contentSection.innerHTML = '<h2>Rover Photos coming soon!</h2>';
});
document.getElementById('asteroids-btn').addEventListener('click', () => {
  contentSection.innerHTML = '<h2>Asteroid Tracker coming soon!</h2>';
});

// Fetch Astronomy Picture of the Day (APOD)
async function fetchAPOD() {
    const dateInput=document.getElementById("apod-date").value
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    if(dateInput){
        apiUrl+=`&date=${dateInput}`
    }
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayAPOD(data);
  } catch (error) {
    console.error('Error fetching APOD:', error);
    contentSection.innerHTML = '<p>Error fetching Astronomy Picture of the Day.</p>';
  }
}

// Display APOD
function displayAPOD(data) {
  contentSection.innerHTML = `
    <h2>${data.title}</h2>
    <img src="${data.url}" alt="${data.title}" style="max-width: 100%; height: auto;">
    <p>${data.explanation}</p>
  `;
}*/
document.getElementById('fetch-apod-btn').addEventListener('click', fetchAPOD);

async function fetchAPOD() {
  const dateInput = document.getElementById('apod-date').value; // Get selected date
  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  if (dateInput) {
    apiUrl += `&date=${dateInput}`; // Add date parameter if user selected one
  }

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayAPOD(data);
  } catch (error) {
    console.error('Error fetching APOD:', error);
    contentSection.innerHTML = '<p>Error fetching Astronomy Picture of the Day.</p>';
  }
}
