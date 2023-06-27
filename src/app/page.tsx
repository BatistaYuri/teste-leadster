export default function Home() {
  return (
    // min-h-screen
    <main>
      <div className="flex flex-col items-center justify-between p-28 bg-light">
        <div className="blue-box py-1 px-3 font-bold text-xs">
          <p className="text-blue">WEBINARS EXCLUSIVOS</p>
        </div>
        <p className="text-4xl font-medium">Menos Conversinha,</p>
        <p className="text-7xl font-bold text-blue px-5 pb-3 mb-2 border-b">
          Mais Conversão
        </p>
        <p>
          Conheça as estratégias que{" "}
          <span className="font-semibold">mudam o jogo</span> e como aplicá-las
          no seu negócio
        </p>
      </div>
    </main>
  );
}
