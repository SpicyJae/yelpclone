import React from 'react';
import { useGoogleMaps } from "react-hook-google-maps";
import * as api from '../../hooks/yelp-api/config';
import styles from './Maps.module.css';

export function Maps() {
    const { ref, map, google } = useGoogleMaps(
        // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
        "AIzaSyCMlP9iUHNkfYsbNE4HVeMUeNkb7VgYxEU",
        // NOTE: even if you change options later
        {
            center: { lat: 33.6846, lng: -117.8265 },
            zoom: 12,
        },
      );
      console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
      console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
      return <div ref={ref} className={styles.map} />;
};

Map.defaultProps = {
    options: {
        center: { lat: 48, lng: 8 },
        zoom: 5,
    },
}