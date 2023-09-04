//your code here!

document.addEventListener("DOMContentLoaded", function() {
  // Get the <ul> element where the list items will be added
  const ul = document.querySelector("#myList");

  // Function to add a new list item
  function addListItem() {
    const li = document.createElement("li");
    li.textContent = "List Item " + (ul.childElementCount + 1); // Generate a unique label
    ul.appendChild(li);
  }

  // Add about 10 list items by default
  for (let i = 0; i < 10; i++) {
    addListItem();
  }

  // Function to check if the user has scrolled to the end of the list
  function isAtEndOfList() {
    const lastLi = ul.lastChild;
    const lastLiRect = lastLi.getBoundingClientRect();
    return lastLiRect.bottom <= window.innerHeight;
  }

  // Function to handle scroll event and add more list items if needed
  function handleScroll() {
    if (isAtEndOfList()) {
      // Add 2 more list items when the user reaches the end
      for (let i = 0; i < 2; i++) {
        addListItem();
      }
    }
  }

  // Add an event listener to the window's scroll event
  window.addEventListener("scroll", handleScroll);
});
