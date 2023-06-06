import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const form = document.querySelector(".form");
const btn = document.querySelector("button");
const inputel = document.querySelector("input");
const FORM_KEY = "form-state";

form.addEventListener("submit", formSubmit);
// form.addEventListener("input", input);

// let formData = JSON.parse(localStorage.getItem(FORM_KEY)) || {};


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    } else {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    }
  })
};

// function input(event) {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(FORM_KEY, JSON.stringify(formData));
// };

function formSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { delay, step, amount }
  } = evt.currentTarget;

  let amountArr = [...amount.value];
  for (let i = 0; i < amountArr.length; i++) {
    let position = amountArr[i];

    createPromise(position, delay.value)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        return delay + step.value;
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  };





  evt.currentTarget.reset();
  // localStorage.removeItem(FORM_KEY);
};


// Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// Notiflix.Notify.warning('Попередження');
// Notiflix.Notify.info('Інфо');
