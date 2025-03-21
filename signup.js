document.addEventListener("DOMContentLoaded", () => {
    // 🎨 Function to Generate a Random Hex Color
    function getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    // 🎨 Function to Apply a Random Gradient Background
    function setRandomGradient() {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    }

    // 🔄 Set Gradient on Page Load
    setRandomGradient();

    // 🔄 Refresh Gradient Every 5 Seconds (Optional)
    setInterval(setRandomGradient, 5000);
});
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form submission refresh

            // Simulate storing user data (in real projects, use a backend API)
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Store user details (for demo purposes only)
            localStorage.setItem("user", JSON.stringify({ username, email, password }));

            alert("Signup successful! Redirecting to login...");
            window.location.href = "index.html"; // Redirect to login page
        });
    }
});
