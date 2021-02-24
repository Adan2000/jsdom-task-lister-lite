document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");
  const ul = document.getElementById("tasks")

  

  newTaskForm.addEventListener('submit', function(e){
    e.preventDefault()
    const li = document.createElement("li")
    const input = document.getElementById("new-task-description")
    li.innerText = input.value
    ul.appendChild(li)
  })
});

