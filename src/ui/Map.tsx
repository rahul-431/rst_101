import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { useEffect, useRef } from "react";
import { Marker as LeafletMarker } from "leaflet";
type mapProp = {
  center: LatLngExpression;
  zoom: number;
};
const Map = ({ center, zoom }: mapProp) => {
  const markerRef = useRef<LeafletMarker>(null);
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [markerRef]);
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "100%", zIndex: 10 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} ref={markerRef}>
        <Popup>Property Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
