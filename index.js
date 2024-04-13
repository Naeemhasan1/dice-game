var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImage1Source = "./images/" + randomImage1;
var image1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomImage1Source);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImage2Source = "./images/" + randomImage2;
var image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImage2Source);

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function () {
  location.reload();
});

var text = [
  "tor kopale soni ache",
  "tomare kintu futaia felmu",
  "chol jai pat khete",
  "tor cokh duita khuila marbel khelum",
];
var textPosition = Math.floor(Math.random() * 4);
var message = text[textPosition];

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Naeem win!!";
  document.querySelector("h2").innerHTML = "Thak kaindo na billu!! 😎";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Billu win!!🚩";
  document.querySelector("h2").innerHTML = message;
} else {
  document.querySelector("h1").innerHTML = "Draw!!";
  document.querySelector("h2").innerHTML = "🤝";
}
