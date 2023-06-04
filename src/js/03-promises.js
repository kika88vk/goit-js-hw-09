import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


// Notiflix.Notify.success('Все чудово!');
// Notiflix.Notify.failure('Відмова');
// Notiflix.Notify.warning('Попередження');
// Notiflix.Notify.info('Інфо');
