document.getElementById('forgot').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
})

// document.querySelector('.btn-otp').addEventListener('click', function() {
//   document.querySelector('.bg-modal').style.display = 'none';
//   window.location.href = 'Otp page/otp.html'
// })