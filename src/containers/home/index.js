import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeApiCall } from '../../actions/';
import LocationData from '../../components/locationdata';

class Home extends React.Component {
  // OnMount dispatch collapse state depending on url path and panel type also
  componentDidMount() {
    this.props.makeApiCall('http://api.openweathermap.org/data/2.5/weather?q=bratislava,sk&appid=938c02687efb071eb7aab8b854b0d392');
  }
  render() {
    return (
      <div>
        <h1>Welcome Will</h1>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Panel primary</h3>
          </div>
          <div className="panel-body">
            <LocationData />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homeData: state.async.homeData,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      makeApiCall,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
