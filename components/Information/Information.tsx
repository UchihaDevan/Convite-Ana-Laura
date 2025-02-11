export default function Information() {
    return (
      <div className="bg-rosaPastel py-10 text-center">
        <h2 className="text-3xl font-semibold">📍 Onde e Quando?</h2>
        <p className="mt-4 text-lg">📅 Sábado, 15 de Junho de 2025 às 16h</p>
        <p>📍 Salão Happy Kids, Rua das Flores, 123</p>
        <iframe 
          src="https://www.google.com/maps/embed?..." 
          className="w-full h-64 mt-4 rounded-lg"
        />
      </div>
    );
  }
  