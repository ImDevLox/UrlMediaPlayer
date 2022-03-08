let srcUrl = document.getElementById('url');
let saveButton = document.getElementById('saveButton');
let reloadButton = document.getElementById('reloadButton');
let copyButton = document.getElementById('copyButton');
let localURL = document.getElementById('localURL');
let clearButton = document.getElementById('clearButton');

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
};

(function () {
    let currentLocalURL = window.localStorage.getItem('localURL');
    if (!currentLocalURL) return;
    localURL.value = currentLocalURL;
})();

saveButton.onclick = () => {
    let url = srcUrl.value;
    let validOrNo = validURL(url);
    if (validOrNo == false) return alert("URL NOT VALID\nExample: https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4");
    window.localStorage.setItem('localURL', url);
    localURL.value = url;
};

reloadButton.onclick = () => {
    let currentLocalURL = window.localStorage.getItem('localURL');
    if (!currentLocalURL) return;
    localURL.value = currentLocalURL;
};

clearButton.onclick = () => {
    let currentLocalURL = window.localStorage.getItem('localURL');
    if (!currentLocalURL) return;
    window.localStorage.removeItem('localURL');
    localURL.value = null;
};

copyButton.onclick = () => {
    var input = document.body.appendChild(document.createElement("input"));
    input.value = window.localStorage.getItem('localURL');
    input.focus();
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input);
};