import React from '../lib/react.js';
import Switch from './switch.js';

function App() {
  return React.createElement(
    'div',
    {
      className: 'app',
    },
    React.createElement(Switch)
  );
}

export default App;
