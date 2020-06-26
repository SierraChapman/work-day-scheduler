$(document).ready(function () {
    // DISPLAY TODAY'S DATE

    // Use moment.js to determine today's date and format appropriately.
    // Use jQuery methods to change the "#currentDay" element's text to the date.
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // GENERATE TIME BLOCKS

    // Get current hour (24 hour clock) using moment.js

    // For the integers from 9 to 17:
    var minHour = 9;
    var maxHour = 17;
    for (var hour = minHour; hour <= maxHour; hour++) {
        // Generate timeblock and append to container
        var timeBlock = $('<div class="time-block row">');
        $(".container").append(timeBlock);

        // Generate an hour div
        var hourDiv = $('<div class="hour col-1">');
        // Append integer mod 12 to hour div's text
        hourDiv.append((hour - 1) % 12 + 1);
        // Append AM or PM to hour div's text depending on whether the int is > 12
        if (hour >= 12) {
            hourDiv.append("PM");
        } else {
            hourDiv.append("AM");
        }
        // Append the hour div to the timeblock
        timeBlock.append(hourDiv);

        // Generate the event description (a textarea with class "description")
        var description = $('<textarea class="description col-10">');
        // If this div's hour is greater than current hour, add "future" class (for color coding
        // Else if they are equal, add "present" class
        // Else, add "past" class
        // Add a data-hour attribute
        // retrieve saved description from localStorage
        // If saved description is not null, set this as the text for "description"
        // Append to timeblock
        timeBlock.append(description);

        // Generate the save button (button with class "saveBtn")
        var saveButton = $('<button class="saveBtn col-1">');
        saveButton.html('<i class="fas fa-save fa-lg"></i>');
        // Add a data-hour attribute
        // Append to timeblock
        timeBlock.append(saveButton);
    }


    // SAVE TO LOCAL STORAGE

    // Create event listener on everything matching ".saveBtn"
        // Find the description with the matching data-hour
        // Save that description's text as under the key data-hour + "h-description"

    // THINGS TO ADD IF ENOUGH TIME: 
    // EDIT COLUMN WIDTHS TO LOOK GOOD ON SMALL SCREENS
    // AUTOMATICALLY UPDATE COLOR CODING
    // AUTOMATICALLY UPDATE HOUR
});