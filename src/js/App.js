import React from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: "",
      activeTab: "ALL",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Date.now(), text: this.state.input, isDone: false },
      ],
      input: "",
    });
  };

  handleChange = (value) => {
    this.setState({ input: value });
  };

  handleToggle = (id) => {
    let MappedTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    this.setState({ todos: MappedTodo });
  };

  handleDelete = (id) => {
    let activeTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: activeTodos });
  };

  handleTab = (tab) => {
    this.setState({ activeTab: tab });
  }

  handleClearCompleted = (e) => {
    let filter = this.state.todos.filter((todo) => !todo.isDone);
    this.setState({ todos: filter });
  };

  filterTodos(tab, todos) {
    switch (tab) {
      case "ACTIVE":
        return todos.filter((todo) => !todo.isDone);
      case "COMPLETED":
        return todos.filter((todo) => todo.isDone);
      default:
        return todos;
    }
  }

  render() {
    let filterTodos = this.filterTodos(this.state.activeTab, this.state.todos);

    return (
      <div className="container">
        <h1>todos</h1>
        <div className="drop-down-flex">
          <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />

          <TodoList
            filterTodos={filterTodos}
            handleToggle={this.handleToggle}
            handleDelete={this.handleDelete}
          />
        </div>

        <Footer
          leftItems={this.state.todos.filter((todo) => !todo.isDone).length}
          tab={this.state.activeTab}
          handleTab={this.handleTab}
          handleClearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
