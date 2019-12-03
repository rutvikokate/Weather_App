import React, { Component } from 'react';

export class autocomplete extends Component {
    constructor(props){
        super();
        this.items=[
            'David',
            'Sasra',
            "john",
            "jeses"
        ];

    }
  render() {
    return (
      <div>
        <input className="input" type="text"/>
        <ul>
            {this.items.map((item) =><li>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default autocomplete;
