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
