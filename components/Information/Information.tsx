import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Information.css"; // Importa o CSS personalizado

export default function Information() {
  const [date] = useState(new Date(2025, 6, 19));

  return (
    <section>
      <div className="information">
        <h2 className="information-local">📆 Quando?</h2>

        <div className="calendar-container">
          <h3>📆 Veja a data no calendário:</h3>
          <Calendar value={date} />
        </div>

        <div className="information-calendar">
          <p>📅 Sábado, 19 de Julho de 2025 às 16h</p>
        </div>
      </div>
      <div className="location-container">
        <h2>📍Onde?</h2>
        <p>📍 Salão Happy Kids, Rua das Flores, 123</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.965736046564!2d-38.632135229026304!3d-3.8174770876614965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74d68b8685beb%3A0x5fea538dbb556c67!2sR.%20Patativa%20do%20Assar%C3%A9%2C%20499%20-%20Jari%2C%20Maracana%C3%BA%20-%20CE%2C%2061923-055!5e0!3m2!1spt-BR!2sbr!4v1739497343805!5m2!1spt-BR!2sbr" width="100%" height="auto" loading="lazy"></iframe>
      </div>
    </section>
  );
}

