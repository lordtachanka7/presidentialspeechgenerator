var el = x => document.getElementById(x);


function analyze() {

  el("generate-button").innerHTML = "Polishing the Beast...";
  var xhr = new XMLHttpRequest();
  var loc = window.location;
  var enteredText = el("entered-text")
  let formData = new FormData()
  formData.append(enteredText.id,enteredText.value)
  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
    true);
  xhr.onerror = function() {
    alert(xhr.responseText);
  };
  xhr.onload = function(e) {
    if (this.readyState === 4) {
        var response = JSON.parse(e.target.response);
        el("result-label").innerHTML = `${response["result"]}`;
    }
    el("generate-button").innerHTML = "Generate";
  };
  xhr.send(formData)
}
