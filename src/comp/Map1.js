import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map1() {
  return (
    <div className='container'>
      <h1>Map of tel aviv </h1>
      <MapContainer center={[32.07422, 34.79168]} zoom={16} scrollWheelZoom={true}>
        <Marker key={"11"} position={[32.07112655297044, 34.7869199701099]}>
          <Popup>
            <div>
              שוק שרונה
            </div>
          </Popup>
        </Marker>

        <Marker key={"22"} position={[32.07424772734478, 34.79193769944575]}>
          <Popup>
            <div>
              קניון עזריאלי
            </div>
          </Popup>
        </Marker>
        <Marker eventHandlers={{click:() => {
          alert("תחנת רכבת")
        }}} key={"33"} position={[32.073214106989404, 34.7930959902156]}/>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  )
}
