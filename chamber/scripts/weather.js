const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=13.4833&lon=-88.1833&units=imperial&appid=53770a2b19a1c4d95b273ab7b2f2032c';
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function displayWeather(data) {
  document.getElementById('current-temp').textContent = data.list[0].main.temp.toFixed(1);
  document.getElementById('weather-desc').textContent = data.list[0].weather[0].description;

  const forecastEl = document.getElementById('forecast');
  forecastEl.innerHTML = '';
  let dayCount = 0;

  for (let i = 0; i < data.list.length && dayCount < 3; i++) {
    if (data.list[i].dt_txt.includes("12:00:00")) {
      const temp = data.list[i].main.temp.toFixed(1);
      const date = new Date(data.list[i].dt_txt).toLocaleDateString("en-US", { weekday: 'short' });
      forecastEl.innerHTML += `<p><strong>${date}:</strong> ${temp}°F</p>`;

      dayCount++;
    }
  }
}

apiFetch();
