/* 
1- Arkaplanda random sayi tutulacak
2- Kullanicidan sayi alinacak
3- Alinan sayi kontrol edilecek; 
eger sayi tahmmini sayidan büyükse sayi büyük ,
kücükse sayi kücük
sayi esitse oyunu bitir

*/

let guess_count = 0;

let random_number = Math.floor(Math.random() * 100 + 1);

console.log(random_number);

document.querySelector("#check_it").addEventListener("click", checkNumber);
document.querySelector("#nr_game").addEventListener("keyup", function (event) {
    if (event.keyCode === 13)
    checkNumber()
})

function checkNumber() {
   

    let userInput = document.querySelector("#nr_game");
    let answerNumber = document.querySelector("#answer");
    let guessElement = document.querySelector("#count_it");

   
    if (userInput.value == random_number) {
        alert("You are the winner! Guess time: " + ++guess_count);

        const choise = confirm("Game again?");

        if (choise) {
            guess_count = 0;
            random_number = Math.floor(Math.random() * 100 + 1);
            answerNumber.innerText = "";
        } else {
            alert("Thanks for playing");
            answerNumber.innerText = "Best guess time: " + guess_count;
            guessElement.innerText = "";
        }
        console.log(choise);
    
    } else if (userInput.value == ""){
        answerNumber.innerText = "Enter a number";
    } else if (userInput.value > random_number){
        guess_count++;
        document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
        answerNumber.innerText = "Try smaller number";
    } else if (userInput.value < random_number){
        guess_count++;
        document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
        answerNumber.innerText = "Try higher number";
    } else if (isNaN(userInput.value)){
        answerNumber.innerText = "It is not a number";
    } 

    userInput.focus();
    userInput.value = "";
}
