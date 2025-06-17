import { discover } from './discoverData.mjs';

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

const message = document.getElementById('visitorMessage');
const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  message.textContent = days < 1
    ? "Back so soon? Welcome!"
    : `You last visited ${days} day${days > 1 ? "s" : ""} ago.`;
}
localStorage.setItem('lastVisit', now);

const grid = document.getElementById('discoverGrid');

function displayDiscover(discover) {
  discover.forEach((item, index) => {
    const card = document.createElement("section");
    card.classList.add(`card${index + 1}`);
    card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img loading="lazy" src="${item.image}" alt="${item.name}">
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button>Learn More</button>
    `;
    grid.appendChild(card);
  });
}

displayDiscover(discover);
