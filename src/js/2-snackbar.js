import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const inputEL = document.querySelector('input[name="delay"]');
const fullfilledEl = document.querySelector('input[name="state"]');

function onFormSubmit(event) {
  event.preventDefault();
  const isSuccess = fullfilledEl.checked ? true : false;
  const promice = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(inputEL.value);
      } else {
        reject(inputEL.value);
      }
    }, inputEL.value);
  });

  promice
    .then(delay => {
      iziToast.show({
        title: '✅',
        message: ` Fulfilled promise in ${delay}ms`,
        backgroundColor: 'green',
        color: 'white',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.show({
        title: '🚫',
        message: ` Rejected promise in ${delay}ms`,
        backgroundColor: 'red',
        color: 'white',
        position: 'topRight',
      });
    });
}
formEl.addEventListener('submit', onFormSubmit);
