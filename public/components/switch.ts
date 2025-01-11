import React from '../lib/react.js';

function Switch() {
  const handleClick = (e: Event) => {
    const img = e.target as HTMLImageElement;

    if (img) {
      img.src = img.src.includes('Switch-off') ? '/assets/Switch-on.svg' : '/assets/Switch-off.svg';

      img.alt = img.src.includes('Switch-off') ? 'switch off' : 'switch on';
    }
  };

  return React.createElement(
    'button',
    {
      type: 'button',
      className: 'switch-button',
      style: {
        backgroundColor: 'transparent',
        border: 0,
      },
      onClick: handleClick,
    },
    React.createElement('img', {
      className: 'switch-image',
      src: '/assets/Switch-off.svg',
      alt: 'switch off',
    })
  );
}

export default Switch;
