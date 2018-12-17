import React, { Component } from 'react';
import StationDetails from './details.js';
// - Each location should show the following information: Station Name and Percentage of Bikes still available (num avail bikes over total docks)

class Station extends Component{

    constructor(props){
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
        isHovering: false
        }
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
        isHovering: !state.isHovering,
        };
    }
    render(){
        function GetBikePercentage(bikes, docks){
            var totalDockAndBike = bikes + docks; 
            return Math.round((bikes/totalDockAndBike)*100)+'%';
        }
        const {stationInfo} = this.props
        return(
            <div 
              onMouseEnter={this.handleMouseHover}
              onMouseLeave={this.handleMouseHover}
              >
                <ul>
                  <ol>Location: {stationInfo.name}</ol>
                  <ol>Percentage Available Bikes: {GetBikePercentage(stationInfo.num_bikes_available, stationInfo.num_docks_available)}</ol>
                   {
                    this.state.isHovering &&
                    <div> 
                      <StationDetails details={stationInfo}/>
                    </div>
                   }
                </ul>
              </div>
        )
    }
}

export default Station