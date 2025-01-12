import React from '../lib/react.js';
import Switch from './switch';
import Chip from './chip';

function App() {
  return React.createElement(
    'div',
    {
      className: 'app',
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '5px',
      },
    },
    React.createElement(Switch),
    React.createElement(Chip, {
      text: '공개 예정',
    }),
    React.createElement(Chip, {
      text: '모두의 인기 콘텐츠',
    }),
    React.createElement(Chip, {
      text: 'Top 10',
    })
  );
}

export default App;
