
export const addTask = (task, id) => {
   return {
    type:'ADD_TASK',
    task,
    id
   }

}

export const deleteTask = (taskId) => {
    console.log(taskId)
    return{
        type:'DELETE_TASK',
        taskId,
    };
}; 
//export default {addTask,deleteTask};