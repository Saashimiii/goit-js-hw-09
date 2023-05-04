import notiflix from 'notiflix';
const form = document.querySelector('.form');
const submitBtn = form.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
//

form.addEventListener('submit', onClick);

function onClick(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  if ((delay.value < 0 || step.value < 0 || amount.value < 0)) {
    notiflix.Report.failure(
      'You enter a negative number!',
      'Please enter valid value',
      {
        position: 'center-top',
        titleFontSize: '30px',
      }
    );
  } else {
    for (let i = 1; i <= amount.value; i += 1) {
      createPromise(i, Number(delay.value) + Number(step.value * (i - 1)))
        .then(message => {
          notiflix.Notify.success(message);
        })
        .catch(message => {
          notiflix.Notify.failure(message);
        });
    }
  }
}
