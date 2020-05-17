// https://www.geeksforgeeks.org/html-dom-ondragenter-event/ and https://www.w3schools.com/jsref/event_ondragenter.asp

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function drop(event) {
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data).cloneNode(true));
  event.preventDefault();
  event.target.style.backgroundColor = "";
}

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragEnter(event) {
  if (event.target.className == "box") {
    event.target.style.backgroundColor = "lightgrey";
  }
}

function dragLeave(event) {
  if (event.target.className == "box") {
    event.target.style.backgroundColor = "";
  }
}
