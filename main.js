function copyText(elementId, copiedElementId) {
  var copyText = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(copyText)
    .then(() => {
      var copiedElement = document.getElementById(copiedElementId);
      copiedElement.innerHTML = "Copied!";
    })
    .catch((error) => {
      console.error('Copy failed: ', error);
    });
}