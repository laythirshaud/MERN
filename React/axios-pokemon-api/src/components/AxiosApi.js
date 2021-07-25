import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios';
const AxiosApi = () => {

    const [pokemons, setPokemon]= useState([]);

    const layth = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response=>{setPokemon(response.data.results)
        console.log(response.data.results)
        })
    }
    
    return (
        <div>
            <Button variant="contained" color="primary" onClick={layth}> Nmae Pokemon</Button>
            <ul>
                {   pokemons.map(
                        (item, x) => {
                            const {name} = item 
                            return (<li key={x}>{name}</li>)}
                    )}       
            </ul>
        </div>
    )
                        }
export default AxiosApi