alert("Chat JS Loaded");
console.log("Chat JS Loaded");

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
        ${text}
        <div class="time">${getTime()}</div>
    `;

    messages.appendChild(msg);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {

        const reply = document.createElement("div");
        reply.className = "received";
        reply.innerHTML = `
            👍 Message Received
            <div class="time">${getTime()}</div>
        `;

        messages.appendChild(reply);

        messages.scrollTop = messages.scrollHeight;

    },1000);

}

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){
sendMessage();
}

});
