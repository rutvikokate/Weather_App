import React, { Component } from 'react';
import Weather from './components/Weather/weather'
import  Weather2  from './components/Weather/wea'
import Auto from './components/Weather/auto'
import './App.css'
import 'weather-icons/css/weather-icons.css'





export class App extends Component {
  
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celcius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      wind_speed:undefined,
      sunrise:undefined,
      senset:undefined,
      error:false,
      countries:undefined,
    };
   
   
    this.weatherIcon={
      Thunderstorm:"wi-thunderstorm",
      Drizzle:'wi-sleet',
      Rain:'wi-storm-showers',
      Snow:'wi-snow',
      Atmosphere:'wi-fog',
      Clear:'wi-night-clear',
      Clouds:'wi-day-fog'
    }
    this.getdata();
    
  };

  getdata=async()=>{

    const get=await fetch("https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.min.json");
    const response=await get.json();
    console.log(response);

    this.setState({
        countries:`${Object.keys(response)}`
        
    })
    console.log(this.getSnapshotBeforeUpdate.countries);
  }
  
  calcCelcius(temp){
    let cel=Math.floor(temp-273.15)
    return cel;
  }

  convert2time(time){
    let ts=time;
    let dateObj = new Date(ts * 1000); 
    let utcString = dateObj.toUTCString();
    
    let newdate= new Date(utcString)
    return newdate.toLocaleString().slice(11,21);
  
  }
  


  get_weathericon(icon,rangeid){
    switch(true){
      case rangeid>=200 && rangeid <=232:
        this.setState({icon:this.weatherIcon.Thunderstorm})
        break;
      case rangeid>=300 && rangeid <=321:
            this.setState({icon:this.weatherIcon.Drizzle})
            break;
      case rangeid>=500 && rangeid <=531:
            this.setState({icon:this.weatherIcon.Rain})
            break;
      case rangeid>=600 && rangeid <=622:
            this.setState({icon:this.weatherIcon.Snow})
            break;

      case rangeid>=701 && rangeid <=781:
            this.setState({icon:this.weatherIcon.Atmosphere});
            break;
      case rangeid===800:
            this.setState({icon:this.weatherIcon.Clear});
            break;
      case rangeid>=801 && rangeid <=804:
            this.setState({icon:this.weatherIcon.Clouds});
            break;
      default:
          this.setState({icon:this.weatherIcon.Clouds});
    }
  }

  getWeather=async(e)=>{
   
   
    e.preventDefault();

    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;

    if(city && country)
    {
    
    const api_call=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=c71cbed6a04f97ad3d38d65a83329dd2`);
    const response=await api_call.json();
    console.log(response);

    
    this.setState({
      city:`${response.name},${response.sys.country}`,
      celcius:this.calcCelcius(response.main.temp),
      temp_max:this.calcCelcius(response.main.temp_max),
      temp_min:this.calcCelcius(response.main.temp_min),
      description:response.weather[0].description,
     wind_speed:response.wind.speed,
     icon:response.weather[0].icon,
     sunrise:this.convert2time(response.sys.sunrise),
     sunset:this.convert2time(response.sys.sunset),
      error:false
    });

    
  }
  else{
    this.setState({error:true})
  }
  
  };

  
 
  render() {
    return (

      <div>
         <Auto items={this.state.countries}/> 
        {/* <Weather2
         city={this.state.city}
         country={this.state.country} 
         temp_celcius={this.state.celcius}
         temp_max={this.state.temp_max}
         temp_min={this.state.temp_min}
         description={this.state.description}
         weatherIcon={this.state.icon}
         loadweather={this.getWeather}
         wind_speed={this.state.wind_speed}
         error={this.state.error}
         sunrise={this.state.sunrise}
         sunset={this.state.sunset}/> */}
        <Weather 
        city={this.state.city}
         country={this.state.country} 
         temp_celcius={this.state.celcius}
         temp_max={this.state.temp_max}
         temp_min={this.state.temp_min}
         description={this.state.description}
         weatherIcon={this.state.icon}
         loadweather={this.getWeather}
         wind_speed={this.state.wind_speed}
         error={this.state.error}
         sunrise={this.state.sunrise}
         sunset={this.state.sunset}
        />
        
      </div>
    );
  }
}

export default App;
