import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import s from "./styles.module.css";

const Map = () => {
  interface ILocation {
    address: string;
    lat: number;
    lng: number;
  }
  const location: ILocation = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  // AIzaSyBa218bSkegHzxeE3ygfXoKQ9bBKuMYhj8

  const zoomLevel = 17;
  interface IText {
    text: string;
  }

  const LocationPin = (props: ILocation) => {
    const { address } = props;

    return (
      <div className={s.pin}>
        <Icon icon={locationIcon} className={s.pin_icon} />
        <p className={s.pin_text}>{address}</p>
      </div>
    );
  };

  return (
    <div className={s.map}>
      <h2 className={s.map_h2}>Come Visit Us At Our Campus</h2>

      <div className={s.google_map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBa218bSkegHzxeE3ygfXoKQ9bBKuMYhj8" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin lat={location.lat} lng={location.lng} text={location.address} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
