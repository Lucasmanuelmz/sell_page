import { FaChevronDown} from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import { FaTags } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";
import { useState } from 'react';
import Form from '../components/form';
import CardContainer from "../contains/card";
import Container from "../contains/container";
import ButtonComponent from "../components/button";
import FaqComponent from "../components/faq";

export default function HomePage() {
  // Array de estados para controlar cada pergunta
  const [openQuestions, setOpenQuestions] = useState(Array(6).fill(false));
  
  function toggleQuestion(index) {
    setOpenQuestions(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index]; 
      return newState;
    });
  }

  return (
    <main>
      <section className="container">
        <div className="bg-image"></div>
        <div className="content">
         <CardContainer />
          <Form />
        </div>
      </section>
      <section className="section">
        <h3>O que você vai <span>ganhar?</span></h3>
        <div className="content">
          <div className="advantage">

            <Container icon ={<MdCampaign color='gold' size={80} />}
            title= 'Seja o primeiro a aproveitar!'
            description='Acesso antecipado às ofertas da Black Friday – não perca as melhores oportunidades.'/>
            
            <Container icon ={<FaTags color='gold' size={80} />}
            title= 'Os maiores descontos'
            description='Descontos exclusivos que você só vai encontrar aqui!'/>

            <Container icon ={<GiPresent color='gold' size={80}/>}
            title= 'Sorteio de cupons'
            description='Participe de sorteios para cupons de desconto e economize ainda mais.'/>
            
          </div>
        </div>
        <div className="link-button">
          <ButtonComponent text='Garanta meu acesso VIP agora!' />
        </div>
      </section>

      <section className="section in-mobile">
        <h2 className='subtitle'>Perguntas frequentes</h2>
        <div className="content-client content">
          <div className="questions">
          <FaqComponent onClick={() => toggleQuestion(0)}
          title='1. O que significa fazer parte da lista VIP?'
          icon={<FaChevronDown size={18} color='#f0f0f0' />}
          variavel={openQuestions[0]}
          paragraph='Ao se cadastrar na nossa lista VIP, você garante acesso antecipado e exclusivo às melhores ofertas da Black Friday. Além disso, você receberá cupons e descontos que não estarão disponíveis para o público em geral.'/>

         <FaqComponent onClick={() => toggleQuestion(1)}
          title='2. Quando começam as ofertas da Black Friday?'
          icon={<FaChevronDown size={18} color='#f0f0f0' />}
          variavel={openQuestions[1]}
          paragraph='As ofertas da Black Friday começarão oficialmente em [data da Black Friday], mas como membro VIP, você terá acesso a descontos exclusivos antes dessa data, garantindo as melhores ofertas antecipadamente.'/>

         <FaqComponent onClick={() => toggleQuestion(2)}
          title='3. Como saberei que estou na lista VIP?'
          icon={<FaChevronDown size={18} color='#f0f0f0' />}
          variavel={openQuestions[2]}
          paragraph='Assim que você completar o cadastro, enviaremos um e-mail de confirmação. Fique de olho na sua caixa de entrada e certifique-se de adicionar nosso e-mail à sua lista de contatos para não perder nenhuma oferta!'/>

         <FaqComponent onClick={() => toggleQuestion(3)}
          title='4. Quais são os benefícios de estar na lista VIP?'
          icon={<FaChevronDown size={18} color='#f0f0f0' />}
          variavel={openQuestions[3]}
          paragraph={(
            <>
            <p>Como VIP você vai ter:</p>
                <ul>
                <li>Acesso antecipado aos maiores descontos.</li>
                <li>Cupons de desconto exclusivos.</li>
                <li>Participação em sorteios para ganhar prêmios e mais descontos.</li>
                <li>Ofertas limitadas para os primeiros a comprar.</li>
              </ul>
              </>)}/>
              
         <FaqComponent onClick={() => toggleQuestion(4)}
          title='5. Preciso pagar para entrar na lista VIP?'
          icon={<FaChevronDown size={18} color='#f0f0f0' />}
          variavel={openQuestions[4]}
          paragraph='Não! O cadastro na lista VIP é totalmente gratuito. Basta preencher o formulário com seus dados e você já estará garantido.'/>

         <FaqComponent onClick={() => toggleQuestion(5)}
          title='6. Posso cancelar minha inscrição da lista VIP?'
          icon={<FaChevronDown size={18} color='#f0f0f0' />}
          variavel={openQuestions[5]}
          paragraph='Sim, você pode cancelar sua inscrição a qualquer momento. Cada e-mail que enviamos contém um link para cancelamento de inscrição no final, garantindo que você tenha total controle sobre os e-mails que recebe de nós.'/>
        </div>
        </div>
      </section>
    </main>
  );
}
