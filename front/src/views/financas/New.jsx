import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const New = () => {
    const navigate = useNavigate();

    const salvar = () => {
        navigate("/");
    }

    return (
        <div className='container'>
            <div className='container mt-5 row border p-4'>
                <div className='col-12 mb-3'>
                    <h4>Cadastrar Finança</h4>
                </div>
                <div className='mb-3 col-md-3'>
                    <label>Descrição</label>
                    <input type="text" className="form-control" />
                </div>
                <div className='mb-3 col-md-3'>
                    <label>Tipo de entrada</label>
                    <select className='form-control'>
                        <option>Selecione...</option>
                        <option>Receita</option>
                        <option>Despesa</option>
                    </select>
                </div>
                <div className='mb-3 col-md-3'>
                    <label>Valor</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-3 mt-4">
                    <Button className="btn btn-success" onClick={salvar}>Salvar</Button>
                </div>
            </div>
        </div>
    )
}