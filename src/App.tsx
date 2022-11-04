import React from 'react';
import './App.css';
import FlexImageEditor from './components/FlexImageEditor';
import * as Styled from './styles/default.style';

const App = () => {
  return (
    <Styled.Layout>
      <Styled.Title>FLEXIBLE IMAGE EDITOR</Styled.Title>
      <FlexImageEditor />
    </Styled.Layout>
  );
};

export default App;
