//     Name: Tommy Cao
//     Date: 12/19/19
//     Description: Todo React Application with Bootstrap

import React, { Component } from 'react';

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            title: '',
            priority: '',
        }
    }

    
    static defaultProps = {
        priorities: ['High', 'Medium', 'low']
    }
  
    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.title,
            priority: nextProps.priority,
        });
    }

    titleHandler(e) {
        this.setState({ title: e.target.value });
    }

    priorityHandler(e) {
        this.setState({ priority: e.target.value });
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        let priorityOptions = this.props.priorities.map(priority => {
            return <option key={priority} value={priority}>{priority}</option>
          });        
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Title: </span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
                            <p><span className="modal-lable">Priority: </span><select  value={this.state.priority} onChange={(e) => this.priorityHandler(e)}>{priorityOptions}></select> </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;