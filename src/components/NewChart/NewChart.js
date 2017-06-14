import React, { Component, PropTypes } from "react";

import "./NewChart.css";

export default class NewChart extends Component {
  static propTypes = { createChart: PropTypes.func.isRequired };

  constructor( props ) {
    super( props );

    this.state = {
      labels: [],
      name: '',
      newLabel: ''
    };

    this.handleNameChange = this.handleChange.bind( this, "name" );
    this.handleLabelChange = this.handleChange.bind( this, "newLabel" );
  }

  handleChange(field, event) {
    this.setState({ [field]: event.target.value });
  }

  render() {
    const {
      labels,
      name,
      newLabel
    } = this.state;
    return (
      <div className="new-chart">
        <div className="new-chart__form-group">
          <label className="new-chart__label">Chart Name:</label>
          <input
            className="new-chart__name new-chart__input"
            type="text"
            onChange={ this.handleNameChange }
            value={ name }
          />
        </div>
        <form className="new-chart__form-group">
          <label className="new-chart__label">Add Label:</label>
          <input
            className="new-chart__category new-chart__input"
            required
            type="text"
            onChange={ this.handleLabelChange }
            value={ newLabel }
          />
        </form>

        <div className="new-chart__labels-wrapper">
          <label className="new-chart__label">Labels:</label>
          <span className="new-chart__labels">[] (Min. 3)</span>
        </div>

        <button className="new-chart__submit">
          Submit
        </button>
      </div>
    );
  }
}