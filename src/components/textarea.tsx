import React from 'react';

interface Props {
  content:string,
  onChange: (x:string)=>void
}

export default (props:Props) => {
  const handleChange = (x:React.ChangeEvent<HTMLTextAreaElement>) => {
    const v:string = x.target.value
    props.onChange(v)
  }

return <textarea
  className="form-control"
  style={{minWidth: '100%', height: '400px'}}
  placeholder={'insert your json here'}
  value={props.content}
  onChange={handleChange}
  />
}