const mainquestion = document.querySelectorAll(".question");

mainquestion.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    mainquestion.forEach(function (eachQuetionItem) {
      if (eachQuetionItem !== question) {
        eachQuetionItem.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
