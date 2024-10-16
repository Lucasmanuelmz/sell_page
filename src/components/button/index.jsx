import {PropTypes} from 'prop-types';

export default function ButtonComponent({text}) {
  return(
    <a href="#" className="button">
      {text}
    </a>
  )
}

ButtonComponent.propTypes = {
  text: PropTypes.String
}