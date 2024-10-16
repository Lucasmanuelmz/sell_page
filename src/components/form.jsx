import { MdOutlineMailLock } from "react-icons/md";
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Form() {
  const [error, setError] = useState('')
  const [user, setUser] = useState(
    {
      name: '',
      email: '',
      company: '',
      role: '',
      confirm: ''
    }
  )

  function handleChange(e) {
    const {name, value} = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(parseInt(user.confirm) === 6) {
      if(!user.name) {
        setError('Preencha o seu nome')
      }

      if(!user.email) {
        setError('Preenca o email')
      }

      if(!user.company) {
        setError('Preencha o nome da empresa')
      }

      if(!user.role) {
        setError('Preencha o campo cargo')
      }
      const userData = {
        name: user.name,
        email: user.email,
        company: user.company,
        role: user.role
      }
      /**Para lhe ajuadar a ver que esta funcao esta funcionando corretamente voce pode remover este bloco e substituir por u endpoint de api para envio de dados do usuario*/
      Swal.fire({
        title: 'Seus dados',
        text: JSON.stringify(userData),
        icon: 'info',
        confirmButtonText: 'OK'
      });
    } else {
      /**Para lhe ajuadar a ver que esta funcao esta funcionando corretamente voce pode remover este bloco*/
      Swal.fire({
        title: 'Erro',
        text: 'Resolva a adição abaixo',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  return(
    <form onSubmit={handleSubmit} className="form">
            <h4>Cadastre-se para receber ofertas imperdíveis!</h4>
            <p>Preencha seus dados e aproveite os maiores descontos, garantidos <strong>apenas para nossos membros VIP</strong>.</p>
            <div className="form-data">
              <label htmlFor="name">Nome:</label>
              <input required type="text" id="name" value={user.name} onChange={handleChange} name='name'/>
              <span>{error || ''}</span>
            </div>
            <div className="form-data">
              <label htmlFor="email">Email:</label>
              <input required type="email" id="email" value={user.email} onChange={handleChange} name='email'/>
              <span>{error}</span>
            </div>
          
            <div className="form-data">
              <label htmlFor="confirm">2 + 4 = ?</label>
              <input required type="text" id="confirm" value={user.confirm} onChange={handleChange} name='confirm'/>
              <span>{error}</span>
            </div>
            <button style={{ display: 'flex', alignItems: 'center' }} className='button' type='submit'>
              <MdOutlineMailLock size={60}/> Quero meu desconto exclusivo agora!
            </button>
          </form>
  )
}