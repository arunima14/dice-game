var randomNumber1=Math.floor(Math.random()*6)+1;
var image="dice"+randomNumber1+".png";
var imageSource="images/"+ image;
document.querySelectorAll(".img1")[0].setAttribute("src",imageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var image="dice"+randomNumber2+".png";
var imageSource="images/"+ image;
document.querySelectorAll(".img2")[0].setAttribute("src",imageSource);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player1 Wins";
}
if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player2 Wins 🚩";
}
