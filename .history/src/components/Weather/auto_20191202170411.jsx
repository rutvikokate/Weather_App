import React, { Component } from 'react';


export class Auto extends Component {

    async mountdata(){
        const url="https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json";

        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
    }


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
              {suggestion.map((item)=><li onClick={()=>this.suggestionselected(item)}>{item}</li>)}
          </ul>
        );
    }

    suggestionselected(value){
        this.setState(()=>({
            text:value,
            suggestion:[]
        }))
    }
  render() {
      const {text}=this.state;
    return (
      <div>
          <div className="field has-addons">
              <div className="control">
                <input value={text} onChange={this.ontextchange}  type="text" className="input" />
                {this.state.load?<h1>loading..</h1>:<h1>perosn</h1>}
              </div>
          </div>
         
         {this.rendersuggestions()}
         
      </div>
    );
  }
}

export default Auto;
