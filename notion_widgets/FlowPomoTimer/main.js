$(document).ready(function() {
  let hour = document.querySelector(".hours");
  let min = document.querySelector(".minutes");
  let sec = document.querySelector(".seconds");
  let swHolder = document.querySelector(".stopwatch");

  let sec_count = 0;
  let min_count = 1;
  let hour_count = 1;
  let pause = false;

  // enter = starts the timer
  $("#duration").keydown(function(event) {
    if (event.which === 13) {
      $("#start-button").click();
      event.preventDefault();
    }
  });

  $("#start-button").click(function(event) {
    pause = false;
    getSeconds();
    event.disabled = true;
    $("#start-button").css("opacity", "0.5");
    $(".notif").css("opacity", "0.5");
  });

  $(window).keydown(function(event) {
    // spacebar = pauses the timer
    if (event.which === 32) {
      $("#pause-button").click();
      $("#start-button").css("opacity", "1");
      $(".notif").css("opacity", "1");
      event.preventDefault();
    }

    // escape = resets the timer
    else if (event.which === 27) {
      $("#reset-button").click();
      $("#start-button").css("opacity", "1");
      $(".notif").css("opacity", "1");
      event.preventDefault();
    }

    // backspace = edits the duration
    else if (event.which === 8) {
      $("#duration").trigger("focus");
      $("#start-button").css("opacity", "1");
      $(".notif").css("opacity", "1");
      event.preventDefault();
    }
  });

  $("#pause-button").click(function(e) {
    pause = true;
    $("#start-button").css("opacity", "1");
    $(".notif").css("opacity", "1");
  });

  $("#reset-button").click(function(e) {
    pause = true;
    resetTimer();
    $("#start-button").css("opacity", "1");
    $(".notif").css("opacity", "1");
  });

  function resetTimer() {
    sec_count = 0;
    min_count = 1;
    hour_count = 1;
    sec.textContent = "00";
    min.textContent = "00";
    hour.textContent = "00";
  }

  function getSeconds() {
    if (sec_count <= 59 && pause == false) {
      if (sec_count.toString().length == 1) {
        sec.textContent = `0${sec_count}`;
      } else {
        sec.textContent = sec_count;
      }
      sec_count++;
      setTimeout(() => {
        getSeconds();
      }, 1000);
    } else if (pause == false) {
      sec_count = 0;
      if (sec_count.toString().length == 1) {
        sec.textContent = `0${sec_count}`;
      } else {
        sec.textContent = sec_count;
      }
      getSeconds();
      getMinutes();
    }
  }

  function getMinutes() {
    var user_duration_time = parseInt(document.querySelector("#duration").value);
    var user_duration_time_mil = parseInt(document.querySelector("#duration").value) * 60000;

    if (min_count <= 59) {
      if (min_count.toString().length == 1) {
        min.textContent = `0${min_count}`;

        if (user_duration_time == min_count) {
          playSound();

          setInterval(function() {
            playSound();
          }, user_duration_time_mil);
        }

      } else {
        min.textContent = min_count;
      }
      min_count++;
    } else {
      min_count = 0;
      if (min_count.toString().length == 1) {
        min.textContent = `0${min_count}`;
      } else {
        min.textContent = min_count;
      }
      min_count = 1;
      getHours();
    }
  }

  function getHours() {
    if (hour_count.toString().length == 1) {
      hour.textContent = `0${hour_count}`;
    } else {
      hour.textContent = hour_count;
    }
    hour_count++;
  }

  // shows current time
  var dt = new Date();
  document.getElementById("time").innerHTML = dt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  function playSound() {
    $("#alert-sound")[0].play();
  }
});
