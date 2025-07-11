function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

document
    .getElementById("reservation-form")
    .addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("reservation-success").classList.remove("hidden");
        this.reset();
    });

function toggleTheme() {
    const html = document.documentElement;
    if (html.getAttribute("data-theme") === "dark") {
        html.removeAttribute("data-theme");
    } else {
        html.setAttribute("data-theme", "dark");
    }
}

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "admin123") {
        document.getElementById("login-section").classList.add("hidden");
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        document.getElementById("login-error").classList.remove("hidden");
    }
});

function enableEdit(button) {
    const container = button.parentElement;
    const fields = container.querySelectorAll("h3, p, span");
    const isEditing = fields[0].isContentEditable;

    fields.forEach((el) => (el.contentEditable = !isEditing));
    button.textContent = isEditing ? "Edit" : "Save";

    if (isEditing) alert("Changes saved.");
}