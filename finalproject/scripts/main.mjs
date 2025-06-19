import { fetchVehicles } from './data.mjs';
import { displayVehicles } from './display.mjs';
import { openModal } from './modal.mjs';
import { saveLastViewed } from './storage.mjs';

document.addEventListener('DOMContentLoaded', async () => {
  const vehicleContainer = document.querySelector('#filtered-results');
  const filterForm = document.querySelector('#filter-form');
  let allVehicles = await fetchVehicles();

  // Show 6 featured vehicles
  const featuredContainer = document.querySelector('#featured-cars');
  const featuredVehicles = allVehicles.slice(0, 3);
  displayVehicles(featuredVehicles, featuredContainer);

  // Handle filtering
  
  filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const make = document.querySelector('#make').value;
    const maxPrice = parseInt(document.querySelector('#price').value);
    const filteredContainer = document.querySelector('#filtered-results');
  
    const filtered = allVehicles.filter(vehicle => {
      const matchMake = make ? vehicle.make === make : true;
      const matchPrice = !isNaN(maxPrice) ? vehicle.price <= maxPrice : true;
      return matchMake && matchPrice;
    });
  
    displayVehicles(filtered, filteredContainer);
  });
  
  // Handle modal open on details button
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('details-btn')) {
      const vehicleId = parseInt(e.target.dataset.id);
      const vehicle = allVehicles.find(v => v.id === vehicleId);
      openModal(vehicle);
      saveLastViewed(vehicleId);
    }
  });
});
