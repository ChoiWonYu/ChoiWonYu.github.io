import "./styles.css";
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const formName = document.querySelector("#formName");
const formText = document.querySelector("#formName #formText");
const greeting = document.querySelector("#greeting");

const onSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, formText.value);
  const userName = localStorage.getItem(USERNAME_KEY);
  formName.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${userName}`;
};
const userName = localStorage.getItem(USERNAME_KEY);
if (userName === null) {
  formName.classList.remove(HIDDEN_CLASSNAME);
  formName.addEventListener("submit", onSubmit);
} else {
  formName.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${userName}`;
}
