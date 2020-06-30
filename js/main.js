$("#startPatternTraining").show();

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
    event.target.style.background = "";
    event.target.style.border = "";

    PatternTraining();
    num_drops();
    patternLog();
    patternFeedback();
  }

  // https://www.geeksforgeeks.org/html-dom-ondragenter-event/ and https://www.w3schools.com/jsref/event_ondragenter.asp

  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }

  function dragEnter(event) {
    if (event.target.className == "box d-flex justify-content-center align-items-center") {
      event.target.style.background = "lightgrey";
      event.target.style.border = "5px dashed";
    }
  }

  function dragLeave(event) {
    if (event.target.className == "box d-flex justify-content-center align-items-center") {
      event.target.style.background = "";
      event.target.style.border = "";
    }
  }

// if the child makes a mistake, they can click on the shape to remove it
// for "remove" function: https://stackoverflow.com/questions/30492918/how-to-remove-last-element-from-div user: Cliff Gunn and https://stackoverflow.com/questions/4469059/remove-elements-onclick-including-the-remove-button-itself-with-jquery user: xandy
// for "click touch" function: https://stackoverflow.com/questions/7018919/how-to-bind-touchstart-and-click-events-but-not-respond-to-both users: Aamnah and Roy
  $(".box").click(function() {
    $(this).children().remove();
  });


  // showing token/no token under training houses
  $("#startHousesIntro").show();

  $("#startHousesIntro").click(function() {
    $(".training_houses, #houses_demo1").show();
    $("#startHousesIntro, #houses").hide();
  });

  $("#training_house1").click(function() {
    $("#training_x1, #houses_demo2").show();
    $("#houses_demo1").hide();
  });

  $("#training_house2").click(function() {
    $("#training_x2, #houses_demo3").show();
    $("#houses_demo2").hide();
  });

  $("#training_house3").click(function() {
    $("#training_star1, #houses_demo4").show();
    $("#houses_demo3").hide();
  });

  $("#training_house4").click(function() {
    $("#training_x3, #houses_demo5").show();
    $("#houses_demo4").hide();
  });

  $("#training_house5").click(function() {
    $("#training_x4, #houses_demo6").show();
    $("#houses_demo5").hide();
  });

  $("#training_house6").click(function() {
    $("#training_star2").show();
    $("#houses_demo6").hide();
  });

  // after 6 clicks/taps (houses training), "NEXT" button shows for houses task
  var clicks = 0;

  $(".training_smallhouse, .training_bighouse").click(function() {
    clicks += 1;
    if (clicks == 6) {
      $("#startAABLearning").show();
    }
  });
  // after 1+ clicks (unconstrained exp), "NEXT" button shows
  $(".small_house2, .big_house2").click(function() {
    clicks += 1;
    if (clicks == 1) {
      $("#AABGen3").show();
    }
  });
  // after 3 clicks/taps (houses task), "NEXT" button shows for AAB abs
  $(".small_car2, .big_car2").click(function() {
    clicks += 1;
    if (clicks == 3) {
      $("#startAABabs1").show();
      $(".small_car2, .big_car2").off('click');
    }
  });

  // show button for AAB gen
  $("#AABGen1").show();

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
    $("#AABGen1, #AABGen2, #AABGen3, .tries").hide();
  }

// showing tokens/no tokens under cars
  $("#car7").click(function() {
    $("#star3_gen").show();
    $(".houses_textbox").show().text("Token!");
  });

  $("#car8").click(function() {
    $("#x5_gen").show();
    $(".houses_textbox").show().text("No Token!");
  });

  $("#car9").click(function() {
    $("#x6_gen").show();
    $(".houses_textbox").show().text("No Token!");
  });

  $("#car10").click(function() {
    $("#star4_gen").show();
    $(".houses_textbox").show().text("Token!");
  });

  $("#car11").click(function() {
    $("#x7_gen").show();
    $(".houses_textbox").show().text("No Token!");
  });

  $("#car12").click(function() {
    $("#x8_gen").show();
    $(".houses_textbox").show().text("No Token!");
  });

  $("#car13").click(function() {
    $("#star5_gen").show();
    $(".houses_textbox").show().text("Token!");
  });

  $("#car14").click(function() {
    $("#x9_gen").show();
    $(".houses_textbox").show().text("No Token!");
  });

  $("#car15").click(function() {
    $("#x10_gen").show();
    $(".houses_textbox").show().text("No Token!");
  });

  // random assignment of conditions
  //
  //   function getCondition() {
  //
  //   var condition = Math.floor((Math.random() * 2) + 1);
  //     if (condition == 1) {
  //      location.href = "houses.html";
  //     }
  //     else {
  //        location.href = "AABabs1_EG.html";
  //     }
  // }

