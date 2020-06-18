(function ($) {
    // Detect touch support
    $.support.touch = 'ontouchend' in document;
    // Ignore browsers without touch support
    if (!$.support.touch) {
    return;
    }
    var mouseProto = $.ui.mouse.prototype,
        _mouseInit = mouseProto._mouseInit,
        touchHandled;

    function simulateMouseEvent (event, simulatedType) { //use this function to simulate mouse event
    // Ignore multi-touch events
        if (event.originalEvent.touches.length > 1) {
        return;
        }
    event.preventDefault(); //use this to prevent scrolling during ui use

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
        simulatedType,    // type
        true,             // bubbles
        true,             // cancelable
        window,           // view
        1,                // detail
        touch.screenX,    // screenX
        touch.screenY,    // screenY
        touch.clientX,    // clientX
        touch.clientY,    // clientY
        false,            // ctrlKey
        false,            // altKey
        false,            // shiftKey
        false,            // metaKey
        0,                // button
        null              // relatedTarget
        );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
    }
    mouseProto._touchStart = function (event) {
    var self = this;
    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
        return;
        }
    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;
    // Track movement to determine if interaction was a click
    self._touchMoved = false;
    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');
    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
    };

    mouseProto._touchMove = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
        return;
        }
    // Interaction was not a click
    this._touchMoved = true;
    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
    };
    mouseProto._touchEnd = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
        return;
    }
    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');
    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');
    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {
      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }
    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
    };
    mouseProto._mouseInit = function () {
    var self = this;
    // Delegate the touch handlers to the widget's element
    self.element
        .on('touchstart', $.proxy(self, '_touchStart'))
        .on('touchmove', $.proxy(self, '_touchMove'))
        .on('touchend', $.proxy(self, '_touchEnd'));

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
    };
})(jQuery);

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
    showDemos();
    num_drops();
  }

  // https://www.geeksforgeeks.org/html-dom-ondragenter-event/ and https://www.w3schools.com/jsref/event_ondragenter.asp

  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }

  function dragEnter(event) {
    if (event.target.className == "box d-flex justify-content-center align-items-center") {
      event.target.style.backgroundColor = "lightgrey";
    }
  }

  function dragLeave(event) {
    if (event.target.className == "box d-flex justify-content-center align-items-center") {
      event.target.style.backgroundColor = "";
    }
  }

  // if the child makes a mistake, they can click on the shape to remove it
  // https://stackoverflow.com/questions/30492918/how-to-remove-last-element-from-div user: Cliff Gunn and https://stackoverflow.com/questions/4469059/remove-elements-onclick-including-the-remove-button-itself-with-jquery user: xandy
  $(".box").click(function() {
    $(this).children().remove();
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
