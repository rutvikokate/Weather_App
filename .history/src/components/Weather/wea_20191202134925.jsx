import React, { Component } from 'react';

export class Weather2 extends Component {
    constructor(props){
        super(props);
        this.items=[
            'david',
            'rahul',
            'shivam',
            'john'
        ];
    }
  render() {
    return (
      
    );
  }
}

export default Weather2;

<div>
          <input type="text" className="input"/>
          <ul>
              {this.items.map((item)=><li>{item}</li>)}
          </ul>
      </div>