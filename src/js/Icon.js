const Icon = (props) => {

  const icon_class = 'pe-icon--' + props.name;

  return (
    <svg version = "1.1"
       aria-hidden = "true"
       focusable = "false"
       className = {icon_class}>
      <use xlinkHref = {'#' + props.name}></use>
    </svg>
  );
}

export default Icon;
