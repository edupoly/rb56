// state and action
const initialState = {
  todos: ["edo todo", "another todo", "inko todo"],
};

function todoReducer(state = initialState, action) {
  if (action.type == "ADDTODO") {
    return { todos: [...state.todos, action.payload] };
  }
  return state;
}

export default todoReducer;
