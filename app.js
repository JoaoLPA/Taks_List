// define UI elements

const form = document.getElementById('task-form');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

//Function with events
const loadEventListeners = () => {
  form.addEventListener('submit', addTask);
};

// Functions

const addTask = (event) => {
  event.preventDefault();
  console.log('working');
};

// Call function that load all events lisnteners
loadEventListeners();


