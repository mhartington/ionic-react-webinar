import React from 'react';
const Provider = props => (
  <>
    <div
      style={{
        position: 'absolute',
        top: 0,
        height: 12,
        left: 0,
        right: 0,
        backgroundColor: '#3880FF',
        zIndex: 1
      }}
    />
    {props.children}
  </>
);
export default Provider;
