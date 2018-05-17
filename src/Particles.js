import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Canvas extends Component {
  state = { width: '0px', height: '0px' };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth - 5}px`,
      height: `${window.innerHeight - 5}px`,
    });
  };

  render() {
    const { width, height } = this.state;
    const { particles } = this.props;
    return (
      <Particles
        {...this.state}
        params={{
          particles,
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    );
  }
}

export default Canvas;
