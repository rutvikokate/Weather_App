import React from 'react';
import '../Weather/weather.css'

const Weather=(props)=>{
    
    
   
    return(
        <div>
             <div>
               <div className="title header has-text-light">Weather App</div> 

            </div>
            <div>{props.error?error():null}</div>
            <div className="section">
            <div className="container is-fullhd">
                
                <div className="columns">
                    <div className="column is-one-third left">
                        <div className="box">
                            
                           
                            <form action="" onSubmit={props.loadweather}>
                            <div className="title is-5">Your city and country:</div>
                            <div className="field">
                            <div className="control">
                                <input type="text" className="input is-success " name="city" autoComplete="off" placeholder="City"/>
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
                            
                    
                                <p><span className="heading">wind speed: </span>{props.wind_speed?<span>{props.wind_speed} m/s</span>:<span>-</span>}</p> 
                               
                          
                            <p><span className="heading">Status: </span>{props.description?<span>{props.description}</span>:<span>-</span>}</p>
                           
                            
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

