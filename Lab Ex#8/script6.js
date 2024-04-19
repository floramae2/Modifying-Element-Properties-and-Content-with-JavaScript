// Select the unordered list and the first list item
var unorderedList = document.getElementById("myUnorderedList");
var firstListItem = unorderedList.firstElementChild;

// Remove the first list item from the unordered list
unorderedList.removeChild(firstListItem);

// Select the ordered list
var orderedList = document.getElementById("myOrderedList");

// Append the removed list item to the ordered list
orderedList.appendChild(firstListItem);
