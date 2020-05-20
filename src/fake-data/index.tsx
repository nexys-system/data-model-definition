import React, { useState } from 'react'

import { Textarea, Error, Code, Layout } from '../components';
import { isJson }  from '../utils';
import * as FakeData from '../lib/query/fake';
import { DdParams2 } from '../lib/type';

const getOutput = (x:string):{ [k: string]: any; } => {
  try {
    const jModel = JSON.parse(x) as DdParams2[]
    return FakeData.row(jModel);
  } catch (err) {
    throw Error({message:'model could not be interpreted'})
  }
}

const sampleRow:DdParams2[] = [
  { name: 'f1', type: "String" },
  { name: 'f2', type: 'Int' },
  { name: 'f3', type: 'Boolean', optional: true },
  { name: 'f4', type: 'Float', optional: true }
]

export default () => {
  const [ model, setModel] = useState<string>(JSON.stringify(sampleRow, null, 2));
  const [ output, setOutput ] = useState<string | null>(null)
  const [ error, setError] = useState<string | null>(null);
  const [ n, setN ] = useState<number>(1);

  const handleChange = (t:string) => {
    setModel(t);

    if(!isJson(t)) {
      setError('no json')
    } else {
      setError(null)
    }
  }

  const handleChangeN = (x:React.ChangeEvent<HTMLInputElement>) => {
    const w:string = (x.target.value)
    console.log(w)
    const v = Number(w);
    if (v > 0) {
      setN(v);
    }
  }

  const convert = () => {
    try {
      const o = new Array(n).fill(null).map(_x => {
        return getOutput(model);
      })
      
      setOutput(JSON.stringify(o, null, 2));
    } catch (_err) {
      console.log(_err)
      setError(`can't convert`)
    }
  }

  const handleReset = () => {
    setModel('[]');
  }

  const left = <>
    {error && <Error message={error}/>}
    <h5>Fields definition</h5>
    <Textarea content={model} onChange={handleChange}/>
    <input type="number" value={n} onChange={handleChangeN}/>
    <br/>
    <button className="btn btn-primary" type="button" onClick={convert}>Generate!</button>
    &nbsp;
    <button className="btn btn-secondary" type="button" onClick={handleReset}>Reset</button>
  </>

  const right = output && <>
    <Code value={output}/>
    <button className="btn btn-secondary" type="button">Copy</button>
  </>

  return <Layout.LeftRight title={'Create Mock Data'} left={left} right={right}/>;
};
