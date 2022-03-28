$(document).ready(function() {
  const hour = document.querySelector(".hours");
  const min = document.querySelector(".minutes");
  const sec = document.querySelector(".seconds");
  
  let pause = false;
  let t;

  const toggl_track = $(".toggl-track");
  const toggl_track_desc = document.querySelector("#description");

  var stopwatch;
  var reminderAlert;
  var num_of_pomo = 0;

  var start_time;
  var current_time;

  // no text is in the description box by default
  toggl_track_desc.value = "";

  // enter = starts the timer
  $("#duration").keydown(function(event) {
    if (event.which === 13) {
      $("#start-button").click();
      $("#duration").trigger("blur");
      event.preventDefault();
    }
  });

  $("#description").keydown(function(event) {
    if (event.which === 13) {
      $("#start-button").click();
      $("#duration").trigger("blur");
      toggl_track.hide();
      event.preventDefault();
    }
  });

  $(window).keydown(function(event) {
    // escape
    if (event.which === 27) {
      toggl_track.hide();
      event.preventDefault();
    }

    // enter
    else if (event.which === 13) {
      $("#start-button").click();
      event.preventDefault();
    }
  });

  $("#start-button").click(function(event) {
    pause = false;
    start_time = Math.round(new Date().getTime()/1000);

    $("#start-button").hide();
    $("#stop-button").show().css({
      "display":"flex",
      "opacity":"0.5"
    });

    $(".notif").css("opacity", "0.5");
    $("#mode-icon").css("opacity", "0.25");

    stopwatch = setCorrectingInterval(() => updateStopwatch(), 1000);
    notifyMe();

    // fetch("https://api.track.toggl.com/api/v8/time_entries/start", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Basic ' + btoa(`${process.env.TOGGL_API_TOKEN}:api_token`)
    //   },
    //   body: JSON.stringify(
    //     {"time_entry":
    //       {
    //         "description":`${desc}`
    //       }
    //     })
    //   .then((response) => {
    //     if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("⏲️ Timer started");
    //   })
    //   .catch((error) => {
    //     console.error('There has been a problem with your fetch operation:', error);
    // })

  });

  $("#stop-button").click(function(e) {
    pause = true;
    resetTimer();

    num_of_pomo = 0;
    document.querySelector("#pomo-num").textContent = "";

    $("#start-button").show();
    $("#stop-button").hide();

    clearCorrectingInterval(stopwatch);
    clearCorrectingInterval(reminderAlert);
    document.title = "FlowPomoTimer";
  });

  function resetTimer() {
    sec.textContent = "00";
    min.textContent = "00";
    hour.textContent = "00";
  }

  function notifyMe() {
    let user_duration_min = parseInt(document.querySelector("#duration").value);

    if (Number.isInteger(user_duration_min)) {
      reminderAlert = setCorrectingInterval(() => playSound(), parseInt(user_duration_min) * 60000);
    }
    else if (user_duration_min = "NaN") {
      
    }
    else {
      pause = true;
      console.log('ERROR: enter an integer');
    }
  }

  // updates stopwatch time
  function updateStopwatch() {
    current_time = Math.round(new Date().getTime()/1000);
    var time_elapsed = current_time - start_time;
    var time_elapsed_1 = (time_elapsed/60).toFixed(4);
    var updated_min_1 = time_elapsed_1.split(".")[0];
    var updated_sec_1 = ((parseInt(time_elapsed_1.split(".")[1])*60)/10000).toFixed();
    var time_elapsed_2 = (time_elapsed/3600).toFixed(4);
    var updated_hour = time_elapsed_2.split(".")[0];
    var update_to_minutes = ((parseInt(time_elapsed_2.split(".")[1])*60)/10000).toFixed(4);
    var updated_min_2 = update_to_minutes.split(".")[0];
    var updated_sec_2 = ((parseInt(update_to_minutes.toString().split(".")[1])*60)/10000).toFixed();
    
    if ((Number.isInteger(start_time)) && (pause == false)) {
      // 00:00:seconds
      if (time_elapsed <= 59) {
        if ((time_elapsed.toString().length == 1)) {
          sec.textContent = `0${time_elapsed}`;
        }
        else  {
          sec.textContent = `${time_elapsed}`;
        }
        
      }

      // 00:minutes:seconds
      else if ((time_elapsed >= 60) && (time_elapsed <= 3599)) {
        // minutes
        if (updated_min_1.length == 1) {
          min.textContent = `0${updated_min_1}`;
        }
        else {
          min.textContent = updated_min_1;
        }

        // seconds
        if (updated_sec_1.length == 1) {
          sec.textContent = `0${updated_sec_1}`;
        }
        else {
          sec.textContent = updated_sec_1;
        }
      }

      // hours:minutes:seconds
      else if (time_elapsed >= 3600) {
        // hours
        if (updated_hour.length == 1) {
          hour.textContent =`0${updated_hour}`;
        }
        else {
          hour.textContent = updated_hour;
        }

        // minutes
        if (updated_min_2.length == 1) {
          min.textContent = `0${updated_min_2}`;
        }
        else {
          min.textContent = updated_min_2;
        }

        // seconds
        if (updated_sec_2.length == 1) {
          sec.textContent =`0${updated_sec_2}`;
        }

        else if (updated_sec_2 == "60") {
          sec.textContent = "00";

          if (updated_min_2.length == 1) {
            min.textContent = "0" + (parseInt(updated_min_2) + 1).toString();
          }
          
          else {
            min.textContent = (parseInt(updated_min_2) + 1).toString();
          }
        }

        else {
          sec.textContent = updated_sec_2;
        }
      } 
    // update the window title w/ the stopwatch text
    document.title = hour.textContent + ":" + min.textContent + ":" + sec.textContent;
    }
  }

  function playSound() {
    $('#alert-sound').trigger("play");
    
    num_of_pomo++;
      document.querySelector("#pomo-num").textContent = num_of_pomo;
  }

  // focus mode (toggles visibility of pomo and note sections)
  $("#mode-icon").click(function() {
    $(".notif").toggleClass("focus");
  });

  $("#edit-icon").click(function() {
    toggl_track_desc.focus();
  });

  // toggles visibility of description box
  $("#note-icon").click(function() {
    toggl_track.toggle();
    $("#edit-icon").click();
  });

  // expands description box when more than 1 line
  // ref: https://stackoverflow.com/questions/2803880/is-there-a-way-to-get-a-textarea-to-stretch-to-fit-its-content-without-using-php - Krutika Patel
  $("#description").on("input", function () {
    this.style.height = "";
    this.style.height = (this.scrollHeight - 4) + "px";
  });

  // use scrollwheel to increment/decrement duration
  // $("#duration").hover(function(event){
  // }); 
  
});