let planButtons = document.querySelectorAll('.plan button');
let modal = document.querySelector('.modal')
let popup = document.querySelector('.backdrop');

for(let i = 0; i < planButtons.length; i++) {
  document.addEventListener('click', function() {
    popup.style.display = 'block';
    modal.style.display = 'block';
  })
}
