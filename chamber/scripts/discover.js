const grid = document.getElementById('discoverGrid')
 async function getDiscoverData() {
    try{
        const response = await fetch('data/discover.json')
        if (!response.ok) throw new Error("Network response was not ok");

        const discover = await response.json();
        displayDiscover(discover);    
    }
    catch (error) {
        console.error("Failed to load items:", error);
      }
}
function displayDiscover(discover){
    const container = document.querySelector('.cards')
    discover.forEach(discover => {
        const card = document.createElement("section");
        card.innerHTML = `
          <h2>${discover.name}</h2>
          <figure><img src="${discover.image}" alt="${discover.name}"></figure>
          <address>${discover.address}</address>
          <p>${discover.description}</p>
          
        `;
        container.appendChild(card);
      });
    }
getDiscoverData()

const message = document.getElementById('visitorMessage');
const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit')

if (!lastVisit) {
    message.textContent= 'Welcome! Let us Know if you have any problem.';   
}
else {
    const days =Math.floor((now-lastVisit)/(1000*60**60*24))

    if(days < 1){
        message.textContent= ' Back So Soon Welcome!.';
    }
    else{
        message.textContent= `You Last Visited ${days} days ${days>1 ? 's': ''}ago.`;
    }
}

localStorage.setItem('lastVisit' , now);