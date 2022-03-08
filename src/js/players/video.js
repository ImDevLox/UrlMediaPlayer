let srcUrl = document.getElementById('url');
let startButton = document.getElementById('startButton');
let videoPlayer = document.getElementById('player');
let downloadLink = document.getElementById('downloadLink');

var controls = [
    'play-large', // The large play button in the center
    'restart', // Restart playback
    'rewind', // Rewind by the seek time (default 10 seconds)
    'play', // Play/pause playback
    'fast-forward', // Fast forward by the seek time (default 10 seconds)
    'progress', // The progress bar and scrubber for playback and buffering
    'current-time', // The current time of playback
    'duration', // The full duration of the media
    'mute', // Toggle mute
    'volume', // Volume control
    'captions', // Toggle captions
    'settings', // Settings menu
    'pip', // Picture-in-picture (currently Safari only)
    'airplay', // Airplay (currently Safari only)
    'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
    'fullscreen', // Toggle fullscreen
];

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

startButton.onclick = () => {
    let url = srcUrl.value
    let validOrNo = validURL(url)

    if (validOrNo == false) return alert("URL NOT VALID\nExample: https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4");

    var player = new Plyr('#player', {
        controls,
        tooltips: { controls: true, seek: true }
    });

    player.config.urls.download = url;
    videoPlayer.src = url;
    downloadLink.href = url;
    player.config.urls.download = url;
}