console.log("hola");

function renderList(users) {
  const ul = document.querySelector("ul");

  ul.innerHTML = users.map((user) => `<li>${user}</li>`).join("\n");
}

fetch("/users")
  .then((res) => res.json())
  .then(renderList);

const socket = io(window.location.origin);

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newUser = e.target[0].value;

  const ul = document.querySelector("ul");
  const newLi = document.createElement("li");
  newLi.innerText = newUser;
  ul.appendChild(newLi);

  console.log("new user?");

  socket.emit("newUser", { user: newUser });
});

socket.on("updateList", function (data) {
  console.log("NUEVA ENTRADA!", data.users);
  renderList(data.users);
});

// socket.on()
