import { CHANGE_COMPANY_INPUT_VALUE } from '../types/company';

export const changeCompanyInputValue = (name, value) =>
    ({ type: CHANGE_COMPANY_INPUT_VALUE, name, value });
