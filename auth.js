document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");

    // Handle Login
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "main.html"; // Redirect to chatbot
            } else {
                alert("Invalid credentials! Please try again.");
            }
        });
    }

    // Handle Signup
    if (signupBtn) {
        signupBtn.addEventListener("click", () => {
            const username = document.getElementById("signup-username").value;
            const password = document.getElementById("signup-password").value;

            if (username && password) {
                localStorage.setItem("user", JSON.stringify({ username, password }));
                alert("Signup successful! Please log in.");
                window.location.href = "login.html";
            } else {
                alert("Please enter valid details.");
            }
        });
    }
});
