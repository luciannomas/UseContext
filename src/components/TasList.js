import React, {useContext} from 'react'
import { GlobalContext } from '../components/context/GlobalContext'
import { Link } from 'react-router-dom'

const TasList = () => {
    
    const context = useContext(GlobalContext)
    console.log(context)
    
    return (
        <div className = "flex justify-center">
            {/* Ejecuta la funcion delete */}
            {/* <button onClick = { () => context.deleteTask() }>
                delete all
            </button> */}
            <div className = "w-6/12">
                {
                    context.tasks.map( (task) => (
                        <div 
                            className = "bg-gray-900 px-20 py-5 text-white shadow-2x1 flex justify-between"
                            key = { task.id }
                        >
                            <div>
                                <h1>{ task.title }</h1>
                                <h6>{ task.id }</h6>
                                <p> { task.description }</p>
                                <button className = "bg-purple-600 hover:bg-purple-400 py-1 px-3 mt-2" onClick = { () => context.toggleTaskDone(task.id) }  >
                                    { task.done ? 'Undone' : 'done' }
                                </button>

                            </div>

                            <div>
                                <button  onClick = { () => context.deleteTask(task.id) } className = "bg-red-600 hover:bg-red-500 py-2 px-4 mr-2">
                                    Delete
                                </button>
                                <Link to = {`/edit/${task.id}`} className = "bg-gray-600 hover:bg-500 py-2 px-4 mr-2">
                                    Edit
                                </Link>
                            </div>

                        </div> 
                    ))
                }
            </div>
        </div>
    )
}

export default TasList
