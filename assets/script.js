$(document).ready(function() {

// Date and day pulled from moment displayed in header.
var dateTime = moment().format("dddd, MMMM Do")
console.log(dateTime);
$("#currentDay").text(dateTime);

// Create variables to tag the needed html elements.
var currentHour = moment().hours() + 12;
console.log(currentHour);
// Set up the text area and button to be saved in local storage with onclick listeners.


$(".saveBtn").on("click", function(event){
    event.preventDefault();
    // set variable to the content of the textarea.
    var value = $(this).siblings("textarea").val();
    console.log(value);
    var key = $(this).parent().attr("id")
    localStorage.setItem(key, value);
    // console.log(key);
})


// Connect every hour to local storage independently.
var value9 = localStorage.getItem("9");
$("#9 textarea").val(value9);
// console.log(value);
var value10 = localStorage.getItem("10");
$("#10 textarea").val(value10);
// console.log(value);
var value11 = localStorage.getItem("11");
$("#11 textarea").val(value11);
// console.log(value);
var value12 = localStorage.getItem("12");
$("#12 textarea").val(value12);
// console.log(value);
var value13 = localStorage.getItem("13");
$("#13 textarea").val(value13);
// console.log(value);
var value14 = localStorage.getItem("14");
$("#14 textarea").val(value14);
// console.log(value);
var value15 = localStorage.getItem("15");
$("#15 textarea").val(value15);
// console.log(value);
var value16 = localStorage.getItem("16");
$("#16 textarea").val(value16);
// console.log(value);
var value17 = localStorage.getItem("17");
$("#17 textarea").val(value17);
// console.log(value);

// using conditional statements, assign the past, present, and future css styles to each text area in relation to the currentHour.
// var hourID = [9, 10, 11, 12, 13, 14, 15, 16, 17,]
    
// for (var i = 0; i < hourID.length; i++){
//     var blockHour = hourID[i];
    
if (9 === currentHour){

}



    // if(9 < currentHour){
    //     $(".time-block").addClass("past")
    //     // console.log("past")
    // } else if (9 === currentHour){
    //     $(".time-block").addClass("present")
    //     // console.log("present")
    // } else if (9 > currentHour){
    //     // console.log("future");
    //     $(".time-block").addClass("future");
    // }
    // if(17 < currentHour){
    //     $(".time-block").addClass("past")
    //     // console.log("past")
    // } else if (9 === currentHour){
    //     $(".time-block").addClass("present")
    //     // console.log("present")
    // } else if (9 > currentHour){
    //     // console.log("future");
    //     $(".time-block").addClass("future");
    // }


    $("#" + (currentHour - 15)).addClass("past");
    $("#" + (currentHour - 14)).addClass("past");
    $("#" + (currentHour - 13)).addClass("past");
    $("#" + (currentHour - 12)).addClass("past");
    $("#" + (currentHour - 11)).addClass("past");
    $("#" + (currentHour - 10)).addClass("past");
    $("#" + (currentHour - 9)).addClass("past");
    $("#" + (currentHour - 8)).addClass("past");
    $("#" + (currentHour - 7)).addClass("past");
    $("#" + (currentHour - 6)).addClass("past");
    $("#" + (currentHour - 5)).addClass("past");
    $("#" + (currentHour - 4)).addClass("past");
    $("#" + (currentHour - 3)).addClass("past");
    $("#" + (currentHour - 2)).addClass("past");
    $("#" + (currentHour - 1)).addClass("past");
    $("#" + currentHour).addClass("present");
    $("#" + (currentHour + 1)).addClass("future");
    $("#" + (currentHour + 2)).addClass("future");
    $("#" + (currentHour + 3)).addClass("future");
    $("#" + (currentHour + 4)).addClass("future");
    $("#" + (currentHour + 5)).addClass("future");
    $("#" + (currentHour + 6)).addClass("future");
    $("#" + (currentHour + 7)).addClass("future");
    $("#" + (currentHour + 8)).addClass("future");
    $("#" + (currentHour + 9)).addClass("future");
    $("#" + (currentHour + 10)).addClass("future");
    $("#" + (currentHour + 11)).addClass("future");
    $("#" + (currentHour + 12)).addClass("future");
    $("#" + (currentHour + 13)).addClass("future");
    $("#" + (currentHour + 14)).addClass("future");
    $("#" + (currentHour + 15)).addClass("future");
    $("#" + (currentHour + 16)).addClass("future");
    $("#" + (currentHour + 17)).addClass("future");
    

});