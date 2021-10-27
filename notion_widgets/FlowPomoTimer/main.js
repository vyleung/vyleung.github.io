$(document).ready(function() {
  let hour = document.querySelector(".hours");
  let min = document.querySelector(".minutes");
  let sec = document.querySelector(".seconds");
  let swHolder = document.querySelector(".stopwatch");
  let note = document.querySelector(".message");

  let sec_count = 0;
  let min_count = 1;
  let hour_count = 1;
  let pause = false;
  var reminderAlert;

  // enter = starts the timer
  $("#duration").keydown(function(event) {
    if (event.which === 13) {
      $("#start-button").click();
      $("#duration").trigger("blur");
      event.preventDefault();
    }
  });

  $("#start-button").click(function(event) {
    pause = false;
    getSeconds();
    event.disabled = true;
    $("#time").css("opacity", "0.5");
    $("#start-button").css("opacity", "0.5");
    $("#copy-time-button").css("opacity", "0.5");
    $(".notif").css("opacity", "0.5");
    // min_count = 0;
    notifyMe();
  });

  $(window).keydown(function(event) {
    // spacebar = pauses the timer
    if (event.which === 32) {
      $("#pause-button").click();
      event.preventDefault();
    }

    // escape = resets the timer
    else if (event.which === 27) {
      $("#reset-button").click();
      event.preventDefault();
    }

    // backspace = edits the duration
    else if (event.which === 8) {
      $("#duration").trigger("focus");
      $("#time").css("opacity", "1");
      $("#start-button").css("opacity", "1");
      $(".notif").css("opacity", "1");
      event.preventDefault();
    }
  });

  $("#pause-button").click(function(e) {
    pause = true;
    $("#start-button").css("opacity", "1")
    $("#copy-time-button").css("opacity", "1")
    clearInterval(reminderAlert);

    var stopwatch_time = hour.textContent + ":" + min.textContent + ":" + sec.textContent;
    navigator.clipboard.writeText(stopwatch_time);
    document.getElementById("copy-time-alert").innerText = "Copied stopwatch time!"
  });

  $("#reset-button").click(function(e) {
    // $("#duration").trigger("focus");
    location.reload();

    var stopwatch_time = hour.textContent + ":" + min.textContent + ":" + sec.textContent;
    navigator.clipboard.writeText(stopwatch_time);
  });

  $("#copy-time-button").click(function(e) {
    var stopwatch_time = hour.textContent + ":" + min.textContent + ":" + sec.textContent;

    navigator.clipboard.writeText(stopwatch_time);
    document.getElementById("copy-time-alert").innerText = "Copied stopwatch time!"
  });

  function resetTimer() {
    sec_count = 0;
    min_count = 1;
    hour_count = 1;
    sec.textContent = "00";
    min.textContent = "00";
    hour.textContent = "00";
  }

  function notifyMe() {
    let user_duration_min = parseInt(document.querySelector("#duration").value);
    let user_duration_ms = parseInt(document.querySelector("#duration").value) * 60000;
    reminderAlert = setInterval(function() {
                      playSound();
                    }, user_duration_ms);
    if (min.textContent == "00") {
      if (sec.textContent == "00") {
        min_count = 1;
      }
    }
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
    if (min_count <= 59) {
      if (min_count.toString().length == 1) {
        min.textContent = `0${min_count}`;
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

  // shows current time - refrence: https://flexiple.com/javascript-clock/#section2
  function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM";

    if (hh == 0) {
      hh = 12;
    }

    else if (hh == 12) {
      hh = 12;
      session = "PM";
    }

    else if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;

    let time = hh + ":" + mm + " " + session;

    document.getElementById("time").innerText = time;
    let t = setTimeout(function(){
      currentTime()
      }, 1000);
  }
  currentTime();

  function playSound() {
    $('#alert-sound').trigger("play");
  }

});