// keeps track of # of tries left for AAB houses (constrained exp)
var number = 6;

$(".houses").click(function() {
  number -= 1;
  $(".number")[0].innerHTML = number;
  if (number <= 0) {
    $(".number")[0].innerHTML = 0;
    // make houses unclickable after 6 tries
    $(".small_house2, .big_house2").off('click');
    $("#AABGen2").show();
  }
});

// keeps track of # of tries left for AAB houses gen + what 3 houses are clicked on
// for var id: https://stackoverflow.com/questions/41373686/event-target-id-or-this-attrid-not-working-in-firefox user: tao
var number_gen = 3;

$(".small_car2, .big_car2").click(function() {
  var id = $(event.target).attr("id");

  number_gen -= 1;

  $(".number_gen")[0].innerHTML = number_gen;

  console.log(id + " is clicked");

  if (number_gen <= 0) {
    $(".number_gen")[0].innerHTML = 0;
    // make cars unclickable after 3 tries
    $(".small_car2, .big_car2").off("click");
    $("#housesFeedback").show();
  }
});

// AAB cars feedback: after the child clicks on 3 houses, they 'reveal' where all the tokens are
// after all tokens are shown, show button to start AABabs1

$('#housesFeedback').on('click', function() {
  if ($("#star3_gen" && "#star4_gen" && "#star5_gen").is(":visible")) {
    $("#star3_gen, #star4_gen, #star5_gen").css('border', '2px solid black').show();
    $("#housesFeedback").hide();
    $("#startAABabs1").show();
  }

  else {
    $("#star3_gen, #star4_gen, #star5_gen").css('border', '2px solid black').show();
    $("#housesFeedback").hide();
    $("#startAABabs1").show();
  }
});

// for training kids how to drag and drop patterns
var drags = 0;

function PatternTraining() {
  drags += 1;
  if (drags == 1) {
    $("#pattern_demo2").show();
    $("#pattern_demo1").hide();
  }
  if (drags == 2) {
    $("#pattern_demo3").show();
    $("#pattern_demo2").hide();
  }

  if (drags == 3) {
    $("#pattern_demo3").hide();
    $("#startPretest1_EG").show();
    $("#startPretest1_V").show();
  }
}

// after 6 drops into the boxes, the "NEXT" button will appear

var drops = 0;

function num_drops() {
  drops += 1;

  if (drops == 6) {
      // $("#startAABabs2").show();
      // $("#startAABpost").show();
      $("#end_page").show();
  }
}

// after houses demo plays, show button to go to houses task
// https://stackoverflow.com/questions/14517639/executing-function-at-end-of-html5-video user: fboes
$("#houses_demo").on("ended",function(){
  $("#startHousesTask").show();
});

// feedback for AAB pretests
// for $('...').length == 1 https://stackoverflow.com/questions/865486/how-can-i-check-if-an-element-is-within-another-one-in-jquery user: Paolo Bergantino
// if they don't pass either pretest, go to "end.html"
function patternLog() {
  var shape = $(event.target).children().attr("id");
  var box_number = $(event.target).attr("id");

  $(".textbox").text(shape + " in " + box_number);
  // console.log(shape + " is dropped in " + box_number);
  console.log(JSON.stringify(shape));
  console.log(JSON.stringify(box_number));


}

