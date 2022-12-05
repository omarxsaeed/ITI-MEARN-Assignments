var taskName = document.getElementById("textVal");
var addBtn = document.getElementById("addTaskBtn");
var inProgressDiv = document.getElementById("inProgress");

var numTasks = 0;

addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var newTask = document.createElement("p");
    newTask.innerText = taskName.value;
    newTask.setAttribute("draggable", "true");
    newTask.setAttribute("id", numTasks);
    newTask.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text", this.id);
        console.log(this.id);
    });
    inProgressDiv.appendChild(newTask);
    taskName.value = "";
    numTasks++;
});

var taskSections = document.querySelectorAll(".tasksSection");
console.log(taskSections);
for (var i = 0; i < taskSections.length; i++) {
    taskSections[i].addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    taskSections[i].addEventListener("drop", function (e) {
        let task = e.dataTransfer.getData("text");
        this.appendChild(document.getElementById(task));
    });
}
