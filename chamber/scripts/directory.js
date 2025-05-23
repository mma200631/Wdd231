const cards = document.querySelector('#cards');
const gridBtn = document.getElementById('gridview');
const listBtn = document.getElementById('listview');

async function getMembersData() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Failed to load members:', error);
    }
}

function displayMembers(members) {
    cards.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" />
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${membershipLevelText(member.membershipLevel)}</p>
            <p>${member.description}</p>
        `;

        cards.appendChild(card);
    });
}

function membershipLevelText(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

// Toggle view logic
gridBtn.addEventListener('click', () => {
    cards.classList.add('grid');
    cards.classList.remove('list');
    gridBtn.setAttribute('aria-pressed', 'true');
    listBtn.setAttribute('aria-pressed', 'false');
});

listBtn.addEventListener('click', () => {
    cards.classList.add('list');
    cards.classList.remove('grid');
    listBtn.setAttribute('aria-pressed', 'true');
    gridBtn.setAttribute('aria-pressed', 'false');
});

// Last modified
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

window.addEventListener('DOMContentLoaded', getMembersData);
