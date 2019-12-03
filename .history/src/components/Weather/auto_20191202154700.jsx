import React, { Component } from 'react';
import { tsThisType } from '@babel/types';

export class Auto extends Component {
    constructor(props){
        super();
        this.items=[
            'david',
            'ragul',
            'shivam',
            'john'
        ];

        this.state={
            suggestion:[],
        };
    }

    ontextchange=(e)=>{
        const value=e.target.value;
        let suggestion=[];

        if(value.length>0){
            const regex=new RegExp(`$(value)`,'i');
            suggestion=this.items.sort().filter(v=>regex.test(v));
        }
        this.setState(() => ({suggestion}))
    }

    rendersuggestions(){
        const {suggestion}=this.state;
        if(suggestion.length===0){
            return null;
        }
        return(
            <ul>
              {suggestion.map((item)=><li>{item}</li>)}
          </ul>
        );
    }
  render() {
    return (
      <div>
          <div className="field has-addons">
              <div className="control">
                <input onChange={this.ontextchange}  type="text" className="input" />
              </div>
          </div>
         <ul>
             {this.items.map((item)=><li>{item}</li>)}
         </ul>
         
      </div>
    );
  }
}

export default Auto;
