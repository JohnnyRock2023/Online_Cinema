
var video = document.getElementById('video');
video.volume = 0.3;
var mute = document.getElementById('mute');

function changeButtonState(type) {
    if (type === "mute") {
        mute.style.backgroundImage = video.muted ? 'url("icons/muted.png"' : 'url("icons/unmuted.png")';
    }
}

mute.addEventListener("click", (e) => {
    video.muted = !video.muted;
    changeButtonState("mute");
});