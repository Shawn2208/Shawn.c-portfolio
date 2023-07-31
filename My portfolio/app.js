// Check user's preferred theme from local storage and set the toggle accordingly
const themeToggle = document.getElementById('theme-toggle'); // Get the theme toggle element from the DOM
const preferredTheme = localStorage.getItem('theme'); // Retrieve the preferred theme from local storage

// Check the preferred theme and apply the appropriate settings to the theme toggle and the page
if (preferredTheme === 'dark') {
  // If the preferred theme is 'dark', add the 'dark-mode' class to the body and set the toggle to checked (ON)
  document.body.classList.toggle('dark-mode', true);
  themeToggle.checked = true;
} else {
  // If the preferred theme is 'light' (or null), remove the 'dark-mode' class from the body and set the toggle to unchecked (OFF)
  document.body.classList.toggle('dark-mode', false);
  themeToggle.checked = false;
}

// Toggle theme and update local storage when the user interacts with the theme toggle
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    // If the user turns on the theme toggle, add the 'dark-mode' class to the body and store 'dark' in local storage
    document.body.classList.toggle('dark-mode', true);
    localStorage.setItem('theme', 'dark');
  } else {
    // If the user turns off the theme toggle, remove the 'dark-mode' class from the body and store 'light' in local storage
    document.body.classList.toggle('dark-mode', false);
    localStorage.setItem('theme', 'light');
  }
});

  

