export default (state, action)=>{
    switch(action.type){
        case 'REMOVE_TASK':
            return {
                todos:state.todos.filter(todo=>{
                    return todo.id !== action.payload
                })
            }
        case 'ADD_TASK':
            return{
                todos:[action.payload, ...state.todos]
            }  
        case 'COMPLETE_TASK':
          
            const completedTask = action.payload;
              const completedTodos =state.todos.map(todo=>{
                    if(todo.id === completedTask.id){
                        return !todo.complete;
                      }
                      return todo;
                })
                 return {
                     todos:completedTodos
                 }
        
        case 'EDIT_TASK':
            const updateTask = action.payload;
            const updateTasks= state.todos.map(todo =>{
                if(todo.id === updateTask.id){
                    return updateTask
                }
                return todo;
            })
            return{
            todos:updateTasks
            }  
        default: return state
    }
}