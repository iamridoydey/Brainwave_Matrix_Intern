let todoList = [];

// Select the container of the todo list
const listData = document.querySelector(".list-data");

// Form input container
const form = document.querySelector(".todo-input-container");
const todoInput = document.querySelector(".todo-input");

// Add submit event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = todoInput.value.trim();
  if (todo !== "") {
    todoList.push(todo);

    // Clear input field
    todoInput.value = "";
    // Add item to the DOM
    addItem(todo);
  }
});

// Add a new item to the DOM
function addItem(todo) {
  const newItem = document.createElement("div");
  newItem.classList.add("list-item");

  newItem.innerHTML = `
    <h3 class="list-name">${todo}</h3>
    <h3 class="created-at">${getCurrentTime()}</h3>
    <button class="delete-list">❌</button>
  `;

  // Add delete functionality
  const deleteButton = newItem.querySelector(".delete-list");
  deleteButton.addEventListener("click", () => {
    deleteItem(newItem, todo);
  });

  // Append to the list
  listData.appendChild(newItem);
}

// Remove an item from the DOM and list
function deleteItem(itemElement, todo) {
  // Remove from the list
  todoList = todoList.filter((t) => t !== todo);
  // Remove from the DOM
  listData.removeChild(itemElement);
}

function getCurrentTime() {
  const timestamp = Date.now();
  // Create a Date object
  const date = new Date(timestamp);

  // Get hours (0-23)
  let hours = date.getHours();
  // Get minutes with leading zero
  const minutes = date.getMinutes().toString().padStart(2, "0");
  // Determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${ampm}`;
}
