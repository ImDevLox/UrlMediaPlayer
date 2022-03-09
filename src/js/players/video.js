let srcUrl = document.getElementById('url');
let startButton = document.getElementById('startButton');
let videoPlayer = document.getElementById('player');
let downloadLink = document.getElementById('downloadLink');

var controls = [
    'rewind', // Rewind by the seek time (default 10 seconds)
    'play', // Play/pause playback
    'fast-forward', // Fast forward by the seek time (default 10 seconds)
    'progress', // The progress bar and scrubber for playback and buffering
    'current-time', // The current time of playback
    'duration', // The full duration of the media
    'mute', // Toggle mute
    'volume', // Volume control
    'settings', // Settings menu
    'pip', // Picture-in-picture (currently Safari only)
    'airplay', // Airplay (currently Safari only)
    'fullscreen', // Toggle fullscreen
];


startButton.onclick = () => {
    let url = srcUrl.value;

    var player = new Plyr('#player', {
        controls,
        tooltips: { controls: true, seek: true }
    });

    player.config.urls.download = url;
    videoPlayer.src = url;
    downloadLink.href = url;
    player.config.urls.download = url;
}
