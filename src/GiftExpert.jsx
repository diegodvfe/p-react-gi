import { useState } from "react"
import { AddCategory, GiftGrid } from "./components/index"



const GiftExpert = () => {

    const [categories , setCategories ] = useState(['Fire'])

    const onAddCategory = ( newCategory) => {

        if(categories.includes(newCategory)) return;
        
        setCategories([newCategory, ...categories])
        // console.log(newCategory)
        // setCategories( categories => [...categories, 'Diego'])
    }


  return (
    <>
    
     <h1>GiftExpertApp</h1> 

     <AddCategory   
        onNewCategory = { onAddCategory }
    //  setCategories = { setCategories} 
    />

     {/* <button className="btn-agregar" onClick={onAddCategory} >Agregar categoria </button> */}

    
    { categories.map( category => (
                    <GiftGrid 
                    key={category}
                    category={category}/>            
    ))
    }
    
    </>
  )
}

export default GiftExpert
