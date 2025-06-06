# AgentVoice

AgentVoice is a demonstration of integrating ElevenLabs text-to-speech with a web interface. The project now uses Angular and Tailwind CSS and can be run inside a Node.js container using Docker Compose.

## Setup

1. Clone this repository.
2. Build and start the development server with Docker Compose:

   ```bash
   docker-compose up --build
   ```

   The Angular dev server will be available at `http://localhost:4200`.

## Running the Web Page

After starting the container, open the page in your browser and interact with it. A floating button in the bottom-right corner opens a simple chatbot widget where you can send text or start a voice call.

## Configuring ElevenLabs Credentials

Open `frontend/src/assets/script.js` and replace the `ELEVEN_API_KEY` and `ELEVEN_VOICE_ID` placeholders with your own ElevenLabs credentials. These values are required for the page to authenticate requests to the ElevenLabs service.
