// Get the input, button, and list from the page
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// When Add Chapter is clicked
button.addEventListener('click', function() {
  // Only add if something was typed
  if (input.value.trim() !== '') {
    // Create a new list item
    const li = document.createElement('li');
    // Create the delete button
    const deleteButton = document.createElement('button');

    // Put the chapter name in the list item
    li.textContent = input.value;
    // Delete button icon
    deleteButton.textContent = '❌';
    // So screen readers know what it does
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
    deleteButton.classList.add('delete');

    // Add delete button to the list item
    li.append(deleteButton);
    // Add list item to the list
    list.append(li);

    // When delete is clicked, remove that item
    deleteButton.addEventListener('click', function() {
      list.removeChild(li);
      input.focus();
    });

    // Clear input and focus it again
    input.value = '';
    input.focus();
  }
});