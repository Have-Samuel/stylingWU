let planButtons = document.querySelectorAll('.plan button');
let modal = document.querySelector('.modal')
let popup = document.querySelector('.backdrop');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton =document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav')

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener('click', function() {
    // popup.style.display = 'block';
    // modal.style.display = 'block';
    modal.classList.add('open');
    popup.classList.add('open')
  });
}

popup.addEventListener('click', function() {
  // mobileNav.style.display = 'none'; 
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
