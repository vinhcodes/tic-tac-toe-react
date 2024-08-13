# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


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
- Two-player mode.
- Simple and clean UI.
- Displays game status and winner.
- Responsive design.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tic-tac-toe-react.git
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

Open your browser and navigate to \`http://localhost:3000\`.

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
- **\`bot/\`**: Is a folder that has my [bot algorithm](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/) `Bot.js`
- **\`src/components/\`**: Contains main components like `Board.js` `Game.js` and `Square.js`.
- **\`src/helper/\`**: Contains helper.js, which determines the game winner.
- **\`App.js\`**: Main application component `App.js`.
- **\`index.js\`**: Entry point of the React application `index.js`.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JavaScript (ES6+)**: The programming language used.
- **CSS**: For styling the application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any inquiries or feedback, feel free to reach out:

- **Your Name**: [vinhnguyen.dev!outlook.com](mailto:vinhnguyen.dev@outlook.com)
- **GitHub**: [https://github.com/vinhcodes](https://github.com/vinhcodes)
