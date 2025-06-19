export async function fetchVehicles() {
    try {
      const response = await fetch('data/vehicle.json');
      if (!response.ok) throw new Error('Failed to fetch vehicles data');
      return await response.json();
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      return [];
    }
  }
  