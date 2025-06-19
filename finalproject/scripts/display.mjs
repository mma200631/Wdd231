export function displayVehicles(vehicles, container) {
    container.innerHTML = '';
    vehicles.forEach(vehicle => {
      const card = document.createElement('div');
      card.classList.add('vehicle-card');
  
      card.innerHTML = `
        <img src="${vehicle.image}" alt="${vehicle.make} ${vehicle.model}" loading ="lazy">
        <h3>${vehicle.make} ${vehicle.model}</h3>
        <p><strong>Year:</strong> ${vehicle.year}</p>
        <p><strong>Price:</strong> $${vehicle.price.toLocaleString()}</p>
        <p><strong>Mileage:</strong> ${vehicle.mileage.toLocaleString()} miles</p>
        <button class="details-btn" data-id="${vehicle.id}">Details</button>
      `;
  
      container.appendChild(card);
    });
  }
  