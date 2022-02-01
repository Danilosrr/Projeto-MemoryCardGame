let cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");
while(cardNumber%2 != 0 || cardNumber>14 || cardNumber<4){
cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");
cardNumber=parseInt(cardNumber);
}

for(let i=1; i<=cardNumber; i++){
 document.querySelector(".hide").classList.remove("hide");
};

const cards=document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click',flip));

let firstflip=true;
let firstCard;
let secondCard;


function flip(){
    
    this.classList.toggle('flip');

    if(firstflip==true){
        firstflip=false;
        firstCard=this;}else{
        secondCard=this;
        firstflip=true;
        }; 
        
    matchCheck();
}

function matchCheck(){

    if(firstCard.dataset.framework === secondCard.dataset.framework){
        firstCard.removeEventListener('click',flip);
        secondCard.removeEventListener('click',flip);
        firstCard=undefined;
        secondCard=undefined;
    }else{
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard=undefined;
        secondCard=undefined;
    }, 1500);
}
};

