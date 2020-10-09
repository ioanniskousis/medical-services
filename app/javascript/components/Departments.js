/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DepartmentPanel from './departmentPanel';
import imageForCancer from '../../assets/images/Cancer Services.jpeg';
import imageForCardiology from '../../assets/images/cardiology.jpeg';
import imageForSurgery from '../../assets/images/surgery.jpeg';
import homeImage from '../../assets/images/homeImage.jpeg';

const Departments = props => {
  const ranks = [0, 1, 1, 0, 0, 0, 0, 0];
  const reverses = [0, 1, 0, 1, 1, 0, 0, 0];
  const imagesList = [
    imageForCancer,
    imageForCardiology,
    homeImage,
    imageForSurgery,
    imageForCancer,
    imageForCancer,
    imageForCancer,
    imageForCancer,
    imageForCancer,
    imageForCancer,
    imageForCancer,
    imageForCancer,
  ];
  const gridAreas = 'abcdefghigklmnopqrstuvwxyz'.split('');
  const { clinicData } = props;
  const departments = clinicData.departments.slice(0, 4);
  const departmentsList = departments.map((department, index) => (
    <DepartmentPanel
      key={index}
      name={department.name}
      rank={ranks[index]}
      image={imagesList[index]}
      area={gridAreas[index]}
      reverse={reverses[index]}
    />
  ));
  return (
    <div className="departmentsList">
      <div className="departmentsBody">
        <div className="departmentsGrid">
          { departmentsList }
        </div>
      </div>
    </div>
  );
};

Departments.propTypes = {
  clinicData: PropTypes.objectOf(PropTypes.any),
};

Departments.defaultProps = {
  clinicData: null,
};

const mapStateToProps = state => ({
  clinicData: state.clinicData,
});

export default connect(mapStateToProps, null)(Departments);
