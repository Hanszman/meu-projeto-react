function Saudacao({nome}) {
    function gerarSaudacao(algumNome) {
        return 'Olá, ' + algumNome + ', tudo bem?';
    }

    return (
        <>
            {/* Renderização Condicional: */}
            {
                nome && ( // if
                    <p>{gerarSaudacao(nome)}</p>
                )
            }
        </>
    );
}

export default Saudacao;