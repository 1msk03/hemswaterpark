import React from 'react';

const Map = () => {
  const mapStyle = {
    border: '0',
    width: '100%', // Set width to 100%
    height: '450px',
  };

  return (
    <div className='w-full'> 
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.568850902543!2d75.70131757450386!3d26.88543606126395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4bcd4559eea7%3A0x8d639ac1090f4ce5!2sHems%20Water%20Park!5e0!3m2!1sen!2sin!4v1712134290223!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={mapStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
