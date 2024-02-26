import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export const Table = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <table className="table table-bordered">
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
              <tr>
                <td>1</td>
                <td>Salário (entrada)</td>
                <td>R$ 5.000,00</td>
                <td>26/02/2024</td>
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
            </tbody>
          </table>
    )
}