import { CardFinanca } from "./components/CardFinanca";
function App() {
  return (
    <div className="container">
        <CardFinanca bg_card="bg-success" text_card="text-light" card_titulo="Entrada" card_valor="0,00" />
        <CardFinanca bg_card="bg-danger" text_card="text-light" card_titulo="Saída" card_valor="0,00" />
        <CardFinanca bg_card="bg-primary" text_card="text-light" card_titulo="Saldo" card_valor="0,00" />
    </div>

  );
}

export default App;
