import React from 'react';
import * as Styled from '../styles/FlexImageEditor.style';

type editorOptions = {
  rootEl: any;
  zoom: any;
  zoomChange: any;
};

function FlexImageEditor({ rootEl, zoom, zoomChange }: editorOptions) {
  return (
    <>
      <Styled.Zoom>
        <span
          role="presentation"
          className={zoom >= 2 ? 'disabled' : ''}
          onClick={() => zoomChange('in')}
        >
          +
        </span>
        <span>{zoom * 100}</span>
        <span
          role="presentation"
          className={zoom < 0.5 ? 'disabled' : ''}
          onClick={() => zoomChange('out')}
        >
          -
        </span>
      </Styled.Zoom>
      <div ref={rootEl} />
    </>
  );
}

export default FlexImageEditor;
