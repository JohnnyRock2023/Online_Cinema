
function changeButtonState(type) {
    if (type === "mute") {
        mute.style.backgroundImage = video.muted ? 'url("images/muted.png"' : 'url("images/unmuted.png")';
    }
}

const video = document.getElementById('video');
const mute = document.getElementById('mute');

mute.addEventListener("click", () => {
    video.muted = !video.muted;
    changeButtonState("mute");
})