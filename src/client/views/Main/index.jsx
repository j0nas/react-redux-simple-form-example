import React from 'react';
import { connect } from 'react-redux';
import { changePersonInputValue } from '../../actions/person';
import { changeCompanyInputValue } from '../../actions/company';

const MainView = ({
  name = '',
  age = '',
  companyName = '',
  companySector = '',
  onPersonInputChange,
  onCompanyInputChange,
}) =>
  <div>
    <input type="text" name="name" onChange={onPersonInputChange} value={name} />
    <input type="text" name="age" onChange={onPersonInputChange} value={age} />
    <br />
    <input type="text" name="companyName" onChange={onCompanyInputChange} value={companyName} />
    <input type="text" name="companySector" onChange={onCompanyInputChange} value={companySector} />
  </div>;

MainView.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.string,
  companyName: React.PropTypes.string,
  companySector: React.PropTypes.string,
  onPersonInputChange: React.PropTypes.func,
  onCompanyInputChange: React.PropTypes.func,
};

export default connect(
  state => ({
    ...state.personInfo,
    ...state.companyInfo,
  }),
  dispatch => ({
    onPersonInputChange: event =>
      dispatch(changePersonInputValue(event.target.name, event.target.value)),
    onCompanyInputChange: event =>
      dispatch(changeCompanyInputValue(event.target.name, event.target.value)),
  }),
)(MainView);
