//Dropdown Event
var dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", btnColorChange);

//Random Event
var randomChoice = document.querySelector('option[value = "random"]');
console.log(randomChoice);
randomChoice.addEventListener("hover", btnColorChange);

//Button
var buttons = document.getElementsByTagName("button");
buttons = Array.from(buttons);

//Get Button Background
var btnBackgroundColor = buttons.map((element) =>
  window.getComputedStyle(element, null).getPropertyValue("background-color")
);
var btnColor = buttons.map((element) =>
  window.getComputedStyle(element, null).getPropertyValue("color")
);
//All Background Colors
backgroundColorPreset = ["blue", "red", "yellow", "green"];

function btnColorChange(e) {
  //Set Color for each choices
  var color = selectColor(e.target.value);
  console.log(e.target.value);

  //Random Backgroun Colors
  if (e.target.value === "random") {
    randomBackgroundColor();
  }

  //Reset background colors
  else if (e.target.value === "reset") {
    resetBackgroundColor(btnBackgroundColor, btnColor);
  } else {
    //Set background colors
    setBackgroundColor(color);
  }
}

function randomBackgroundColor() {
  for (let element of buttons) {
    let randomColor = selectColor(
      backgroundColorPreset[Math.floor(Math.random() * 4)]
    );
    element.style.background = randomColor[0];
    element.style.color = randomColor[1];
  }
}

function selectColor(e) {
  var colorDatabase = {
    blue: ["blue", "white"],
    red: ["red", "white"],
    yellow: ["yellow", "black"],
    green: ["green", "white"],
  };

  return colorDatabase[e];
}

function setBackgroundColor(color) {
  for (let element of buttons) {
    console.log(color);
    element.style.background = color[0];
    element.style.color = color[1];
  }
}

function resetBackgroundColor(originalBackgroundColor, originalColor) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.background = originalBackgroundColor[i];
    buttons[i].style.color = originalColor[i];
  }
}
