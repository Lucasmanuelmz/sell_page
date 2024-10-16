import PropTypes from 'prop-types';

export default function FaqComponent(
  {
    onClick, 
    title, 
    icon, 
    variavel, 
    paragraph}) {
  return(
    <div className="questions">
      <div onClick={onClick} className="question">
      <h5 >{title}</h5>
      <button>{icon}</button>
      </div>
      {variavel && (
      <div className={`text ${variavel? 'active': ''}`}>
      <p>{paragraph}</p>
      </div>
    )}
    </div>
  )
}

FaqComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  variavel: PropTypes.bool.isRequired,
  paragraph: PropTypes.node.isRequired
}