cardList=[];
let cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");
while(cardNumber%2 != 0 || cardNumber>14 || cardNumber<4){
cardNumber=prompt("Quantas cartas voce deseja?(números pares de 4 á 14)");
cardNumber=parseInt(cardNumber);
};


for(let i=0; i<cardNumber; i++){
cardList[i]=document.querySelector(".hide");
document.querySelector(".hide").addEventListener('click',flip)
document.querySelector(".hide").style.order=Math.floor(Math.random() * 10);
document.querySelector(".hide").classList.remove("hide");
};

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
};

function matchCheck(){

    if(firstCard.dataset.framework === secondCard.dataset.framework && firstCard != secondCard){
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
        }, 1000);
    }
};