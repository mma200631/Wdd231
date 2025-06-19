// inventory.mjs
import { fetchVehicles } from './data.mjs';
import { displayVehicles } from './display.mjs';
import { openModal } from './modal.mjs';
import { saveLastViewed } from './storage.mjs';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.querySelector('#inventory-container');
  const filterForm = document.querySelector('#inventory-filter-form');
  const modal = document.getElementById('vehicleModal');
  const closeModalBtn = document.getElementById('closeModal');

  let allVehicles = await fetchVehicles();

  displayVehicles(allVehicles, container);

  // Handle filter form
  filterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const make = document.querySelector('#make').value;
    const maxPrice = parseInt(document.querySelector('#price').value);

    const filtered = allVehicles.filter(vehicle => {
      const matchMake = make ? vehicle.make === make : true;
      const matchPrice = !isNaN(maxPrice) ? vehicle.price <= maxPrice : true;
      return matchMake && matchPrice;
    });

    displayVehicles(filtered, container);
  });

  // Handle modal events
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('details-btn')) {
      const vehicleId = parseInt(e.target.dataset.id);
      const vehicle = allVehicles.find(v => v.id === vehicleId);
      openModal(vehicle);
      saveLastViewed(vehicleId);
    }
  });

  // Close modal logic
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});
