document.addEventListener("DOMContentLoaded", () => {
  // Listen for click on submit button
  document.querySelector("form").addEventListener("submit", e => {
    // Prevent browser redirect upon click
    e.preventDefault();

    // Call function, passing in text field value as parameter
    buildToDo(document.getElementById("new-task-description").value);

    // Revert text field to placeholder value
    document.getElementById("new-task-description").value = "";
  });
});

// Function to append new tasks to list
function buildToDo(todo) {
  // Set variable to create new paragraph element
  let p = document.createElement("p");

  // Set variable to create new delete button
  let btn = document.createElement("button");
  btn.textContent = "X";

  // Listen for click on delete button
  btn.addEventListener("click", handleDelete);

  // Set paragraph text to todo's value
  p.textContent = `${todo} `;

  // Append button to the p element
  p.appendChild(btn);

  console.log(p);

  // Append this new paragraph to tasks ul
  document.querySelector("#tasks").appendChild(p);
}

// Function to delete task from list
function handleDelete(e) {
  e.target.parentNode.remove();
}
