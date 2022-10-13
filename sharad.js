var popup = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var planButtons = document.querySelectorAll('.plan button');


for(let i = 0; i < planButtons.length; i++) {
  document.addEventListener('click', function() {
    popup.style.display = 'block';
    modal.style.display = 'block';
  })
}

// console.dir(planButtons);

// popup.style.display = 'block';

