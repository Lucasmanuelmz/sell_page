import { FaFacebookSquare, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return(
    <footer>
      <div className="footer"> 
        <h3>Visites as nossas redes sociais:</h3>
        <ul>
          <li><a href="#"><FaFacebookSquare size={30} /></a></li> 
          <li><a href="#"><FaInstagram size={30}/></a></li>
          <li><a href="#"><FaTiktok size={30}/></a></li>
          <li><a href="#"><FaWhatsapp size={30}/></a></li>
        </ul>
        <p>&copy;Lucas Manuel, Todos os direitos reservados</p>
      </div>
    </footer>
  )
}