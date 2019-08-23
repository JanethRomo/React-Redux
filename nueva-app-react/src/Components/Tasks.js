import React from 'react';
import { connect } from 'react-redux';
import {deleteTask} from '../Reducers/Actions';

class Task extends React.Component{
    render(){
        console.log(this.props)
        return(
            <tr>
                <td>
                    {this.props.task}
                </td>

                <td>
                    <button key={this.props.key} onClick={()=>{this.props.deleteTask(this.props.task)}}>Eliminar todos</button>
                </td>
            </tr>
        )    
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteTask: (task) => dispatch(deleteTask(task))
    }
}

const mapStateToProps = (state, i) => {
    return {
        allTasks: state,
        i
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);