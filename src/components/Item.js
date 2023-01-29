import PropTypes from 'prop-types'; // Pacote importado para manipulação dos props

function Item({marca, ano_lancamento}) { // Poderia ser utilizado como parametro o props
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    );
}

Item.propTypes = { // Validações das propriedades do componente
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = { // Valores padrões que o componente recebe caso não sejam passadas as propriedades
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item;