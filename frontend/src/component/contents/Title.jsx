import React from 'react';

const Title = ({ title, desc }) => {
  return (
    <>
      <strong className='title'>{title}</strong>
      <p className='desc'>{desc}</p>
    </>
  );
};

export default Title;
