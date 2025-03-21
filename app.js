let gameseq=[];
let userseq=[];

let btns=['purple','yellow','red','aqua'];

let started=false;
let level=0;
let h2=document.querySelector('h2');
let hscr=0;
let hsrtex=document.querySelector('#highscore');
document.addEventListener('keypress',function(){
    if(started==false){
        started=true;
        levelUp();
    }
});

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    if(level>hscr){
         hscr=level;
         hsrtex.innerText=`Highest Score : ${hscr}`;
     }
    //chooses random btn
    let ranIndex=Math.floor(Math.random()*4);
    let randColor=btns[ranIndex];
    let ranBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    btnFlash(ranBtn);
}

function btnFlash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
     btn.classList.remove('flash') 
     },200);
}

function userFlash(btn){
     btn.classList.add("userflash");
     setTimeout(function(){
     btn.classList.remove('userflash') 
     },200);
}

function checkAns(inx){
    if(started!=false){
        if(userseq[inx]==gameseq[inx]){
            if(userseq.length==gameseq.length){
                setTimeout(levelUp,200);
            }
        }
        else{
            h2.innerHTML=`Game Over! your score was <b>${level}</b><br>press any key to start `;
            document.querySelector('body').style.backgroundColor='red';
            setTimeout(function(){
                document.querySelector('body').style.backgroundColor='white';
            },250);
            reset();
        }
    }    
}



function btnpres(){
    if(started!=false){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute('id');
    userseq.push(userColor);
    }
    checkAns(userseq.length-1);
}

let allBtn=document.querySelectorAll('.btn');
for(btn of allBtn){
    btn.addEventListener('click',btnpres);
}

function reset(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
}