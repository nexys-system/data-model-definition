import React from 'react';

export const LeftRight = (props:({left:any, right:any})) => {
  return <div className="container">
    <h2>Schema to Typescript</h2>

    <div className="row">
      <div className="col-md-6">
      {props.left}
      </div>
      <div className="col-md-6">
        {props.right}
      </div>
    </div>
  </div>
}
