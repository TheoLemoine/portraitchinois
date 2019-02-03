document.addEventListener("DOMContentLoaded", function(){
 
var back = []
back[0] = document.querySelector('.ciel');
back[1] = document.querySelector('.fond');
back[2] = document.querySelector('.sol1');
back[3] = document.querySelector('.sol2');
back[4] = document.querySelectorAll('.eye') [0];
back[5] = document.querySelectorAll('.eye') [1];
back[6] = document.querySelectorAll('.pinkFloyd') [0];

    
var Coef = [];
Coef[0] = 7;
Coef[1] = 14;
Coef[2] = 28;
Coef[3] = 28;
Coef[4] = 7;
Coef[5] = 7;
Coef[6] = 7;
    
document.addEventListener('keypress',dep);
document.addEventListener('keyup',undep);
document.addEventListener('keypress', jump);

var depR = false;
var depL = false;

    
var stop = 11.5 * window.innerHeight;

function jump(e){
    document.removeEventListener('keypress', jump);
    let keyCode = (e.which)? e.which : e.keyCode;
    if( keyCode == 32)
    {
        document.querySelector('.pers').classList.add('jump');
        setTimeout(function()
        {
            document.querySelector('.pers').classList.remove('jump');
            document.addEventListener('keypress', jump);
        }, 1400)
    }else
        document.addEventListener('keypress', jump);
}
    
function dep(e) 
{
    let keyCode = (e.which)? e.which : e.keyCode;
    if( keyCode === 113)
    {
        depR=true;
        document.querySelector('.pers').classList.add('run');
    }
    else if( keyCode === 100)
    {
        depL=true;
        document.querySelector('.pers').classList.add('run');
    }
}
    
function undep(e)
{
    let keyCode = (e.which)? e.which : e.keyCode;
    if( keyCode === 81)
    {
        depR=false;
        document.querySelector('.pers').classList.remove('run');
    }
    else if( keyCode === 68)
    {
        depL=false;
        document.querySelector('.pers').classList.remove('run');
    }
}

function Update() // execute le contenu 25 fois par sec
{
    
    if (depR==true && back[1].offsetLeft<0)
        for(var i=0; i<back.length; i++)
            back[i].style.left = (back[i].offsetLeft + Coef[i]) + "px";
        
    
    if (depL==true && back[1].offsetLeft> -stop)
        for(var i=0; i<back.length; i++)
            back[i].style.left = (back[i].offsetLeft - Coef[i]) + "px";
    
}
setInterval(Update,45);
    
})

