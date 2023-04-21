import { useState } from "react"


export const AddCategory = () => {

    const [inputValue, setInputvalue] = useState('Escribe algo')

    const onInputChanged = (event) => {
        // console.log(event.target.value)
        setInputvalue(event.target.value)
    }

    const onSubmit = (event) => {
       event.preventDefault();
       console.log(inputValue);
    };

  return (
    <form onSubmit={(event) =>  onSubmit(event)}>
    <input type="text" 
    placeholder="Buscar gifts"
    value={ inputValue}
    onChange={ onInputChanged}


    />

    </form>
  )
}
