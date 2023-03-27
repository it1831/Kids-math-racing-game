const option1 = document.getElementById("option1"),
  option2 = document.getElementById("option2"),
  option3 = document.getElementById("option3");
var answer = 0;

let right = 0;
let wrong = 0;

var correct = new Audio("../sounds/Correct.mp3");
var incorrect = new Audio("../sounds/Incorrect.mp3");


function generate_equation() {
  var Num1 = Math.floor(Math.random() * 13),
    Num2 = Math.floor(Math.random() * 13),
    dummyAnswer1 = Math.floor(Math.random() * 10),
    dummyAnswer2 = Math.floor(Math.random() * 10),
    allAnswers = [],
    switchAnswers = [];

  answer = eval(Num1 + Num2);

  document.getElementById("Num1").innerHTML = Num1;
  document.getElementById("Num2").innerHTML = Num2;


  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (i = allAnswers.length; i--;) {
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];
};


option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    generate_equation();
    correct.play();
    right++;
  }
  else {
    incorrect.play();
    wrong++;
  }
  document.getElementById("right").innerHTML = right;
  document.getElementById("wrong").innerHTML = wrong;
});

option2.addEventListener("click", function () {

  if (option2.innerHTML == answer) {
    generate_equation();
    correct.play();
    right++;
  }
  else {
    incorrect.play();
    wrong++;
  }
  document.getElementById("right").innerHTML = right;
  document.getElementById("wrong").innerHTML = wrong;
});

option3.addEventListener("click", function () {

  if (option3.innerHTML == answer) {
    generate_equation();
    correct.play();
    right++;
  }
  else {
    incorrect.play();
    wrong++;
  }
  document.getElementById("right").innerHTML = right;
  document.getElementById("wrong").innerHTML = wrong;
});

generate_equation()