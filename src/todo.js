const formTodo = document.querySelector("#formTodo");
const todoInput = formTodo.querySelector("input");
const todoList = document.getElementById("todoList");
let todos = [];
const TODOS_KEY = "TodoList";
const saveTodos = () => localStorage.setItem(TODOS_KEY, JSON.stringify(todos));

const deleteTodo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
};

const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  li.id = newTodo.id;
  btn.innerText = "X";
  btn.addEventListener("click", deleteTodo);
  span.innerText = newTodo.text;
  saveTodos();
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
};
const handleSubmit = (event) => {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
};
formTodo.addEventListener("submit", handleSubmit);

const savedTodoList = localStorage.getItem(TODOS_KEY);

if (savedTodoList !== null) {
  const parsedTodos = JSON.parse(savedTodoList);
  todos = parsedTodos;
  parsedTodos.filter(paintTodo);
}
