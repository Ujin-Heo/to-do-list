const loginForm = document.querySelector("#login-form");
const longinInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const resetBtn = document.querySelector("#reset-Btn")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = longinInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

function onResetClick(event) {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload(event)
}

resetBtn.addEventListener("click", onResetClick)