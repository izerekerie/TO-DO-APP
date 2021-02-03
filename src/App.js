import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import {Home} from './components/Home';
 import {AddTask} from './components/AddTask';
import {EditTask} from './components/EditTask';

import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
      <GlobalProvider>
      <Router>
      
      <Switch>
       <Route path="/add" component={AddTask}></Route>
     <Route path="/edit/:id" component={EditTask}></Route>  
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
      </GlobalProvider>
     
  
    </div>
  );
}

export default App;
