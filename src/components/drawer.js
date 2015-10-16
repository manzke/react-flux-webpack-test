import React from 'react';
import { Drawer } from 'alt-notify';


class DrawerTest extends React.Component {

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.onChange}/>
        <h1>It works: {this.props.name}</h1>
      </div>
    );
  }
}

export default DrawerTest;