document.addEventListener("DOMContentLoaded", function() {
    animateStatistics();
    changeGlowingText();
    
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-animate");
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Animation for statistics counter
function animateStatistics() {
    const counters = [
        { id: "obesityCount", target: 150 },
        { id: "unhealthyCount", target: 200 },
        { id: "healthTipsCount", target: 300 }
    ];

    counters.forEach(counter => {
        let count = 0;
        const target = counter.target;
        const element = document.getElementById(counter.id);

        const interval = setInterval(() => {
            count++;
            element.textContent = count;
            if (count === target) {
                clearInterval(interval);
            }
        }, 10);
    });
}

// Glowing text effect
function changeGlowingText() {
    const messages = [
        "Obesity is a serious health concern!",
        "Stay active for a healthy life!",
        "Nutrition is key to wellness!",
        "Regular check-ups are essential!",
    ];

    let index = 0;
    setInterval(() => {
        document.getElementById('glowing-text').textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 600); // Change every 2 seconds
}

// Toggle Chatbot Visibility
function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbotWindow");
    chatbotWindow.style.display = chatbotWindow.style.display === "none" || chatbotWindow.style.display === "" ? "flex" : "none";
}

// Handle User Message Input
function handleUserMessage(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Display User's Message and Send Bot's Response
function sendMessage() {
    const userInput = document.getElementById("userInput");
    const messageText = userInput.value.trim();

    if (messageText !== "") {
        addMessage("user", messageText);
        userInput.value = "";

        // Simulate bot response
        setTimeout(() => {
            addMessage("bot", "Thank you for reaching out! How can I assist you?");
        }, 1000); // 1-second delay for a more realistic response
    }
}

// Add Message to Chat Window
function addMessage(sender, message) {
    const chatbotMessages = document.getElementById("chatbotMessages");
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "bot" ? "bot-message" : "user-message");
    messageElement.textContent = message;

    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
