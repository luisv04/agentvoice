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

The repository contains a basic HTML file that calls the ElevenLabs API. After starting your local server, navigate to the page in your browser and interact with it.

## Configuring ElevenLabs Credentials

Create a file named `.env` in the project root (or set environment variables in your hosting environment) with the following contents:

```
ELEVEN_API_KEY=your-api-key-here
ELEVEN_VOICE_ID=your-voice-id
```

Replace the placeholder values with your ElevenLabs API key and the voice ID you want to use. The web page reads these values to authenticate requests to the ElevenLabs service.
