$(document).ready(function() {

// Date and day pulled from moment displayed in header.
var dateTime = moment().format("dddd, MMMM Do")
console.log(dateTime);
$("#currentDay").text(dateTime);

// Create variables to tag the needed html elements.
var hourBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17,]

var currentHour = moment().hours();
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
var value = localStorage.getItem("9");
$("#9 textarea").val(value);
// console.log(value);
var value = localStorage.getItem("10");
$("#10 textarea").val(value);
// console.log(value);
var value = localStorage.getItem("11");
$("#11 textarea").val(value);
// console.log(value);
var value = localStorage.getItem("12");
$("#12 textarea").val(value);
// console.log(value);
var value = localStorage.getItem("13");
$("#13 textarea").val(value);
// console.log(value);
var value = localStorage.getItem("14");
$("#14 textarea").val(value);
// console.log(value);
var value = localStorage.getItem("15");
$("#15 textarea").val(value);
// console.log(value);
var value = localStorage.getItem("16");
$("#16 textarea").val(value);
// console.log(value);
var value = localStorage.getItem("17");
$("#17 textarea").val(value);
// console.log(value);

// using conditional statements, assign the past, present, and future css styles to each text area in relation to the currentHour.





});