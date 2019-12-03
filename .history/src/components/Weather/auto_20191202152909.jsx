import React, { Component } from 'react';

export class Auto extends Component {
    constructor(props){
        super();
        this.items=[
            'david',
            'ragul',
            'shivam',
            'john'
        ];
    }
  render() {
    return (
      <div>
          <div className="field ">
              <div className="control">
                <input onChange={(e)=>console.log(e.target.value)}  type="text" className="input" />
         
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
