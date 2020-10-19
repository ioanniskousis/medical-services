/* eslint-disable no-plusplus */
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import homeImage from '../../assets/images/homeImage.jpeg';
import searchImage from '../../assets/images/searchImage.png';

const HomeView = props => {
  const desc1 = 'The clinic performs all kind of medical exams, using the most advanced equipment by certified ';
  const desc2 = 'doctors. Patients using this application can book a session depending on availability';
  const description = desc1.concat(desc2);

  const { clinicData } = props;
  const { departments } = clinicData;
  let index = 1;
  const departmentsList = departments.map(department => (
    // eslint-disable-next-line no-param-reassign
    <div className="pdR10" key={++index}>{department.name}</div>
  ));
  return (
    <div className="desktop-right">
      <div className="homeView">
        <section className="homeDescription">{description}</section>
        <div className="homeViewBody">
          <div className="homeTitle">
            <h1>The Medical Center</h1>
          </div>
          <Link to="/services" className="homeLink">
            <img src={homeImage} className="homeImage" alt="" />
          </Link>
          <span>click image to enter services</span>
        </div>
        <section className="homeServices">
          {departmentsList}
        </section>
        <Link to="/search" className="searchLink">
          <img src={searchImage} className="searchImage" alt="" />
        </Link>
      </div>
    </div>
  );
};

HomeView.propTypes = {
  clinicData: PropTypes.objectOf(PropTypes.any),
};

HomeView.defaultProps = {
  clinicData: null,
};

const mapStateToProps = state => ({
  clinicData: state.clinicData,
});

export default connect(mapStateToProps, null)(withRouter(HomeView));
