import React, { useEffect, useRef, useState } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import TuiImageEditor from 'tui-image-editor';
import { editorOptions } from '../theme/editor-option';
import { getNumber, resizeElement } from './ZoomSetting';
import {
  addEditorMenu,
  addSubMenu,
  openPresetMenu,
  applyPresetButton,
} from './PresetSetting';
import FlexImageEditor from '../components/FlexImageEditor';

const useEditor = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const tuiEditor = new TuiImageEditor(ref.current, editorOptions);
    console.log(tuiEditor);

    const menuQuery = document.querySelector('.tui-image-editor-menu');
    addEditorMenu(menuQuery);
    const subMenuQuery = document.querySelector('.tui-image-editor-submenu');
    addSubMenu(subMenuQuery);
    openPresetMenu();
    applyPresetButton(tuiEditor);
  }, []);

  return ref;
};

function ImageEditorContainer(): JSX.Element {
  const rootEl = useEditor();
  const [zoom, setZoom] = useState(1);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const zoomChange = (type: string) => {
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
    <FlexImageEditor rootEl={rootEl} zoom={zoom} zoomChange={zoomChange} />
  );
}

export default ImageEditorContainer;