function patternFeedback() {
  var correctPretest1 = $('#yellow_triangle','#box1').length == 1 && $('#yellow_triangle','#box2').length == 1 && $('#pink_diamond','#box3').length == 1 && $('#yellow_triangle','#box4').length == 1 && $('#yellow_triangle','#box5').length == 1 && $('#pink_diamond','#box6').length == 1;
  var correctPretest1_1 = $('#yellow_triangle','#box1').length == 1 && $('#yellow_triangle','#box2').length == 1 && $('#pink_diamond','#box3').length == 1;
  var correctPretest1_2 = $('#yellow_triangle','#box4').length == 1 && $('#yellow_triangle','#box5').length == 1 && $('#pink_diamond','#box6').length == 1;

  var correctPretest2 = $('#green_hexagon','#box1').length == 1 && $('#red_circle','#box2').length == 1 && $('#red_circle','#box3').length == 1 && $('#green_hexagon','#box4').length == 1 && $('#red_circle','#box5').length == 1 && $('#red_circle','#box6').length == 1;
  var correctPretest2_1 = $('#green_hexagon','#box1').length == 1 && $('#red_circle','#box2').length == 1 && $('#red_circle','#box3').length == 1;
  var correctPretest2_2 = $('#green_hexagon','#box4').length == 1 && $('#red_circle','#box5').length == 1 && $('#red_circle','#box6').length == 1;

  // AAB abs 1
  // 1st pattern unit = ai/bi; 2nd pattern unit = aii/bii
  var correctAABabs1_a = $('#yellow_triangle','#box1').length == 1 && $('#yellow_triangle','#box2').length == 1 && $('#orange_square','#box3').length == 1 && $('#yellow_triangle','#box4').length == 1 && $('#yellow_triangle','#box5').length == 1 && $('#orange_square','#box6').length == 1;
  var correctAABabs1_ai = $('#yellow_triangle','#box1').length == 1 && $('#yellow_triangle','#box2').length == 1 && $('#orange_square','#box3').length == 1;
  var correctAABabs1_aii = $('#yellow_triangle','#box4').length == 1 && $('#yellow_triangle','#box5').length == 1 && $('#orange_square','#box6').length == 1;

  var correctAABabs1_b = $('#orange_square','#box1').length == 1 && $('#orange_square','#box2').length == 1 && $('#yellow_triangle','#box3').length == 1 && $('#orange_square','#box4').length == 1 && $('#orange_square','#box5').length == 1 && $('#yellow_triangle','#box6').length == 1;
  var correctAABabs1_bi = $('#orange_square','#box1').length == 1 && $('#orange_square','#box2').length == 1 && $('#yellow_triangle','#box3').length == 1;
  var correctAABabs1_bii = $('#orange_square','#box4').length == 1 && $('#orange_square','#box5').length == 1 && $('#yellow_triangle','#box6').length == 1;

  // AAB abs 2
  var correctAABabs2_a = $('#blue_semicircle','#box1').length == 1 && $('#blue_semicircle','#box2').length == 1 && $('#black_trapezoid','#box3').length == 1 && $('#blue_semicircle','#box4').length == 1 && $('#blue_semicircle','#box5').length == 1 && $('#black_trapezoid','#box6').length == 1;
  var correctAABabs2_ai = $('#blue_semicircle','#box1').length == 1 && $('#blue_semicircle','#box2').length == 1 && $('#black_trapezoid','#box3').length == 1;
  var correctAABabs2_aii = $('#blue_semicircle','#box4').length == 1 && $('#blue_semicircle','#box5').length == 1 && $('#black_trapezoid','#box6').length == 1;

  var correctAABabs2_b = $('#black_trapezoid','#box1').length == 1 && $('#black_trapezoid','#box2').length == 1 && $('#blue_semicircle','#box3').length == 1 && $('#black_trapezoid','#box4').length == 1 && $('#black_trapezoid','#box5').length == 1 && $('#blue_semicircle','#box6').length == 1;
  var correctAABabs2_bi = $('#black_trapezoid','#box1').length == 1 && $('#black_trapezoid','#box2').length == 1 && $('#blue_semicircle','#box3').length == 1;
  var correctAABabs2_bii = $('#black_trapezoid','#box4').length == 1 && $('#black_trapezoid','#box5').length == 1 && $('#blue_semicircle','#box6').length == 1;

  if (correctPretest1_1 || correctPretest1_2) {
    $("#startPretest2_V, #startPretest2_EG").show();
    console.log("passed 1");
      if (correctPretest2_1 || correctPretest2_2)
        $("#startHousesTraining, #startAABabs1").show();
        console.log("passed 2");
  }

  // 2 units are correct
  if (
  (correctPretest1 == true && drops >= 6) ||
  (correctPretest2 == true && drops >= 6) ||
  (correctAABabs1_a == true || correctAABabs1_b == true && drops >= 6) ||
  (correctAABabs2_a == true || correctAABabs2_b == true && drops >= 6)) {
    // after pretest 1
    $("#startPretest2_V, #startPretest2_EG").show();

    // after pretest 2
    $("#startHousesTraining, #startAABabs1").show();

    // after AAB abs 1
    $("#startAABabs2").show();

    console.log("Correct!");
  }

  // either unit is correct
  else if (
  (correctPretest1_1 == true && drops >= 6) || (correctPretest1_2 == true && drops >= 6) ||
  (correctPretest2_1 == true && drops >= 6) || (correctPretest2_2 == true && drops >= 6) ||
  (correctAABabs1_ai == true && drops >= 6) || (correctAABabs1_aii == true && drops >= 6) ||
  (correctAABabs1_bi == true && drops >= 6) || (correctAABabs1_bii == true && drops >= 6) ||
  (correctAABabs2_ai == true && drops >= 6) || (correctAABabs2_aii == true && drops >= 6) ||
  (correctAABabs2_bi == true && drops >= 6) || (correctAABabs2_bii == true && drops >= 6)) {
    $("#startPretest2_V, #startPretest2_EG").show();

    // after pretest 2
    $("#startHousesTraining, #startAABabs1").show();

    // after AAB abs 1
    $("#startAABabs2").show();

    console.log("Still correct, but not quite!");
    //play video w/ audio feedback
  }

  // either unit in AAB abs 1 and 2 is incorrect
  else if (
  (correctPretest1 == false && drops >= 6) ||
  (correctPretest2 == false && drops >= 6) ||
  (correctAABabs1_a == false && drops >= 6) || (correctAABabs1_b == false && drops >= 6) ||
  (correctAABabs2_a == false && drops >= 6) || (correctAABabs2_b == false && drops >= 6)) {
    $("#startPretest2_V, #startPretest2_EG").show();
    // $("#incorrectPretests").show();

    $("#startAABabs2").show();
    console.log("Incorrect!");
    //play video w/ audio feedback
  }
  //
  // // child fails pretest 1, but passes pretest 2 - works if on its own
  // if (correctPretest1 == false && drops >= 6) {
  //   $("#startPretest2_V, #startPretest2_EG").show();
  //     if ((correctPretest2_1 == true && drops >= 6) || (correctPretest2_2 == true && drops >= 6)) {
  //       $("#startHousesTraining, #startAABabs1").show();
  //       console.log("Failed pretest 1, but passed pretest 2");
  //     }
  // }
  // if child passes pretest 1, but fails pretest 2 - doesn't work (always shows console log on pretest 1 page)
    //  if ((correctPretest2 == false && drops >= 6) && ((correctPretest1_1 == true && drops >= 6) || (correctPretest1_2 == true && drops >= 6))) {
    //     $("#startHousesTraining, #startAABabs1").show();
    //     console.log("Failed pretest 2, but passed pretest 1");
    //
    // }
  }

