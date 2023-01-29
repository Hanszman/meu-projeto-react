import { useState } from 'react'; // Pacote importado para manipulação dos estados (hooks)

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault(); // Utilizado para não atualizar a página depois do submit
        console.log(name);
        console.log(password);
        console.log('Cadastrou o usuário!');
        console.log(`O usuário ${name} foi cadastrado com a senha ${password}`);
    }

    // A atribuição do useState sempre é um vetor com duas posições: o atributo que será utilizado e o outro aquilo que será alterado. Dentro dos parentesis do useState() colocamos o valor padrão com o qual a variável irá começar.
    const [name, setName] = useState('Victor');
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor='name'>Nome: </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Digite o seu nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Senha: </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Digite a sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type='submit' value='Cadastrar'/>
                </div>
            </form>
        </div>
    );
}

export default Form;