const socket = io();
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("message");
let allMessages = document.getElementById("display--area");

const username = prompt("Enter Your Name");
socket.emit("user-name", username);

const append = (username) => {
  let div = document.createElement("div");
  div.classList.add("join--msg");
  div.innerHTML = username;
  allMessages.appendChild(div);
};
socket.on("user-joined", (name) => {
  append(`${name ? name : "Someone"} Joind The Chat!`);
});

socket.on("message", (message, sender) => {
  let div = document.createElement("div");
  div.classList.add("msg--area");
  div.innerHTML = `<strong>${sender}:</strong> ${message}`;
  allMessages.appendChild(div);
});

messageInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendBtn.click();
  }
});

sendBtn.addEventListener("click", (e) => {
  const message = messageInput.value;
  if (message.trim()) {
    socket.emit("user-message", message, username);
    messageInput.value = "";
  }
});
