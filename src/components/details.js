import React, { Component } from 'react';
// - On hover, expand above info by adding more details for this location: Available Docks, Total Docks, latitude and longitude values, rental methods

class StationDetails extends Component{
    render(){
        const {details} = this.props
        return(
            <div>
                <ul>
                    <li>Available docks: {details.num_docks_available}</li>
                    <li>Total docks: {details.num_docks_available + details.num_docks_disabled}</li>
                    <li>Coordinates: (lat: {details.lat}, lon: {details.lon})</li>
                    <li>Rental Method: {details.rental_methods[0]} & {details.rental_methods[1]}</li>
                </ul>
            </div>
        )
    }
}

export default StationDetails