var popup = document.getElementById('popup');
var buttons = document.getElementsByClassName("get-quote");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    popup.style.display = "block";
  }
}

span.onclick = function() {
  popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}