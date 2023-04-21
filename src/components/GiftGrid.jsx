
import { useEffect, useState } from 'react';
// import { getGifs } from './../helpers/getGifs';


import { GiftItem } from './GiftItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs (category)


  return (
    <>
        <h3>{category}</h3>

        
    <div className='card-grid'>

        {
        images.map((image) => (
            <GiftItem key={image.id}
            {...image}
            />
        ))
        }
       
    </div>

        {/* {
            listGift.map( listGift => (
                <p key={category}> {listGift} </p>
            ))
        } */}
    </>
  )
}
