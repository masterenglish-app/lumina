document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    output.textContent = "LUMINA is running.";
});
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const output = document.getElementById("output");

sendBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    output.textContent = "LUMINA: 「" + text + "」を受け取りました。";
    input.value = "";
});
