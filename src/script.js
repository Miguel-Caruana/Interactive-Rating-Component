
/* .circle_button:active {
    background-color: hsl(25, 97%, 53%);
    color: white;
} */
const changeColorBtns = document.getElementsByClassName("circle_button");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const arrayofBtns = [btn1, btn2, btn3, btn4, btn5];

for (let i = 0; i < changeColorBtns.length; i++) {
  for (let b = 0; b < arrayofBtns.length; b++) {
    changeColorBtns[i].addEventListener("click", () => {
      arrayofBtns[b].classList.remove("active");
      changeColorBtns[i].classList.add("active");
    });
  }
}
const submitButton = document.querySelector(".submit_button");
const card1State = document.getElementById("card1");
const card2State = document.getElementById("card2");
const thankyouMessage = document.getElementById("thankyouMessage");

submitButton.addEventListener("click", () => {
  for(let i = 0; i < arrayofBtns.length; i++ ) {
    if(arrayofBtns[i].classList.contains('active')) {
      thankyouMessage.innerHTML = `You selected ${Number([i]) + 1} out of 5`
    }
  }
  card1State.classList.add("cardactive");
  card2State.classList.remove("cardactive");
});
