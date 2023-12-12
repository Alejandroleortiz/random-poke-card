import './RandomPokemon.css'

const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const randomNumber = Math.floor(Math.random() * 151) + 1


export default function RandomPokemon() {
  return (

<>
<div className="RandomPokemon">
<h1 className='color-text' >Pokemon #{randomNumber}</h1>
<img  src={`${baseURL}${randomNumber}.png`} alt="Pokenmon-card" />
</div>
</>   
   
  )
}
