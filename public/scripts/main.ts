import App from '../components/app';
import ReactDOM from '../lib/react-dom/client.js';
import React from '../lib/react.js';

const root = document.getElementById('react');

if (!root) {
  console.error('문서에 react 요소가 존재하지 않습니다.');
} else {
  ReactDOM.createRoot(root).render(React.createElement(App));
}
