import {combineReducers} from 'redux';

const stateInit = {
    tasks:[]
}

export const taskReducers = (state = stateInit, action) => {
    switch(action.type){
        case 'ADD_TASK':
            return {
                ...state,
                tasks:[...state.tasks, action.task] 
            }
           // state = state.concat(action.payload);
            //break;
        case 'DELETE_TASK':
            //state = state.slice();
            //state.splice(action.payload,1);
            //break;
            let blah = action.taskId;
            return {
                ...state,
                tasks: state.tasks.filter((task) => task !== action.taskId)
            };
            //tasks:[...state.tasks, action.task]
        default: 
        return state
    }
//return state;
}

/*const reducers = combineReducers({
    tasks:taskReducers
});*/

//export default reducers;