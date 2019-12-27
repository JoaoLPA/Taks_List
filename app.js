// define UI elements

const form = document.getElementById('task-form');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

//Function with events
const loadEventListeners = () => {
  document.addEventListener('DOMContentLoaded', getTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

// Functions

//Create a new task
const addTask = (event) => {
  if(taskInput.value === '') {
    alert('Adda a task');
  } else {
  //create nem list item
  let newItem = createNewListItem(taskInput.value);

  //append the new li to the ul
  taskList.appendChild(newItem);
  }

  storeTask(taskInput.value);
  
  //clear input field
  taskInput.value = '';
  event.preventDefault();
}

// stores tasks on Local Storage
const storeTask = (task) => {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// recovers stored tasks
const getTasks = () => {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    let newItem = createNewListItem(task);
    taskList.appendChild(newItem);
  })
}

// remove a task from the list
const removeTask = (event) => {
  if(event.target.parentElement.classList.contains('delete-item')){
    event.target.parentElement.parentElement.remove();
  }
}

//clear all tasks from the list
const clearTasks = () => {
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

// filter the displayed tasks
const filterTasks = (event) => {
  const text = event.target.value.toLowerCase();
  
  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  )
}

//create li for the tasks list
const createNewListItem = (task) => {
  const li = document.createElement('li');
  const link = document.createElement('a');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(task));
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  link.href = '#';
  li.appendChild(link);

  return li;
}
// Call function that load all events lisnteners
loadEventListeners();


