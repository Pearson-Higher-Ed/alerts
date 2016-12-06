const Icon = (props) => {

  const icon_class = 'pe-icon--' + props.name;

  return (
    <svg version = "1.1"
       xmlns = "http://www.w3.org/2000/svg"
       xmlnsXlink = "http://www.w3.org/1999/xlink"
       aria-hidden = "true"
       className = {icon_class}>
      <use xlinkHref = {'#' + props.name}></use>
    </svg>
  );
}

export default Icon;
