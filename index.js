const tasksList = document.getElementById("tasks-list");
const add = document.getElementById("add");

add.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  if (input !== "") {
    const unorderedList = document.createElement("ul");
    const task = document.createElement("li");
    task.innerHTML = input;
    unorderedList.appendChild(task);

    const btn = document.createElement("button");
    btn.innerHTML = "Delete";
    unorderedList.appendChild(btn);
    tasksList.appendChild(unorderedList);


    task.addEventListener("click", () => {
      task.classList.toggle("checked");
      btn.classList.toggle("hidden");
    });

    btn.addEventListener("click", () => {
      tasksList.removeChild(unorderedList);
    });
  }
});


