import React from 'react'
import {connect} from 'react-redux'
import L from 'leaflet'

class MapTesting extends React.Component {
  componentDidMount() {
    this.map();
  }

  map() {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  render() {
    return <div id="map">xx</div>  
  }
}
export default MapTesting