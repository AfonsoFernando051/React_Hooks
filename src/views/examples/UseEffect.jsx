import React, {useState , useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0){
        return -1
    }
    if (n == 0) {
        return 1
    }
    return calcFatorial(n-1)*n
}

function parImpar(n) {
    if(n%2 === 0){
        return "par"
    }
    if(n%2 != 0){
        return "impar"
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1);


    useEffect(function(params) {
        setFatorial(calcFatorial(number))
        
    }, [number])
    
    useEffect(function(params) {
        if(fatorial>10000){
            document.title="Eita!!!"
        }        
    }, [fatorial])


    const [nump, setNump] = useState(0)
    const [estado, setEstado] = useState("0")


    useEffect(function(params) {
        setEstado(parImpar(nump))
    }, [nump])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className='center'>
                <div>
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
            <input type="number" className="input" value={number}
            onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02"/>
                <div className="center">
                <span className="text">Status: </span>
                <span className="text red">{estado}</span>
                <span className="text red">{nump}</span>
                <input type="number" className="input" value={nump} onChange={e => setNump(e.target.value)}></input>
                </div>
        </div>
    )
}

export default UseEffect
