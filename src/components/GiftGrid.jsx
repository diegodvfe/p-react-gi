


export const GiftGrid = ({category}) => {

    const listGift = [1,2,3,4,5]


  return (
    <>
        <h3>{category}</h3>
        {
            listGift.map( listGift => (
                <p key={category}> {listGift} </p>
            ))
        }
    </>
  )
}
