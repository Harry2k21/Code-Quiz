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

// hides start screen
function func1() {
    document.getElementById("start").innerHTML = "Clicked";
    document.getElementById("start-screen").style.display = "none";
    // document.getElementById("start").innerHTML = "Start";
}

//timer
var timeEl = document.getElementById("time")
var timerCount = 60;

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

setTime();
function sendMessage() {
    console.log("End Game");
}