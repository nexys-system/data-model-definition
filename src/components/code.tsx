import React from 'react';

const style:React.CSSProperties = {
  display: 'block',
  whiteSpace: 'pre-wrap'
}

export default (props:{value:string}) => {
  return <code style={style}>
    {props.value}
  </code>
}