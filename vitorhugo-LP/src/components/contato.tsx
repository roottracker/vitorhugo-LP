import { useState } from "react";


export const Contato = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

    const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmail = (e:any) => {
    const { name, email, message } = formData;

    const mailURL = 'https://mail.google.com/mail/?view=cm&fs=1&to=exemplo@gmail.com'
  }


  return(
    <>
    <input placeholder='Insira seu nome' type="text" name='name' value={formData.name} onChange={handleChange} required />
            <br /><br />
            <input placeholder='Insira seu email' type="email" name='email' value={formData.email} onChange={handleChange} required />
            <br /><br />
            <textarea placeholder='Insira mensagem' name='message' value={formData.message} onChange={handleChange} cols={30} rows={10} required></textarea>
            <button>Enviar mensagem</button>
    </>
  )

}