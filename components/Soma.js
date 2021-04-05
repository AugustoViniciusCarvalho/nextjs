import { useState } from 'react';

function Soma() {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [resultado, setResultado] = useState();

    function atualizar(){
        setNum1(parseInt(document.getElementById("num1").value));
        setNum2(parseInt(document.getElementById("num2").value));
    }

    function getResultado(){
        if (document.getElementById("som").checked){
            setResultado(num1+num2);
        } else if (document.getElementById("sub").checked){
            setResultado(num1-num2);
        } else if (document.getElementById("mul").checked){
            setResultado(num1*num2);
        } else if (document.getElementById("div").checked){
            setResultado(num1/num2);
        }
    }

    return (
        <div>
            <label>Número 1</label>
            <input type="text" id="num1" onChange={atualizar}></input>
            <br></br>
            <label>Número 2</label>
            <input type="text" id="num2" onChange={atualizar}></input>
            <br></br><br></br>
            <label>Operação</label><br></br>
            <input type="radio" id="som" value="som" name="op"></input>
            <label for="som">+</label><br></br>
            <input type="radio" id="sub" value="sub" name="op"></input>
            <label for="sub">-</label><br></br>
            <input type="radio" id="mul" value="mul" name="op"></input>
            <label for="mul">*</label><br></br>
            <input type="radio" id="div" value="div" name="op"></input>
            <label for="div">/</label>
            <br></br><br></br>
            <button onClick={getResultado}>Somar</button>
            <br></br><br></br>
            <label>Resulado</label>
            <div id="resultado">{resultado}</div>
        </div>
    )
}

export default Soma;