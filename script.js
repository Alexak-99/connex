 // Splash Screen Redirect (sirf index page ke liye)

if (
    window.location.pathname.endsWith("/") ||
    window.location.pathname.endsWith("/index.html")
) {
    setTimeout(function () {
        window.location.href = "login.html";
    }, 2500);
}

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const chats = document.querySelectorAll(".chat");

        chats.forEach(chat => {

            const name = chat.querySelector("h3").innerText.toLowerCase();

            if (name.includes(value)) {
                chat.style.display = "flex";
            } else {
                chat.style.display = "none";
            }

        });

    });

}
