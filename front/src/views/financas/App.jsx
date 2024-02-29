import { CardFinanca } from "../../components/CardFinanca";
import { Link } from "react-router-dom";
import { Table } from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const financas = useSelector((state) => state.produto.value);
  const format_financa = (valor) => {
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  const entrada = () => {
    let entrada = 0;
    financas.forEach((financa) => {
      if (financa.tipo_entrada === 1) {
        entrada += financa.valor;
      }
    })

    return entrada;
  }

  const saida = () => {
    let saida = 0;
    financas.forEach((financa) => {
      if (financa.tipo_entrada === 2) {
        saida += financa.valor;
      }
    })

    return saida;
  }

  const saldo = () => {

    return entrada() - saida();

  }
  
  return (
    <div className="container">
        <div className="row d-flex justify-content-between">
          <CardFinanca bg_card="bg-success" text_card="text-light" card_titulo="Receita" card_valor={`+ ${format_financa(entrada())}`} />
          <CardFinanca bg_card="bg-danger" text_card="text-light" card_titulo="Despesa" card_valor={`- ${format_financa(saida())}`} />
          <CardFinanca bg_card="bg-primary" text_card="text-light" card_titulo="Saldo" card_valor={`${entrada() > saida() ? '+' : '-'} ${format_financa(saldo())}`} />
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
