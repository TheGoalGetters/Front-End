document.querySelector('.cancelBtn').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
})

// OTP
const inputs = document.querySelectorAll("input.inputOtp"),
button = document.querySelector("a.verifyBtn");


  
// iterate over all inputs
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
    nextInput = input.nextElementSibling,
    prevInput = input.previousElementSibling;

    // if value has more than one character clear it
    if(currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }
    // move to the next input and focus on it
    if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }
    // if  backspace key is pressed
    if(e.key === "Backspace"){
      // iterate all over inputs again
      inputs.forEach((input, index2) => {
        if(index1 <= index2 && prevInput){
          input.setAttribute("disabled", true);
          currentInput.value = "";
          prevInput.focus();
        }
      })
    }

    if(!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
});

// focus the first input box on window load
window.addEventListener("load", () => inputs[0].focus())



// Timer on the otp box
const startingMinutes = 1;
let time = startingMinutes * 60

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000)

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;

  time = time< 0 ? 0 : time
}