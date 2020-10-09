/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

export function getThingsSuccess(json) {
  return {
    type: GET_THINGS_SUCCESS,
    json,
  };
}

function getThings() {
  // console.log('getThings() Action!!');
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch('v1/things.json')
      .then(response => response.json())
      .then(json => dispatch(getThingsSuccess(json)));
  // .catch(error => console.log(error));
  };
}

class HelloWorld extends React.Component {
  render() {
    const { things, getThings } = this.props;
    const thingsList = things.map((thing, index) => (
      <li key={index + 1}>
        {thing.name}
        {thing.guid}
      </li>
    ));
    const { greeting } = this.props;
    return (
      <React.Fragment>
        <div className="reactFregment">
          <Link to="/">HOME</Link>
          <br />
          Greeting:
          {greeting}
          <br />
          <button type="button" className="getThingsBtn" onClick={() => getThings()}>getThings</button>
          <br />
          <ul>{ thingsList }</ul>
        </div>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  things: PropTypes.arrayOf(PropTypes.any),
  greeting: PropTypes.string,
  getThings: PropTypes.func,
};

HelloWorld.defaultProps = {
  things: [],
  greeting: '',
  getThings: null,
};

const structureSelector = createStructuredSelector({
  things: state => state.things,
});

const mapDispatchToProps = { getThings };

export default connect(structureSelector, mapDispatchToProps)(withRouter(HelloWorld));
