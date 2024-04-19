// Create a new list item
var newItem = document.createElement("li");
newItem.textContent = "New Item";

// Append the new list item to the existing list
var list = document.getElementById("myList");
list.appendChild(newItem);
