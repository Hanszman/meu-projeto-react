import '../App.css';
import { useState } from 'react'; // Pacote importado para manipulação dos estados (hooks)
import HelloWorld from '../components/HelloWorld';
import SayMyName from '../components/SayMyName';
import Pessoa from '../components/Pessoa';
import List from '../components/List';
import Evento from '../components/Evento';
import Form from '../components/Form';
import Condicional from '../components/Condicional';
import OutraLista from '../components/OutraLista';
import SeuNome from '../components/SeuNome';
import Saudacao from '../components/Saudacao';

function Aulas() {
    const name = 'Victor';
    const newName = name.toUpperCase();

    function sum(a, b) {
        return a + b;
    }

    const url = 'https://via.placeholder.com/150';

    const meusItens = ['React', 'Vue', 'Angular'];

    const [nome, setNome] = useState();

    return (
        <div className='App'>
            <h1>Meu Primeiro App!</h1>
            <h2>Alterando o JSX</h2>
            <p>Olá, {newName}!</p>
            <p>Soma: {2 + 2}</p>
            <p>Soma: {sum(1, 2)}</p>
            <HelloWorld/>
            <SayMyName name={name}/>
            <Pessoa nome={name} idade={26} profissao={'Programador'} foto={url}/>
            <List/>
            <h1>Testando Eventos</h1>
            <Evento numero={1}/>
            <Evento numero={2}/>
            <Form/>
            <h1>Renderização Condicional</h1>
            <Condicional/>
            <h1>Renderização de Listas</h1>
            <OutraLista itens={meusItens}/>
            <OutraLista itens={[]}/>
            <h1>State Lift</h1>
            <SeuNome setNome={setNome}/>
            <Saudacao nome={nome}/>
        </div>
    );
}

export default Aulas;