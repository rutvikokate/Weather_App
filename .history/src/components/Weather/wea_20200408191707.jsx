import React, { Component } from 'react';
import Auto from './auto'

export class Weather2 extends Component {
    constructor(props){
        super(props);
        this.state={
            suggestion:[],
            text:'',
            load:true
        };
    
       
    }
    ontextchange=(e)=>{
        const {items}=this.props;
        const value=e.target.value;
        let suggestion=[];
        console.log(e.target.value);
        if(value.length>0){
            const regex=new RegExp(`^${value}`,'i');
            suggestion=items.sort().filter(v=>regex.test(v));
        }
        this.setState({
            suggestion,
            text:value
        });
       
    }


    rendersuggestions(){
        const {suggestion}=this.state;
        
        if(suggestion.length===0){
            return null;
        }
        return(
            <ul>
              {suggestion.map((item)=><li className="tag is-success is-medium" style={{cursor:'pointer'}}onClick={()=>this.suggestionselected(item)}>{item}</li>)}
          </ul>
        );
    }
    suggestionselected(value){
        this.setState(()=>({
            text:value,
            suggestion:[],
        
        }))
        console.log(value)
    }
  
  render() {
    const {text}=this.state;
    return (
        <div>
          <div>
              <div className="section">
                  <div className="title">Weather App</div>
              </div>
            </div>
            <div>{this.props.error?error():null}</div>
            <div className="section">
            <div className="container is-fullhd">
                
                <div className="columns">
                    
                    <div className="column is-one-third left">
                        <div className="box">
                            
                           
                            <form action="" onSubmit={this.props.loadweather}>
                            <div className="title is-4">Your city and country:</div>
                             <div className="field has-addons">
                            <div className="control has-icons-right is-expanded">
                                <input type="text" value={text} onChange={this.ontextchange} className="input is-success " name="country" autoComplete="off" placeholder="Country"/>
                                {this.rendersuggestions()}
                    
                            </div>
                            </div>
                                    
                            <div className="field">
                                <div className="control">
                                    <input type="text" className="input is-success" name="city" autoComplete="off" placeholder="City"/>
                                    
                                </div>
                            </div>
                            <div className="field is-grouped is-grouped-centered">
                                <button className="button  is-success "   id="button" name="submit" ><span className="icon"><i class="fas fa-arrow-circle-down"></i></span><span>Get Weather</span></button>
                            </div>
                            </form>
                        </div>
                       
                    </div>
                    <div className="column right">
                        
                       <div className="box">
                       {this.props.city?<h1 className="title is-4">Weather in {this.props.city} </h1>:<h1 className="title is-4" style={{color:'#e7e7e7'}}>City,Country</h1>}
                       <hr/>
                       <div className="columns weather-bar" style={{marginBottom:'0px'}}>
                            <div className="column is-one-third" style={{background:'',padding:'0px',textAlign:'center'}}>
                            <div className="field is-grouped is-grouped-centered" style={{}}>
                            <h1 className="title is-1">
                                {this.props.weatherIcon?<img  className="image is-100x100" src={`http://openweathermap.org/img/wn/${this.props.weatherIcon}@2x.png`} alt=""/>:<span className="blank">-</span>}
                            </h1>
                           
                            </div>
                            <p className="title is-4" style={{textTransform:'capitalize',paddingTop:'5px'}}>{this.props.description?<span>{this.props.description}</span>:<span>{null}</span>}</p>
                            </div>
                            <div className="column"  style={{background:''}}>
                                <div className="content">
                                    <nav className="level is-mobile" style={{background:'',marginBottom:'20px'}}>
                                        <div className="level-item has-text-centered">
                                            <div>
                                            <p className="heading">Now</p>
                                            {this.props.temp_celcius?<p className="title is-1">{this.props.temp_celcius}&deg;C</p>:<p className="title blank">-</p>}
                                            </div>
                                            
                                        </div>
                                       
                                    </nav>
                                    <nav className="level is-mobile" style={{background:'',textAlign:'center'}}>
                                        <div className="level-item" style={{background:'',display:'flex',justifyContent:'flex-end',}}>
                                            <div style={{background:'',paddingRight:'50px'}}>
                                            <p className="heading">low</p>
                                            {this.props.temp_min?<p className="subtitle is-size-4">{this.props.temp_min}&deg;C</p>:<p className="title blank">-</p>}
                                            </div>
                                        </div>
                                        <div className="level-item" style={{background:'',display:'flex',justifyContent:'flex-start',paddingLeft:'50px'}} >
                                            <div>
                                            <p className="heading">high</p>
                                            {this.props.temp_max?<p className="subtitle is-size-4">{this.props.temp_max}&deg;C</p>:<p className="title blank">-</p>}
                                            </div>
                                        </div>
                                        </nav>
                                </div>
                            </div>
                        </div>
                       
                        <div className="  description ">
                            <div className="left">
                            <p><span className="heading "><i className="wi wi-strong-wind is-size-5"/> wind speed: </span>{this.props.wind_speed?<span>{this.props.wind_speed} m/s</span>:<i className="wi wi-na is-size-4 blank"/>}</p> 
                            </div>
                           
                            <div className="right">
                            
                            <p><span className="heading" style={{color:'orange'}}><i className="wi wi-sunrise is-size-5"/> sunrise: </span>{this.props.sunrise?<span>{this.props.sunrise}</span>:<span><i className="wi wi-na is-size-4 blank"/></span>}</p>
                            <p><span className="heading" style={{color:'darkblue'}}><i className="wi wi-moonrise is-size-5"/> sunset: </span>{this.props.sunset?<span>{this.props.sunset}</span>:<span><i className="wi wi-na is-size-4 blank"/></span>}</p>
                           
                            </div>
                        </div>
                    </div>
                    </div>
                </div>    
            </div>
            
            </div>
        </div>
    );
  }
}
function error(){
    return(
        <div className="notification is-danger">
            <button className="delete"></button>
            Please enter City and Country
        </div>
    )
    
}
export default Weather2;
