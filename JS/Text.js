var uptext = [];
uptext[1] = document.querySelectorAll('span') [0];
uptext[2] = document.querySelectorAll('span') [1];

var downtext = document.querySelector('p');

var vh = document.querySelector('.background').offsetHeight;
var back = document.querySelector('.ciel');
    
function Update() // execute le contenu 30 fois par sec
{
    if(back.offsetLeft == -floorTo7(0.0737*vh) ){
    
    transition(uptext[1], 'un Jeu vidéo,',0,'#f79510');
    transition(uptext[2], 'Journey',0,'#f79510');
    transition(downtext , 
        "Pas de guerre, de combats, ni de paroles. C’est un jeu <i>‘contemplatif’</i>, reposant. Rien a part le son du sable ou de la neige… <br>Comme moi, le jeu est souvent calme, spectateur devant la beauté de l’instant. Bien qu’il faille penser au futur, ce jeu m’a rappelé qu’il faut parfois s'arrêter et prendre le temps de voir que le monde est beau tel qu’il est.", 
               1,
               downtext.style.color
              );
    }
    
    if(back.offsetLeft == -floorTo7(0.7470*vh) ){
        
    transition(uptext[1], 'un Animal,',0,'#ef6431');
    transition(uptext[2], 'un Renard',0,'#ef6431');
    transition(downtext , 
        "Pas comme le Loup qui vit en meute, ou le chat qui vit seul à l’état sauvage, le renard vit en famille, en se faisant un terrier, un chez-lui ou il pourra retourner le soir. <br>En cela, si le chien est le meilleur ami de l’homme, le renard lui est le plus proche.", 
               2,
               downtext.style.color
              );
    }
    
    if(back.offsetLeft == -floorTo7(1.66*vh) ){
        
    transition(uptext[1], 'un Instrument,',0,'#a5915b');
    transition(uptext[2], 'la Basse',0,'#a5915b');
    transition(downtext , 
        '<i>"La basse c’est comme la salade dans un burger, ça a pas de goût, mais on en met parce que ca fait joli"</i> <br>Un instrument toujours dans le fond, si peu apprécié à sa juste valeur, et qui pourtant est essentiel à un groupe. <br><b>Non pas que je dise que je ne suit pas apprécié à ma juste valeur</b>, mais plutôt que je préfère rester dans le fond, tout en gardant une importance capitale. Et peu importe la célébrité ou le succès, si je sait que je fait quelque chose d’utile. ',
               3,
               downtext.style.color
              );
    }
    
    if(back.offsetLeft == -floorTo7(2.8866*vh) ){
        
    transition(uptext[1], 'un Groupe de musique,',0,'#d1fff8');
    transition(uptext[2], 'Pink floyd',0,'#d1fff8');
    transition(downtext , 
        "Pink floyd, c’est un groupe iconique du rock progressif des années 70, mais plus que ça, c’est un groupe qui a su mélanger les genres en leur faisant honneur à tous, s’inspirant du rock’n roll, du jazz, du funk, de la musique contemporaine ou classique. C’est comme ça que j’aime créer, en mélangeant les genres pour prendre ce qu’il y a de mieux dans chaqu’un d’eux, du moins de mon point de vue...",
               1,
               downtext.style.color
              );
        document.querySelector('.pinkFloyd').classList.add('pinkFloydAnimate');
    }
    
    if(back.offsetLeft == -floorTo7(4.4545*vh) ){
        
    transition(uptext[1], 'un Film,',0,'#84f1ff');
    transition(uptext[2], 'Blade Runner',0,'#84f1ff');
    transition(downtext , 
        "Ce film, dont le nom pourrait être celui d’une série Z passant à la télé le soir, est pour moi l’un des plus grand chef d’oeuvre d’écriture au cinéma. Ce film pose des questions existentielles auxquelles je réfléchi toujours, qu’est ce qui fait de nous des humains, quel est le but de la mort… <br>Ce sont des question que j’aime me poser, car c’est, justement, ce qui fait de nous des humains.", 
               2,
               downtext.style.color
              );
    }
    
    if(back.offsetLeft == -floorTo7(5.5612*vh) ){
        
    transition(uptext[1], 'ce portrait chinois,',0,'#fff');
    transition(uptext[2], 'maintenant fini',0,'#fff');
    transition(downtext , 
        "J'èspere qu'il vous auras plus, <br>vous pouvez me contacter à mon adresse mail : theo.lemoine0@gmail.com", 
               2,
               downtext.style.color
              );
        document.querySelector('.LogoFin').style.opacity = '1';
    }
    
    
}
setInterval(Update,40);
        
function transition( elem, text, font, color) 
{
    elem.style.opacity = '0';
    
    setTimeout(function()
    {
        elem.innerHTML = text;
        elem.style.opacity = '1';
        
        if(font===1 || font===3)
            elem.style.fontSize = '2.8vh';
        else if(font===2)
            elem.style.fontSize = '3.1vh';
        
        if(font===3)
            elem.style.bottom = '-1vh';
        else
            elem.style.bottom = '0';
        
        elem.style.color = color;
        
    }, 1000)
}

function floorTo7(num)
{
    return (num - (num%7));
}