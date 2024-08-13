# Tic-Tac-Toe Game

A simple Tic-Tac-Toe game built with React. This project demonstrates fundamental React concepts, including state management, component structure, and event handling.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- Playable Tic-Tac-Toe game.
- Smart Bot opponent feature.
- Simple and clean UI.
- Displays game status and winner.
- Light & Dark modes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vinhcodes/tic-tac-toe-react.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tic-tac-toe-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To start the development server and play the game locally:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```plaintext
tic-tac-toe-react/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── __test__/
│   │   ├── Board.test.js
│   │   └── ...
│   ├── bot/
│   │   ├── Bot.js
│   ├── components/
│   │   ├── Board.js
│   │   ├── Game.js
│   │   └── Square.js
│   ├── helper/
│   │   ├── helper.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```
- **\`src/__test__/\`**: Contains some tests for my components and functions.
- **\`bot/\`**: This folder contains `Bot.js` my [bot algorithm](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/) responsible for smart Bot opponent feature.
- **\`src/components/\`**: Contains main components like `Board.js` `Game.js` and `Square.js`.
- **\`src/helper/\`**: Contains helper.js, which determines the game winner.
- **\`App.js\`**: Main application component `App.js`.
- **\`index.js\`**: Entry point of the React application `index.js`.

## Technologies Used

- **React (18.3.1)**: A JavaScript library for building user interfaces.
- **JavaScript (ES6+)**: The programming language used.
- **CSS**: For styling the application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any inquiries or feedback, feel free to reach out:

- **Your Name**: [vinhnguyen.dev@outlook.com](mailto:vinhnguyen.dev@outlook.com)
- **GitHub**: [https://github.com/vinhcodes](https://github.com/vinhcodes)
