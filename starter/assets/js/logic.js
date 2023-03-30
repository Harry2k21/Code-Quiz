// document.addEventListener('clcik');{
//     console.log("Start");
// }
// var start = false
var start = document.querySelector("#start")
if(start == true){
    display(question1)
}


start.addEventListener("click", question);{
    console.log("test");
}

document.querySelector("#start").addEventListener("click", func1);

// hides start screen + starts timer
function func1() {
    setTime()
    questionOne();

    document.getElementById("start").innerHTML = "Clicked";
    document.getElementById("start-screen").style.display = "none";
    // document.getElementById("start").innerHTML = "Start";
}

//Timer of the game
var timeEl = document.getElementById("time")
var timerCount = 45;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timerCount--;
      timeEl.textContent = timerCount + " seconds left till game ends.";
  
      if(timerCount === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }

var q1 = document.getElementById("question-title");
var choices = document.getElementById("choices");

function questionOne () {
    // document.createElement(q1);
    // q1.textContent = ("Hello");
    // console.log(question[0])
    // q1.setAttribute("data-letter", q1)
    q1.textContent = question[0];
    document.body.append(q1);
    choices.textContent = question[0];
    // document.createElement("button");
    // para.innerText =
    choices.setAttribute = (choices, ".button")
    // choices.classList.add("button");
    document.body.append(choices);
}
questionOne();

function sendMessage() {
    console.log("End Game");
    
    document.getElementById("end-screen").style.display = "contents";
}