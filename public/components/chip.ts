import React from '../lib/react.js';

function Chip(props: { text: string }) {
  const handleClick = (e: Event) => {
    const button = e.target as HTMLButtonElement;

    if (button) {
      if (button.style.backgroundColor === 'transparent') {
        button.style.color = '#fff';
        button.style.backgroundColor = '#004FFF';
      } else {
        button.style.backgroundColor = 'transparent';
        button.style.color = '#000';
      }
    }
  };

  return React.createElement(
    'buton',
    {
      type: 'button',
      className: 'chip-button',
      style: {
        border: '1px solid #000',
        padding: '5px',
        borderRadius: '100px',
        backgroundColor: 'transparent',
        userSelect: 'none',
      },
      onClick: handleClick,
    },
    props.text
  );
}

export default Chip;
