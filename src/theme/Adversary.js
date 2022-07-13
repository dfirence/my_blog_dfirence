import React from 'react';

const Adversary = ({ name }) => {
  var actor = 'none';
  switch (name) {
    case 'admin@338':
      actor = require('/datasamples/adversaries/admin@338.json');
      break;
    case 'apt29':
      actor = require('/datasamples/adversaries/apt29.json');
      break;
  }
  const a = actor;
  return (
    <div>
      <br />
      <p>{ JSON.stringify(a) }</p>
    </div>
  );
}

export default Adversary;

