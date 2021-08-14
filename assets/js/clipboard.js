function copyTheLink() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("Copy");
    var tooltip = document.getElementById("copy-tool");
    tooltip.innerHTML = "Copied";
}

function openInNewTab() {
    var url = document.getElementById("myInput").value;
    var win = window.open(url, '_blank');
    win.focus();
}