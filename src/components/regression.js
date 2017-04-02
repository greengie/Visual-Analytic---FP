import React, { Component } from "react";
import axios from 'axios';
import SelectFile from './selectfile'
import CorrelationMatrix from './correlationMatrix'

const API_URL = 'http://128.199.99.233:3000/api/';

class Regression extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {showCorMatrix: false, file_list: [], data: {}, corMatrix: [], label: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFileList(){
    axios.get(API_URL + 'list/' + this.props.params.userid)
      .then(res => {
        this.setState({value: res.data[0]});
        this.setState({file_list: res.data});
        // return res.data[0].num_file;
      });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({showCorMatrix: false});
  }

  handleSubmit(event) {
    axios.get(API_URL + 'prediction/' + this.props.params.userid + '/' + this.state.value)
      .then(res => {
        // console.log(res.data.corMatrix);
        // console.log(res.data['table-data'])
        this.setState({corMatrix: res.data.corMatrix});
        this.setState({data: res.data['table-data']});
        this.setState({label: res.data.label});
        this.setState({showCorMatrix: true});
      });
    event.preventDefault();
  }

  componentDidMount(){
    this.getFileList();
  }

  render() {
    const file_list = this.state.file_list;
    const corMatrix = this.state.corMatrix;
    const label = this.state.label;

    let showCorMatrix;
    let options = [];

    if(this.state.showCorMatrix){
      showCorMatrix = (
        <CorrelationMatrix corMatrix={corMatrix} label={label} />
      );
    }

    for(var i=0;i<file_list.length;i++){
      options.push(
        <option key={i} value={file_list[i]}>{file_list[i]}</option>
      );
    }

    console.log(this.state);

    return (
      <div className='regression'>
        <div className='formData'>
          <form onSubmit={this.handleSubmit}>
            <label>
              Choose your file to view:
              <select value={this.state.value} onChange={this.handleChange}>
                {options}
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
          {showCorMatrix}
        </div>
      </div>
    );
  }
}
export default Regression;
