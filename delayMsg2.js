var rudyTimer = function () {
    message = "redy!";
    return function () {
        parent = this;
        setInterval(function () {
            alert(parent.message)
        }, 500);
    }
}();
