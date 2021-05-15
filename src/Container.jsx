import React from 'react';

export function Container(props){

  return (
    <div style={{
      display:'inline-block',
      border: `solid ${props.color}`,
      padding: '20px'
    }}>{
      props.children
    }</div>
  );

}