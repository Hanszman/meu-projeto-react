import Button from './evento/Button';

function Evento({numero}) {
    function meuEvento() {
        console.log('Opa, fui ativado! ' + numero);
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento!');
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
            <Button event={segundoEvento} text='Primeiro Evento'/>
        </div>
    );
}

export default Evento;