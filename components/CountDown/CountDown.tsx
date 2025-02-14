import { useEffect, useState } from "react";
import "./CountDown.css";

export default function ContagemRegressiva() {
  const calcularTempoRestante = () => {
    const evento = new Date("2025-07-19T16:00:00").getTime();
    const agora = new Date().getTime();
    const diferenca = evento - agora;

    if (diferenca <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    return {
      dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutos: Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)),
      segundos: Math.floor((diferenca % (1000 * 60)) / 1000),
    };
  };

  const [tempo, setTempo] = useState(calcularTempoRestante());

  useEffect(() => {
    const interval = setInterval(() => {
      setTempo(calcularTempoRestante());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-container">
      <h2 className="countdown-title">🎈Falta Pouco Para a Festa!🎈</h2>
      <div className="countdown-timer">
        <div className="time-box">
          <span className="time">{tempo.dias}</span>
          <span className="label">dias</span>
        </div>
        <div className="time-box">
          <span className="time">{tempo.horas}</span>
          <span className="label">horas</span>
        </div>
        <div className="time-box">
          <span className="time">{tempo.minutos}</span>
          <span className="label">minutos</span>
        </div>
        <div className="time-box">
          <span className="time">{tempo.segundos}</span>
          <span className="label">segundos</span>
        </div>
      </div>
    </section>
  );
}
