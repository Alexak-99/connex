 setTimeout(function () {
    window.location.href = "login.html";
}, 2500);
// Sirf index.html par redirect hoga
if (window.location.pathname.includes("index.html")) {
    setTimeout(function () {
        window.location.href = "login.html";
    }, 2500);
}

// Chat wala code niche aayega
function sendMessage() {
    let input = document.getElementById("messageInput");
    let text = input.value.trim();

    if (text === "") return;

    let msg = document.createElement("div");
    msg.className = "sent";
    msg.innerText = text;

    document.querySelector(".messages").appendChild(msg);

    input.value = "";
}

if (document.getElementById("messageInput")) {
    document.getElementById("messageInput").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
}
const messages = document.getElementById("messages");
const input = document.getElementById("messageInput");

function getTime() {
    const d = new Date();
    return d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
}

function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    messages.innerHTML += `
        <div class="sent">
            ${text}
            <div class="time">${getTime()}</div>
        </div>
    `;

    input.value = "";

    messages.scrollTop = messages.scrollHeight;

    setTimeout(function () {

        messages.innerHTML += `
            <div class="received">
                👍 Message Received
                <div class="time">${getTime()}</div>
            </div>
        `;

        messages.scrollTop = messages.scrollHeight;

    }, 1000);
}

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
