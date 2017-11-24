
const form = document.getElementById("formTask");
const addTaskButton = document.getElementById("addMyTask");

let task = {
  "title": form.task_title.value,
  "category": form.task_category.value,
  "priority": form.elements["priority"].value,
  "note": form.task_note.value
}


// User clicked on button to add single task

addTaskButton.addEventListener('click', function() {

  // Task is a object of some properties  
  let task = {
    "title": form.task_title.value,
    "category": form.task_category.value,
    "priority": form.elements["priority"].value,
    "note": form.task_note.value
  }

  // If user clicked on button, app took the task object and 
  // put in the function parameter
  addItmeTodo(task);

});

// Add new task to the tasks list

function addItmeTodo(task) {
// create a html components to task item
// create our list  
  let list = document.getElementById('myTaskList');
// create our list item. It's one task  
  let item = document.createElement('li');
  item.className = "single-task";

// create div row
  let newRow = document.createElement('div');
  newRow.className = "row";

// create div divider
  let newDivider = document.createElement('div');
  newDivider.className = "divider";  

// create div of buttons
  let buttons = document.createElement('div');
  newDivider.className = "single-task_buttons";    

// create new columns2
  let newColumn2 = document.createElement('div');
  newColumn2.className = "col s2";
// create new columns6
  let newColumn6 = document.createElement('div');
  newColumn6.className = "col s6";
// create new columns10
  let newColumn10 = document.createElement('div');
  newColumn10.className = "col s10";  
// create new columns2
  let newColumn12 = document.createElement('div');
  newColumn12.className = "col s12";

//create circle button
  let newCircleButton = document.createElement('a');
  newCircleButton.className = "btn-floating";
//create done icon
  let iconDone = document.createElement('i');
  iconDone.className = "material-icons";
  iconDone.innerText = 'done' 
//create priority icon
  let priorityIcon = document.createElement('i');
  priorityIcon.className = "material-icons";
  priorityIcon.innerText = task.priority 
//create event icon
  let eventIcon = document.createElement('i');
  eventIcon.className = "tiny material-icons";
  eventIcon.innerText = "event"
//create time icon
  let timeIcon = document.createElement('i');
  timeIcon.className = "tiny material-icons";
  timeIcon.innerText = "access_time" 
//create edit icon
  let editIcon = document.createElement('i'); 
  editIcon.className = "tiny material-icons";
  editIcon.innerText = "mode_edit"  
//create close icon
  let closeIcon = document.createElement('i'); 
  closeIcon.className = "tiny material-icons";
  closeIcon.innerText = "close"  
//create button
  let button = document.createElement('a');
  button.className = "btn blue darken-4";

  let buttonRight = document.createElement('a');
  buttonRight.className = "btn blue darken-4 right";

//create a task title
  let taskTitle = document.createElement('h5');
  taskTitle.className = "single-task__title";
  taskTitle.innerText = task.title;

//create a category task
  let taskCategory = document.createElement('h6');
  taskCategory.className = "single-task__category";
  taskCategory.innerText = task.category;

//create a task note
  let taskNote = document.createElement('p');
  taskNote.className = "single-task__note";
  taskNote.innerText = "Note: " + task.note;

//create a date row
  let newRowDate = document.createElement('div');
  newRowDate.className = "row single-task__date";

//create a task date day
  let dateDay = document.createElement('p');
  dateDay.className = "single-task__date-day";
  dateDay.innerText = "24.02.1985";  

//create a task date time
  let dateTime = document.createElement('p');
  dateTime.className = "single-task__date-time";
  dateTime.innerText = "24.02.1985";    


  // let buttons = document.createElement('div');
  // buttons.classList.add('buttons')

  // let remove = document.createElement('span');
  // remove.classList.add('remove')

  // let complete = document.createElement('span');
  // complete.classList.add('complete')

  // let cancel = document.createElement('span');
  // cancel.classList.add('cancel')

// Build HTM structure  
  item.appendChild(newRow);
  newRow.appendChild(newColumn2);
  newColumn2.appendChild(newCircleButton)
  newCircleButton.appendChild(iconDone)
  newRow.appendChild(newColumn10);
  newColumn10.appendChild(taskTitle);
  taskTitle.appendChild(priorityIcon);
  newColumn10.appendChild(taskCategory);
  newColumn10.appendChild(taskNote);
  item.appendChild(newRowDate);
  newRowDate.appendChild(newColumn6);
  newColumn6.appendChild(eventIcon)
  newColumn6.appendChild(dateDay)
  newColumn6.appendChild(timeIcon)
  newColumn6.appendChild(dateTime)
  item.appendChild(newDivider);
  item.appendChild(buttons);
  buttons.appendChild(button);
  button.appendChild(editIcon);
  buttons.appendChild(buttonRight);
  buttonRight.appendChild(closeIcon);

  list.appendChild(item)
}