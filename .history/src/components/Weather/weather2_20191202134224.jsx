import React, { Component } from 'react';

export class weather2 extends Component {
    constructor(props){
        super(props);
        this.item=[
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
      </div>
    );
  }
}

export default weather2;