function validateForm() {
  var x, y, z;
  x = document.getElementById('part_num').value;
  y = document.getElementById('first_name').value;
  z = document.getElementById('last_name').value;


  if (x == "" && y == "" && z == "") {
    document.getElementById('text').innerHTML= "All fields must be filled out";

    document.getElementById('part_num').style.border = "1px solid red";
    document.getElementById('first_name').style.border = "1px solid red";
    document.getElementById('last_name').style.border = "1px solid red";
    return false;
  }

  else if (x == "" && y == "") {
    document.getElementById('text').innerHTML= "Participant # and First name must be filled out";

    document.getElementById('part_num').style.border = "1px solid red";
    document.getElementById('first_name').style.border = "1px solid red";

    document.getElementById('last_name').style.border = "";

    return false;
  }

  else if (x == "" && z == "") {
    document.getElementById('text').innerHTML= "Participant # and Last name must be filled out";

    document.getElementById('part_num').style.border = "1px solid red";
    document.getElementById('last_name').style.border = "1px solid red";

    document.getElementById('first_name').style.border = "";

    return false;
  }

  else if (y == "" && z == "") {
    document.getElementById('text').innerHTML= "First and Last name must be filled out";

    document.getElementById('first_name').style.border = "1px solid red";
    document.getElementById('last_name').style.border = "1px solid red";

    document.getElementById('part_num').style.border = "";

    return false;
  }

  else if (x == "") {
    document.getElementById('text').innerHTML= "Participant # must be filled out";

    document.getElementById('part_num').style.border = "1px solid red";

    document.getElementById('first_name').style.border = "";
    document.getElementById('last_name').style.border = "";

    return false;
  }

  else if (y == "") {
    document.getElementById('text').innerHTML= "First name must be filled out";

    document.getElementById('first_name').style.border = "1px solid red";

    document.getElementById('part_num').style.border = "";
    document.getElementById('last_name').style.border = "";
    return false;
  }

  else if (z == "") {
    document.getElementById('text').innerHTML= "Last name must be filled out";

    document.getElementById('last_name').style.border = "1px solid red";

    document.getElementById('part_num').style.border = "";
    document.getElementById('first_name').style.border = "";
    return false;
  }

  else {
    return true;
  }
}

