import { CHANGE_PERSON_INPUT_VALUE } from '../types/person';

export default (state = {}, action) => {
  const { type, name, value } = action;
  switch (type) {
    case CHANGE_PERSON_INPUT_VALUE:
      return { ...state, [name]: value };
    default:
      return state;
  }
};
