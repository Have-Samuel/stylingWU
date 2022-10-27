/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable space-before-function-paren */
const planButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const popup = document.querySelector('.backdrop');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener('click', function() {
    modal.classList.add('open');
    popup.classList.add('open');
  });
}

popup.addEventListener('click', function() {
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
  // popup.style.display = 'none';
  // modal.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  }
  popup.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = 'block';
  // popup.style.display = 'block';
  mobileNav.classList.add('open');
  popup.classList.add('open');
});
