'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  console.log('CLOSE button clicked!');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Button clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked!');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

// CLEANER, BETTER VERSION OF 19-25
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// btnCloseModal.addEventListener('click', function () {
//   console.log('Button close clicked');
//   closeModal();
// });

// SAME THING AS 22-25.. BETTER CODE
btnCloseModal.addEventListener('click', closeModal);

// overlay.addEventListener('click', function () {
//   closeModal();
// });

//SAME THING AS 30-32... BETTER CODE
overlay.addEventListener('click', closeModal);

// will happen when we press any key on the keyboard
document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('ESCAPE was pressed');
    closeModal();
  }
});
