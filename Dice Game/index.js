function Dice(){
let randomNumber = Math.floor(1 + Math.random()* 6);
console.log(randomNumber);
let randomNumber2 = Math.floor(1 + Math.random()* 6);
console.log(randomNumber2);
 
if(randomNumber == 1){
    document.getElementById("img1").src = "/images/dice-six-faces-one.png";
}
else if(randomNumber == 2){
    document.getElementById("img1").src = "/images/dice-six-faces-two.png";
}
else if(randomNumber == 3){
    document.getElementById("img1").src = "/images/dice-six-faces-three.png";
}
else if(randomNumber == 4){
    document.getElementById("img1").src = "/images/dice-six-faces-four.png";
}
else if(randomNumber == 5){
    document.getElementById("img1").src = "/images/dice-six-faces-five.png";
}
else if(randomNumber == 6){
    document.getElementById("img1").src = "/images/dice-six-faces-six.png";
}
else{

}


if(randomNumber2 == 1){
    document.getElementById("img2").src = "/images/dice-six-faces-one.png";
}
else if(randomNumber2 == 2){
    document.getElementById("img2").src = "/images/dice-six-faces-two.png";
}
else if(randomNumber2 == 3){
    document.getElementById("img2").src = "/images/dice-six-faces-three.png";
}
else if(randomNumber2 == 4){
    document.getElementById("img2").src = "/images/dice-six-faces-four.png";
}
else if(randomNumber2 == 5){
    document.getElementById("img2").src = "/images/dice-six-faces-five.png";
}
else if(randomNumber2 == 6){
    document.getElementById("img2").src = "/images/dice-six-faces-six.png";
}
else{
    
}

if(randomNumber == randomNumber2 || randomNumber == 0 || randomNumber2 == 0){
    document.getElementById("Winner").innerHTML ="Refresh Me"
}
else if(randomNumber > randomNumber2){
    document.getElementById("Winner").innerHTML ="Player 1 is Winner"
}
else{
    document.getElementById("Winner").innerHTML ="Player 2 is Winner"
}

}
Dice();

