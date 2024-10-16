import PropTypes from 'prop-types';

export default function Container({icon, title, description}) {
  return(
  <div className="card-icon">
    {icon}
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
  )
}

Container.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}