/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeToCheck) {

  var hour = timeToCheck.split(":")[0];
  var greeting = "";

  if (hour < 12 ) {
    greeting = "Good Morning";
  } else if (hour < 17) { 
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return greeting;
}


/* Write your implementation of displayMessage() */
function displayMessage(messageToDisplay) {
  let headerElement = document.getElementById("greeting");
  headerElement.innerText = messageToDisplay;
}