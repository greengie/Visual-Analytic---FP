import React, { Component } from "react";
import axios from 'axios';
import SelectFile from './selectfile'
import CorrelationMatrix from './correlationMatrix'
import {Table, thead, tr, td, tbody, Button} from 'react-bootstrap';

const API_URL = 'http://128.199.99.233:3000/api/';

class Regression extends Component {

  constructor(props) {
    super(props);
    this.state = {showCorMatrix: false, file_list: [], data: {}, corMatrix: [], label: [], deleteHandle: 1};
  }

  getFileList(){
    axios.get(API_URL + 'list/' + this.props.params.userid)
      .then(res => {
        this.setState({file_list: res.data});
      });
  }

  handleSubmit (filename) {
    return event => {
      event.preventDefault();
      console.log(filename);
      axios.get(API_URL + 'prediction/' + this.props.params.userid + '/' + filename)
        .then(res => {
          this.setState({corMatrix: res.data.corMatrix});
          this.setState({data: res.data['table-data']});
          this.setState({label: res.data.label});
          this.setState({showCorMatrix: true});
        });
    }
  }

  handleDelete(filename){
    console.log('delete');
    return event => {
      event.preventDefault();
      if (window.confirm("Are you sure you want to delete?")) {
        axios.post(API_URL + 'delete',{
          filename: filename,
          fileid: this.props.params.userid
        })
        .then(res => {
          console.log(res.data);
          this.setState({deleteHandle: (this.state.deleteHandle+1)});
          this.setState({showCorMatrix: false});
        });
      }

    }
  }

  componentDidMount(){
    this.getFileList();
    console.log('didmount');
  }

  componentWillUpdate(nextProps, nextstate){
    if(this.state.deleteHandle != nextstate.deleteHandle){
      console.log('didupdate');
      this.getFileList();
      return true;
    }
    return false;
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
            <form onSubmit={this.handleSubmit(file_list[i])} style={{"display" : "inline"}}>
              <Button type="submit" className="btn glyphicon glyphicon-edit"></Button>
            </form>
            <form onSubmit={this.handleDelete(file_list[i])} style={{"display" : "inline"}}>
              <input type="hidden" name="nid" value="file_list[i]" />
              <Button type="submit" className="btn glyphicon glyphicon-trash"></Button>
            </form>
          </td>
        </tr>
      );
    }

    // console.log(this.state);

    return (
      <div className='regression'>
        <div className='container'>
          <Table responsive bordered>
            <thead>
              <tr>
                <th className='table-8'>Filename</th>
                <th className='table-6'>Action</th>
              </tr>
            </thead>
            <tbody>
              {options}
            </tbody>
          </Table>
          {showCorMatrix}
        </div>
      </div>
    );
  }
}

export default Regression;
