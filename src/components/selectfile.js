import React, { Component } from "react";

class SelectFile extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.props.handleChange.bind(this);
    this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  render() {


    return (
      <div className='selectfile'>
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your file to view:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
export default SelectFile;
