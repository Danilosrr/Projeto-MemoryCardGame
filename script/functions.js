var cardsFlipped = [];

/* Card Number Input */

let cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");

while(cardNumber%2 != 0 || cardNumber>14 || cardNumber<4){
cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");
cardNumber=parseInt(cardNumber);
};

/* Sort Cards */
ParrotPairs=["bobross", "explody", "fiesta","metal","revertit", "triplets", "unicorn"]
ParrotSorted=ParrotPairs.slice(0,cardNumber/2);
ParrotSorted=ParrotSorted.concat(ParrotSorted);
ParrotSorted.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}

/* Dinamically Create Inputs */

for(let i=0; i<cardNumber; i++){

    let Cards = document.createElement('div');
    Cards.setAttribute('class', 'card');
    Cards.setAttribute('onclick','selecionar(this)')
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
/* Flip cards */
function flipCard(element) {
    let back= element.querySelector(".back-face");
    let front= element.querySelector(".front-face");
    back.classList.toggle("back-face-rotate");
    front.classList.toggle("front-face-rotate");
}
  
/* yet to change */

function selecionar(cartaSelecionada) {
    
  if (cardsFlipped.length == 0) {
    cardsFlipped.push(cartaSelecionada);
    flipCard(cartaSelecionada);

  }else if (cardsFlipped.length == 1){
    flipCard(cartaSelecionada);
    cardsFlipped.push(cartaSelecionada);
    testarigualdade;
    cardsFlipped=[];}
}
 