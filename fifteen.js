$(document).ready(function () {
    var tilesPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    initGame();
    resetGame();


    $("#shufflebutton").click(function () {
        tilesPositions = random();
        resetGame();
        $("#puzzlearea div").each(function (index, div) {
            $(div).css(getPosition(tilesPositions[index]));
        });
    });


    function tileClicked() {
        resetEvents();
        var index = +$(this).attr("index");
        var temp = tilesPositions[index];
        tilesPositions[index] = tilesPositions[15];
        tilesPositions[15] = temp;
        $(this).css(getPosition(tilesPositions[index]));
        var neighbors = tileNeighbors(tilesPositions[15]);
        UpdateTilesNeighbors();
        if(isTilesOrdered(tilesPositions)){
           alert("You win");
        }
    }

    function resetEvents() {
        $("#puzzlearea div").unbind("click");
        $("#puzzlearea div").removeClass('movablepiece');
    }

    function resetGame() {
        resetEvents();
        UpdateTilesNeighbors();
    }

    function UpdateTilesNeighbors() {
        var neighbors = tileNeighbors(tilesPositions[15]);
        neighbors.forEach(function (nighbor) {
            var nighborIndex = tilesPositions.indexOf(nighbor);
            $('div[index="' + nighborIndex + '"]').each(function (index, div) {
                $(div).addClass('movablepiece');
            })
        });
        $(".movablepiece").click(tileClicked);
    }

    function initGame() {
        $("#puzzlearea div").addClass("puzzlepiece");
        $("#puzzlearea div").each(function (index, div) {
            $(div).css(getPosition(index));
            $(div).css(getBackgroundPosition(index));
            $(div).attr("index", index); //giv each div an id
        })
    }


});


function getPosition(index) {
    var row = Math.floor(index / 4);
    var col = index % 4;
    return {
        'left': col * 100 + "px",
        'top': row * 100 + "px"
    }
}

function getBackgroundPosition(index) {
    var row = Math.floor(index / 4);
    var col = index % 4;
    return {
        'background-position': ` ${col * 100 * -1}px  ${row * 100 * -1}px`
    }
}

function isTilesOrdered(tilesPositions){
    for(var i = 1; i< tilesPositions.length; i++){
        if(tilesPositions[i - 1] > tilesPositions[i])
            return false;
    }
    return true;
}

function random() {
    //arr index is the tile id
    // arr index value is the tile position
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var emptyIndex = 15; // 15 is the empty block
    for (var i = 0; i < 100; i++) {
        var neighbors = tileNeighbors(emptyIndex);
        var j = Math.floor(Math.random() * neighbors.length);
        var index = neighbors[j];
        var temp = arr[index];
        arr[index] = arr[emptyIndex];
        arr[emptyIndex] = temp
        emptyIndex = index;
    }
    return arr;
}


function tileNeighbors(index) {
    var neighbors = [];
    if (index % 4 !== 0) {
        neighbors.push(index - 1)
    }

    if ((index + 1 ) % 4 !== 0) {
        neighbors.push(index + 1)
    }

    if (index > 3) {
        neighbors.push(index - 4)
    }

    if (index < 12) {
        neighbors.push(index + 4)
    }

    return neighbors;
}
