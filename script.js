const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const audioElement = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Songs
const songs = [
  {
    name: "jacinto-1",
    displayName: "Electric Chill Machine",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-2",
    displayName: "Seven Mation Army (remix)",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-3",
    displayName: "Chill Grill",
    artist: "Jacinto Design",
  },
  {
    name: "metric-1",
    displayName: "The Machine",
    artist: "Jacinto Design",
  },
];

// Check if playing
let isPlaying = false;

function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  audioElement.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  audioElement.pause();
}

// Event Listener

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Update the DOM
function loadingSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  audioElement.src = `music/${song.name}.mp3`;
  img.src = `img/${song.name}.jpg`;
}

let songIndex = 0;

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadingSong(songs[songIndex]);
  playSong();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadingSong(songs[songIndex]);
  playSong();
}

// Onload select first song
loadingSong(songs[songIndex]);

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
