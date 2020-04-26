import React, { useState } from 'react'

import { Textarea, Error, Code, Layout } from '../components';
import { isJson }  from '../utils';
import { companyDef } from '../lib/utils.data';
import { getJoiSchema } from  './utils';

export default () => {
  const [ content, setContent] = useState<string>(JSON.stringify(companyDef.fields, null, 2));
  const [ output, setOutput ] = useState<string | null>(null)
  const [ error, setError] = useState<string | null>(null);

  const handleChange = (t:string) => {
    setContent(t);

    if(!isJson(t)) {
      setError('no json')
    } else {
      setError(null)
    }
  }

  const convert = () => {
    try {
      const o = getJoiSchema(content);
      setOutput(o);
    } catch (_err) {
      setError('can\'t convert')
    }
  }

  const left = <>
    {error && <Error message={error}/>}
    <Textarea content={content} onChange={handleChange}/>
    <button className="btn btn-primary" type="button" onClick={convert}>Convert!</button>
    &nbsp;
    <button className="btn btn-secondary" type="button" onClick={() => setContent('[]')}>Reset</button>
  </>

  const right = output && <Code value={output}/>

  return <Layout.LeftRight title={'Schema to Joi'} left={left} right={right}/>;
};
