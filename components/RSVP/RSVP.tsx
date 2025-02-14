import { useForm } from "react-hook-form";
import './RSVP.css';

export default function RSVP() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data: any) => {
    const message = `Oi, confirmo presença para ${data.nome} com ${data.qtd} convidados!`;
    window.open(`https://wa.me/5585998514551?text=${encodeURIComponent(message)}`);
  };

  return (
    <section className="rsvp-container">
      <h2 className="rsvp-title">🎉 Confirme sua presença!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="rsvp-form">
        <input {...register("nome")} placeholder="Seu Nome" className="rsvp-input" required/>
        <input {...register("qtd")} type="number" placeholder="Nº Convidados" className="rsvp-input" required/>
        <button className="rsvp-button">Confirmar via WhatsApp</button>
      </form>
    </section>
  );
}
