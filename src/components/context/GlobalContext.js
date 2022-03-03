import { createContext , useReducer } from 'react'
import appReducer from '../context/AppReducer'
import {v4} from 'uuid'

// Similar al => const [state, setstate] = useState(initialState)
const initialState = {
    tasks: [
        {
            id:"1",
            title:"title one",
            description:"some description",
            done: false,
        },
        {
            id:"2",
            title:"two",
            description:"15-10-21",
            done: true,
        },
    ],

}

export const GlobalContext = createContext(initialState)

//Provider = Provedor que almacena el estado 
export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(appReducer, initialState)

    const addTask = (task) => {
        //console.log(task) Se envia un objeto con la propiedad id
        dispatch({ type: "ADD_TASK", payload: {...task, id: v4(), done: false } })
    }

    const deleteTask = (id) => {
        dispatch ({type:"DELETE_TASK", payload: id})
    }

    const updateTask = (task) => {
        dispatch ({type:"UPDATE_TASK", payload: task }) /* la tarea viene actualizada con el id*/
    }

    const toggleTaskDone = (id) => dispatch({type: 'TOGGLE_TASK_DONE', payload: id})
    
    return ( 
        // une a la funcion los valores de state porque se envia un objeto 
        <GlobalContext.Provider value = {{...state, addTask, deleteTask , updateTask, toggleTaskDone}} > 
            {children}
        </GlobalContext.Provider>
    )
}

