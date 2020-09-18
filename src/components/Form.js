import React from "react";
import InputTodo from "./InputTodo";

class Form extends React.Component {
  render() {
    return (
      <>
        <form onSubmit={(event) => this.props.handleSubmit(event)}>
          <InputTodo value={this.props.inputText} handleChange={this.props.handleChange} />
        </form>
      </>
    );
  }
}

export default Form;
