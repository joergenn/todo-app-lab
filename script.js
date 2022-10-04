const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const todoInput = document.getElementById('todo-name')
let count = 0
let unchecked = 0

function newTodo() {
  if(todoInput.value.trim() == "")return
  count += 1
  unchecked += 1
  itemCountSpan.innerHTML = count
  uncheckedCountSpan.innerHTML = unchecked
  list.insertAdjacentHTML('beforeend', `
    <li class="todo-item">
      <div class="todo-container">
        <span>${count}. ${todoInput.value} <input type="checkbox" class="todo-checkbox" onchange="checkboxChange(this)"></span>
        <button onClick="deleteTodo(this)">DELETE</button>
      </div>
    </li>
  `);
  todoInput.value = ""
}

function deleteTodo(elem){
  let listItem = elem.parentElement.parentElement
  let status = listItem.querySelector('.todo-checkbox').checked
  count -= 1
  itemCountSpan.innerHTML = count
  if(status == false){
    unchecked -= 1
    uncheckedCountSpan.innerHTML = unchecked
  }
  listItem.remove()
}

function checkboxChange(elem){
  if (elem.checked) {
    unchecked -= 1
  } else {
    unchecked += 1
  }
  uncheckedCountSpan.innerHTML = unchecked
}
