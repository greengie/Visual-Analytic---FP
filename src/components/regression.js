import React, { Component } from "react";
import axios from 'axios';
import SelectFile from './selectfile'
import CorrelationMatrix from './correlationMatrix'

const API_URL = 'http://128.199.99.233:3000/api/';

class Regression extends Component {

  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {showCorMatrix: false, file_list: [], data: {}, corMatrix: [], label: []};

  }

  getFileList(){
    axios.get(API_URL + 'list/' + this.props.params.userid)
      .then(res => {
        this.setState({value: res.data[0]});
        this.setState({file_list: res.data});
        // return res.data[0].num_file;
      });
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  //   this.setState({showCorMatrix: false});
  // }

  // handleSubmit(event) {
  //   axios.get(API_URL + 'prediction/' + this.props.params.userid + '/' + this.state.value)
  //     .then(res => {
  //       this.setState({corMatrix: res.data.corMatrix});
  //       this.setState({data: res.data['table-data']});
  //       this.setState({label: res.data.label});
  //       this.setState({showCorMatrix: true});
  //     });
  //   event.preventDefault();
  // }

  handleSubmit (filename) {
    return event => {
      event.preventDefault();
      console.log(filename);
      axios.get(API_URL + 'prediction/' + this.props.params.userid + '/' + filename)
        .then(res => {
          // console.log(res.data.corMatrix);
          // console.log(res.data['table-data'])
          this.setState({corMatrix: res.data.corMatrix});
          this.setState({data: res.data['table-data']});
          this.setState({label: res.data.label});
          this.setState({showCorMatrix: true});
        });
    }
  }

  componentDidMount(){
    this.getFileList();
  }

  render() {
    const file_list = this.state.file_list;
    const corMatrix = this.state.corMatrix;
    const data = this.state.data;
    const label = this.state.label;

    let showCorMatrix;
    let options = [];

    if(this.state.showCorMatrix){
      showCorMatrix = (
        <CorrelationMatrix corMatrix={corMatrix} label={label} data={data} />
      );
    }

    for(var i=0;i<file_list.length;i++){
      options.push(
        <tr key={`row-${i}`}>
          <td key={i}>{file_list[i]}</td>
          <td>
            <form onSubmit={this.handleSubmit(file_list[i])}>
              <button type="submit" class="btn glyphicon glyphicon-edit"></button>
            </form>
          </td>
        </tr>
      );
    }

    console.log(this.state);

    return (
      <div className='regression'>
        <div class='container'>
          <table class='table table-bordered'>
            <thead>
              <tr>
                <th class='table-8'>Filename</th>
                <th class='table-6'>Action</th>
              </tr>
              {options}
            </thead>
          </table>
        </div>
        {showCorMatrix}
      </div>
    );
  }
}

export default Regression;
