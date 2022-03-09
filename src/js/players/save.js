let srcUrl = document.getElementById('url');
let saveButton = document.getElementById('saveButton');
let reloadButton = document.getElementById('reloadButton');
let copyButton = document.getElementById('copyButton');
let localURL = document.getElementById('localURL');
let clearButton = document.getElementById('clearButton');

(function () {
    let currentLocalURL = window.localStorage.getItem('localURL');
    if (!currentLocalURL) return;
    localURL.value = currentLocalURL;
})();

saveButton.onclick = () => {
    let url = srcUrl.value;
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
