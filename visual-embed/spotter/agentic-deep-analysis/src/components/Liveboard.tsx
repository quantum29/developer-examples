import React,{ useEffect } from 'react';
import { init, LiveboardEmbed, AuthType } from '@thoughtspot/visual-embed-sdk/react';
import './Liveboard.css';

interface LiveboardProps {
  liveboardId: string;
  height?: string;
  width?: string;
}

const THOUGHTSPOT_HOST: string = import.meta.env.VITE_THOUGHTSPOT_HOST || "";
init({
    thoughtSpotHost: THOUGHTSPOT_HOST,
    authType: AuthType.None // Adjust based on your authentication needs
});

const Liveboard: React.FC<LiveboardProps> = ({
  liveboardId,
  height = '100%',
  width = '100%',
}) => {

  return (
    <div className='liveboard-container' style={{ height, width }}>
      <LiveboardEmbed
        frameParams={{ 
            height: '100%',
            width: '100%',
        }}
        liveboardId={liveboardId}
      />
    </div>
  );
};

export default Liveboard; 