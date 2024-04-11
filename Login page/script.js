document.getElementById('forgot').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
})