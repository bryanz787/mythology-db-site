import React from 'react';
import splashImage from './picture/mythology.png';


function SplashPage() {
  return (
    <div style={{
      height: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundImage: `url(${splashImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative', 
      zIndex: 1 
    }}>
      {/* Overlay to ensure content stands out. Adjust the color and opacity as needed */}
      <div style={{
        position: 'absolute', 
        top: 0, 
        right: 0, 
        bottom: 0, 
        left: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}></div>

      {/* The content of the splash page */}
      <h2 style={{
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Times New Roman',
        fontSize: '48px',
        zIndex: 2
      }}>
        Welcome to the database of Mythical gods and stories!
      </h2>
    </div>
  );
}

export default SplashPage;
