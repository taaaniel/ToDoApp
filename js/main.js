
const form = document.getElementById("formTask");
const addTaskButton = document.getElementById("addMyTask");

let task = {
  "title": form.task_title.value,
  "category": form.task_category.value,
  "priority": "",
  "note": form.task_note.value
}

let title = form.task_title.value


addTaskButton.addEventListener('click', addTask, false);

function addTask() {
  addItmeTodo(task.title)
}


function addItmeTodo(item) {
  
}