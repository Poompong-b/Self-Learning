//Challenge 1 : Your Age in Days

function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var ageInDays = (new Date().getFullYear() - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageInDays + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("container-answer").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
