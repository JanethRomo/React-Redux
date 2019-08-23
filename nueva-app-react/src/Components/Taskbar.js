import React from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import {addTask} from '../Reducers/Actions';

class Taskbar extends React.Component{
    state = {
        inputText: '',
        count: 0
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <input type="text" ref="task" placeholder="add your task here" onChange={(e) => { this.setState({inputText: e.target.value})}}></input>
                <button onClick={() => {
                    this.setState({count: this.state.count + 1})
                    this.props.addTask(this.state.inputText, this.state.count)
                    }}>Agregar elemento</button>
            </div>
        )
    }
};

/*function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTask},dispatch);

}
*/
const mapDispatchToProps = dispatch => {
    return {
        addTask: (task, id) => dispatch(addTask(task, id))
    }
}

export default connect(null, mapDispatchToProps)(Taskbar)