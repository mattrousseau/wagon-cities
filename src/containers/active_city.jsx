import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  const src = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

  return (
    <div className="active-city">
      <h3>{props.activeCity.name}</h3>
      <img src={src} />
      <p>{props.activeCity.address}</p>
    </div>
  );
};

function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}

export default connect(mapStateToProps, null)(ActiveCity);
