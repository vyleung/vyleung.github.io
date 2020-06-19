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
    event.target.style.border = "";

    showDemos();
    num_drops();
  }

  // https://www.geeksforgeeks.org/html-dom-ondragenter-event/ and https://www.w3schools.com/jsref/event_ondragenter.asp

  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }

  function dragEnter(event) {
    if (event.target.className == "box justify-content-center align-items-center") {
      event.target.style.backgroundColor = "lightgrey";
      event.target.style.border = "dashed";
    }
  }

  function dragLeave(event) {
    if (event.target.className == "box justify-content-center align-items-center") {
      event.target.style.backgroundColor = "";
      event.target.style.border = "";
    }
  }

// if the child makes a mistake, they can click on the shape to remove it
// for "remove" function: https://stackoverflow.com/questions/30492918/how-to-remove-last-element-from-div user: Cliff Gunn and https://stackoverflow.com/questions/4469059/remove-elements-onclick-including-the-remove-button-itself-with-jquery user: xandy
// for "click touch" function: https://stackoverflow.com/questions/7018919/how-to-bind-touchstart-and-click-events-but-not-respond-to-both users: Aamnah and Roy
  $(".box").on("click touch", function() {
    $(this).children().remove();
  return false;
  });

  // showing token/no token under training houses
  $("#training_house1").click(function() {
    $("#training_x1, #houses_demo2").show();
    $("#houses_demo1").hide();
  });

  $("#training_house2").click(function() {
    $("#training_x2").show();
  });

  $("#training_house3").click(function() {
    $("#training_star1").show();
    $("#houses_demo2").hide();
  });

  $("#training_house4").click(function() {
    $("#training_x3").show();
  });

  $("#training_house5").click(function() {
    $("#training_x4").show();
  });

  $("#training_house6").click(function() {
    $("#training_star2").show();
  });

  // showing token/no token under houses

  $("#house7").click(function() {
    $("#star3").show();
  });

  $("#house8").click(function() {
    $("#x5").show();
  });

  $("#house9").click(function() {
    $("#x6").show();
  });

  $("#house10").click(function() {
    $("#star4").show();
  });

  $("#house11").click(function() {
    $("#x7").show();
  });

  $("#house12").click(function() {
    $("#x8").show();
  });

  $("#house13").click(function() {
    $("#star5").show();
  });

  $("#house14").click(function() {
    $("#x9").show();
  });

  $("#house15").click(function() {
    $("#x10").show();
  });

  // next button to show AAB generalization task
  function showAABGen() {
    $(".cars, .tokens_gen, .tries_gen").show();
    $("#AABGen, .tries").hide();
  }

// showing tokens/no tokens under cars
  $("#car7").click(function() {
    $("#star3_gen").show();
  });

  $("#car8").click(function() {
    $("#x5_gen").show();
  });

  $("#car9").click(function() {
    $("#x6_gen").show();
  });

  $("#car10").click(function() {
    $("#star4_gen").show();
  });

  $("#car11").click(function() {
    $("#x7_gen").show();
  });

  $("#car12").click(function() {
    $("#x8_gen").show();
  });

  $("#car13").click(function() {
    $("#star5_gen").show();
  });

  $("#car14").click(function() {
    $("#x9_gen").show();
  });

  $("#car15").click(function() {
    $("#x10_gen").show();
  });

  // random assignment of conditions

  function getCondition() {

  var condition = Math.floor((Math.random() * 2) + 1);
    if (condition == 1) {
     location.href = "houses.html";
    }
    else {
       location.href = "AABabs1_EG.html";
    }
}

// keep tracks of # of tries left for AAB houses
var number = 6;

$(".houses").click(function() {
  number -= 1;
  $(".number")[0].innerHTML = number;
  if (number <= 0) {
    $(".number")[0].innerHTML = 0;
    // make houses unclickable after 6 tries
    $(".small_house2, .big_house2").off('click');
    $("#AABGen").show();
  }
});

// keeps track of # of tries left for AAB houses gen
var number_gen = 3;

$(".cars").click(function() {
  number_gen -= 1;
  $(".number_gen")[0].innerHTML = number_gen;
  if (number_gen <= 0) {
    $(".number_gen")[0].innerHTML = 0;
    // make cars unclickable after 3 tries
    $(".small_car2, .big_car2").off('click');
    $("#startAABabs1").show();
  }
});

// for training kids how to drag and drop patterns
var drags = 3;

function showDemos() {
  drags -= 1;
  if (drags == 2) {
    $("#pattern_demo2").show();
    $("#pattern_demo1").hide();
  }
  if (drags == 1) {
    $("#pattern_demo3").show();
    $("#pattern_demo2").hide();
  }

  if (drags == 0) {
    $("#pattern_demo3").hide();
    $("#startPretest1").show();
  }
}

// after 6 drops into the boxes, the "NEXT" button will appear

var drops = 0;

function num_drops() {
  drops += 1;
  if (drops == 6) {
    $("#startPretest2").show();
    $("#startAABLearning").show();
  }
}

// touch screen
// https://codepen.io/glaubercorreaarticles/pen/vRQYwZ from https://www.outsystems.com/blog/posts/drag-and-drop_gestures-glamour/ (touch works, but shape disappears when selected)
