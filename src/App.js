import React from 'react';
import './App.css';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';
import { whiteTheme } from './theme/white-theme';

function App() {
  const editorRef = React.createRef();

  const handleClickButton = () => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.flipX();
  };

  return (
    <>
      <ImageEditor
        ref={editorRef}
        includeUI={{
          loadImage: {
            name: 'SampleImage',
          },
          menu: [
            'crop',
            'flip',
            'rotate',
            'draw',
            'shape',
            'icon',
            'text',
            'mask',
            'filter',
          ],
          initMenu: 'filter',
          uiSize: {
            width: '100%',
            height: '700px',
          },
          menuBarPosition: 'right',
          theme: whiteTheme,
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 50,
          rotatingPointOffset: 100,
        }}
        usageStatistics
      />
      <button onClick={handleClickButton} type="button">
        Flip image by X Axis!
      </button>
    </>
  );
}

export default App;
