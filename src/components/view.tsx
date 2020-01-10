import React, { Component } from 'react';

interface IProps {
  title: string,
  clickAttr: (count: number) => any,
};

interface IState {
  count: number,
};

class View extends Component<IProps,IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 2,
    };
  }

  render() {
    const { title, clickAttr } = this.props;
    const { count } = this.state;
    return (
      <div>
        View => {title}
        <button
          style={{ padding: '10px', background: '#ccc', border: 'none' }}
          onClick={() => clickAttr(count)}>childrenClick</button>
      </div>
    );
  }
}

export default View;
