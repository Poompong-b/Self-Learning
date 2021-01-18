var addForm = document.getElementById("addform");
var itemList = document.getElementById("items");

//Form Submit Event
addForm.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  var item = document.getElementById("item-input");
  //Create new li
  var newItem = document.createElement("li");
  newItem.className = "list-group-item";
  //Add TextNod with input value
  newItem.textContent = item.value;
  //Create delete button
  var delButton = document.createElement("button");
  delButton.textContent = "delete";
  delButton.className = "delete";
  delButton.style.cssText = "position :absolute; right: 20px;";
  //Add Button to new item
  newItem.appendChild(delButton);
  //Add Item to Item list
  itemList.appendChild(newItem);

  console.log(item);
  console.log(newItem);
}

//Delete Event
itemList.addEventListener("click", removeItem);

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      //Remove button parent (li)
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Search Filter
var filter = document.getElementById("filter");
filter.addEventListener("keyup", filterItem);

function filterItem(e) {
  var filterText = filter.value.toLowerCase();
  //Get all items
  var items = itemList.getElementsByTagName("li");
  //Turn HTML collection to Array
  Array.from(items).forEach(function (item) {
    var itemName = item.textContent;

    //Compare Item names to search box
    if (itemName.toLowerCase().indexOf(filterText) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  console.log(filterText);
}
