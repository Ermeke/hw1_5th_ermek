import React from 'react';
import withMousTracker from "../../hoc/MouseTracker";
class Header extends React.Component {
  render() {
    const { isMouseInside, mouseX, mouseY } = this.props;
    return (
      <div>
        <h1>Header</h1>
        <p>Mouse kursor: {isMouseInside.toString()}</p>
        {isMouseInside && <p>Mouse X: {mouseX}, Mouse Y: {mouseY}</p>}
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    const { isMouseInside, mouseX, mouseY } = this.props;
    return (
      <div>
        <h1>Footer</h1>
        <p>Mouse kursor: {isMouseInside.toString()}</p>
        {isMouseInside && <p>Mouse X: {mouseX}, Mouse Y: {mouseY}</p>}
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    const { isMouseInside, mouseX, mouseY } = this.props;
    return (
      <div>
        <h1>Main</h1>
        <p>Mouse kursor: {isMouseInside.toString()}</p>
        {isMouseInside && <p>Mouse X: {mouseX}, Mouse Y: {mouseY}</p>}
      </div>
    );
  }
}

const HeaderMouseTracker = withMousTracker(Header);
const FooterMouseTracker = withMousTracker(Footer);
const MainMouseTracker = withMousTracker(Main);

export { HeaderMouseTracker, FooterMouseTracker, MainMouseTracker}
