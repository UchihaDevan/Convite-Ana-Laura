import './Welcome.css';
import React from 'react';


export default function Welcome() {
  return (
    <section className="welcome">
        <div>
          <img src="/images/galho2.png" alt="" className="img-galho"/>
        </div>
        <div className="welcome-content">
          <p>Um passarinho me contou que as borboletas estão a voar as flores já soltam perfume no ar o jardim está em festa e você não pode faltar!</p>
          <img src="/images/borboleta-nome.png" alt="" className='img-nome'/>
          <h1>Ana Laura</h1>
          <div className='btn-details'>
            <img src="/images/passaro-botao.png" alt="" />
            <button>VER DETALHES DA FESTA</button>
          </div>
        </div>
        <div className='img-footer'>
          <img src="/images/footer.png" alt=""/>
        </div>
    </section>
  );
}
