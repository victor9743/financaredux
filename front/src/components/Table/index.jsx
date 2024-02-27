import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export const Table = () => {
    const financas = useSelector((state) => state.produto.value);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const format_financa = (valor) => {
      return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    return (
        <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data de lançamento</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              { financas.length > 0 ? ( financas.map((financa, key) => 
                <tr key={key}>
                  <td>{ financa.id }</td>
                  <td>{ financa.descricao } ({ financa.tipo_entrada })</td>
                  <td>{ format_financa(financa.valor) }</td>
                  <td>{ moment(financa.created_at).format("DD/MM/YYYY") }</td>
                  <td>
                    <Button onClick={handleShow} className="btn btn-sm btn-primary">
                      <FontAwesomeIcon icon={faCog} />
                    </Button> 
                    <Button onClick={handleShow} className="btn btn-sm btn-danger" style={{marginLeft: "10px"}}>
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Aviso</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Remover ou Visualizar</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          fechar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Salvar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
              )
              ) : (
                <tr>
                  <td colSpan="5">Nenhuma finança cadastrada</td>
                </tr>
                
              ) }
            </tbody>
          </table>
    )
}