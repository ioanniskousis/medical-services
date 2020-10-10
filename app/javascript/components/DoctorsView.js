/* eslint-disable import/no-duplicates */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './carousel';
import carouselInit from './carousel';
import leftArrow from '../../assets/images/interface/arrow-left.png';
import rightArrow from '../../assets/images/interface/arrow-right.png';

class DoctorsView extends React.Component {

  componentDidMount() {
    carouselInit();
  }

  render(props) {
    // const { clinicData } = props;
    // const { doctors } = clinicData;
    return (
      <div className="desktop-right">
        <div className="doctorsView">
          <div className="doctorsCarousel">
            <div id="viewer" className="viewer">
              <div id="slider" className="slider" />
            </div>
            <div id="leftArrow" className="side-controller left-controller">
              <img id="leftArrowImage" src={leftArrow} alt="" />
            </div>
            <div id="rightArrow" className="side-controller right-controller">
              <img id="rightArrowImage" src={rightArrow} alt="" />
            </div>
          </div>
          <div id="carousel-footer" />
        </div>
      </div>
    );
  }
}

DoctorsView.propTypes = {
  clinicData: PropTypes.objectOf(PropTypes.any),
};

DoctorsView.defaultProps = {
  clinicData: null,
};

const mapStateToProps = state => ({
  clinicData: state.clinicData,
});

export default connect(mapStateToProps, null)(DoctorsView);
