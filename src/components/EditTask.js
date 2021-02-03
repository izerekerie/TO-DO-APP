import React, {useContext,useState,useEffect}from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Link,useHistory} from "react-router-dom";


import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    
} from 'reactstrap';

export const EditTask = (props) => {
    const [selectedTodo, setSelectedTodo] = useState({
        id:'',
        task:'',
        complete:false
    });
    
    
    const {todos, editTask} = useContext(GlobalContext);
    const history = useHistory();
    const currentTodoId = props.match.params.id;

    useEffect(() =>{
        const todoId= currentTodoId;
        const selectedTodo= todos.find(todo => todo.id === todoId)
        console.log(selectedTodo)
        setSelectedTodo(selectedTodo)
    },[currentTodoId,todos])
    const onSubmit = () => {
         editTask(selectedTodo)
         history.push('/');
    }
    const onChange= (e) =>{
      setSelectedTodo({...selectedTodo, [e.target.name]:e.target.value})
    }
    return (
        <Form onSubmit={onSubmit}>
        <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="task" value={selectedTodo.task} onChange={onChange} placeholder="Enter Name"></Input>
        </FormGroup>
        <Button type="submit">Edit name</Button>
       <Link  to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    )
}
