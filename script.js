'use strict';

const modal = document.querySelector('.modal');

const openModal = document.querySelectorAll('.show-modal');

const closeModal = document.querySelector('.close-modal');

const overlay = document.querySelector('.overlay');

const openMod = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeMod = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (const x of openModal) {
  x.addEventListener('click', openMod);
}

closeModal.addEventListener('click', closeMod);

overlay.addEventListener('click', closeMod);

document.addEventListener('keydown', function (e) {
  //   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeMod();
  }
});
