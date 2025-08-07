document.getElementById('year').textContent = new Date().getFullYear();
if (localStorage.getItem('submissionCount')) {
  let count = parseInt(localStorage.getItem('submissionCount'));
  localStorage.setItem('submissionCount', count + 1);
} else {
  localStorage.setItem('submissionCount', 1);
}