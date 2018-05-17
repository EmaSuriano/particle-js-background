import React from 'react';
import { render } from 'react-dom';
import Particles from './Particles';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import styled from 'styled-components';
import './index.css';
import particleType from './particleType';

const urlPropsQueryConfig = {
  background: { type: UrlQueryParamTypes.string, defaultValue: '#222' },
  particles: { type: particleType },
};

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: 100%;
  background: ${props => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = ({ background, particles }) => (
  <AppContainer background={background}>
    <Particles particles={particles} />
  </AppContainer>
);

const AppWithUrlParameters = addUrlProps({ urlPropsQueryConfig })(App);

render(<AppWithUrlParameters />, document.getElementById('root'));

// to send particles you have to perform encodeURIComponent(JSON.stringify(PARTICLES_CONF))
