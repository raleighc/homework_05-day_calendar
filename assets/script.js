$(document).ready(function() {

// Date and day pulled from moment displayed in header.
var dateTime = moment().format("dddd, MMMM Do")
console.log(dateTime);
$("#currentDay").text(dateTime);

// Create variables to tag the needed html elements.
var currentHour = moment().hours() - 14;
console.log(currentHour);
// Set up the text area and button to be saved in local storage with onclick listeners.
// Connect every hour to local storage independently.
// using conditional statements, assign the past, present, and future css styles to each text area in relation to the currentHour.





});