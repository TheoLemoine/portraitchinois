let eyes = document.querySelectorAll('.eye');

document.addEventListener('mousemove', function(event){
    
    for(i=0; i<eyes.length; i++){

        let eye = eyes[i];
        let r = parseFloat(eye.style.width/2);
        let y = eye.offsetTop + r;
        let x = eye.offsetLeft + r; 
        
        eye.style.transform = 'rotate('+
            (
        (event.clientX > x)?
        (Math.atan( (event.clientY - y)/ (event.clientX - x) )-Math.PI/2) :
        (Math.atan( (event.clientY - y)/ (event.clientX - x) )+Math.PI/2)
            )
        +'rad'
    }
})