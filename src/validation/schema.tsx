import React from 'react'

import { validateModelDef } from '../lib/schema-validation';

import ValidateComponent from './layout';

import { model } from '../lib/query/query-to-type.data'

const validateSchema = (content:string):{errors?: string[]} | any => {
  const validation = validateModelDef(JSON.parse(content))

  if(validation && !validation.status && validation.errors) {
    const errors = ['the string you entered is not a properly formatted DDL file, try again'].concat(validation.errors.map(x => {
      return x;
    }));

    return { errors };
  }

  return validation;
}

export default () => (<div className="container">
  <h2>Schema Validation</h2>
  <ValidateComponent valueDefault={JSON.stringify(model, null, 2)} validationFunc={validateSchema}/>
</div>);
