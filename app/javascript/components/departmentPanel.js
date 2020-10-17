/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const DepartmentPanel = props => {
  const {
    name,
    rank,
    image,
    area,
    reverse,
  } = props;
  const imageName = image || '';
  const areaClass = 'area'.concat(area.toUpperCase());
  const flexRow = 'departmentPanel '.concat(areaClass);
  const flexCol = 'departmentPanel flexCol '.concat(areaClass);
  const className = rank === 0 ? flexRow : flexCol;
  const imageClass = rank === 0 ? 'departmentPanelImage' : 'departmentPanelImageCol';
  const imagePanel = (
    <div className="departmentPanelImageContainer">
      <img src={imageName} className={imageClass} alt="" />
    </div>
  );
  const imagePanelBefore = (reverse === 0) ? imagePanel : null;
  const imagePanelAfter = (reverse === 1) ? imagePanel : null;
  return (
    <div className={className}>
      {imagePanelBefore}
      <div className="departmentPanelNameContainer">
        {name}
      </div>
      {imagePanelAfter}
    </div>
  );
};

DepartmentPanel.propTypes = {
  name: PropTypes.string,
  rank: PropTypes.number,
  image: PropTypes.any,
  area: PropTypes.string,
  reverse: PropTypes.number,
};

DepartmentPanel.defaultProps = {
  name: null,
  rank: null,
  image: null,
  area: '',
  reverse: null,
};

export default DepartmentPanel;
