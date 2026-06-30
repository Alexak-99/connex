const messages = document.getElementById("messages");
const input = document.getElementById("messageInput");

function getTime() {
    const d = new Date();
    return d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
}

function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    const msg = document.createElement("div");
    msg.className = "sent";

    msg.innerHTML = `
        <div>${text}</div>

        <div class="message-info">
            <span class="time">${getTime()}</span>

            <span class="status">
                <span class="dot"></span>
                <span class="dot"></span>
            </span>
        </div>
    `;

    messages.appendChild(msg);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;

    // Pehle Red Dot
    const dots = msg.querySelectorAll(".dot");

    dots.forEach(dot => {
        dot.style.background = "red";
    });

    // 1 second baad Green Dot
    setTimeout(() => {
        dots.forEach(dot => {
            dot.style.background = "#00ff66";
        });

        // Demo Auto Reply
        const reply = document.createElement("div");
        reply.className = "received";
        reply.innerHTML = `
            👍 Message Received
            <div class="time">${getTime()}</div>
        `;

        messages.appendChild(reply);
        messages.scrollTop = messages.scrollHeight;

    }, 1000);
}

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
