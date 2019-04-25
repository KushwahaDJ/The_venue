import React, { Component } from 'react';

import Slide from 'react-reveal/Slide';

class TimeUntil extends Component {
    state = { 
        deadline:'Dec, 16 2019',
        Days:'0',
        Hours:'0',
        Minutes:'0',
        Sec:0

     }

    getTimeUntil(){
        const time = Date.parse(this.state.deadline) - Date.parse(new Date());
        if( time < 0){
            console.log(time);
        } else {
            const Days = Math.floor(time/(1000*60*60*24));
            const Hours = Math.floor((time/(1000*60*60))%24);
            const Minutes = Math.floor(time/(1000*60)%60);
            const Sec = Math.floor(time/(1000)%60);

            this.setState({
                Days,
                Hours,
                Minutes,
                Sec
            })
        }  
    }
    
    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.state.deadline), 1000)
    }
    render() { 
        return ( 
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Evets start here
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.Days}
                            </div>
                            <div className="countdown_tag">
                                Days
                            </div>
                            
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.Hours}
                            </div>
                            <div className="countdown_tag">
                                HS
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.Minutes}
                            </div>
                            <div className="countdown_tag">
                                Menutes
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.Sec}
                            </div>
                            <div className="countdown_tag">
                                Sec
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
         );
    }
}
 
export default TimeUntil;