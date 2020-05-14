import React from 'react';

import { isJson } from '../utils'

export default (props:{valueDefault?: string, validationFunc:(x: string) => {errors?: any}|any}) => {
  const { validationFunc, valueDefault = '' } = props;
  const [ content, setContent] = React.useState(valueDefault);
  const [ errors, setErrors ] = React.useState<string[] | null>(null);
  const [ message, setMessage ] = React.useState<string | null>(null);

  const handleSubmit = () => {
  
    // 1 check if JSON
    if (!isJson(content)) {
      const errors = ['the string you entered is not a JSON string, try again'];
      
      setErrors(errors);
      setMessage(null)
      return;
    }

    // 2 check if it is a DDL file
    const validation = validationFunc(content);
    console.log(validation)
    
    if(validation.errors) {
      //this.setState({errors: validation.errors, message: null});
      setErrors(validation.errors);
      setMessage(null);
      return;
    }

    // else
    const errors = null;
    const message = 'Congratulations, this is a valid file';

    //this.setState({errors, message});
    setErrors(errors);
    setMessage(message);
  }

  const handleChange = (a:React.ChangeEvent<HTMLTextAreaElement>) => {
    const content:string = a.target.value;

    setContent(content);
  }

  const renderError = () => {
    if (!errors) {
      return null;
    }

    return (<ul className="list-group">
      {errors.map((error, i) => {
        return <li className="list-group-item list-group-item-danger" key={i}>{error}</li>
      })}
    </ul>)
  }

  const renderSuccess = () => {
    if (!message) {
      return null;
    }

    return <p className="alert alert-success">{message}</p>;
  }

  return (<>
    {renderError()}
    {renderSuccess()}

    <div className="row">
      <div className="col-md-12">
        <textarea className="form-control" style={{minWidth: '100%', height: '400px'}} placeholder={'insert your json here'} value={content} onChange={handleChange}/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Validate</button>
      </div>
    </div>
  </>)
}
