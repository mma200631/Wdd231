async function loadMembers() {
    try {
      const response = await fetch('data/members.json');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      
      const members = await response.json(); // directly an array
      console.log("All members:", members);
  
      // Assuming membershipLevel: 3 = Gold, 2 = Silver (you can adjust)
      const filtered = members.filter(m => m.membershipLevel === 3 || m.membershipLevel === 2);
      console.log("Filtered members:", filtered);
  
      const spotlights = getRandomMembers(filtered, 3);
      console.log("Spotlights:", spotlights);
  
      displaySpotlights(spotlights);
  
    } catch (error) {
      console.error("Error loading members:", error);
    }
  }
  
  function getRandomMembers(members, count) {
    let shuffled = [...members].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  function displaySpotlights(members) {
    const container = document.getElementById("spotlight-cards");
    container.innerHTML = '';
    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <p><strong>${membershipLevelName(member.membershipLevel)} Member</strong></p>
      `;
      container.appendChild(card);
    });
  }
  
  function membershipLevelName(level) {
    switch(level) {
      case 3: return "Gold";
      case 2: return "Silver";
      case 1: return "Bronze";
      default: return "Member";
    }
  }
  
  loadMembers();
  