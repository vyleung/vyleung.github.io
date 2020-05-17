// https://www.geeksforgeeks.org/html-dom-ondragenter-event/ and https://www.w3schools.com/jsref/event_ondragenter.asp
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
  event.target.style.backgroundColor = "";
}

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragEnter(event) {
  if (event.target.className == "tower_box") {
    event.target.style.backgroundColor = "lightgrey";
  }
}

function dragLeave(event) {
  if (event.target.className == "tower_box") {
    event.target.style.backgroundColor = "";
  }
}
