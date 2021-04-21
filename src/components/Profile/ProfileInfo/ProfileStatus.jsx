import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        status: this.props.status,
        editMode: false,
    }

    statusChange = () => {
        this.deactivateEditMode();
        this.props.updateStatus(this.state.status);
    };

    inputChange = (event) => {
        this.setState({status: event.target.value});
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
    }

    componentDidUpdate = (previousProps, previousState) => {
        if (previousProps.status !== this.props.status)
            this.setState({status: this.props.status});
    }

    render() {
        return (
        <div>
            {!this.state.editMode && 
              <div> 
                <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
              </div>   
            }
         
            {this.state.editMode && 
              <div> 
                <input value={this.state.status} 
                    autoFocus
                    onBlur={this.statusChange}
                    onChange={this.inputChange}></input>
              </div> 
            }
        </div>
    )   
    }
} 

export default ProfileStatus;