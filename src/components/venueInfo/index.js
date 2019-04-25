import React from 'react';
import Zoom from 'react-reveal/Zoom';

import cal_icon from './../../resources/images/icons/calendar.png';
import loc_icon from './../../resources/images/icons/location.png';

const VenueInfo = () => {
    return ( 
        <div className="bck_black">
            <div className="center_wrapper">
                    <div className="vn_wrapper">
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${cal_icon})`
                                        }}
                                    
                                    ></div>
                                    <div className="vn_title">
                                        Event Date & Time
                                    </div>
                                    <div className="vn_desc">
                                        7 August 2019 @10:00 PM
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Zoom>

                        <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${loc_icon})`
                                        }}
                                    
                                    ></div>
                                    <div className="vn_title">
                                        Event Date & Time
                                    </div>
                                    <div className="vn_desc">
                                        7 August 2019 @10:00 PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    </div>
            </div>
        </div>
     );
}
 
export default VenueInfo;