import React, { Component } from 'react';
import View from './components/view';

import './App.css';

interface IState {
  title: string,
};

interface IProps {
  count?: number,
};

class App extends Component<IProps,IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'viewer'
    };
  }

  clickAttr = (count: number) => {
    console.log('clickAttr.....', count);
  }

  render(){
    const {title} = this.state;
    return (
      <div className="App">
        <View title={title} clickAttr={this.clickAttr} />
      </div>
    )
  }
}

export default App;
