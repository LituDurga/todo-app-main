import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-primary">
        <a className="navbar-brand mx-3" href="#">
          Durga's ToDo App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>


      <AddTodo />
      <Todos />

    </>
  );
}

export default App;
