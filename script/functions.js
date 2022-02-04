let cardsFlipped = [];
let cardsSelected=[]
let igualdade=null
let pairsFound=0
let enabled=true
let first
let second
let cardNumber
let playing=false
ParrotPairs=["bobross", "explody", "fiesta","metal","revertit", "triplets", "unicorn"]
const plays=document.querySelector('#plays-counter')
const clock=document.querySelector('#time-countdown')

/*Game Script */
startGame();
function startGame(){
    clearInterval(countdown,1000);
    resetValues();
    cardsInput();
    sortCards();
    createCards();
    count = setInterval(countdown,1000);

}
function resetValues(){
    cardsFlipped = [];
    cardsSelected=[]
    igualdade=null
    pairsFound=0
    enabled=true
    first=undefined
    second=undefined
    playing=false
    clock.innerHTML = 0;
    plays.innerHTML = 0;
}

/* Card Number Input */
function cardsInput(){
    cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");

    while(cardNumber%2 != 0 || cardNumber>14 || cardNumber<4){
    cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");
    cardNumber=parseInt(cardNumber);
    }

}

/* Sort Cards */
function sortCards(){
    ParrotSorted=ParrotPairs.slice(0,cardNumber/2);
    ParrotSorted=ParrotSorted.concat(ParrotSorted);
    ParrotSorted.sort(comparador);
}

function comparador() { 
	return Math.random() - 0.5; 
}

/* Dinamically Create Cards */
function createCards(){

    for(let i=0; i<cardNumber; i++){

        let Cards = document.createElement('div');
        Cards.setAttribute('class', 'card card'+i);
        Cards.setAttribute('data-id', ParrotSorted[i]);
        Cards.setAttribute('onclick','chooseCard(this)')
        Cards.setAttribute('data-identifier', 'card');
        Cards.innerHTML += `
                    <div class="front-face face" identifier="front-face">
                        <img src="./imgs/front 7.png" alt="Parrot">
                    </div>

                    <div class="back-face face" identifier="back-face">
                        <img src="./imgs/${ParrotSorted[i]}parrot.gif" alt="Funny parrot">
                    </div>
                `;

        document.querySelector('main').appendChild(Cards);
        playing=true;
    };
}

/* Flip Cards */
function flipCard(element) {

    
    let back= element.querySelector(".back-face");
    let front= element.querySelector(".front-face");
    back.classList.toggle("back-face-rotate");
    front.classList.toggle("front-face-rotate");

}

/* Choose Card */
function chooseCard(cardChosen) {
    if(cardsFlipped.includes(cardChosen) == false){
        if(!enabled) return
        enabled = false

        if (cardsSelected.length==0) {

            /*First Card*/
            first=cardChosen;
            flipCard(cardChosen);
            cardsSelected.push(cardChosen);
            cardsFlipped.push(first);
            plays.innerHTML = parseInt(plays.innerHTML) + 1;
            enabled = true;

        } 
        else if (cardsSelected.length==1) 
        {
            /*Second Card*/
            second=cardChosen;
            testEqual(first,second);
            
            if (igualdade===true){
                
                plays.innerHTML = parseInt(plays.innerHTML) + 1;
                flipCard(second);
                cardsFlipped.push(second);
                cardsSelected.pop();
                pairsFound++
                enabled = true;

            }

            if (igualdade===false){

                plays.innerHTML = parseInt(plays.innerHTML) + 1;
                flipCard(second);
                setTimeout(() => {

                    flipCard(second);
                    flipCard(first);
                    cardsSelected.pop();
                    cardsFlipped.pop();
                    enabled = true;
                },1000);

            }

        }
    
        winCondition();
    } 

}

/* Test for equal card, same card, and winning */
function testEqual(item1,item2){
    
    if (item1.getAttribute('data-id')===item2.getAttribute('data-id') && item1.getAttribute('class') !== item2.getAttribute('class')){
        igualdade=true;
    }else{igualdade=false;}

}

function winCondition(){

    if(pairsFound==cardNumber/2){
        setTimeout(()=>{
        alert(`Você Ganhou em ${plays.innerHTML} jogadas e ${clock.innerHTML} segundos!`)
        playing=false
        clearInterval(countdown)
        reset=prompt('Você quer jogar denovo? s / n')
        while(reset != 's' && reset != 'n'){
            reset=prompt("Você quer jogar denovo? digite s para sim ou n para não");
            }
        if(reset=='n'){
            return;
        }
        if (reset=='s'){
            document.querySelector('main').innerHTML="";
            clearInterval(count);
            startGame();
        }
        },500);
    }
}

/* Timer and plays*/
function countdown(){

    if (pairsFound < cardNumber && playing==true) {
        clock.innerHTML = parseInt(clock.innerHTML) + 1;
    }
}