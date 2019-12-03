import React, { Component } from 'react';

export class weather2 extends Component {
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
          <ul>
              {this.items.map((item)=><li>{item}</li>)}
          </ul>
      </div>
    );
  }
}

export default weather2;
