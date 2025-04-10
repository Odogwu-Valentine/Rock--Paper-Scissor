alert('welcome to the Game of Rock, Paper and Scissors!, Click the Start to begin the game!');
function Main(){

const game=['Scissors', 'Paper', 'Rock'];


const randInt1= Math.random();
const randIndex1=Math.floor(randInt1 * 3);
const rand1=game[randIndex1];
const user =document.getElementById('user');

//checking for text content existence
if (user){
    user.textContent=rand1;
}else{
    alert('User not found');
}


const randInt2=  Math.random();
const randIndex2=Math.floor(randInt2 * 3);
const rand2=game[randIndex2];
const user2 =document.getElementById('user2');

//checking for text content existence
if (user2){
    user2.textContent=rand2;
}else{
    alert('User2 not found');
}
}
//Aniating the click button
const start=document.getElementById('start');

if (start){
    start.addEventListener('click', Main);
}else{
    alert('Soemthing is wrong with the button');
}



