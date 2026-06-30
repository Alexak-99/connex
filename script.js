// Splash Screen Redirect

if (window.location.pathname.includes("index.html")) {
    setTimeout(function () {
        window.location.href = "login.html";
    }, 2500);
}
