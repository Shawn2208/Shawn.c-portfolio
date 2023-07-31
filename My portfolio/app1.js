

  document.querySelector("form").addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Perform any form data validation here if needed

    // Submit the form data using AJAX/fetch
    fetch("https://formsubmit.co/shawn.101@hotmail.com", {
      method: "POST",
      body: new FormData(document.querySelector("form")),
    })
      .then(function (response) {
        // Handle the form submission response if necessary

        // Redirect to the custom thank-you page
        window.location.href = "/pages/thanks.html";
      })
      .catch(function (error) {
        // Handle any errors that occurred during form submission
        console.error("Form submission error:", error);
        // You may display an error message to the user if needed
      });
  });




// Wait for the DOM to be fully loaded before executing the following code
document.addEventListener("DOMContentLoaded", function() {
  // Create a new instance of Typed.js on the element with the ID "typed"
  // Typed.js is a library that simulates typing animations on the web page

  var typed = new Typed("#typed", {
    // An array of strings that will be typed out one by one
    strings: ["Node.js", "JavaScript", "HTML", "CSS", "React"],
    
    // Speed at which characters are typed (in milliseconds per character)
    typeSpeed: 50,
    
    // Speed at which characters are deleted during backspacing (in milliseconds per character)
    backSpeed: 30,
    
    // Set to true to make the typing animation loop through the strings indefinitely
    loop: true
  });
});
