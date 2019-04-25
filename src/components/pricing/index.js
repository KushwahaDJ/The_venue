import React, { Component } from 'react';
import Buttons from './../utill/Buttons';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    state = { 
        prices:[100, 150, 250],
        positions:['Gold','Diamond','Platinum'],
        desc:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate tellus ac tincidunt elementum. Praesent vitae tortor tempus, aliquet quam id, pulvinar nisi. Mauris dapibus diam enim, ut eleifend purus commodo sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis mi leo, faucibus a enim et, cursus fringilla lectus.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate tellus ac tincidunt elementum. Praesent vitae tortor tempus, aliquet quam id, pulvinar nisi. Mauris dapibus diam enim, ut eleifend purus commodo sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis mi leo, faucibus a enim et, cursus fringilla lectus.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate tellus ac tincidunt elementum. Praesent vitae tortor tempus, aliquet quam id, pulvinar nisi. Mauris dapibus diam enim, ut eleifend purus commodo sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis mi leo, faucibus a enim et, cursus fringilla lectus.'
        ],
        linkto:['http://sales/g','http://sales/d','http://sales/p'],
        delay:[500,0,500]
     }

     showBoxes = ()=> (
         this.state.prices.map((box, i)=>(
             <Zoom delay={this.state.delay[i]} key={i} >
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{this.state.desc[i]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <Buttons 
                                text="purchase"
                                bck="#ffa800"
                                color="#fff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
         ))
     );

    render() { 
        return ( 
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                           {this.showBoxes()}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Pricing;