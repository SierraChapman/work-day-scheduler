$(document).ready(function () {
    // DISPLAY TODAY'S DATE

    // Use moment.js to determine today's date and format appropriately.
    // Use jQuery methods to change the "#currentDay" element's text to the date.
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // GENERATE TIME BLOCKS

    // Get current hour (24 hour clock) using moment.js
    var currentHour = parseInt(moment().format("H"));
    console.log(currentHour);
    // currentHour = 11;

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
        // If this div's hour is greater than current hour, add "future" class (for color coding)
        // Else if they are equal, add "present" class
        // Else, add "past" class
        if (hour > currentHour) {
            description.addClass("future");
        } else if (hour === currentHour) {
            description.addClass("present");
        } else {
            description.addClass("past");
        }
        // Add data- attribute to store this element's localStorage key
        description.attr("data-save-key", hour + "h-description");
        // retrieve saved description from localStorage and set as the text for "description"
        description.text(localStorage.getItem(description.attr("data-save-key")));
        // Append to timeblock
        timeBlock.append(description);

        // Generate the save button with save icon
        var saveButton = $('<button class="saveBtn col-1">');
        saveButton.html('<i class="fas fa-save fa-lg"></i>');
        // Append to timeblock
        timeBlock.append(saveButton);
    }

    // SAVE TO LOCAL STORAGE

    // Create event listener on everything matching ".saveBtn"
    $(document).on("click", ".saveBtn", function() {
        // Find the description with the matching data-hour
        textarea = $(this).prev();
        // Save that description's text as the name given by "data-save-key"
        localStorage.setItem(textarea.attr("data-save-key"), textarea.val());
    })

    // THINGS TO ADD IF ENOUGH TIME: 
    // EDIT COLUMN WIDTHS TO LOOK GOOD ON SMALL SCREENS
    // AUTOMATICALLY UPDATE COLOR CODING
    // AUTOMATICALLY UPDATE HOUR
});