// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', () => {
  // EXERCISE 1: Selecting Elements
  const mainTitle = document.getElementById('mainTitle');
  console.log(mainTitle);

  // EXERCISE 2: Changing HTML Content
  const contentElement = document.getElementById('content');
  contentElement.innerHTML = '<p>Updated Content</p>';

  // EXERCISE 3: Changing CSS Styles
  contentElement.style.backgroundColor = 'lightgreen';

  // EXERCISE 4: Adding/Removing Classes
  const listElement = document.getElementById('list');
  listElement.classList.add('active');

  setTimeout(() => {
    listElement.classList.remove('active');
  }, 2000);

  // EXERCISE 5: Creating and Appending Elements
  const newButton = document.createElement('button');
  newButton.textContent = 'Click Me'; 
  contentElement.appendChild(newButton);

  // EXERCISE 6: Removing Elements
  const resultElement = document.getElementById('result');
  resultElement.remove();

  // EXERCISE 7: Handling Events
  newButton.addEventListener('click', () => {
    alert('Button Clicked!'); 
  });

  // EXERCISE 8: Working with Input
  const inputField = document.getElementById('inputField'); 
  const resultDiv = document.getElementById('result');

  inputField.addEventListener('input', () => {
    resultDiv.textContent = inputField.value; 
  });

  // EXERCISE 9: Toggling Visibility
  const actionButton = document.getElementById('actionButton'); 

  actionButton.addEventListener('click', () => {
    if (contentElement.style.display === 'none') {
      contentElement.style.display = 'block'; 
    } else {
      contentElement.style.display = 'none'; 
    }
  });

  // EXERCISE 10: Modifying Attributes
  inputField.placeholder = 'Enter your name';
});



// Exercise 8: Working with Input
// Add an input event listener to the input field that displays the current input value in the result div.

document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('inputField'); 
  const resultDiv = document.getElementById('result');
  inputField.addEventListener('input', () => {
    resultDiv.textContent = inputField.value; 
  });
});

// Exercise 9: Toggling Visibility
// Add a click event listener to the button with ID 'actionButton' that toggles the visibility of the content div.

const actionButton = document.getElementById('actionButton'); 
const contentElement = document.getElementById('content');

actionButton.addEventListener('click', () => {
  if (contentElement.style.display === 'none') {
    contentElement.style.display = 'block'; 
  } else {
    contentElement.style.display = 'none'; 
  }
});

// Exercise 10: Modifying Attributes
// Select the input field and change its placeholder text to "Enter your name".

const inputField = document.getElementById('inputField');
inputField.placeholder = 'Enter your name';
