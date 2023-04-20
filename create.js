const rideSelect = document.getElementById('ride');
const locationInput = document.getElementById('location-input');

rideSelect.addEventListener('change', () => {
  if (rideSelect.value === 'carpool') {
    locationInput.style.display = 'block';
  } else {
    locationInput.style.display = 'none';
  }
});
