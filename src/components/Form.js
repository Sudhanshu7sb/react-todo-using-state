import React from "react";
import InputTodo from "./InputTodo";

class Form extends React.Component {
  render(props) {
    return (
      <>
        <form onSubmit={(event) => this.props.handleSubmit(event)}>
          <InputTodo handleChange={this.props.handleChange} />
        </form>
      </>
    );
  }
}

export default Form;
