let input = document.querySelector("#inputbtn");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

function addTask(taskText) {
  if (input === "") {
    alert("you must write something");
  } else {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);

    // done button
    var checkBox = document.createElement("button");
    checkBox.textContent = "Done";
    checkBox.classList.add("done-btn");
    li.appendChild(checkBox);
    checkBox.addEventListener("click", () => {
      li.classList.add("complete");
    });
    //delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });
  }
}

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText != "") {
    addTask(taskText);
    input.value = "";
  }
});
