import React, { Component } from 'react';
import Weather from './components/Weather/weather'
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
      error:false
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

    
  }

  calcCelcius(temp){
    let cel=Math.floor(temp-273.15)
    return cel;
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
     sunrise:response.sys.sunsrise,
     sunset:response.sys.sunset,
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