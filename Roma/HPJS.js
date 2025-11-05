
var video = document.getElementById('video');
video.volume = 0.4;
var mute = document.getElementById('mute');
var prevTrailerBtn = document.getElementById("prev-trailer-btn");
var nextTrailerBtn = document.getElementById("next-trailer-btn");

function changeButtonState(type) {
    if (type === "mute") {
        mute.style.backgroundImage = video.muted ? 'url("icons/muted.png"' : 'url("icons/unmuted.png")';
    }
}

mute.addEventListener("click", (e) => {
    video.muted = !video.muted;
    changeButtonState("mute");
});

const videos = [{ vidName: 'DMC', poster: 'DMCPoster', name: 'Диявол може плакати', desc: '2025, Фантастика', age: '16+' },
{ vidName: 'Ballerina', poster: 'BallerinaPoster', name: 'Балерина', desc: '2025, Екшн', age: '16+' },
{ vidName: 'Novocaine', poster: 'NovocainePoster', name: 'Новокаїн', desc: '2025, Екшн', age: '18+' },
{ vidName: 'Dante', poster: 'DantePoster', name: 'Devil May Cry 5', desc: '2019, Слешер', age: '18+' }];

var i = 0;

function nextTrailer() {
    if (i == videos.length - 1) {
        i = 0;
    }
    else {
        i++;
    }
    video.setAttribute('src', 'videos/' + videos[i].vidName + '.mp4');
    video.load();
    changePosters();
}

var leftPoster = document.getElementById('left-poster');
var rightPoster = document.getElementById('right-poster');
var rightTrailerName = document.getElementById('right-trailer-name');
var rightTrailerDesc = document.getElementById('right-trailer-desc');

var currTrailerName = document.getElementById('curr-trailer-name');
var currTrailerDesc = document.getElementById('curr-trailer-desc');
var currTrailerLimit = document.getElementById('curr-trailer-limit');

function changePosters() {
    var l = i - 1;
    var r = i + 1;
    if (l < 0) {
        l = videos.length - 1;
    }
    if (r > videos.length - 1) {
        r = 0;
    }
    leftPoster.style.backgroundImage = `url("posters/${videos[l].poster + ".jpg"}")`;
    rightPoster.style.backgroundImage = `url("posters/${videos[r].poster + ".jpg"}")`;
    rightTrailerName.textContent = videos[r].name;
    rightTrailerDesc.textContent = videos[r].desc;
    currTrailerName.textContent = videos[i].name;
    currTrailerDesc.textContent = videos[i].desc;
    currTrailerLimit.textContent = videos[i].age;
}

video.addEventListener("ended", nextTrailer, false);

prevTrailerBtn.addEventListener("click", () => {
    if (i == 0) {
        i = videos.length - 1;
    }
    else {
        i--;
    }
    video.setAttribute('src', 'videos/' + videos[i].vidName + '.mp4');
    video.load();
    changePosters();
})

nextTrailerBtn.addEventListener("click", nextTrailer);