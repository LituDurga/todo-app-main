# React Todo App

This is a simple Todo application built with React and Redux Toolkit. It allows users to add, edit, and remove tasks. The tasks are persisted in local storage, so they are not lost on page reload.

## Features

- Add new todos
- Edit existing todos
- Remove todos
- Persistent storage using local storage

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. Clone the repository:

   sh
   git clone https://github.com/LituDurga/todo-app-main.git
   cd react-todo-app

2. Install the dependencies:

   sh
   npm install

### Running the App

To start the development server, run:

sh
npm start

This will start the app and open it in your default web browser. If it does not open automatically, you can access it at http://localhost:3000.

### Building for Production

To build the app for production, run:

sh
npm run build

This will create an optimized build of the app in the build directory.

## Project Structure

The project has the following structure:

src/
├── app/
│ └── store.js
├── features/
│ └── todo/
│ └── operation.js
├── components/
│ └── Todos.jsx
├── main.jsx
├── App.jsx
└── index.html

- store.js: Configures the Redux store and handles local storage.
- operation.js: Contains the Redux slice for managing todos.
- Todos.jsx: The main component for displaying and managing todos.
- main.jsx: Entry point for the React app.
- App.jsx: Main App component.

## Usage

### Adding a Todo

To add a new todo, enter the subject and body in the input fields and click the "Add Todo" button.

### Editing a Todo

To edit an existing todo, click the "Edit" button next to the todo. This will open a modal where you can update the subject and body. After making changes, click the "Save changes" button to update the todo.

### Removing a Todo

To remove a todo, click the "Delete" button next to the todo.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Bootstrap](https://getbootstrap.com/) for styling the components.

---
