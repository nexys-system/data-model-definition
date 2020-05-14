import React, { useState } from 'react'

import { Textarea, Error, Code, Layout } from '../components';
import { isJson }  from '../utils';
import { getOutput } from  './utils';
import * as DataSample from '../lib/query/query-to-type.data'

const querySample = {
  [DataSample.entityName1]: {projection:{status: {name: true, address: true}}},
  [DataSample.entityName2]: {}
}

export default () => {
  const [ model, setModel] = useState<string>(JSON.stringify(DataSample.model, null, 2));
  const [ query, setQuery] = useState<string>(JSON.stringify(querySample, null, 2));
  const [ output, setOutput ] = useState<string | null>(null)
  const [ error, setError] = useState<string | null>(null);

  const handleChange = (t:string) => {
    setModel(t);

    if(!isJson(t)) {
      setError('no json')
    } else {
      setError(null)
    }
  }

  const handleQueryChange = (t:string) => {
    setQuery(t);

    if(!isJson(t)) {
      setError('no json')
    } else {
      setError(null)
    }
  }

  const convert = () => {
    try {
      const o = getOutput(query, model);
      setOutput(o);
    } catch (_err) {
      setError('can\'t convert')
    }
  }

  const handleReset = () => {
    setModel('[]');
    setQuery('[]')
  }

  const left = <>
    {error && <Error message={error}/>}
    <h4>Query</h4>
    <Textarea content={query} onChange={handleQueryChange}/>
    <h4>Model</h4>
    <Textarea content={model} onChange={handleChange}/>
    <button className="btn btn-primary" type="button" onClick={convert}>Get output TypeScript type!</button>
    &nbsp;
    <button className="btn btn-secondary" type="button" onClick={handleReset}>Reset</button>
  </>

  const right = output && <Code value={output}/>

  return <Layout.LeftRight title={'Schema to Typescript'} left={left} right={right}/>;
};
