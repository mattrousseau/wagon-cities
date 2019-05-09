import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';


const City = (props) => {
  const clickHandler = () => {
    props.setActiveCity(props.city);
  };

  return (
    <div className={`list-group-item ${props.activeCity.name === props.city.name? "active" : ""}`} onClick={clickHandler}>
      <h3>{props.city.name}</h3>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
