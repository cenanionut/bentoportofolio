import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import avatar from "../assets/avatar.png";

const position = [46.7712, 23.6236];

// Custom marker with avatar
const avatarIcon = new L.Icon({
  iconUrl: avatar,
  iconSize: [64, 64],
  iconAnchor: [32, 32],
  className: "rounded-full shadow-lg border-4 border-white",
});

// Remove default marker icon shadow
delete L.Icon.Default.prototype._getIconUrl;

function SetViewOnCenter({ coords }) {
  const map = useMap();
  map.setView(coords, 8);
  return null;
}

function Location() {
  return (
    <div className="h-1/3 w-full bg-white flex items-center justify-center rounded-3xl shadow-lg overflow-hidden">
      <MapContainer
        center={position}
        zoom={1}
        scrollWheelZoom={true}
        dragging={false}
        doubleClickZoom={false}
        zoomControl={true}
        attributionControl={false}
        className="w-full h-full rounded-3xl"
        style={{ minHeight: "100%", minWidth: "100%" }}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={avatarIcon} />
        <SetViewOnCenter coords={position} />
      </MapContainer>
    </div>
  );
}

export default Location;
