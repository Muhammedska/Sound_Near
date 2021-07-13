console.clear();
console.log('SounDNeaR | Beta | Development By: Çözelti Software')


let now_playing = document.getElementById("now_playing");


let playpause_btn = document.getElementById("playpause_track");
let next_btn = document.getElementById("next_track");
let prev_btn = document.getElementById("prev_track");

let seek_slider = document.getElementById("seek_slider");
let volume_slider = document.getElementById("volume_slider");
let curr_time = document.getElementById("current_time");
let total_duration = document.getElementById("total_duration");

const addBtn = document.getElementById('add_list');
const addUrl = document.getElementById('add_url');
const trackList = document.getElementById('tracklist')
const ssicon = document.getElementById('ssicon');

const trackView = document.getElementById('tracks');

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
    'https://cdn.discordapp.com/attachments/806440484808556584/864028534213181450/Bars_Manco_-_Ay.m4a',
    'https://cdn.discordapp.com/attachments/806440484808556584/864023290619363358/Baris-Manco-Nick-The-Chopper.mp3',
];

function random_bg_color() {

    // Get a number between 64 to 256 (for getting lighter colors)
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;

    // Construct a color withe the given values
    let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

    // Set the background to that color
    document.body.style.background = bgColor;
}

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = track_list[track_index];
    curr_track.load();


    now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);
    random_bg_color();
}

function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    ssicon.classList.remove('fa-play-circle')
    ssicon.classList.add('fa-pause-circle')

}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    ssicon.classList.remove('fa-pause-circle')
    ssicon.classList.add('fa-play-circle')
}

function nextTrack() {
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length;
    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);

        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}


// --------- Tracklist --------- 

addBtn.onclick = () => {

    if ((addUrl.value == undefined)) {
        console.log('girilmemiş değer')
    }
    else if (addUrl.value == '') {
        console.log('girilmemiş değer')
    }
    else {

        track_list.push(addUrl.value)

        let list_item = document.createElement('LI');
        let metin = document.createTextNode(addUrl.value);

        let close_com = document.createElement('SPAN');
        let close_it_text = document.createTextNode('x');

        close_com.appendChild(close_it_text);
        close_com.className += 'kapat';
        //close_com.dataset += ''
        //close_com.onclick += 'parentElement.style.display = "none";'

        list_item.appendChild(close_com)
        list_item.appendChild(metin);
        list_item.className += 'list-group-item';

        trackList.appendChild(list_item)
        addUrl.value = null;
        now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;


    }
    return refresh_mex();
}

function refresh_mex() {

    var closebtns = document.getElementsByClassName("kapat");
    var trackName = document.getElementsByClassName('list-group-item');
    var i;

    let removertrack_list = [];
    let a, m;

    /* Loop through the elements, and hide the parent, when clicked on */
    for (i = 0; i < closebtns.length; i++) {
        //console.log(closebtns[i])
        closebtns[i].addEventListener("click", function () {
            this.parentElement.style.display = 'none';
            var deleteTrackValue = this.parentElement.textContent;
            for (a in track_list) {
                //console.log(track_list[a])
                //console.log(track_list[a], deleteTrackValue.slice(1, deleteTrackValue.length))
                if (track_list[a] === deleteTrackValue.slice(1, deleteTrackValue.length)) {
                    //console.log('Founded')
                } else {
                    removertrack_list.push(track_list[a])
                }
            }
            track_list = []
            //console.warn(track_list);
            for (m in removertrack_list) {
                track_list.push(removertrack_list[m])
            }
            //console.log(track_list);


        });
    }
    now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    track_viewer();

}

// ------------- Tracklist View -------------

function track_viewer() {
    let m, n;
    for (m in track_list) {
        let list_item = document.createElement('LI');
        let metin = document.createTextNode(String(m) + ' | ' + track_list[m]);

        list_item.appendChild(metin);
        list_item.className += 'list-group-item';

        trackView.appendChild(list_item)
    }
}

track_viewer()