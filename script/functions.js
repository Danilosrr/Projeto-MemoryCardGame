let cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");

while(cardNumber%2 != 0 || cardNumber>14 || cardNumber<4){
cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");
cardNumber=parseInt(cardNumber);
}

for(let i=1; i<=cardNumber; i++){
 document.querySelector(".hide").classList.remove("hide");
}

function flip(selected){
    selected.classList.toggle('flip');
};