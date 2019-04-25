import React, { Component } from "react";

class MovieForm extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.push("/movies");
  };
  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Product Details - {match.params.id}</h1>
        <button
          type="button"
          onClick={this.handleSave}
          className="btn btn-primary btn-sm"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
