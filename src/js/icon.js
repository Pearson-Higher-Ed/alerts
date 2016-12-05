import React, { PropTypes } from 'react';

const Icon = (props) => {

  const icon_class = 'pe-icon--' + props.name;

  return(
    <svg version = "1.1"
         xmlns = "http://www.w3.org/2000/svg"
         xmlnsXlink = "http://www.w3.org/1999/xlink"
         role = "img"
         aria-labelledby = "close_alert"
         className = {icon_class}>
      <title id="close_alert">{props.children}</title>
      <use xlinkHref = {'#' + props.name}></use>
    </svg>
  );

}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  children: React.PropTypes.string
};

export default Icon;
