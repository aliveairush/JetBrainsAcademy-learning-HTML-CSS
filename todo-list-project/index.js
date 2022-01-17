/** Restore from storage*/
taskList = JSON.parse(localStorage.getItem("tasks")) || [];
console.log(taskList);
document.getElementById("task-list").innerHTML = taskList;

/** Save in storage */
function saveState() {
  let taskList = document.querySelectorAll(".task-item");
  let newList = "";
  taskList.forEach(x => newList = x.outerHTML + newList);
  console.log(newList)
  localStorage.setItem("tasks", JSON.stringify(newList))
}


/** Remove self */
function removeSelf(event) {
  event.target.parentElement.remove()

  //Save state
  saveState()
}

// Text decoration when checkbox is clicked
function addStyleLineThrough(event) {
  let node = event.target.parentElement.querySelector(".task");
  if (node.style.textDecoration === "") {
    node.style.textDecoration = "line-through";
  }
  else {
    node.style.textDecoration = "";
  }

  //Save state
  saveState()
}


/** Add listener  */
document.getElementById("add-task-button").addEventListener("click", function () {
  let newTaskName = document.getElementById("input-task").value;
  let newListItemNode = document.createElement("li")
  newListItemNode.classList.add("task-item")
  newListItemNode.innerHTML = "<input class=\"task-item-checkbox\" type=\"checkbox\"> \n  " +
    "            <span class=\"task\">" + newTaskName + "</span>\n" +
    "            <button class=\"delete-btn\">X</button>"


  document.getElementById("task-list").appendChild(newListItemNode);
  document.getElementById("input-task").value = '';

  // Add eventListeners to new node
  newListItemNode.querySelector(".delete-btn").addEventListener("click", removeSelf);
  newListItemNode.querySelector(".task-item-checkbox").addEventListener("click", addStyleLineThrough);

  //Save state
  saveState()
})

/** Add  removeSelf event for 3 default values */
let elementsArray = document.querySelectorAll(".delete-btn");

elementsArray.forEach(function (elem) {
  elem.addEventListener("click", removeSelf);
});


/** Add  addStyleLineThrough event for 3 default values */
let checkboxes = document.querySelectorAll(".task-item-checkbox");

checkboxes.forEach(function (elem) {
  elem.addEventListener("click", addStyleLineThrough);
});