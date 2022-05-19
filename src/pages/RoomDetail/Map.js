import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import Marker from 'react-google-maps/lib/components/Marker';

const Map = () => {
  const options = { closeBoxURL: '', enableEventPropagation: true };
  return (
    <div>
      <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: 16.032573, lng: 108.220303 }}
        >
          <Marker
              icon={{
                url: 'https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png',
                scaledSize: new window.google.maps.Size(30, 30),
              }}
              position={{ lat: 16.032573, lng: 108.220303 }}
          >
                  
            <InfoBox
              options={options}
            >
              <>
                <div style={{ backgroundColor: 'green', color: 'white', borderRadius:'1em', padding: '0.2em' }}>
                  vị trí ở đây
                </div>
              </>
            </InfoBox>  
                    
          </Marker>
        
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));

