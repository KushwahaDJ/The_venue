import React from 'react';

const Location = () => {
    return ( 
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.254425731685!2d77.72654874992276!3d12.955564718691644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1213f023bc03%3A0x20708ffd9db8a238!2sD+Mart!5e0!3m2!1sen!2sin!4v1555157996587!5m2!1sen!2sin" width="100%" 
                height="450" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
     );
}
 
export default Location;