//create a todo list

let todoList = [];

//
function addTodo() {
  const getTodo = document.querySelector("#js-addTodo"); // set a variable that will contain the html id for the input text
  const subTodo = getTodo.value; // set a variable to get the value of input text

  const dateDue = document.querySelector("#js-dueDate");
  let getDate = dateDue.value;

  const getTime = document.querySelector("#js-setTime");
  let getSetTime = getTime.value;
  // create an object to be push on todolist array
  todoList.push({
    name: subTodo,
    dueDate: getDate,
    time: getSetTime,
  });

  getTodo.value = ""; //clear the box when adding
  renderTodoList();
}

// To display the it to  the browser

function renderTodoList() {
  let displayTodoList = ""; // clears the appended item so it wont show again
  for (let i = 0; i < todoList.length; i++) {
    //looping through values
    const getTodoListObj = todoList[i]; //getting the value of array todoList in above
    const { name } = getTodoListObj;
    const { dueDate } = getTodoListObj;
    const { time } = getTodoListObj;
    const setDisplay = `
      <div class="setcss">${name}</div>
      <div class="setcss">${time}</div>
      <div class="setcss">${dueDate}</div>
      
     <button class="deleteBtn" onclick = "todoList.splice(${i}, 1);
    renderTodoList();">Delete</button>`; // returning a value as a html or displat an item
    displayTodoList += setDisplay; //getting the dispaly item then storing it in a variable displaytodolist
  }
  document.querySelector("#js-todoList").innerHTML = displayTodoList; //getting the displaytodolist and pointing it on a div in html section
}
