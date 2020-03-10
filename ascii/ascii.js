function setAnimation() {
    document.getElementById("textarea").value = ANIMATIONS[document.getElementById("animation").value];
}

function updateFontSize() {
    var fontSize = document.getElementById("size").value;
    document.getElementById("textarea").style.fontSize = fontSize;
}

function turbo() {
    var textarea = document.getElementById("textarea");
    var checkbox = document.getElementById("checkbox");
    animation.turbo(textarea, checkbox.checked);
}

function start() {
    var textarea = document.getElementById("textarea");
    animation.start(textarea, true);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("animation").disabled = true;
}

function stop() {
    document.getElementById("textarea").value = animation.stop();
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("animation").disabled = false;
}

var animation = {
    speed: 250,
    frameIndex: 0,
    frames: [],
    interval: null,
    textarea: '',
    stop: function () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        return this.textarea;
    },
    start: function (textarea, reset) {
        if(this.interval){
            console.log(this.interval)
        }
        if (reset) {
            this.frameIndex = 0;
            this.textarea = textarea.value;
            this.frames = (textarea.value || "").split("=====\n");
        }

        var parent = this;
        this.interval = setInterval(function () {
            textarea.value = parent.frames[parent.frameIndex];
            parent.frameIndex++;
            if (parent.frameIndex >= parent.frames.length) {
                parent.frameIndex = 0;
            }
        }, this.speed);
    },
    turbo: function (textarea, isChecked) {
        this.speed = isChecked ? 50 : 250;
        if (this.interval) {
            this.stop();
            this.start(textarea);
        }

    }
}