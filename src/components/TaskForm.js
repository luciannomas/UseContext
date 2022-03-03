import { GlobalContext } from './context/GlobalContext';
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const TaskForm = () => {

    const history = useHistory()
    const params = useParams() // toma los parametros del componente
    const { addTask , updateTask, tasks } = React.useContext(GlobalContext)


    //Estado que pertenece a un solo componente
    const [task, setTask] = React.useState({
        id: "",
        title: "",
        description: ""
    })

    //Event
    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        // actualiza y graba
        setTask ( { ...task, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        
        if (! task.id){
            addTask(task) // task tiene es el estado actual
        }
        else{
            updateTask(task)
        }
       
        
        history.push("/")
    }

    useEffect(()=>{
        const taskFound = tasks.find( (task) => task.id === params.id)
        console.log("encuentra:", taskFound)
        if (taskFound){
            setTask(taskFound)
        }
        else { console.log("creating") }

    },[params.id, tasks]) /*  Ocurre cuando varia el parametro osea cuando se edita un componente . */

    return (
        <div className = "flex justify-center items-center h-3/4">
            <form onSubmit = { handleSubmit } className = "bg-gray-900 p-10" >
                <h2 className = "mb-5 text-3x1">
                    {
                        task.id ?  "editing a Task" : "Creatuing a Task" 
                    }
                </h2> {/* mb-7 */}
                <div className = "mb-5">
                    <input 
                        onChange = { handleChange }
                        value = {task.title}

                        type ="text" 
                        name ="title" 
                        placeholder = "Write a title" 
                        className = "py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full" 
                    />
                </div>

                <div className = "mb-5">
                    <textarea
                        onChange = { handleChange }
                        value = {task.description}

                        name = "description"
                        rows = "2"
                        placeholder = "Write a description"
                        className = "py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
                        >
                    </textarea>
                </div>

                <button className = "bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
                    { task.id  ? "Edit" : "Create Task" }
                </button>
            </form>
            
        </div>
    )
}

export default TaskForm
