import React from 'react';
import './App.css';
import ImageEditorContainer from './containers/ImageEditorContainer';
import * as Styled from './styles/default.style';

function App() {
  return (
    <Styled.Layout>
      <Styled.Title>FLEXIBLE IMAGE EDITOR</Styled.Title>
      <ImageEditorContainer />
    </Styled.Layout>
  );
}

export default App;
