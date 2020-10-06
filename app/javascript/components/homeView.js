import React from 'react'

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="medicalServicesPanel">
        <div className="serviceLabel">medical</div>
        <div className="serviceLabel pdL60">services</div>
      </div>
    )
  }
}

export default HomeView;
