import React, { Component } from 'react';
import './App.css';

import Station from './components/station.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      status:[],
      information:[],
      isLoaded: false
    }
  }
  
  componentDidMount(){
    fetch('https://gbfs.citibikenyc.com/gbfs/en/station_status.json')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        status:json.data.stations,
      })
    })
    fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        information:json.data.stations,
      })
    })
  }
  
  

  render() {
    
    var {isLoaded, status, information} = this.state;
    let mergedInformation = [];
    status.forEach((e, i) => {
      mergedInformation.push(Object.assign({}, e, information[i]));
    });

    console.log(mergedInformation)
    return (
      <div class="shadow"> 
      <div className="App" class="container"> 
        {isLoaded ? 
        <ul>
          {mergedInformation.map(e=>(
            <li key={e.station_id}>
              <Station stationInfo={e}/>
            </li>
          ))}
        </ul>
        : <div> Loading... </div>}
        </div>
      </div>
    );
  }
  
}

export default App;