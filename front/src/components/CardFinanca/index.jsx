export const CardFinanca = (props) => {
    return (
        <div className={`card col-md-3 m-md-3 ${props.bg_card} ${props.text_card}`}>
          <h5 className="card-header">{props.card_titulo}</h5>
          <div className="card-body">
            <div className="mt-5" style={{textAlign: "right", fontSize: "16pt"}}>
                R$ {props.card_valor}
            </div>
          </div>
        </div>
    )
}