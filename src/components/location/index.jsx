import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../../utils/assets/icon/marker.svg";
import { Icon } from "leaflet";
const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [32, 32],
});
const Location = () => {
  return (
    <>
      <div
        id="location"
        className=" my-5 sm:mt-0 flex flex-col  text-primary-blue font-bold"
      >
        <h1 className="mr-32 mb-5 text-right text-6xl sm:text-3xl sm:mr-7">
          Location
        </h1>
        <MapContainer
          center={[-1.1489813250753935, 116.862811759648]}
          zoom={17}
          scrollWheelZoom={false}
          className="h-screen sm:h-60"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[-1.1489813250753935, 116.862811759648]}
            icon={myIcon}
          >
            <Popup>
              <a href="https://www.google.com/maps/place/Laboratorium+Terpadu+ITK/@-1.1499495,116.8599949,17z/data=!4m14!1m7!3m6!1s0x2df149298f826ab5:0x8489d5309f45c0db!2sKalimantan+Institute+of+Technology!8m2!3d-1.1499495!4d116.8621836!16s%2Fg%2F112yfcz24!3m5!1s0x2df14b3a7f37de89:0x319944d2b91f49!8m2!3d-1.1487698!4d116.862971!16s%2Fg%2F11nfnz9x09">
                View Larger Map
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};
export default Location;
