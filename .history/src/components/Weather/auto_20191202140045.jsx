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
          <input type="text" className="input"/>
          <ul>
              {this.items.map((item)=>{item})}
          </ul>
      </div>
    );
  }
}

export default Auto;
