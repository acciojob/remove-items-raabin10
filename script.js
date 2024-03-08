   document.addEventListener('DOMContentLoaded', function () {
  // Get references to the dropdown and button
  const colorSelect = document.getElementById('colorSelect');
  const removeButton = document.querySelector('input[type="button"]');

  // Add a click event listener to the button
  removeButton.addEventListener('click', function () {
    // Get the selected option
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];

    // Check if an option is selected
    if (selectedOption) {
      // Remove the selected option
      colorSelect.removeChild(selectedOption);
    }
  });
});

