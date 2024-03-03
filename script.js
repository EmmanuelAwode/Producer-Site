function myFunction() {
    alert("Hello I am an alert box only show when you double click the button!");
}

function playMusic() {
// Check if there's already an audio element created
let audio = document.getElementById('musicPlayer');
if (!audio) {
// Create audio element if it doesn't exist
audio = document.createElement('audio');
audio.id = 'musicPlayer';
audio.src = 'new jazz - staring into space.mp3'; // Your music file path
document.body.appendChild(audio);
}

// Play or pause the music if the audio element already exists
if (audio.paused) {
audio.play();
} else {
audio.pause();
audio.currentTime = 0; // Optional: rewind to start
}
}