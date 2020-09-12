$(document).ready(function () {
  // Date and day pulled from moment displayed in header.
  var dateTime = moment().format("dddd, MMMM Do");
  $("#currentDay").text(dateTime);

  // variables for "for loop" iteration.
  var hourID = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var actualTime = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  var currentHour = moment().hours();
  
// for loop generates timeblocks and IDs them according to hourID array.
  for (var i = 0; i < hourID.length; i++) {
    // conditional statements apply time relative style classes
    var conditionalClass = "";
    if(hourID[i] < currentHour){
        conditionalClass = "past";
    } else if (hourID[i] === currentHour){
        conditionalClass = "present";
    } else if (hourID[i] > currentHour){
        conditionalClass = "future";
    }

    // HTML page content dynamically generated.
    var mainDiv = $("<div>");
    mainDiv.attr("id", hourID[i]);
    mainDiv.addClass("row time-block");
    mainDiv.addClass(conditionalClass); 

    var subDiv = $("<div>");
    subDiv.addClass("col-sm-1 hour");
    subDiv.text(actualTime[i]); 
    
    var textEl = $("<textarea>");
    textEl.addClass("col-sm-10 description");
    
    var saveIcon = $("<i>");
    saveIcon.addClass("far fa-save");

    var buttonEl = $("<button>");
    buttonEl.addClass("col-sm-1 saveBtn");
    buttonEl.append(saveIcon);
    
    
    $("#time-container").append(mainDiv);
    $(mainDiv).append(subDiv, textEl, buttonEl);
  }

  // onclick that saves text information to local storage.
  $(".saveBtn").on("click", function (event) {
    // prevents page from refreshing on text submission.
    event.preventDefault();
    // set variable to the content of the textarea.
    var value = $(this).siblings("textarea").val();
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, JSON.stringify(value));
  });

  // Connects every hour to local storage independently.
  var value9 = JSON.parse(localStorage.getItem("9"));
  $("#9 textarea").val(value9);
  var value10 = JSON.parse(localStorage.getItem("10"));
  $("#10 textarea").val(value10);
  var value11 = JSON.parse(localStorage.getItem("11"));
  $("#11 textarea").val(value11);
  var value12 = JSON.parse(localStorage.getItem("12"));
  $("#12 textarea").val(value12);
  var value13 = JSON.parse(localStorage.getItem("13"));
  $("#13 textarea").val(value13);
  var value14 = JSON.parse(localStorage.getItem("14"));
  $("#14 textarea").val(value14);
  var value15 = JSON.parse(localStorage.getItem("15"));
  $("#15 textarea").val(value15);
  var value16 = JSON.parse(localStorage.getItem("16"));
  $("#16 textarea").val(value16);
  var value17 = JSON.parse(localStorage.getItem("17"));
  $("#17 textarea").val(value17);
});