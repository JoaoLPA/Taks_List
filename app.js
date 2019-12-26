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
  if(taskInput.value === ''){
    alert('Adda a task');
  }else{
  //create nem list item
  const li = document.createElement('li');
  const link = document.createElement('a');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  link.href = '#';
  li.appendChild(link);

  //append the new li to the ul
  taskList.appendChild(li);
  }
  
  //clear input field
  taskInput.value = '';
  event.preventDefault();
};

// Call function that load all events lisnteners
loadEventListeners();


