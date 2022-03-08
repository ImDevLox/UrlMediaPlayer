let srcUrl = document.getElementById('url');
let startButton = document.getElementById('startButton');
let audioPlayer = document.getElementById('player');
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
    'settings', // Settings menu
    'airplay', // Airplay (currently Safari only)
    'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
];

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
};

startButton.onclick = () => {
    let url = srcUrl.value;
    let validOrNo = validURL(url);

    if(validOrNo == false) return alert("URL NOT VALID\nExample: https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3");

    var player = new Plyr('#player', {
        controls,
        tooltips: { controls: true, seek: true },
        speed: { selected: 1, options: [0.75, 1, 1.25] }
    });
    
    player.config.urls.download = url;
    audioPlayer.src = url;
    downloadLink.href = url;
    player.config.urls.download = url;
};