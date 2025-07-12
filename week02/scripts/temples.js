
document.getElementById('year').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = document.lastModified;

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu').querySelector('ul');

hamburgerBtn.addEventListener('click', function() {
  navMenu.classList.toggle('show');


  if (hamburgerBtn.textContent === '☰') {
    hamburgerBtn.textContent = '✖';
  } else {
    hamburgerBtn.textContent = '☰';
  }
});