// https://stackoverflow.com/questions/19491336/how-to-get-url-parameter-using-jquery-or-plain-javascript user: Sebastian S
// var getUrlParameter = function getUrlParameter(sParam) {
//     var sPageURL = window.location.search.substring(1),
//         sURLVariables = sPageURL.split('&'),
//         sParameterName,
//         i;
//
//     for (i = 0; i < sURLVariables.length; i++) {
//         sParameterName = sURLVariables[i].split('=');
//
//         if (sParameterName[0] === sParam) {
//             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
//         }
//     }
// };
//
// var pnum = getUrlParameter('part_num');
// var fname = getUrlParameter('first_name');
// var lname = getUrlParameter('last_name');
//
// document.getElementById("data").innerHTML = getUrlParameter();

// touch screen
// https://codepen.io/glaubercorreaarticles/pen/vRQYwZ from https://www.outsystems.com/blog/posts/drag-and-drop_gestures-glamour/ (touch works, but shape disappears when selected)
/* Creates an array of draggable items */
let draggableItems = document.querySelectorAll('.draggable-item');
let dropAreas = document.querySelectorAll('.drop-area');

let initialX;
let initialY;
let offsetX = 0;
let offsetY = 0;
let startingX;
let startingY;
let targetElement;
let lastActiveDropArea = null;

/* Creates and appends an element to keep the space of the moving item */
let createKeeper = function(draggableItem) {
  /* Define variables */
  let draggableItemRect = draggableItem.getBoundingClientRect();
  let keeper = document.createElement('div');

  /* Sets element properties */
  keeper.classList.add('keeper');
  keeper.style.width = draggableItemRect.width + 'px';
  keeper.style.height = draggableItemRect.height + 'px';

  /* Appends the elment before the active draggable item */
  draggableItem.parentElement.insertBefore(keeper, draggableItem);
};

let isNewActiveArea = function(currentActiveArea, newActiveArea) {
  if(newActiveArea && !currentActiveArea || newActiveArea && currentActiveArea !== newActiveArea) {
    return true;
  }
};

let setLastActiveDropArea = function(targetDropArea) {
  unsetLastActiveDropArea();
  if(targetDropArea && !targetDropArea.classList.contains('active')) {
    targetDropArea.classList.add('active');
    lastActiveDropArea = targetDropArea;
  }
};

let unsetLastActiveDropArea = function() {
  if(lastActiveDropArea && lastActiveDropArea.classList.contains('active')) {
    lastActiveDropArea.classList.remove('active');
    lastActiveDropArea = null;
  }
};

