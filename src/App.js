
import './App.css';

import Heading from './components/Heading'
import TaskForm from './components/TaskForm';

import { Switch , BrowserRouter as R, Route } from 'react-router-dom'
import TasList from './components/TasList';

import { ContextProvider } from './components/context/GlobalContext'

function App() {
  return (
     <div> 
      <div className = "h-screen text-white text-center p-10">
        <div className = "container mx-auto h-full">
          <ContextProvider>
            <Heading/>
            
              <Switch>
                <Route exact path ="/" component = { TasList } />
                <Route path ="/add" component = { TaskForm } />
                <Route path ="/edit/:id" component = { TaskForm } />
              </Switch>
            
            </ContextProvider>
          </div>
      </div>
     </div>
  );
}

export default App;
