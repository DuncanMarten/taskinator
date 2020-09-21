// Declaring DOM variables
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Creating a task item
var createTaskHandler = function() {

    event.preventDefault();

    // Pulling info out of task form
    var taskNameInput = document.querySelector("input[name='task-name").value;
    var taskTypeInput = document.querySelector("select[name='task-type").value;

    // Create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

// Event Listener to add tasks to task-to-do list
formEl.addEventListener("submit", createTaskHandler);

