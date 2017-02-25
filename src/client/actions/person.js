import { CHANGE_PERSON_INPUT_VALUE } from '../types/person';

export const changePersonInputValue = (name, value) =>
    ({ type: CHANGE_PERSON_INPUT_VALUE, name, value });
