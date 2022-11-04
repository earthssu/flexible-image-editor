import React, { useEffect, useRef, useState } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import TuiImageEditor from 'tui-image-editor';
import { editorOptions } from '../theme/editor-option';
import * as Styled from '../styles/FlexImageEditor.style';

const getNumber = (value) => Number(value.replace('px', ''));

const resizeElement = (element, percentage, props = [], values = []) => {
  props.forEach((key, idx) => {
    // eslint-disable-next-line no-param-reassign
    element.style[key] = `${values[idx] * percentage}px`;
  });
};

const useEditor = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const tuiEditor = new TuiImageEditor(ref.current, editorOptions);
    console.log(tuiEditor);
  }, []);

  return ref;
};

const FlexImageEditor = (): JSX.Element => {
  const rootEl = useEditor();
  const maxZoom = 2;
  const minZoom = 0.5;
  const [zoom, setZoom] = useState(1);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const zoomChange = (type) => {
    let updated = zoom;
    if (type === 'in') {
      updated += 0.25;
    } else {
      updated -= 0.25;
    }
    setZoom(updated);
    let maxHeight = height;
    let maxWidth = width;
    if (!loaded) {
      const canvas = document.querySelector('canvas');
      maxHeight = getNumber(canvas.style.maxHeight);
      maxWidth = getNumber(canvas.style.maxWidth);
      setHeight(maxHeight);
      setWidth(maxWidth);
      setLoaded(true);
    }
    resizeElement(
      document.querySelector('.tui-image-editor'),
      updated,
      ['height', 'width'],
      [maxHeight, maxWidth],
    );
    resizeElement(
      document.querySelector('.tui-image-editor-canvas-container'),
      updated,
      ['maxHeight', 'maxWidth'],
      [maxHeight, maxWidth],
    );
    document.querySelectorAll('canvas').forEach((element) => {
      resizeElement(
        element,
        updated,
        ['maxHeight', 'maxWidth'],
        [maxHeight, maxWidth],
      );
    });
  };

  return (
    <>
      <Styled.Zoom>
        <span
          role="presentation"
          className={maxZoom <= zoom ? 'disabled' : ''}
          onClick={() => zoomChange('in')}
        >
          +
        </span>
        <span>{zoom * 100}</span>
        <span
          role="presentation"
          className={minZoom > zoom ? 'disabled' : ''}
          onClick={() => zoomChange('out')}
        >
          -
        </span>
      </Styled.Zoom>
      <div ref={rootEl} />
    </>
  );
};

export default FlexImageEditor;
