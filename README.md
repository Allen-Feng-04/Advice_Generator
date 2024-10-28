# Advice Generator

## Description

The **Advice Generator** is a simple web application that allows users to receive advice on any topic they’re interested in. By entering a keyword, users can get advice relevant to their input or a default suggestion if no specific advice is found. This app is ideal for users seeking quick guidance or words of wisdom on various aspects of life. It leverages the power of APIs to make the experience interactive and engaging.

## Features

- Users can enter any topic, such as "love," "career," or "health," and the app will fetch relevant advice.
- Provides a default response if the entered keyword does not return any specific advice.
- Simple, intuitive interface that’s easy to use for quick inspiration or guidance.

## Setup and Running Instructions

### Prerequisites

- Ensure you have **Node.js** and **npm** installed. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. **Clone the repository**:
    ```bash
    git clone <REPOSITORY_URL>
    ```

2. **Navigate into the project directory**:
    ```bash
    cd Advice_Generator
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the application**:
    ```bash
    npm start
    ```

## API Information

This application uses the **Advice Slip API** to fetch advice based on the keyword entered by the user. Here’s a brief overview of the API integration:

- **API Endpoint**: `https://api.adviceslip.com/advice/search/{keyword}`
- **Purpose**: The API provides advice slips based on a keyword, offering relevant advice for topics entered by users.
- **Integration**: The `fetchAdvice` function makes an asynchronous `GET` request to the API, using the entered keyword in the API endpoint. The response is parsed, and the first advice slip is displayed. If no advice is available for a keyword, an error message is displayed instead.

The Advice Slip API does not require authentication, making it straightforward to integrate and use for this type of lightweight project.

## Credits to OPEN_AI

I usually write the raw code myself and ask OPENAI to then polish it.
For this project, the AI made the following additions to my code:

-All the error handling such as try/catch(error)
-Formatting
-
