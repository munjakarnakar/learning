function calculateRadius(lat1, lon1, lat2, lon2) {
    // Convert latitude and longitude from degrees to radians
    const radLat1 = (Math.PI * lat1) / 180;
    const radLon1 = (Math.PI * lon1) / 180;
    const radLat2 = (Math.PI * lat2) / 180;
    const radLon2 = (Math.PI * lon2) / 180;
  
    // Radius of the Earth in kilometers (mean value)
    const earthRadius = 6371; // Earth's radius in kilometers (you can also use 3958.8 for miles)
  
    // Haversine formula
    const dLat = radLat2 - radLat1;
    const dLon = radLon2 - radLon1;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(radLat1) * Math.cos(radLat2) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c; // Distance in kilometers
  
    return distance;
  }
  
  // Example usage:
//   const lat1 = 28.4100824; // Latitude of point 1 (e.g., city 1)
//   const lon1 = 77.3196933; // Longitude of point 1
  const lat1 = 28.3916692; // Latitude of point 1 (e.g., city 1)
  const lon1 = 77.3048957; // Longitude of point 1
  const lat2 = 28.3908897; // Latitude of point 2 (e.g., city 2)
  const lon2 = 77.2931527;  // Longitude of point 2
  
  const radius = calculateRadius(lat1, lon1, lat2, lon2);
  console.log(`The distance between the two points is ${radius.toFixed(2)} kilometers.`);
  