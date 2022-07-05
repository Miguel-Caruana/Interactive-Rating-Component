let onceClicked = false;
/* .circle_button:active {
    background-color: hsl(25, 97%, 53%);
    color: white;
} */
const changeColorBtns = document.querySelectorAll(".circle_button");
// for (let i = 0; i < changeColorBtns.length; i++) {
//   for (let b = 0; b < changeColorBtns.length; b++) {
//     changeColorBtns[i].addEventListener("click", () => {
//       changeColorBtns[b].classList.remove("active");
//       changeColorBtns[i].classList.add("active");
//       onceClicked = true;
//     });
//   }
// }

changeColorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if(document.querySelector('.active') !== null) document.querySelector('.active').classList.remove('active')
    btn.classList.add('active')
    onceClicked = true;
  })
});

const submitButton = document.querySelector(".submit_button");
const card1State = document.getElementById("card1");
const card2State = document.getElementById("card2");
const thankyouMessage = document.getElementById("thankyouMessage");

submitButton.addEventListener("click", () => {
  if (
    onceClicked
    // btn1.classList.contains("active")  ||
    // btn2.classList.contains("active")  ||
    // btn3.classList.contains("active")  ||
    // btn4.classList.contains("active")  ||
    // btn5.classList.contains("active") 
  ) {
    for (let i = 0; i < changeColorBtns.length; i++) {
      if (changeColorBtns[i].classList.contains("active")) {
        thankyouMessage.innerHTML = `You selected ${Number([i]) + 1} out of 5`;
      }
      card1State.classList.add("cardactive");
      card2State.classList.remove("cardactive");
    }
  } else {
    alert("Please Select a button!")
  }

});
