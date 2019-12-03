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
      <div>
          <input type="text" className="input"/>
          sadj;baskjda
          <ul>
              {this.items.map((item)=><li>{item}</li>)}
          </ul>
      </div>
    );
  }
}

export default Weather2;
