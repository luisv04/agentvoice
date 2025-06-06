document.getElementById('mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ElevenLabs credentials - replace with your values
const ELEVEN_API_KEY = '';
const ELEVEN_VOICE_ID = '';

const chatButton = document.getElementById('chatbot-button');
const chatWidget = document.getElementById('chatbot-widget');
const sendButton = document.getElementById('send-button');
const callButton = document.getElementById('call-button');
const chatInput = document.getElementById('chat-input');

chatButton.addEventListener('click', () => {
    chatWidget.classList.toggle('open');
});

sendButton.addEventListener('click', () => {
    const text = chatInput.value.trim();
    if (text) {
        speakText(text);
    }
});

callButton.addEventListener('click', () => {
    startVoiceCall();
});

async function speakText(text) {
    if (!ELEVEN_API_KEY || !ELEVEN_VOICE_ID) {
        console.error('ElevenLabs credentials are missing');
        return;
    }
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ELEVEN_VOICE_ID}/stream`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'xi-api-key': ELEVEN_API_KEY
        },
        body: JSON.stringify({ text })
    });
    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
}

function startVoiceCall() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert('Speech recognition not supported in this browser');
        return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        speakText(transcript);
    };
    recognition.onerror = (event) => {
        console.error('Speech recognition error', event);
    };
    recognition.start();
}
