import './Welcome.css';
import { Link } from "react-router-dom";


export default function Welcome() {
  return (
    <section className="welcome">
      <div className='flex'>
        <div className='welcome-top'>
          <img src="/images/galho2.png" alt="" className="img-galho" />
          <p>Um passarinho me contou uma novidade especial: as borboletas estão dançando no ar, as flores espalham seu perfume pelo jardim, e a festa vai começar! Venha viver essa magia com a gente. Sua presença vai deixar tudo ainda mais especial!</p>
        </div>
        <div className='welcome-title'>
          <img src="/images/borboleta-nome.png" alt="" className='img-nome' />
          <h1>Ana Laura</h1>
        </div>
        <div className='btn-details'>
          <img src="/images/passaro-botao.png" alt="" />
          <button><Link to="/details"> VER DETALHES DA FESTA</Link></button>
        </div>
        <div className='img-footer'>
          <img src="/images/footer.png" alt="" />
        </div>
      </div>
    </section>
  );
}
