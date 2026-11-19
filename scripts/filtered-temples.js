// Footer - current year + last modified
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.classList.toggle("open");
});

// Temple data array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
  },
  {
    templeName: "Manila Philippines",
    location: "Quezon City, Philippines",
    dedicated: "1984, September, 25",
    area: 26683,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
  },
  {
    templeName: "Cebu Philippines",
    location: "Cebu City, Philippines",
    dedicated: "2010, June, 13",
    area: 29556,
    imageUrl: "https://content.churchofjesuschrist.org/acp/bc/cp/Philippines/Cebu%20Philippines%20Temple.jpg"
  }
];

// Where cards will go + main heading
const templeContainer = document.querySelector("#temple-cards");
const mainHeading = document.querySelector("main h2");

// Create one temple card
function createTempleCard(temple) {
  const card = document.createElement("section");
  card.classList.add("temple-card");

  card.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p><span class="label">Location:</span> ${temple.location}</p>
    <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
    <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
  `;

  return card;
}

// Display temples - loop through array
function displayTemples(templeList) {
  templeContainer.innerHTML = "";
  templeList.forEach((temple) => {
    const card = createTempleCard(temple);
    templeContainer.appendChild(card);
  });
}

// Filter functions
function filterTemples(filter) {
  let filteredTemples = temples;

  if (filter === "old") {
    filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) < 1900);
  } else if (filter === "new") {
    filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) > 2000);
  } else if (filter === "large") {
    filteredTemples = temples.filter((temple) => temple.area > 90000);
  } else if (filter === "small") {
    filteredTemples = temples.filter((temple) => temple.area < 10000);
  }

  displayTemples(filteredTemples);
}

// Nav links - filter + change heading + active class
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    navLinks.forEach((a) => a.classList.remove("active"));
    link.classList.add("active");

    mainHeading.textContent = link.textContent;

    filterTemples(link.id);

    nav.classList.remove("open");
    menuBtn.classList.remove("open");
  });
});

// Show all temples on first load
displayTemples(temples);