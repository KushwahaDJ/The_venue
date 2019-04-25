import React from 'react';
import { Divider } from '@material-ui/core';
import Carousel from './Carousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (  
        <div style={{position:'relative'}}>

            <Carousel />
            <div className="artist_name">
                <div className="wraper">
                    Areana Grandose
                </div>
            </div>
            
            <TimeUntil />
        </div>
    );
}
 
export default Featured;