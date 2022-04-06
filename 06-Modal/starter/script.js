'use strict';
// document.querySelector('.show-modal').addEventListener('click', function () {

// }
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  // for (let i = 0; i < btnsOpenModal.length; i++) {
  //   btnsOpenModal[i].addEventListener('click', function () {
  //     modal.classList.remove('hidden');
  //     overlay.classList.remove('hidden');
  //   });
}

// btnsCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// btnsCloseModal.addEventListener('click', openModal);
// overlay.addEventListener('click', openModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// }
// });
