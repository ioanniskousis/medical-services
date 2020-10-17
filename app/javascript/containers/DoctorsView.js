/* eslint-disable import/no-duplicates */
import React from 'react';
import '../components/Carousel';
import carouselInit, { stopTimer } from '../components/Carousel';
import leftArrow from '../../assets/images/interface/arrow-left.png';
import rightArrow from '../../assets/images/interface/arrow-right.png';

class DoctorsView extends React.Component {
  componentDidMount() {
    carouselInit();
  }

  componentWillUnmount() {
    stopTimer();
  }

  render() {
    return (
      <div className="desktop-right">
        <div className="doctorsView">
          <div className="doctorsCarousel">
            <div id="viewer" className="viewer">
              <div id="slider" className="slider" />
            </div>
            <div className="topControlsContainer">
              <div id="wheel" className="wheel" />
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

export default DoctorsView;
