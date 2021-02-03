import React ,{createContext,useReducer}from "react";
import AppReducer from './AppReducer';

const initialState={
    todos:[]
};
// create context
export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider=({children})=>{
    const [state,dispatch] = useReducer(AppReducer, initialState);
   //actions

   const removeTask = (id)=>{
       dispatch({
           type:"REMOVE_TASK",
        payload: id

       })
   }

   const addTask = (todo)=>{
    dispatch({
        type:"ADD_TASK",
     payload: todo

    })
}
const completeTask =(id)=>{
    dispatch({
        type:"COMPLETE_TASK",
        payload:id
    })
    console.log(id)

}
const editTask =(todo) =>{
    dispatch({
        type: 'EDIT_TASK',
        payload:todo
    })
}
    return(
        <GlobalContext.Provider value={{
            todos:state.todos,
            removeTask,
            addTask,
            editTask,
            completeTask
            }}>
                 {children}
        </GlobalContext.Provider>
    )
}