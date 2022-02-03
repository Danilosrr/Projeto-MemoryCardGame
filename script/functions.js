let cardsFlipped = [];
let cardsSelected=[]
let igualdade=null
let repeticao=null
let pairsFound=0
let plays=0
let first
let second
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
    Cards.setAttribute('class', 'card card'+i);
    Cards.setAttribute('data-id', ParrotSorted[i]);
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
    back.classList.add("back-face-rotate");
    front.classList.add("front-face-rotate");

}

function unflipCard(element) {

    
    let back= element.querySelector(".back-face");
    let front= element.querySelector(".front-face");
    back.classList.remove("back-face-rotate");
    front.classList.remove("front-face-rotate");

}
   

/* seleciona a carta */
function selecionar(cartaSelecionada) {
 

    if(cardsFlipped.includes(cartaSelecionada) != true){
    


        if (cardsSelected.length==0) {
            /*selecionar primeira carta*/
            first=cartaSelecionada;
            flipCard(cartaSelecionada);
            cardsSelected.push(cartaSelecionada);
            cardsFlipped.push(first);
            plays++
        } 
        else if (cardsSelected.length==1) 
        {
            /*selecionar segunda carta*/
            second=cartaSelecionada;
            flipCard(second);
            plays++

            testarIgualdade(first,second);
                
            if (igualdade===true){

                cardsFlipped.push(second);
                cardsSelected.pop();
                pairsFound++;
            }

            setTimeout(() => {
            if (igualdade===false){

                unflipCard(second);
                unflipCard(first);
                cardsSelected.pop();
                cardsFlipped.pop();

            }},500);

        }
    
        winCondition();
    }       

}

function testarIgualdade(item1,item2){
    
    if (item1.getAttribute('data-id')===item2.getAttribute('data-id') && item1.getAttribute('class') !== item2.getAttribute('class')){
        igualdade=true;
    }else{igualdade=false;}

}

function testarRepeticao(item1,item2){

    if (item1.getAttribute('data-id')===item2.getAttribute('data-id') && item1.getAttribute('class') === item2.getAttribute('class')){
        repeticao=true;
    }else{repeticao=false;}

}

function winCondition(){
    if(pairsFound==cardNumber/2){alert(`Voce Ganhou! em ${plays} jogadas`)}
}