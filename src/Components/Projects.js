//     Name: Tommy Cao
//     Date: 12/19/19
//     Description: Todo React Application with Bootstrap

import React, { Component } from 'react';
import Dialog from './Dialog';
import AddProject from './AddProject';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      todos: [
        {
          title: 'Goto meeting',
          priority: 'High'
        },
        {
          title: 'Test code',
          priority: 'Medium'
        },
        {
          title: 'Pickup kids',
          priority: 'low'
        },
        {
          title: 'Write document',
          priority: 'High'
        },
        {
          title: 'Exercise',
          priority: 'Medium'
        },
        {
          title: 'Buy milk',
          priority: 'low'
        } 
      ]
    }
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let temptodo = this.state.todos;
    temptodo[requiredItem] = item;
    this.setState({ todo: temptodo });
  }

  deleteItem(index) {
    let temptodo = this.state.todos;
    temptodo.splice(index, 1);
    this.setState({ todos: temptodo });
    this.setState({requiredItem: 0});
  }

  handleAddTodo(todo){
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todo:todos});
  }

  render() {
    this.state.todos.sort(function(a,b){
      var x = a.priority;
      var y = b.priority;
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });

    const todos = this.state.todos.map((item, index) => {
      return (
        <tr key={index}> 
        <td>{item.title}</td>
        <td>{item.priority}</td>
        <td>
          <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
            onClick={() => this.replaceModalItem(index)}>Edit</button> {" "}
          <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>Remove</button>
        </td>
      </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.todos[requiredItem];

    return (
      <div className="container">
        <div  style={{ textAlign: "center" }}>
          <h1>Todo React App</h1>
          <br />
        </div>
        <AddProject addTodo={this.handleAddTodo.bind(this)} />
        <br />
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th stylename="width: 60%">Title</th>
              <th stylename="width: 15">Priority</th>
              <th stylename="width: 25%"></th>
            </tr>
          </thead>
          <tbody>
            {todos}
          </tbody>
        </table> 
      </div>
        <Dialog
          title={modalData.title}
          priority={modalData.priority}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default Projects;