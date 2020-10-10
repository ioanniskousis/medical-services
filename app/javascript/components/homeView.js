/* eslint-disable no-plusplus */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import homeImage from '../../assets/images/homeImage.jpeg';
import searchImage from '../../assets/images/searchImage.png';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const desc1 = 'The clinic performs all kind of medical exams, using the most advanced equipment by certified ';
    const desc2 = 'doctors. Patients using this application can book a session depending on availability';
    const description = desc1.concat(desc2);
    const departmentNames = [
      'Cancer Services',
      'Cardiovascular',
      'LGBTQ Health',
      'Men\'s Health',
      'Pediatrics',
      'Transplantation Services',
      'Weight Management',
      'Women\'s Health',
      'Blood Exams',
      'X-Rays',
      'All Divisions & Programs',
    ];
    let index = 1;
    const departments = [];
    departmentNames.map(dep => (
      departments.push(<div className="pdR10" key={++index}>{dep}</div>)
    ));

    return (
      <div className="desktop-right">
        <div className="homeView">
          <div className="homeDescription">{description}</div>
          <div className="homeViewBody">
            <div className="homeTitle">The Medical Center</div>
            <Link to="/services" className="homeLink">
              <img src={homeImage} className="homeImage" alt="" />
            </Link>
            <span>click image to enter services</span>
          </div>
          <div className="homeServices">
            {departments}
          </div>
          <Link to="/search" className="searchLink">
            <img src={searchImage} className="searchImage" alt="" />
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeView);
