import React from 'react';

const Icon = (props) => {

  const icon_class = 'pe-icon--' + props.name;

  return (
    <svg aria-hidden = "true"
       focusable = "false"
       className = {icon_class}>
      <use xlinkHref = {'#' + props.name}></use>
    </svg>
  );
}

export default Icon;
