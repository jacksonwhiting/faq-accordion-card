const questions = document.querySelectorAll('.js-question-container');
const answers = document.querySelectorAll('.faq__answer');

questions.forEach(question => {
   question.addEventListener('click', e => {
      let parentDiv = e.target.closest('div');
      let answer = parentDiv.nextElementSibling;
      let header = parentDiv.firstElementChild;
      let arrow = parentDiv.querySelector('#js-arrow');

      if (arrow.style.transform === 'rotate(180deg)') {
         arrow.style.transform = 'rotate(360deg)';
      } else {
         arrow.style.transform = 'rotate(180deg)';
      }

      if (header.classList.contains('js-bold')) {
         header.classList.remove('js-bold');
      } else {
         header.classList.add('js-bold');
      };
      if (answer.classList.contains('js-hide')) {
         answer.classList.remove('js-hide');
      } else {
         answer.classList.add('js-hide');
      }
   });
})