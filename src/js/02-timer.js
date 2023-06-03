import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};

const calendarFP = flatpickr(inputEl, options);

// Notiflix.Notify.success('Все чудово!');
// Notiflix.Notify.failure('Відмова');
// Notiflix.Notify.warning('Попередження');
// Notiflix.Notify.info('Інфо');

btnStart.addEventListener("click", onClick);

function onClick() {
    // Notiflix.Notify.success('Все чудово!');
    // console.log("Great!")
    window.alert("Please choose a date in the future");
}