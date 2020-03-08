function decorations(){
    setInterval(function(){
        var tecxtarea = document.getElementById("textarea");
        tecxtarea.style.fontSize = (parseInt($("#textarea").css("fontSize")) + 2) +"pt";
    }, 500);
}

function bling() {
    var checkbox = document.getElementById("checkbox");
    var tecxtarea = document.getElementById("textarea");
    if(checkbox.checked){
        tecxtarea.style.fontWeight = "bold";
        tecxtarea.style.color = "green";
        tecxtarea.style.textDecoration = "underline";
        document.getElementById("body").style.background = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)"
    } else {
        tecxtarea.style.fontWeight = "normal";
    }
}


function Malkovitch(){
    var tecxtarea = document.getElementById("textarea");
    var words = tecxtarea.value.split(" ");
    var newWords = [];
    for(i = 0; i< words.length; i++){
        if(words[i].length >= 5){
            newWords.push("Malkovitch");
        } else {
            newWords.push(words[i]);
        }
    }
    tecxtarea.value = newWords.join(" ");
}

function IgpayAtinlay(){
    var tecxtarea = document.getElementById("textarea");
    var words = tecxtarea.value.trim() == "" ? [] :  tecxtarea.value.trim().split(" ");
    var newWords = [];
    for(i = 0; i< words.length; i++){
        if(['a', 'e', 'i','o','u'].indexOf(words[i][0].toLowerCase()) !== -1){
            newWords.push(words[i].substr(1, words[i].length) + words[i][0] + "-ay");
        } else {
            newWords.push(words[i] + "-ay");
        }
    }
    tecxtarea.value = newWords.join(" ");
}