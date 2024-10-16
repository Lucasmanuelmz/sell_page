import { IoIosAlarm } from "react-icons/io";
import image from '../assets/image/black-freeday.png';

export default function CardContainer() {
  return(
    <div className="card-content">
    <h1>Aproveite grandes descontos nesta época do ano!</h1>
      <img src={image} alt="Black friday" />
      <div className="card">
        {/**Abaixo um titulo que pode ser substituido. Remova o texto entre <h4></h4>*/}
        <h4>Quer acessar descontos exclusivos antes de todo mundo?</h4>
        <p><IoIosAlarm size={50}/><span>Junte-se à nossa <strong>lista VIP</strong> e garanta acesso prioritário às maiores ofertas da Black Friday!</span></p>
      </div>
    </div>
  )
}