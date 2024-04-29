const readMoreBtn = document.querySelector('.more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('show-more');
  if(readMoreBtn.innerText === 'More') {
    readMoreBtn.innerText = 'Less'
  } else {
    readMoreBtn.innerText = 'More'
  }
})

// const learnMoreBtn = document.querySelector('.learnmore-btn');
// const learnMoreText = document.querySelector('.text');

// learnMoreBtn.addEventListener('click', (e) => {
//   text.classList.toggle('show-more');
//   if(readMoreBtn.innerText === 'More') {
//     readMoreBtn.innerText = 'Less'
//   } else {
//     readMoreBtn.innerText = 'More'
//   }
// })

const parentContainer = document.querySelector('.body');


parentContainer.addEventListener('click', event => {

  const current = event.target;

  const isReadMoreBtn = current.className.includes('learnmore-btn');

  if(!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector('.read-more-text');

  currentText.classList.toggle('read-more-text--show');

  // current.textContent = current.textContent.includes('Learn More') ? "Read Less" : "Learn More";
})