// Footer: show current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Footer: show last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Weather: static values for wind chill
const temp = 8;
const wind = 12;

// Weather: get wind chill span
const windChillElement = document.getElementById("windchill");

// Function: calculate wind chill formula
function calculateWindChill(t, v) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

// Check: only calculate if temp <= 10 and wind > 4.8
if (temp <= 10 && wind > 4.8) {
  windChillElement.textContent = calculateWindChill(temp, wind) + " °C";
} else {
  // Else: show N/A
  windChillElement.textContent = "N/A";
}