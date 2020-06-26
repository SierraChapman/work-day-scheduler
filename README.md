# Work Day Scheduler

This single-day scheduling application displays one-hour time blocks spanning the standard workday, with past, present, and future time blocks indicated by three different colors. The user can edit the desciption for each time block and save the description to local storage so that their schedule remains when they refresh or reopen the page.

## Code Snippets

The focus of this exercise was using jQuery to simplify DOM manipulation. As an example, the code shown below uses jQuery methods to create an event listener for clicks on any of the save buttons, select the save button's previous sibling (which is the element containing the description), and extract from that element the inputted text and the key with which to save it in local storage.

```javascript
// Create event listener for clicks on on anything matching ".saveBtn"
$(document).on("click", ".saveBtn", function() {
    // Each save button immediately follows the corresponding description, so select the button's previous sibling
    textarea = $(this).prev();
    // Save that description's text as the name given by "data-save-key" (which is unique to each timeblock)
    localStorage.setItem(textarea.attr("data-save-key"), textarea.val());
    })
```

## Demo

The GIF below demonstrates editing an event, saving the new description, and refreshing the page with the new description remaining.

![Demonstration of the scheduling application](demo.gif)

Visit the [deployed link](https://sierrachapman.github.io/work-day-scheduler/) to try out the application.

## Built with

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery](https://jquery.com/)
* [Moment.js](https://momentjs.com/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Google Fonts](https://fonts.google.com/)
* [Font Awesome](https://fontawesome.com/)

## Deployed Link

* [See Live Site](https://sierrachapman.github.io/work-day-scheduler/)

## Authors

* **Sierra Chapman** 
    - [Portfolio Site](https://sierrachapman.github.io/)
    - [Github](https://github.com/SierraChapman)
    - [LinkedIn](https://www.linkedin.com/in/sierra-chapman)

## Acknowledgments

* This application uses HTML and CSS files (with slight modifications) that were provided by Trilogy Education Services, a 2U, Inc.
* [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/) was used to check and improve text contrast.