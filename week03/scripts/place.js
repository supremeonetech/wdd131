
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const temperature = parseFloat(document.getElementById('temperature').textContent);
const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

function calculateWindChill(tempF, speedMph) {
  return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speedMph, 0.16)) + (0.4275 * tempF * Math.pow(speedMph, 0.16));
}

let windChillValue = 'N/A';

if (temperature <= 50 && windSpeed > 3) {
  windChillValue = calculateWindChill(temperature, windSpeed).toFixed(1) + ' °F';
}

document.getElementById('windChill').textContent = windChillValue;
