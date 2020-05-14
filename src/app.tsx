import React from 'react';
import Icon from './components/icon';
import { ghUrl } from './utils';

export default () => (<div className="container">
  <h1>Nexys Data Defintion Language</h1>
  <p>Use the menu to explore the different functionalities of the package</p>

  <p><a href={ghUrl}><Icon name="code"/> Source</a> under MIT license</p>
</div>);

