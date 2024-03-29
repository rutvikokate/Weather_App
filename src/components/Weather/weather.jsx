import React from 'react';
import '../Weather/weather.css'
import Auto from '../Weather/auto'
const Weather=(props)=>{
    
  
   
    return(
        <div>
             <div>
               <div className="title header has-text-light">Weathers App</div> 

            </div>
            <div>{props.error?error():null}</div>
            <div className="section">
            <div className="container is-fullhd">
                
                <div className="columns">
                    <div className="column is-one-third left">
                        <div className="box">
                            
                           
                            <form action="" onSubmit={props.loadweather}>
                            <div className="title is-5">Yours city and country:</div>
                            <div className="field">
                            <div className="control">
                                <input type="text"  className="input is-success " name="city" autoComplete="off" placeholder="City"/>
                            </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input type="text" className="input is-success" name="country" autoComplete="off" placeholder="Country"/>
                                </div>
                            </div>
                            <div className="field is-grouped is-grouped-centered">
                                <button className="button is-success is-outlined" name="submit" >Get Weather</button>
                            </div>
                            </form>
                        </div>
                       
                    </div>
                    <div className="column right">
                        
                       <div className="box">
                       
                       {props.city?<h1 className="title is-3">Weather in {props.city} </h1>:<h1 className="title is-3" style={{color:'#e7e7e7'}}>City,Country</h1>}
                       <hr/>
                       <div className="columns weather-bar">
                            <div className="column is-one-third" style={{background:''}}>
                            <div className="field is-grouped is-grouped-centered">
                            <h1 className="title is-1">
                                {props.weatherIcon?<img  className="image is-110x110" src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`} alt=""/>:<span>-</span>}
                            </h1>
                            </div>
                            </div>

                            <div className="column"  style={{background:''}}>
                                <div className="content">
                                    <nav className="level is-mobile">
                                        <div className="level-item has-text-centered">
                                            <div>
                                            <p className="heading">Temperature</p>
                                            {props.temp_celcius?<p className="title">{props.temp_celcius}&deg;C</p>:<p className="title">-</p>}
                                            </div>
                                            
                                        </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                            <p className="heading">Minimum</p>
                                            {props.temp_min?<p className="title">{props.temp_min}&deg;C</p>:<p className="title">-</p>}
                                            </div>
                                        </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                            <p className="heading">Maximum</p>
                                            {props.temp_max?<p className="title">{props.temp_max}&deg;C</p>:<p className="title">-</p>}
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                       
                        <div className="  description ">
                            <div className="left">
                            <h1>{props.length}</h1>
                            <p><span className="heading"><i className="wi wi-strong-wind is-size-5"/> wind speed: </span>{props.wind_speed?<span>{props.wind_speed} m/s</span>:<i className="wi wi-na is-size-4"/>}</p> 
                               
                          
                               <p><span className="heading">Status: </span>{props.description?<span>{props.description}</span>:<span><i className="wi wi-na is-size-4"/></span>}</p>
                               
                            </div>
                           
                            <div className="right">
                            
                            <p><span className="heading" style={{color:'orange'}}><i className="wi wi-sunrise is-size-5"/> sunrise: </span>{props.sunrise?<span>{props.sunrise}</span>:<span><i className="wi wi-na is-size-4"/></span>}</p>

                            <p><span className="heading" style={{color:'darkblue'}}><i className="wi wi-moonrise is-size-5"/> sunset: </span>{props.sunset?<span>{props.sunset}</span>:<span><i className="wi wi-na is-size-4"/></span>}</p>
                           
                            </div>
                        </div>
                    </div>
                    </div>
                </div>    

            </div>
            
            </div>

        </div>
        
    )
}


function error(){
    return(
        <div className="notification is-danger">
            <button className="delete"></button>
            Please enter City and Country
        </div>
    )
    
}


export default Weather;

