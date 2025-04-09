const songs = [
    "WattsApp_Audio.opus",
    "WattsApp-Audio_2.opus",
    "WattsApp-Audio_3.opus"
];

let currentSongIndex = 0;
const audioPlayer = new Audio(songs[currentSongIndex]);
const songTitle = document.getElementById("Audio-title");

function updateSongTitle() {
    songTitle.textContent = `WattsApp Audio : ${songs[currentSongIndex].split("/").pop()}`;
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    updateSongTitle();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    updateSongTitle();
}

audioPlayer.addEventListener("ended", nextSong);
updateSongTitle();