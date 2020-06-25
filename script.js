// DISPLAY TODAY'S DATE

// Use moment.js to determine today's date and format appropriately.
// Use jQuery methods to change the "#currentDay" element's text to the date.

// GENERATE TIME BLOCKS

// Get current hour (24 hour clock) using moment.js

// For the integers from 9 to 17:
    // Generate timeblock and append to container

    // Generate an hour div
    // Append integer mod 12 to hour div's text
    // Append AM or PM to hour div's text depending on whether the int is > 12
    // Append the hour div to the timeblock

    // Generate the event description (a textarea with class "description")
    // If this div's hour is greater than current hour, add "future" class (for color coding
    // Else if they are equal, add "present" class
    // Else, add "past" class
    // Add a data-hour attribute
    // retrieve saved description from localStorage
    // If saved description is not null, set this as the text for "description"
    // Append to timeblock

    // Generate the save button (button with class "saveBtn")
    // Add a data-hour attribute
    // Append to timeblock


// SAVE TO LOCAL STORAGE

// Create event listener on everything matching ".saveBtn"
    // Find the description with the matching data-hour
    // Save that description's text as under the key data-hour + "h-description"