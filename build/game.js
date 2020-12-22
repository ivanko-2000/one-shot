

$('#target').parent().on("mouseenter", function () {
    $('#target').attr("src", "../resource/game/targetBlack.svg");
});
$('#target').parent().on("mouseleave", function () {
    $('#target').attr("src", "../resource/game/target.svg");
});

$('#joystick').parent().on("mouseenter", function () {
    $('#joystick').attr("src", "../resource/game/joystickBlack.svg");
});
$('#joystick').parent().on("mouseleave", function () {
    $('#joystick').attr("src", "../resource/game/joystick.svg");
});

$('#control').parent().on("mouseenter", function () {
    $('#control').attr("src", "../resource/game/controlBlack.svg");
});
$('#control').parent().on("mouseleave", function () {
    $('#control').attr("src", "../resource/game/control.svg");
});

$('#headphones').parent().on("mouseenter", function () {
    $('#headphones').attr("src", "../resource/game/headphonesBlack.svg");
});
$('#headphones').parent().on("mouseleave", function () {
    $('#headphones').attr("src", "../resource/game/headphones.svg");
});

$(window).on("resize",resize);


$(document).on("ready",resize);


function resize(){
    if($(window).width() < 992)
    {
        $("#room-date").insertBefore("#sum");
        $("#room-map").insertAfter("#sum");
        $("#result").insertAfter("#room-map");
        $("#contact").insertAfter("#result");
    }
    else{
        
    }

}