import React from "react";
// import { render } from "@testing-library/react";
let filterTodos = [];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: "",
      activeTab: "ALL",
    };
  }
  handleClear=()=>{
    let clear=this.state.todos.filter(todo=>!todo.isDone)
    this.setState({todos:clear})
  }
  filterTodo = (tab, todos) => {
    switch (tab) {
      case "ACTIVE":
        return todos.filter((todo) => !todo.isDone);
      case "COMPLETED":
        return todos.filter((todo) => todo.isDone);
      default:
        return todos;
    }
  };
  handleChange = (value) => {
    this.setState({ input: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Date.now(), text: this.state.input, isDone: false },
      ],
      input: "",
    });
  };

  handleRemove = (id) => {
    let Filter = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: Filter });
  };
  handleToggle = (id) => {
    let Mapped = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    this.setState({ todos: Mapped });
    // this.setState({todos.completed : this.state.todos.filter(todo => todo.isDone)});
  };

  handleTab = (str) => {
    this.setState({ activeTab: str });
  };
  render() {
    // console.log(this.state.input,"rendering");
    filterTodos = this.filterTodo(this.state.activeTab, this.state.todos);
    console.log(filterTodos, "state");
    return (
      <div className="container">
        <h1>todos</h1>
        <div className="drop-down-flex">
          <form onSubmit={this.handleSubmit}>
            <input className="text-input"
              value={this.state.input}
              onChange={({ target: { value } }) => this.handleChange(value)}
            />
          </form>
          
          <ul>
            {filterTodos.map((todo, i) => {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => this.handleToggle(todo.id)}
                  />
                  <p>{todo.text}</p>
                  <span onClick={() => this.handleRemove(todo.id)}>X</span>
                </li>
              );
            })}
          </ul>
          </div>
        <footer>
          <span class="item">0 item left</span>
          <button class="all" onClick={() => this.handleTab("ALL")}>
            All
          </button>
          <button class="completed" onClick={() => this.handleTab("COMPLETED")}>
            Completed
          </button>
          <button class="active" onClick={() => this.handleTab("ACTIVE")}>
            Active
          </button>
          <button todosclass="clear" onClick={this.handleClear}>
            <a class="anchor" href="##">
              Clear Completed
            </a>
          </button>
        </footer>
      </div>
    );
  }
}
