const btnSubmit = document.querySelector(".btn-submit");
const main = document.querySelector(".main-section");
const popup = document.querySelector(".popup");
const number = document.querySelector(".number");
const circles = document.querySelectorAll("li.circle");

let spanNumber = 0;
//for making the chosen number in circle glowy
circles.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    refreshCircles(circles);
    e.target.setAttribute("id", "choosen");
    spanNumber = e.target.textContent;
  });
});
//for making all numbers in circles not glowy
function refreshCircles(array) {
  array.forEach((element) => {
    if ((element.id = "choosen")) {
      element.removeAttribute("id");
    }
  });
}

btnSubmit.addEventListener("click", () => {
  main.classList.add("hide");
  main.classList.remove("pop-up");
  popup.classList.add("pop-up");
  popup.classList.remove("hide");
  number.textContent = spanNumber;
});
