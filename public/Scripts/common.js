$(document).ready(function () {
    DoBlinking();
});
function DoBlink() {
    $('.blinker').fadeOut(500).fadeIn(500, DoBlink);
}
function DoBlinking() {
    $('.blinker').fadeOut(500).fadeIn(500, DoBlinking);
}

function TypeText(lstStrings) {
    var objTyping = new Typed('#typing', {
        strings: lstStrings,
        typeSpeed: 40,
        showCursor: false,
        loop: false
    });
}
function TypeText2(lstStrings) {
    var objTyping = new Typed('#type', {
        strings: lstStrings,
        typeSpeed: 40,
        showCursor: false,
        loop: false
    });
}