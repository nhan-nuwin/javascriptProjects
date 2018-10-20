class ToDoClass {
  //On load, load all tasks
  constructor() {
    this.tasks = [{
        task: 'Go to dentist',
        isComplete: false
      },
      {
        task: 'Do Gardening',
        isComplete: true
      },
      {
        task: 'Renew Library Account',
        isComplete: false
      }
    ];
    this.loadTasks();
  }

  loadTasks() {
    //Get all tasks
    let tasksHtml = this.tasks.reduce((html, task, index) => {
      return html += this.generateTaskHTML(task, index) }, '')

    //append to HTML
    document.getElementById('taskList').innerHTML = tasksHtml;
  }

  generateTaskHTML(task, index) {
    return `
      <li class="list-group-item checkbox">
        <div class="row">
          <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label><input id="toggleTaskStatus" type="checkbox" onchange="toDo.toggleTaskStatus(${index})" value="" class="" ${task.isComplete?'checked':''}></label>
          </div>
          <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${task.isComplete?'complete':''}">
            ${task.task}
          </div>
          <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <a class="" href="/" onClick="toDo.deleteTask(event, ${index})"><i id="deleteTask" data-id="${index}" class="delete-icon glyphicon glyphicon-trash"></i></a>
          </div>
        </div>
      </li>
    `;
  }

  toggleTaskStatus(index) {
    this.tasks[index].isComplete = !this.tasks[index].isComplete;
    this.loadTasks();
  }

  deleteTask(event, taskIndex) {
    event.preventDefault();
    this.tasks.splice(taskIndex, 1);
    this.loadTasks();
  }
}

let toDo;
window.addEventListener('load', () => {
  toDo = new ToDoClass();
})
