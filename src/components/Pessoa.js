function Pessoa(props) { // Poderia ser utilizado como parametro um objeto com cada valor das propriedades {nome, idade, foto, profissao} ao invés do props
    return (
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    );
}

export default Pessoa;