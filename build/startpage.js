/* let header = document.getElementById("header");
let main = document.getElementById("main");
let footer = document.getElementById("footer");
let game = document.getElementById("game");
let bar = document.getElementById("bar");

const changeBackgroundImage = function (event) {
    document.getElementById("body").classList.remove('gameH', 'barH','nothingH');
    if (event.type === "mouseover") {
        if (event.currentTarget.id === "game") {
            
            document.getElementById("body").classList.add("gameH");
        } else if (event.currentTarget.id === "bar") {
            document.getElementById("body").classList.add("barH");
        }
    }
    document.getElementById("body").classList.add("nothingH");
    //document.getElementById("container").style.backgroundImage = 'url("../resource/startpage/' + imageName + '.png';


}

const changeRowVisibility = function (event) {
    if (event.type === "mouseover") {
        footer.classList.remove("noDisplay");
        main.classList.remove("display");
        footer.classList.add("display");
        main.classList.add("noDisplay");
    } else {
        footer.classList.remove("display");
        main.classList.remove("noDisplay");
        footer.classList.add("noDisplay");
        main.classList.add("display");
    }
}

header.addEventListener("mouseover", changeRowVisibility);
 header.addEventListener("mouseout", changeRowVisibility); 

game.addEventListener("mouseover", changeBackgroundImage);
 game.addEventListener("mouseout", changeBackgroundImage); 

bar.addEventListener("mouseover", changeBackgroundImage);
 bar.addEventListener("mouseout", changeBackgroundImage); 

header.addEventListener("mouseover", changeBackgroundImage); */
$('body').prepend('<div class="bgBlue"></div>');
$('body').prepend('<div class="bgGreen"></div>');
$('body').prepend('<div class="bgRose"></div>');
$('.bgBlue').css({
    height: '100%',
    width: '100%',
    zIndex: '-1',
    backgroundImage: 'url("../resource/startpage/blue.png")'
});
$('.bgGreen').css({
    height: '100%',
    width: '100%',
    zIndex: '-2',
    opacity: '0',
    backgroundImage: 'url("../resource/startpage/green.png")'
});
$('.bgRose').css({
    height: '100%',
    width: '100%',
    opacity: '0',
    zIndex: '-3',
    backgroundImage: 'url("../resource/startpage/rose.png")'
});

$('#header').on("mouseenter", function () {
    $('#footer').css({
        display: 'flex'
    });
    $('#main').css({
        display: 'fixed',
        width:'100%',
        opacity:'0'
    });
    $('.bgBlue').animate({
        opacity: '1'
    }, 200);
    $('.bgGreen').animate({
        opacity: '0'
    }, 200);
    $('.bgRose').animate({
        opacity: '0'
    }, 200);
});

$('#game').on("mouseenter", function () {
    $('#footer').css({
        display: 'none'
    });
    $('#main').css({
        display: 'flex',
        opacity: '1'
    });
    $('#game').animate({
        opacity: '1'
    }, 200);
    $('#bar').animate({
        opacity: '0'
    }, 200);

    $('#game h2').css({
        color: ' #8AFFF8'
    }, 200);
    $('.bgBlue').animate({
        opacity: '0'
    }, 200);
    $('.bgGreen').animate({
        opacity: '1'
    }, 200);
    $('.bgRose').animate({
        opacity: '0'
    }, 200);
});



$('#bar').on("mouseenter", function () {
    $('#footer').css({
        display: 'none'
    });
    $('#main').css({
        display: 'flex',
        opacity: '1'
    });
    $('#bar').animate({
        opacity: '1'
    }, 200);
    $('#game').animate({
        opacity: '0'
    }, 200);

    $('#bar h2').css({
        color: ' #FFBDFD'
    }, 200);
    $('.bgBlue').animate({
        opacity: '0'
    }, 200);
    $('.bgGreen').animate({
        opacity: '0'
    }, 200);
    $('.bgRose').animate({
        opacity: '1'
    }, 200);
});


$('#bar').on('click',function(){
    window.location.replace("../source/bar.html");
});
$('#game').on('click',function(){
    window.location.replace("../source/game.html");
});