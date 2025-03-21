document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    // Signup Logic
    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Get user input
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Save user data in localStorage
            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            alert("Sign-up successful! Redirecting to login...");
            window.location.href = "login.html"; // Redirect to login page
        });
    }

    // Login Logic
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Retrieve user data from localStorage
            const storedUser = JSON.parse(localStorage.getItem("user"));
            const enteredEmail = document.getElementById("login-email").value;
            const enteredPassword = document.getElementById("login-password").value;

            // Check credentials
            if (storedUser && storedUser.email === enteredEmail && storedUser.password === enteredPassword) {
                alert(`Welcome back, ${storedUser.name}! Redirecting to main page...`);
                window.location.href = "index.html"; // Redirect to main page
            } else {
                alert("Invalid email or password. Try again.");
            }
        });
    }
});
