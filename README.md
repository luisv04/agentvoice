# AgentVoice

AgentVoice is a minimal demonstration of integrating ElevenLabs text-to-speech with a web interface. The goal is to provide a simple starting point for experimenting with voice-enabled AI agents.

## Setup

1. Clone this repository.
2. Serve the files locally with any static web server. For example:

   ```bash
   python3 -m http.server
   ```

   Then open `http://localhost:8000` in your browser.

## Running the Web Page

The repository contains a basic HTML file that calls the ElevenLabs API. After starting your local server, navigate to the page in your browser and interact with it. A floating button in the bottom-right corner opens a simple chatbot widget where you can send text or start a voice call.

## Configuring ElevenLabs Credentials

Open `script.js` and replace the `ELEVEN_API_KEY` and `ELEVEN_VOICE_ID` placeholders with your own ElevenLabs credentials. These values are required for the page to authenticate requests to the ElevenLabs service.
