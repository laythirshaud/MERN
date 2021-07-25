
import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
const Api = () => {

    const [Pokemon, setPokemon] = useState([]);
    const NmaePokemon= ()=> {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((res) => {
                return (res.json());
            })
            .then((res) => {
                setPokemon(res.results);
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={NmaePokemon}> Nmae Pokemon</Button>
            <ul>
                {Pokemon.map(
                        (item, i) => {
                            const {name} = item 
                            return (<li key={i}>{name}</li>)}
                    )}       
            </ul>
        </div>
    )
}

export default Api
