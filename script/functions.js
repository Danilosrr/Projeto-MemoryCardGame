/* Card Number Input */
ParrotPairs=["bobross","bobross", "explody","explody", "fiesta","fiesta","metal","metal", "revertit","revertit", "triplets","triplets","unicorn","unicorn"]
let cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");
while(cardNumber%2 != 0 || cardNumber>14 || cardNumber<4){
cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");
cardNumber=parseInt(cardNumber);
};

/* Sort Cards */

ParrotSorted=ParrotPairs.slice(0,(cardNumber-14));
ParrotSorted.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}

/* Dinamically Create Inputs */

for(let i=0; i<cardNumber; i++){

    let Cards = document.createElement('div');
    Cards.setAttribute('class', 'card');
    Cards.setAttribute('onclick','flip(this)')
    Cards.setAttribute('data-identifier', 'card');
    Cards.innerHTML += `
                <div class="front-face face" identifier="front-face">
                    <img src="./imgs/front 7.png" alt="Parrot">
                </div>

                <div class="back-face face" identifier="back-face">
                    <img src="./imgs/${ParrotSorted[i]}parrot.gif">
                </div>
            `;

    document.querySelector('main').appendChild(Cards);

};

/* yet to change */

let firstflip=true;
let firstCard;
let secondCard;


function flip(selected){
    
    selected.classList.toggle('flip');

    if(firstflip==true){
        firstflip=false;
        firstCard=this;}else{
        secondCard=this;
        firstflip=true;
        }; 
        
    matchCheck();
    winCheck();
};

function matchCheck(){

    if(firstCard.dataset.framework === secondCard.dataset.framework && firstCard != secondCard){
        firstCard.removeEventListener('click',flip);
        secondCard.removeEventListener('click',flip);
        pairsNumber += 1
        firstCard=undefined;
        secondCard=undefined;
    }else{
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard=undefined;
        secondCard=undefined;
        }, 1000);
    }
};

function winCheck(){
    if(pairsNumber==(cardNumber/2)){
        alert('Você Ganhou!');
    }
};