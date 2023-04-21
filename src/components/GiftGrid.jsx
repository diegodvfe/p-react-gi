
import { useEffect, useState } from 'react';
import { getGifs } from './../helpers/getGifs';

export const GiftGrid = ({category}) => {

    const [counter, setCounter] = useState(10)

    useEffect( () =>{
        getGifs (category)
            
    }, [ ] )


  return (
    <>
        <h3>{category}</h3>

        <h4>{counter}</h4>
        <button onClick={ () => setCounter( counter + 1)}> +1</button>
        {/* {
            listGift.map( listGift => (
                <p key={category}> {listGift} </p>
            ))
        } */}
    </>
  )
}
