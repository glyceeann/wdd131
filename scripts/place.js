// place.js - WDD 131 Country Page

// Footer: get current year element
const currentYear = document.querySelector("#currentyear");
// Footer: show current year
currentYear.textContent = new Date().getFullYear();

// Footer: get last modified element
const lastModified = document.querySelector("#lastModified");
// Footer: show last modified date
lastModified.textContent = document.lastModified;

// Weather: static temperature in °C (metric)
const temperature = 8;
// Weather: static wind speed in km/h (metric)
const windSpeed = 12;

// Weather: show temperature
document.querySelector("#temp").textContent = `${temperature} °C`;
// Weather: show wind speed
document.querySelector("#wind").textContent = `${windSpeed} km/h`;

// Function: calculate wind chill using metric formula
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

// Function: return wind chill if conditions are met, else "N/A"
function getWindChill() {
  // Check metric conditions: temp <= 10°C AND wind > 4.8 km/h
  if (temperature <= 10 && windSpeed > 4.8) {
    // Conditions met - return calculated value
    return `${calculateWindChill(temperature, windSpeed)} °C`;
  } else {
    // Conditions not met - return N/A
    return "N/A";
  }
}

// Weather: show wind chill result
document.querySelector("#windchill").textContent = getWindChill();