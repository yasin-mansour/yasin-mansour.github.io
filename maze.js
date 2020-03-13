$(document).ready(function () {
    //$(".boundary").mouseover(failed);
    //$("#end").mouseover(win);

    $("#start").click(function () {
        $(".boundary").css({"background-color": "#eeeeee"});
        $(".boundary").mouseover(failed);
        $("#end").mouseover(win);
        $("#maze").mouseleave(failed);
    })

});


function failed() {
    $(".boundary").css({"background-color": "red"});
    $('#end').unbind('mouseover');
    $('.boundary').unbind('mouseover');
    $("#status").text("Sorry, you lost. ]:")
}

function win() {
    $("#status").text("You win! [:")
    $('#end').unbind('mouseover');
    $('.boundary').unbind('mouseover');
    $('#maze').unbind('mouseleave');
}