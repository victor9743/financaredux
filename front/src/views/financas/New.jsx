import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { salvar } from '../../slices/produtosSlice';

export const New = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [financa, setFinanca] = useState({});

    const handleFinanca = (event) => {
        let valor = event.target.value;

        if (event.target.name === "valor") {
            const rawValue = event.target.value.replace(/[^0-9]/g, '');
    
            let formattedValue = '';
            if (rawValue.length > 2) {
                formattedValue = `${rawValue.slice(0, -2)},${rawValue.slice(-2)}`;
            } else if (rawValue.length === 2) {
                formattedValue = `0,${rawValue}`;
            } else if (rawValue.length === 1) {
                formattedValue = `0,0${rawValue}`;
            }

            const valorNumerico = parseFloat(formattedValue.replace(/[^\d,]/g, '').replace(',', '.'));
    
            // Verificar se o valor é um número válido
            if (isNaN(valorNumerico)) {
                return '';
            }
        
            // Formatar o valor como um valor monetário
            event.target.value = valorNumerico.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });

            valor = format_valor(event.target.value);
        }
        setFinanca({...financa, [event.target.name]: valor })
    }

    const format_valor  = (valor) => {
        valor = valor.replace(",", ".");
        valor = valor.replace("R$", "");
        return parseFloat(valor);
    }

    const salvar = () => {
        dispatch(salvar(financa));
        // navigate("/");
    }

    return (
        <div className='container'>
            <div className='container mt-5 row border p-4'>
                <div className='col-12 mb-3'>
                    <h4>Cadastrar Finança</h4>
                </div>
                <div className='mb-3 col-md-3'>
                    <label>Descrição</label>
                    <input type="text" 
                        className="form-control"
                        name="descricao"
                        onChange={(e) => handleFinanca(e)}
                    />
                </div>
                <div className='mb-3 col-md-3'>
                    <label>Tipo de entrada</label>
                    <select className='form-control' 
                        name='tipo_entrada' 
                        onChange={(e) => handleFinanca(e)}
                    >
                        <option value="">Selecione...</option>
                        <option value="1">Receita</option>
                        <option value="2">Despesa</option>
                    </select>
                </div>
                <div className='mb-3 col-md-3'>
                    <label>Valor</label>
                    <input type="text" 
                        className="form-control" 
                        name='valor'
                        onChange={(e) => handleFinanca(e)}
                    />
                </div>
                <div className="col-md-3 mt-4">
                    <Button className="btn btn-success" onClick={salvar}>Salvar</Button>
                </div>
            </div>
        </div>
    )
}