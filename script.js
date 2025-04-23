document.addEventListener('DOMContentLoaded', function() {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');
    
    // Placeholder responses for demo purposes
    const mockResponses = [
        "I'm just a simple demo version. In the future, I'll be connected to a real AI!",
        "That's an interesting question. When the backend is implemented, I'll provide better answers.",
        "I understand your question, but I'm currently operating in demo mode.",
        "Thanks for your message! A real AI will respond here once the backend is set up.",
        "I'm taking note of your question for when I'm connected to a real AI model."
    ];
    
    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const message = userInput.value.trim();
        if (!message) return;
        
        // Add user message to chat
        addMessageToChat('user', message);
        
        // Clear input field
        userInput.value = '';
        
        // Simulate loading
        const loadingMessage = addMessageToChat('bot', '...', 'loading');
        
        // Simulate AI response delay (1-2 seconds)
        setTimeout(() => {
            // Remove loading indicator
            chatMessages.removeChild(loadingMessage);
            
            // Get random mock response
            const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
            
            // Add AI response to chat
            addMessageToChat('bot', randomResponse);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, Math.random() * 1000 + 1000);
    });
    
    // Function to add messages to the chat
    function addMessageToChat(sender, text, className = '') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message ${className}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        
        contentDiv.appendChild(paragraph);
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        
        return messageDiv;
    }
});
