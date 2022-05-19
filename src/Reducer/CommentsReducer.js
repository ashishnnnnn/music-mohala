import { v4 as uuid } from "uuid";

export function CommentsReducer(state, action) {
  const { _id, comment } = action.payload;
  if (state[_id] === undefined) {
    return {
      ...state,
      [_id]: [{ _id: uuid(), comment: comment }],
    };
  } else {
    return {
      ...state,
      [_id]: [...state[_id], { _id: uuid(), comment: comment }],
    };
  }
}
