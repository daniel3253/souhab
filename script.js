


function doit() {
    var nav = document.getElementById("nav");
    nav.classList.add("slide");
    document.body.style.overflow = "hidden"; 
}

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("nav").classList.remove("slide");
    document.body.style.overflow = "auto";
});



// Countdown Timer (in days, hours, minutes, and seconds)
const countdownDate = new Date("June 1, 2025 00:00:00").getTime();
const timerElement = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        timerElement.innerHTML = "The adventure has started!";
    }
}

const countdownFunction = setInterval(updateCountdown, 1000);


// Get audio and controls elements
const audio = new Audio('song1.mp3'); // Replace with your audio file
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeSlider = document.getElementById('volume');
const progressBar = document.getElementById('progressBar');

// Playlist array for multiple songs
const songs = [
    'song1.mp3',
    'beach-song2.mp3',
    'beach-song3.mp3'
];
let currentSongIndex = 0;

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="40" height="40" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>'; // Pause icon
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="40" height="40" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>'; // Play icon
    }
});

// Skip to next song
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="40" height="40" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>'; // Pause icon
});

// Go to previous song
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="40" height="40" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>'; // Pause icon
});

// Update the progress bar
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
});

// Volume control
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
});

// Start playing the first song on page load
window.onload = () => {
    audio.src = songs[currentSongIndex];
    audio.play();
    playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="40" height="40" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>'; // Pause icon
};
