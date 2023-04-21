import { useState } from "react"
import { AddCategory } from "./components/AddCategory"


const GiftExpert = () => {

    const [categories , setCategories ] = useState(['Fire', 'Drango ball'])

    console.log(categories)

    const onAddCategory = () => {
        console.log( 'Naruto');

        setCategories([...categories, 'Naruto'])

        // setCategories( categories => [...categories, 'Diego'])
    }


  return (
    <>
    {/* titulo */}
     <h1>GiftExpertApp</h1> 

     {/* Input */}
     <AddCategory />

     {/* listado */}
     <button className="btn-agregar" onClick={onAddCategory} >Agregar categoria </button>

     <ul>
        { categories.map( category => {
            return <li key={ category }> {category} </li>
        })}
     </ul>
    </>
  )
}

export default GiftExpert
