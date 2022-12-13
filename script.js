
var rnNo1 = Math.floor(Math.random()* 6) + 1; // choose 1 to 6
var rnimage1 =  "dice" + rnNo1 +".png";
var rnimagesrc1= "images/" + rnimage1;
var image1 =  document.querySelectorAll("img")[0];
image1.setAttribute("src", rnimagesrc1);

var rnNo2 = Math.floor(Math.random()* 6) + 1; // choose 1 to 6
var rnimage2 =  "dice" + rnNo2 +".png";
var rnimagesrc2= "images/" + rnimage2;
var image2 =  document.querySelectorAll("img")[1];
image2.setAttribute("src", rnimagesrc2);



if(rnNo1 > rnNo2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (rnNo2 > rnNo1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}
