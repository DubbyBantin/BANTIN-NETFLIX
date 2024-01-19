const showAnswer = document.querySelector(".answer");
const menu = document.querySelector(".question");
const backGround = document.querySelector(".description6");

menu.addEventListener("click", function () {
  if (!showAnswer.classList.contains("clicked")) {
    showAnswer.classList.add("clicked");
  } else {
    showAnswer.classList.remove("clicked");
  } ;

  if (!menu.classList.contains("size")) {
    menu.classList.add("size")
  } else {menu.classList.remove("size")
  };

  if(!backGround.classList.contains("length")){
    backGround.classList.add("length");
  } else {backGround.classList.remove("length")}
});