export default function appReducer ( state, action ) {
    console.log(state, action)

    switch (action.type) {
        
        case "ADD_TASK":
            return {
                tasks: [...state.tasks, action.payload],
            }
        case "DELETE_TASK":
            return {
                tasks: state.tasks.filter((task) => task.id !== action.payload )
            }
        case "UPDATE_TASK":
            console.log(action.payload)
            const updatedTask = action.payload
            
            const updatedTasks = state.tasks.map( (task) => {
                if(task.id === updatedTask.id){
                    task.title = updatedTask.title
                    task.description = updatedTask.description 
                }
                return task
            })
            
            return { tasks : updatedTasks }

        case "TOGGLE_TASK_DONE":
            console.log(action.payload)

            const _updatedTask = action.payload
            
            const _updatedTasks = state.tasks.map( (task) => 
                task.id === _updatedTask  ? {...task, done: !task.done } : task 
            )
            
            return { tasks : _updatedTasks }

        default:
            return state;
    }
}