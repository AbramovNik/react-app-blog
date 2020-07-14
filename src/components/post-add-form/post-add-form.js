import React, { Component } from "react";
import "./post-add-form.css";

export default class PostAddForm extends Component {
  state = {
    text: "",
    disableBtn: true,
  };
  onValueChange = (e) => {
    this.setState({
      text: e.target.value,
      disableBtn: false,
    });
    if (e.target.value === "") {
      this.setState({
        disableBtn: true,
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);

    this.setState({
      text: "",
      disableBtn: true,
    });
  };

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="О чем вы думаете сейчас?"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
          disabled={this.state.disableBtn}
        >
          Добавить
        </button>
      </form>
    );
  }
}
