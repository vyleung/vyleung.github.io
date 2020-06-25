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
    patternFeedback();
    pretestsFeedback();
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
  $(".box").on("click touch", function() {
    $(this).children().remove();
  return false;
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
      $("#startAABabs2").show();
      $("#startAABpost").show();
      $("#end_page").show();
  }
}

// after houses demo plays, show button to go to houses task
// https://stackoverflow.com/questions/14517639/executing-function-at-end-of-html5-video user: fboes
$("#houses_demo").on("ended",function(){
  $("#startHousesTask").show();
});

// feedback for AAB pretests
// https://stackoverflow.com/questions/865486/how-can-i-check-if-an-element-is-within-another-one-in-jquery user: Paolo Bergantino
// if they don't pass either pretest, go to "end.html"
function patternFeedback() {
  var shape = $(event.target).children().attr("id");
  var box_number = $(event.target).attr("id");

  // $(".textbox").text(shape + " is dropped in " + box_number);
  console.log(shape + " is dropped in " + box_number);
}

function pretestsFeedback() {
  var correctPretest1 = $('#yellow_triangle','#box1').length == 1 && $('#yellow_triangle','#box2').length == 1 && $('#pink_diamond','#box3').length == 1 && $('#yellow_triangle','#box4').length == 1 && $('#yellow_triangle','#box5').length == 1 && $('#pink_diamond','#box6').length == 1;
  var correctPretest1_1 = $('#yellow_triangle','#box1').length == 1 && $('#yellow_triangle','#box2').length == 1 && $('#pink_diamond','#box3').length == 1;
  var correctPretest1_2 = $('#yellow_triangle','#box4').length == 1 && $('#yellow_triangle','#box5').length == 1 && $('#pink_diamond','#box6').length == 1;

  var correctPretest2 = $('#green_hexagon','#box1').length == 1 && $('#red_circle','#box2').length == 1 && $('#red_circle','#box3').length == 1 && $('#green_hexagon','#box4').length == 1 && $('#red_circle','#box5').length == 1 && $('#red_circle','#box6').length == 1;
  var correctPretest2_1 = $('#green_hexagon','#box1').length == 1 && $('#red_circle','#box2').length == 1 && $('#red_circle','#box3').length == 1;
  var correctPretest2_2 = $('#green_hexagon','#box4').length == 1 && $('#red_circle','#box5').length == 1 && $('#red_circle','#box6').length == 1;

// if at least one unit of pretest 1 is correct, the child moves onto pretest 2
  if ((correctPretest1_1 == true && drops >= 6) || (correctPretest1_2 == true && drops >= 6)) {
    $("#startPretest2_V, #startPretest2_EG").show();
  }

// if the child fails pretest 1, the child moves onto pretest 2
  else if (correctPretest1 == false && drops >= 6) {
    $("#startPretest2_V, #startPretest2_EG").show();
  }

// if the child fails pretest 1, but has at least one unit of pretest 2 correct, they can move onto houses task/AABabs1
  if ((correctPretest2_1 == true && drops >= 6) || (correctPretest2_2 == true && drops >= 6)) {
    $("#startHousesTraining, #startAABabs1").show();
  }

// if the child passes pretest 1, but fails pretest 2, they can move onto houses task/AABabs1
  else if ((correctPretest1_1 == true && drops >= 6) || (correctPretest1_2 == true && drops >= 6) && (correctPretest2_1 == false && drops >= 6) || (correctPretest2_2 == false && drops >= 6)) {
      $("#startHousesTraining, #startAABabs1").show();
  }

// if the child fails both pretests, they don't move onto houses task/AABabs1
 if ((correctPretest1_1 == false && drops >= 6) && (correctPretest1_2 == false && drops >= 6) && (correctPretest2_1 == false && drops >= 6) || (correctPretest2_2 == false && drops >= 6)) {
    $("#incorrectPretests").show();
    $("#startHousesTraining, #startAABabs1").hide();
  }
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
