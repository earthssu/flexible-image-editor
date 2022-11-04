import { whiteTheme } from './white-theme';

export const editorOptions = {
  includeUI: {
    loadImage: {
      path: '',
      name: 'SampleImage',
    },
    uiSize: {
      width: '100%',
      height: '650px',
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
    menuBarPosition: 'right',
    theme: whiteTheme,
  },
  cssMaxWidth: 1200,
  cssMaxHeight: 800,
  selectionStyle: {
    cornerSize: 20,
    rotatingPointOffset: 70,
  },
};
