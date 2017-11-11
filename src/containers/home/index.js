import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { callLocationData } from '../../actions/';
import LocationData from '../../components/locationdata';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Home extends React.Component {
  // OnMount dispatch collapse state depending on url path and panel type also
  componentDidMount() {
    // Load the location data if not already loaded
    if (this.props.homeData.weather === undefined) {
      this.props.callLocationData();
    }
  }
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Welcome Will</h3>
          </div>
          <div className="panel-body home">
            <div className="home__locationData">
              <LocationData {...this.props} />
            </div>
            <div className="home__maps">
              <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBW3ofyTwuG93JKAB2fVTYjutufJK3YWSs"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '300px', width: '300px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </div>
            <div className="home__clock">
              <p>
                Local Time is: <strong>12:44pm</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 48.15, lng: 17.1167 }}>
      {props.isMarkerShown && <Marker position={{ lat: 48.15, lng: 17.1167 }} />}
    </GoogleMap>
  )),
);

const mapStateToProps = state => ({
  homeData: state.async.homeData,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      callLocationData,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
