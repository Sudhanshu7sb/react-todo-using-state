import React from "react";

class InputTodo extends React.Component {
  render() {
    return (
      <>
        <input
        className="text-input"
          type="text"
          value={this.props.value}
          onChange={({ target: { value } }) => this.props.handleChange(value)}
        />
      </>
    );
  }
}

export default InputTodo;
