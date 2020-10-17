//     Name: Tommy Cao
//     Date: 12/19/19
//     Description: Todo React Application with Bootstrap

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo:{modal: false, title: '', priority :''}
    }

    this.toggle = this.toggle.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    priorities: ['High', 'Medium', 'low']
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  handleChangePriority(event) {
    this.setState({priority: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log('form submitted', this.refs.title.value, this.refs.priority.value);
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newTodo:{
        title: this.refs.title.value,
        priority: this.refs.priority.value
      }}, function(){
        //console.log(this.state);
        this.props.addTodo(this.state.newTodo);
      });
    }
  }

  render() {
    let priorityOptions = this.props.priorities.map(priority => {
        return <option key={priority} value={priority}>{priority}</option>
      });

    return (
      <div>
        <Button color="success" onClick={this.toggle}>Add Todo</Button>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ModalHeader>Add Todo</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-8">
              <label>Title:</label>
              <input type="text" ref="title" onChange={this.handleChangeTitle} className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <label>Priority:</label>
              <select className="form-control" ref="priority" onChange={this.handleChangePriority}>{priorityOptions}</select>                 
            </div>
          </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" onClick={this.toggle} value="Submit" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddProject;