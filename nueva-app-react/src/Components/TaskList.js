import React from 'react';
import {connect} from 'react-redux'
import Task from './Tasks';


class Tasklist extends React.Component{
    render(){
        console.log(this.props.tasks)
        return(
            <table>
                <thead>
                    <tr>
                    <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    <tbody>
                        {/*this.props.map((task,index) => <Tasks key={index} task={task}/>)*/}
                        {this.props.tasks.map((el, i) => {
                            return (
                                <Task key={i} task={el} />
                            )
                        })}
                    </tbody>
            </table>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        tasks: state.tasks,
        
    }
}

export default connect(mapStateToProps)(Tasklist);