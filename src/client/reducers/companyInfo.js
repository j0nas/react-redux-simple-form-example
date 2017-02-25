import { CHANGE_COMPANY_INPUT_VALUE } from '../types/company';

export default (state = {}, action) => {
  const { type, name, value } = action;

  switch (type) {
    case CHANGE_COMPANY_INPUT_VALUE:
      return { ...state, [name]: value };
    default:
      return state;
  }
};
