console.log("CODE 2 JAPAN SERIES, ROLL THE DICE BITCH");
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
var dice1 = getRandomNumber();
var dice2 = getRandomNumber();
console.log(dice1);
console.log(dice2);
if (dice1 === 6 || dice2 === 6) {
    console.log("YOU GOT 6");
}
else {
    console.log("Keep rolling brother, it'll come");
}
