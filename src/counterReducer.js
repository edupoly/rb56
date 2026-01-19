export const initialCount = { count: 0 };
export function counterReducer(state, action) {
  if (action.type === "INC") {
    return { count: state.count + 1 };
  }
  if (action.type === "DEC") {
    return { count: state.count - 1 };
  }
  return state;
}
