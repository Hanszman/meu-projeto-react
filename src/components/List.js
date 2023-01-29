import Item from './Item';

function List() {
    return (
        <> {/* React Fragments: utilizado para não precisar de uma div pai no componente e evitar poluição de código. A necessidade disto é que o React só permite retornar o componente todo agrupado dentro de uma tag. */}
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1985}/>
                <Item marca='Fiat' ano_lancamento={1964}/>
                <Item marca='Renault'/>
                <Item/>
            </ul>
        </>
    );
}

export default List;