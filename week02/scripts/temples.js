document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const btn = document.getElementById('hamburgerBtn');
const navList = document.querySelector('#navMenu ul');

btn.addEventListener('click', function() {
  navList.classList.toggle('show');
  btn.textContent = btn.textContent === '☰' ? '✖' : '☰';
});
