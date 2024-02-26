import { CardFinanca } from "../../components/CardFinanca";
import { Link } from "react-router-dom";
import { Table } from "../../components/Table";

function App() {
  return (
    <div className="container">
        <div className="row d-flex justify-content-between">
          <CardFinanca bg_card="bg-success" text_card="text-light" card_titulo="Receita" card_valor="0,00" />
          <CardFinanca bg_card="bg-danger" text_card="text-light" card_titulo="Despesa" card_valor="0,00" />
          <CardFinanca bg_card="bg-primary" text_card="text-light" card_titulo="Saldo" card_valor="0,00" />
        </div>
        <div className="table table-responsive">
          <Table />
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/new" className="btn btn-primary">+ Adicionar</Link>
        </div>
    </div>

  );
}

export default App;
