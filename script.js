// Get elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Add a task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Mark task as completed on click
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => taskList.removeChild(taskItem));
    taskItem.appendChild(deleteButton);

    // Add edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', () => {
        const newTaskText = prompt('Edit your task:', taskItem.firstChild.textContent);
        if (newTaskText) {
            taskItem.firstChild.textContent = newTaskText;
        }
    });
    taskItem.appendChild(editButton);

    // Add to the task list
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = '';
});
