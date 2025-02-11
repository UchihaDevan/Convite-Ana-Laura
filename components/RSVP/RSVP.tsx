import { useForm } from "react-hook-form";

export default function RSVP() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data: any) => {
    const message = `Oi, confirmo presença para ${data.nome} com ${data.qtd} convidados!`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`);
  };

  return (
    <section className="bg-azulBebe py-10 text-center">
      <h2 className="text-3xl font-semibold">🎉 Confirme sua presença!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <input {...register("nome")} placeholder="Seu Nome" className="p-2 rounded-lg" />
        <input {...register("qtd")} type="number" placeholder="Nº Convidados" className="p-2 rounded-lg" />
        <button className="bg-verdeMenta px-6 py-2 mt-4 rounded-lg">Confirmar via WhatsApp</button>
      </form>
    </section>
  );
}
