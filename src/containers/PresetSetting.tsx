import '../styles/Preset.style.css';

export const addEditorMenu = (query: Element) => {
  const menuElement =
    '<li tooltip-content="Preset" class="tie-btn-filter tui-image-editor-item normal preset-menu">PRESET</li>';

  query.insertAdjacentHTML('beforeend', menuElement);
};

export const addSubMenu = (query: Element) => {
  let subElement = '<div class="tui-image-editor-menu-preset">';
  subElement +=
    '<ul class="tui-image-editor-submenu-item preset-submenu-layout">';
  subElement +=
    '<li class="preset-box" id="preset-first"><div class="preset-title">preset 1</div></li>';
  subElement +=
    '<li class="preset-box" id="preset-second"><div class="preset-title">preset 2</div></li>';
  subElement += '<li class="preset-add-button">+ add preset</li>';
  subElement += '</ul>';
  subElement += '</div>';

  query.insertAdjacentHTML('beforeend', subElement);
};

export const openPresetMenu = () => {
  const presetQuery = document.querySelector('.preset-menu');
  const presetSubMenu = document.querySelector(
    '.tui-image-editor-menu-preset',
  ) as HTMLElement | null;
  const mainMenu = document.querySelector('.tui-image-editor-main');
  const subMenu = document.querySelector(
    '.tui-image-editor-submenu',
  ) as HTMLElement | null;
  presetQuery.addEventListener('click', () => {
    if (presetSubMenu != null) {
      if (presetSubMenu.style.display === 'table-cell') {
        presetSubMenu.style.display = 'none';
        mainMenu.classList.remove('tui-image-editor-menu-preset');
      } else {
        presetSubMenu.style.display = 'table-cell';
        mainMenu.classList.add('tui-image-editor-menu-preset');
        subMenu.style.display = 'table';
      }
    }
  });
};

export const applyPresetButton = (tui: any) => {
  const presetFirst = document.querySelector('#preset-first');
  const presetSecond = document.querySelector('#preset-second');

  // first preset
  presetFirst.addEventListener('click', () => {
    tui.applyFilter('Sepia');
    setTimeout(() => {
      tui.addIcon('arrow', {
        fill: '#00a9ff',
        left: 150,
        right: 100,
      });
    }, 100);
    setTimeout(() => {
      tui.addText('I love CAT', {
        styles: {
          fill: '#fff',
          fontSize: 30,
          fontWeight: 'bold',
        },
        position: {
          x: 450,
          y: 10,
        },
      });
    });
  });

  // second preset
  presetSecond.addEventListener('click', () => {
    tui.applyFilter('Sharpen');
    setTimeout(() => {
      tui.applyFilter('Emboss');
    }, 100);
    setTimeout(() => {
      tui.addText('IMAGE EDITOR SAMPLE', {
        styles: {
          fill: '#000000',
          fontSize: 25,
          fontWeight: 'bold',
        },
        position: {
          x: 30,
          y: 200,
        },
      });
    });
  });
};
