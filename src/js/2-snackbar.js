import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const inputEL = document.querySelector('input[name="delay"]');
const fullfilledEl = document.querySelector('input[name="state"]');

function onFormSubmit(event) {
  event.preventDefault();
  const isSuccess = fullfilledEl.checked ? true : false;
  const promice = new Promise((resolve, reject) => {
    if (isSuccess) {
      resolve(console.log(`✅ Fulfilled promise in ${inputEL.value}ms`));
    } else {
      reject(console.log(`❌ Rejected promise in ${inputEL.value}ms`));
    }
  });

  setTimeout(() => {
    promice
      .then(() => {
        iziToast.show({
          title: '✅',
          message: ` Fulfilled promise in ${inputEL.value}ms`,
          backgroundColor: 'green',
          color: 'white',
          position: 'topRight',
        });
      })
      .catch(() => {
        iziToast.show({
          title: '❌',
          message: ` Rejected promise in ${inputEL.value}ms`,
          backgroundColor: 'white',
          color: 'white',
          position: 'topRight',
        });
      });
  }, inputEL.value);
}
formEl.addEventListener('submit', onFormSubmit);
