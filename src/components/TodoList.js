import React ,{useContext}from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Link} from 'react-router-dom';
import '../App.css';
import {
    ListGroup,
    ListGroupItem,
    Button,
    Input,
  
    
} from 'reactstrap';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export const TodoList = () => {
    const {todos,removeTask,completeTask} = useContext(GlobalContext);
    
    return (
        
       <ListGroup className="mt-4">
            {todos.length > 0 ? (
                <>
    {todos.map(todo=>(
            
    <ListGroupItem className="d-flex bg-info text-light" key={todo.id}>
       
       <Input type="checkbox" onClick={()=>completeTask(todo.id)}className="form-check-input " id="exampleCheck1"></Input>
    <strong className={todo.complete ? "strike" :""}>{todo.task}</strong>
    <div className="ml-auto">
   <Link to={`/edit/${todo.id}`} className="btn btn-light ml-1">Edit</Link>
   <Button  onClick={()=>removeTask(todo.id)} className="btn btn-danger ml-1">Delete</Button>
 
</div>
  
</ListGroupItem>

   ))} 
   </>
):(
    <h4 className="text-center">No Tasks you have !!</h4> 
)}
    
           
    
       </ListGroup>
    )
}
