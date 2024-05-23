//using selectors inside the element
// traversing the dom
const buttons = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll('.question');
 
//
// buttons.forEach( (button) => { 
//     button.addEventListener('click', (e) => {
//   const showQuestion = e.currentTarget.parentElement.parentElement;
//   showQuestion.classList.toggle("show-text");
//     })
// })

    questions.forEach((question) =>  {
        const btn = question.querySelector(".question-btn");
    
        btn.addEventListener("click", function () {
        
      
          questions.forEach( (questionItem) => {
            if (questionItem !== question) {
              questionItem.classList.remove("show-text");
            }
          });
      
          question.classList.toggle("show-text");
        });
      });
