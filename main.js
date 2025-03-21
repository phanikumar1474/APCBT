document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage();
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        addMessage(message, "user-message");
        setTimeout(() => addMessage("Thinking...", "bot-message", true), 500); // Simulate bot response

        setTimeout(() => {
            document.querySelector(".bot-message.typing").remove(); // Remove typing effect
            addMessage("I'm still learning! 😊", "bot-message"); // Bot response
        }, 2000);

        userInput.value = "";
    }

    function addMessage(text, className, isTyping = false) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add(className);
        if (isTyping) msgDiv.classList.add("typing");
        msgDiv.textContent = text;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedIn");
            window.location.href = "login.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage();
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        addMessage(message, "user-message");
        setTimeout(() => addMessage("Thinking...", "bot-message", true), 500); // Simulate bot response

        setTimeout(() => {
            document.querySelector(".bot-message.typing").remove(); // Remove typing effect
            addMessage("I'm still learning! 😊", "bot-message"); // Bot response
        }, 2000);

        userInput.value = "";
    }

    function addMessage(text, className, isTyping = false) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add(className);
        if (isTyping) msgDiv.classList.add("typing");
        msgDiv.textContent = text;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
//login
document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedIn");
            window.location.href = "login.html";
        });
    }
});
//theme
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "☀️"; /* Change to sun icon*/
    }

    // Theme Toggle Button Click
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Save user preference
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "☀️"; // Switch to Sun Icon
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙"; // Switch to Moon Icon
        }
    });
});
//mic
document.addEventListener("DOMContentLoaded", () => {
    const micBtn = document.getElementById("mic-btn");
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    //  Voice Input (Speech Recognition)
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.lang = "en-US";

    micBtn.addEventListener("click", () => {
        micBtn.classList.add("listening");
        recognition.start();
    });

    recognition.onresult = (event) => {
        micBtn.classList.remove("listening");
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript; // Fill input with speech text
    };

    recognition.onerror = () => {
        micBtn.classList.remove("listening");
        alert("Voice recognition failed. Please try again.");
    };

    //  Voice Output (Text-to-Speech) with Speaking Animation
    function speakBotMessage(message) {
        const speech = new SpeechSynthesisUtterance(message);
        speech.lang = "en-US";
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;

        // Add speaking animation to the bot's last message
        const botMessages = document.querySelectorAll(".bot-message");
        if (botMessages.length > 0) {
            const lastBotMsg = botMessages[botMessages.length - 1];
            lastBotMsg.classList.add("speaking");

            speech.onend = () => {
                lastBotMsg.classList.remove("speaking"); // Remove animation after speaking
            };
        }

        window.speechSynthesis.speak(speech);
    }

    //  Modify Bot Response Handling
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        addMessage(message, "user-message");
        setTimeout(() => addMessage("Thinking...", "bot-message", true), 250); // Simulate bot response

        setTimeout(() => {
            document.querySelector(".bot-message.typing").remove();
            const botResponse = "I'm still learning! 😊"; // Placeholder response
            addMessage(botResponse, "bot-message");
            speakBotMessage(botResponse); // Speak response
        }, 2000);

        userInput.value = "";
    }
});
