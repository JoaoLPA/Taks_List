// define UI elements

const form = document.getElementById('task-form');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

//Function with events
const loadEventListeners = () => {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

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
}

const removeTask = (event) => {
  if(event.target.parentElement.classList.contains('delete-item')){
    event.target.parentElement.parentElement.remove();
  }
}

const clearTasks = () => {
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

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

// Call function that load all events lisnteners
loadEventListeners();


