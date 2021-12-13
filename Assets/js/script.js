var nowMoment = moment();
var elDisplayMoment = document.getElementById('displayMoment');
elDisplayMoment.innerHTML = nowMoment.format('MMMM DD, YYYY');
$(document).ready(function(){
    var blockTime;
    $(".saveBtn").on("click", function(){
      var value = $(this).siblings(".description").val();
      var blockTime = $(this).parent().attr("id");
      localStorage.setItem(value, blockTime);
        
     })
     var currentHour = moment().hour();
     $(".time-block").each(function () {
     var blockHour = parseInt($(this).attr("id"));
     if (blockHour < currentHour) {
         $(this).addClass("past");
         $(this).removeClass("present");
         $(this).removeClass("future");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
  })
  document.getElementById('9').textContent = localStorage.getItem
    
 })

    // save button function, add event listener
    // save to local storage
    // load from local storage

    // function for checking the hours
    // apply styles accordingly

    // allow input and store
