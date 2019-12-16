import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    selectedPlace: {
      name: "Hotel Laki"
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 63.773797, lng: -17.96303 }}
      >
        <Marker onClick={this.onMarkerClick} name={"Hotel Laki"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCKJ8cmU4Ipmbah0eG6kNzgqR9GQGVEVNw"
})(MapContainer);
