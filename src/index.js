document.addEventListener("DOMContentLoaded", () => {
  // Listen for click on submit button
  document.querySelector("form").addEventListener("submit", e => {
    // Prevent browser redirect upon click
    e.preventDefault();

    // Call function, passing in text field value as parameter
    let taskValue = document.getElementById("new-task-description").value;
    let level = document.getElementById("prioritySelect").value;

    buildToDo(taskValue, level);

    // Revert text field to placeholder value
    document.getElementById("new-task-description").value = "";
  });
});

// Function to append new tasks to list
function buildToDo(todo, level) {
  // Set variable to create new paragraph element
  let p = document.createElement("p");

  // Set variable to create delete button
  let btn = document.createElement("button");
  btn.textContent = "X";

  // Set paragraph text to todo's value
  p.textContent = `${todo}  `;

  // Set paragraph text color based on priority level
  p.style.color = priority[level][0];

  // Append button to the p element
  p.appendChild(btn);

  // Append this new line to tasks ul
  document.querySelector("#tasks").appendChild(p);

  // Listen for click on delete button
  btn.addEventListener("click", handleDelete);
}

// Function to delete task from list
function handleDelete(e) {
  e.target.parentNode.remove();
}

// Function to build generic dropdown selection
function buildSelect(choices, id) {
  // Define new selection element
  const sel = document.createElement("select");

  // Traverse through choices list and add it to
  // selection dropdown
  choices.forEach(e => {
    // Create new option element
    let level = document.createElement("option");

    // Apply text content from choices list
    // to this selection
    level.textContent = e;

    // Finally, append this selection to
    // the dropdown selection menu
    sel.appendChild(level);
  });

  // Add an id attribute to this menu so we
  // can easily target it later
  sel.setAttribute("id", id);

  // Return newly built dropdown
  return sel;
}

// Define priority levels and call buildSelect function
//const priority = ["High", "Medium", "Low"];
const priority = { High: ["red", 1], Medium: ["orange", 2], Low: ["Black", 3] };
const prioritySelect = buildSelect(Object.keys(priority), "prioritySelect");

// Insert a dropdown selection for priority classification
let refNode = document.getElementById("new-task-description");
refNode.parentNode.insertBefore(prioritySelect, refNode.nextSibling);
