import React, { memo } from 'react';

const Button = memo(({ onClick, buttonTxt }) => {
  return <button onClick={onClick}>{buttonTxt}</button>;
});

export default Button;
