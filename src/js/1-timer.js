import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const refs = {
  button: document.querySelector('button[data-start]'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate = null;

function buttonDisable() {
  refs.button.classList.add('disabled');
  refs.button.disabled = true;
}

function buttonEnable() {
  refs.button.classList.remove('disabled');
  refs.button.disabled = false;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future',
        backgroundColor: 'red',
        color: '#ffffff',
        position: 'topRight',
      });
      buttonDisable();
    } else {
      userSelectedDate = selectedDates[0];
      buttonEnable();
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

buttonDisable();
refs.button.addEventListener('click', () => {
  const interval = setInterval(() => {
    const timer = userSelectedDate - new Date();
    const time = convertMs(timer);
    if (
      time.seconds === 0 &&
      time.minutes === 0 &&
      time.hours === 0 &&
      time.days === 0
    ) {
      clearInterval(interval);
      refs.input.disabled = false;
      buttonEnable();
    }
    refs.days.textContent = addLeadingZero(time.days);
    refs.hours.textContent = addLeadingZero(time.hours);
    refs.minutes.textContent = addLeadingZero(time.minutes);
    refs.seconds.textContent = addLeadingZero(time.seconds);
    buttonDisable();
    refs.input.disabled = true;
  }, 1000);
});
flatpickr('input', options);
