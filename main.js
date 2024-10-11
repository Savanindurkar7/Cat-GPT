let answers = ["meow", "Meoow" ,"eow" ,"Meeow", "mooww" ,"purrr"];

let inputBox = document.querySelector("#inputbox");
let ansDiv = document.querySelector("#qa");
let send = document.querySelector("#btn");
let i = 0;
let ans = '';

send.addEventListener('click', submit);

function submit() {
  let question = inputBox.value;
  let questionDiv = document.createElement("div");
  let answerDiv = document.createElement("div");

  questionDiv.innerHTML = `
    <div class="question">
      <img src="user-logo.jpg" alt="cat-logo.png">
      <p class="txt">${question}</p>
    </div>`;
  
  answerDiv.innerHTML = `
    <div class="answer">
      <img src="cat-logo.png" alt="">
      <p class="txt"></p>
    </div>`;

  ansDiv.appendChild(questionDiv);
  ansDiv.appendChild(answerDiv);

  // Set the initial random value for the number of iterations
  i = Math.floor(Math.random() * 3 + 2); // Random between 2 and 4
  ans = "Meoow";

  let interval = setInterval(() => {
    let text = document.querySelectorAll(".answer .txt");
    text[text.length - 1].innerHTML = ans + "!"; // Update last answer text

    ans = ans + " " + answers[Math.floor(Math.random() * answers.length)];

    if (i > 0) {
      i--;
    } else {
      clearInterval(interval);
    }
  }, 300);

  inputBox.value = ""; // Clear input after submit
}
