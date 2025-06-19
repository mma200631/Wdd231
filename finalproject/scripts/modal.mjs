export function openModal(vehicle) {
    const modal = document.getElementById('vehicleModal');
    const modalContent = modal.querySelector('#modalDetails');
  
    modalContent.innerHTML = `
      <h2>${vehicle.make} ${vehicle.model}</h2>
      <img src="${vehicle.image}" alt="${vehicle.make} ${vehicle.model}" loading="lazy">
      <ul>
        <li><strong>Year:</strong> ${vehicle.year}</li>
        <li><strong>Price:</strong> $${vehicle.price.toLocaleString()}</li>
        <li><strong>Mileage:</strong> ${vehicle.mileage.toLocaleString()} miles</li>
      </ul>
    `;
  
    modal.classList.remove('hidden');
  
    document.getElementById('closeModal').addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
  