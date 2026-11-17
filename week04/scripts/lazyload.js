// lazyload.js - WDD 131 Week 04

// Current year
document.querySelector('#currentyear').textContent = new Date().getFullYear();

// Last modified date
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;