// get current year for footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;