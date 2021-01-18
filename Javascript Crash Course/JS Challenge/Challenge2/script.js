var generateButton = document.getElementsByClassName("generate")[0];
var resetButton = document.getElementsByClassName("remove")[0];
var catContainer = document.getElementsByClassName("cat-container")[0];

//Add Event Listener
generateButton.addEventListener("click", generateCat);
resetButton.addEventListener("click", reset);

function generateCat() {
  let catPic = document.createElement("img");
  catPic.src =
    "https://i.pinimg.com/236x/d0/59/89/d05989c0caa33fed025fbdb90b09a852.jpg";
  //Styling Image
  catPic.style.boxShadow = "5px 5px 20px black";
  catPic.style.margin = "10px";

  catContainer.appendChild(catPic);
  catContainer.style.border = "2px solid black";
}

function reset() {
  catContainer.innerHTML = "";
  catContainer.style.border = "0px";

  console.log("reset");
}
