export function saveLastViewed(vehicleId) {
    localStorage.setItem('lastViewedVehicle', vehicleId);
  }
  
  export function getLastViewed() {
    return localStorage.getItem('lastViewedVehicle');
  }
  