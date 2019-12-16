import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
let mapOptions = {
  styles: [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          hue: "#165c64"
        },
        {
          saturation: 34
        },
        {
          lightness: -69
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          hue: "#b7caaa"
        },
        {
          saturation: -14
        },
        {
          lightness: -18
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "landscape.man_made",
      elementType: "all",
      stylers: [
        {
          hue: "#cbdac1"
        },
        {
          saturation: -6
        },
        {
          lightness: -9
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          hue: "#8d9b83"
        },
        {
          saturation: -89
        },
        {
          lightness: -12
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          hue: "#d4dad0"
        },
        {
          saturation: -88
        },
        {
          lightness: 54
        },
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          hue: "#bdc5b6"
        },
        {
          saturation: -89
        },
        {
          lightness: -3
        },
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          hue: "#bdc5b6"
        },
        {
          saturation: -89
        },
        {
          lightness: -26
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          hue: "#c17118"
        },
        {
          saturation: 61
        },
        {
          lightness: -45
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "all",
      stylers: [
        {
          hue: "#8ba975"
        },
        {
          saturation: -46
        },
        {
          lightness: -28
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          hue: "#a43218"
        },
        {
          saturation: 74
        },
        {
          lightness: -51
        },
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [
        {
          hue: "#ffffff"
        },
        {
          saturation: 0
        },
        {
          lightness: 100
        },
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "all",
      stylers: [
        {
          hue: "#ffffff"
        },
        {
          saturation: 0
        },
        {
          lightness: 100
        },
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels",
      stylers: [
        {
          hue: "#ffffff"
        },
        {
          saturation: 0
        },
        {
          lightness: 100
        },
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "all",
      stylers: [
        {
          hue: "#ffffff"
        },
        {
          saturation: 0
        },
        {
          lightness: 100
        },
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        {
          hue: "#3a3935"
        },
        {
          saturation: 5
        },
        {
          lightness: -57
        },
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi.medical",
      elementType: "geometry",
      stylers: [
        {
          hue: "#cba923"
        },
        {
          saturation: 50
        },
        {
          lightness: -46
        },
        {
          visibility: "on"
        }
      ]
    }
  ]
};

export class MapContainer extends Component {
  state = {
    infoOpen: true,
    activeMarker: {},
    selectedPlace: {
      name: "Hotel Laki"
    }
  };

  markerClickHandler = (event, place) => {
    this.setState(state => ({ infoOpen: !state.infoOpen }));
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={{
          width: "80%",
          height: "100%",
          position: "relative",
          margin: "auto"
        }}
        styles={mapOptions.styles}
        initialCenter={{ lat: 63.773797, lng: -17.96303 }}
        default
      >
        <Marker
          position={{ lat: 63.773797, lng: -17.96303 }}
          name={"Hotel Laki"}
          title={"The marker`s title will appear as a tooltip."}
          onClick={event => this.markerClickHandler(event)}
        />

        {this.state.infoOpen && (
          <InfoWindow onCloseClick={() => this.setState({ infoOpen: false })}>
            <div>
              <h3>Hotel Laki</h3>
              <div>This is your info window content</div>
            </div>
          </InfoWindow>
        )}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCKJ8cmU4Ipmbah0eG6kNzgqR9GQGVEVNw"
})(MapContainer);
