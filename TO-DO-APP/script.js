// Get DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;  // Ignore empty input

  const newTask = document.createElement('li');
  newTask.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  newTask.addEventListener('click', function() {
    newTask.classList.toggle('completed');
  });

  const deleteButton = newTask.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function(e) {
    e.stopPropagation();  // Prevent event from bubbling up
    taskList.removeChild(newTask);
  });

  taskList.appendChild(newTask);

  taskInput.value = "";
});
