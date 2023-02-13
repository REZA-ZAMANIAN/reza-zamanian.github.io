
    $("button").click(function(){
        var butto = this.innerHTML;
        soundMaker(butto);
        anime(butto);
    })



    $(document).keydown(function(event){
        var butto = event.key;
        soundMaker(butto);
        anime(butto);   
    })


function soundMaker(butto) {
    switch(butto) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
            break;
       

    }
}


function anime(keyName) {
    if(keyName==='w' || keyName==='a' || keyName==='s' || keyName==='d' || keyName==='j' || keyName==='k' || keyName==='l'){
        var butt = document.querySelector('.' + keyName);
    butt.classList.add('pressed');
    setTimeout(function(){
        butt.classList.remove('pressed');
    }, 100)
    } else {
        console.log("wrong Key")
    }
    
}



$('h1').slideToggle().slideToggle().animate({"font-size": "12rem"})




