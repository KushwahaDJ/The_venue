import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import Buttons from './../utill/Buttons';

class Discount extends Component {

    state = {
      discountStart:0,
      discountEnd:30
    }

    portcentage = () => {
      if(this.state.discountStart < this.state.discountEnd){
        this.setState({
          discountStart:this.state.discountStart + 1
        })
      }
    }
    
    componentDidUpdate(){
      setTimeout(()=>{
          this.portcentage()
      },300)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                  <Fade
                      onReveal={()=> this.portcentage()} 
                      >
                          <div className="discount_porcentage">
                          <span>{this.state.discountStart}%</span>
                          <span>OFF</span>
                    </div>
                    </Fade>
                    <Slide right>
                    <div className="discount_description">
                      <h3>Purchase ticket before 28th Dec</h3>
                      <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                      <Buttons 
                        text="Purchase tickets"
                        bck="#ffa800"
                        color="#fff"
                        link="https://www.google.com/"
                      />

                    </div>
                    </Slide>

                </div>

            </div>
         );
    }
}

export default Discount;