let resetTransitionEndHandler = function() {
  // Removes the animatable class
  if(this.classList.contains('animatable')) {
    this.classList.remove('animatable');
  }

  // Removes the style
  this.removeAttribute('style');

  // Removes the keeper
  if(this && this.parentElement && this.parentElement.querySelector('.keeper')) {
    this.parentElement.removeChild(this.parentElement.querySelector('.keeper'));
  }

  // Removes active class
  if(this.classList.contains('active')) {
    this.classList.remove('active');
  }

  // Moves the element if it was dropped inside a drop area
  if(targetElement && targetElement.classList.contains('drop-area') && this.parentElement) {
    lastActiveDropArea.appendChild(this);
  }

  // Removes the transition end event listener
  this.removeEventListener('transitionend', resetTransitionEndHandler);
};

/* Creates a handler for each event listener */
let touchStartHandler = function(event) {
  interactionStart(event.target, event.touches[0].pageX, event.touches[0].pageY);
};

let touchMovetHandler = function(event) {
  interactionMove(event.target, event.touches[0].pageX, event.touches[0].pageY);
};

let touchEndtHandler = function(event) {
  interactionEnd(event.target, event.changedTouches[0].pageX, event.changedTouches[0].pageY);
};

/* Create handlers to each interaction */
let interactionStart = function(element, coordX, coordY) {

  // Adds affordance in Drop Areas
  dropAreas.forEach(function(dropArea) {
    if(!dropArea.classList.contains('affordance')) {
      dropArea.classList.add('affordance');
    }
  });

  // Defines variables
  let draggableItemRect = element.getBoundingClientRect();

  /* Sets initial values */
  initialX = coordX;
  initialY = coordY;
  startingX = draggableItemRect.left;
  startingY = draggableItemRect.top;

  /* Configures the size and position of the draggable-item */
  element.style.width = draggableItemRect.width + 'px';
  element.style.height = draggableItemRect.height + 'px';
  element.style.transform = "translateX(" + draggableItemRect.left + "px) translateY( " + draggableItemRect.top + "px) translateZ(0)";

  /* Creates the keeper */
  createKeeper(element);

  /* Adds active class */
  if(!element.classList.contains('active')) {
    element.classList.add('active');
  }
};

let interactionMove = function(element, coordX, coordY) {
  /* Sets offset values */
  offsetX = coordX - initialX;
  offsetY = coordY - initialY;

  /* Transforms the UI to move the element */
  element.style.transform = "translateX(" + (startingX + offsetX) + "px) translateY(" + (startingY + offsetY) + "px) translateZ(0) scale(1)";

  // Gets target active drop area
  targetElement = document.elementFromPoint(coordX, coordY);

  if(targetElement && targetElement.closest('.drop-area')) {
    targetElement = targetElement.closest('.drop-area');
    setLastActiveDropArea(targetElement);
  } else {
    unsetLastActiveDropArea();
  }
};

let interactionEnd = function(element, coordX, coordY) {
  // Removes affordances
  dropAreas.forEach(function(dropArea) {
    // Removes active class
    if(dropArea.classList.contains('active')) {
      dropArea.classList.remove('active');
    }

    // Removes the affordance class
    if(dropArea.classList.contains('affordance')) {
      dropArea.classList.remove('affordance');
    }
  });

  // Adds animatable class
  if(!element.classList.contains('animatable')) {
    element.classList.add('animatable');
  }
  
  // Checks if the drop was done inside or outside a drop area
  if(targetElement && targetElement.classList.contains('drop-area')) {
    element.style.transform = "translateX(" + (startingX + offsetX) + "px) translateY(" + (startingY + offsetY) + "px) translateZ(0) scale(0)";
  } else {
    element.style.transform = "translateX(" + startingX + "px) translateY(" + startingY + "px) translateZ(0)";
  }

  element.addEventListener('transitionend', resetTransitionEndHandler);

};

/* Creates the necessary functions */
let addEventListeners = function(element) {
  /* Touch related events */
  element.addEventListener('touchstart', touchStartHandler);
  element.addEventListener('touchmove', touchMovetHandler);
  element.addEventListener('touchend', touchEndtHandler);
};

/* Executes a function to create all event listeners */
draggableItems.forEach(function(draggableItem) {
  addEventListeners(draggableItem);
});
