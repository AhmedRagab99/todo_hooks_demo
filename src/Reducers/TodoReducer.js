export const addTodoAction = "ADDTODO";
export const removeTodoAction = "REMOVETODO";
export const TodoReducer = (state, action) => {
  switch (action.type) {
    case addTodoAction:
      return [
        ...state,
        {
          title: action.todo.title,
          user: action.todo.user,
          id: Number(Math.random() * 2),
        },
      ];
    case removeTodoAction:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
