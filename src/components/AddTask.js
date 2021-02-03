import React, {useContext,useState}from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Link,useHistory} from "react-router-dom";
import {v4 as uuid} from 'uuid';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    
} from 'reactstrap'
export const AddTask = () => {
    const [task, setTask] = useState('');
    
    
    const {addTask} = useContext(GlobalContext);
    const history = useHistory();
    
    const onSubmit = () => {
        const newTask = {
            id:uuid(),
            task,
            complete:false
        }
        addTask(newTask);
         history.push('/');
    }
    const onChange= (e) =>{
        setTask(e.target.value);
    }
    return (
      <Form onSubmit={onSubmit}>
          <FormGroup>
              <Label>Name</Label>
              <Input type="text"  name="name" value={task} onChange={onChange} placeholder="Enter task"></Input>
          </FormGroup>
          <Button type="submit" className="bg-warning">Submit</Button>
         <Link  to="/" className="btn btn-danger ml-2">Cancel</Link>
      </Form>
    )
}
